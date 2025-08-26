// export const runtime = 'edge';

// import { getRequestContext } from "@cloudflare/next-on-pages";


// export async function POST(req) {
//     let env = {};
//     try {
//         env = getRequestContext().env; // Cloudflare runtime
//     } catch {
//         env = process.env; // Local dev fallback
//     }
    
//   try {

//     const { email, interest } = await req.json();

//     if (!email || !interest) {
//       return new Response(
//         JSON.stringify({ message: "Missing email or interest" }),
//         { status: 400 }
//       );
//     }

//     const addContactRes = await fetch("https://api.brevo.com/v3/contacts", {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         // "api-key": process.env.BREVO_API_KEY,
//         "api-key": env.BREVO_API_KEY,
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         attributes: { INTEREST: interest },
//         // listIds: [parseInt(process.env.BREVO_LIST_ID)],
//         listIds: [parseInt(env.BREVO_LIST_ID)],
//         updateEnabled: true,
//       }),
//     });

//     const contactText = await addContactRes.text();
//     const contactResult = contactText ? JSON.parse(contactText) : {};

//     if (!addContactRes.ok) {
//       return new Response(
//         JSON.stringify({
//           message: contactResult.message || "Failed to add contact.",
//         }),
//         { status: 400 }
//       );
//     }

//     const sendEmailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         // "api-key": process.env.BREVO_API_KEY,
//         "api-key": env.BREVO_API_KEY,
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         sender: { name: "Dekr", email: "noreply@emails.dekr.io" },
//         to: [{ email }],
//         subject: "Thanks for Joining the Waitlist!",
//         htmlContent: `<p>Hi there,<br>Thanks for joining the waitlist!</p>`,
//       }),
//     });

//     const emailText = await sendEmailRes.text();
//     const emailResult = emailText ? JSON.parse(emailText) : {};

//     if (!sendEmailRes.ok) {
//       return new Response(
//         JSON.stringify({
//           message: "Contact added, but email failed to send.",
//           emailError: emailResult.message || "Unknown error",
//         }),
//         { status: 400 }
//       );
//     }

//     return new Response(
//       JSON.stringify({
//         message: "Contact added and confirmation email sent successfully!",
//         emailStatus: "Queued or Sent",
//         messageId: emailResult.messageId,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Brevo API error:", error);
//     return new Response(
//       JSON.stringify({ message: "Server error", error: error.message }),
//       { status: 500 }
//     );
//   }
// }


export const runtime = "edge";
import { getRequestContext } from "@cloudflare/next-on-pages";

export async function POST(req) {
  let env = {};
  try {
    env = getRequestContext().env; // Cloudflare runtime
  } catch {
    env = process.env; // Local dev fallback
  }

  try {
    const { email, interest } = await req.json();

    if (!email || !interest) {
      return new Response(
        JSON.stringify({ message: "Missing email or interest" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1️⃣ Add contact
    const addContactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { INTEREST: interest },
        listIds: [parseInt(env.BREVO_LIST_ID)], // must be set in Cloudflare
        updateEnabled: true,
      }),
    });

    const contactResult = await addContactRes.json();
    if (!addContactRes.ok) {
      return new Response(
        JSON.stringify({ message: "Failed to add contact", error: contactResult }),
        { status: addContactRes.status, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2️⃣ Send confirmation email
    const sendEmailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Dekr", email: env.BREVO_SMTP_SENDER }, // must be verified in Brevo
        to: [{ email }],
        subject: "Thanks for Joining the Waitlist!",
        htmlContent: `<p>Hi there,<br/>Thanks for joining the waitlist!</p>`,
      }),
    });

    const emailResult = await sendEmailRes.json();
    if (!sendEmailRes.ok) {
      return new Response(
        JSON.stringify({
          message: "Contact added, but email failed",
          emailError: emailResult,
        }),
        { status: sendEmailRes.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Contact added + confirmation email sent",
        result: { contactResult, emailResult },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Brevo API error:", error);
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
