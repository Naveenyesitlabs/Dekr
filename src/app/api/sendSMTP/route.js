// export const runtime = 'edge';

// import { getRequestContext } from "@cloudflare/next-on-pages";

// export async function POST(req) {
//     let env = {};
//         try {
//             env = getRequestContext().env; // Cloudflare runtime
//         } catch {
//             env = process.env; // Local dev fallback
//     }


//   try {
//     const body = await req.json();
//     const { toEmail, subject, htmlContent, interest } = body;

//     // Validate input
//     if (!toEmail || !subject || !htmlContent) {
//       return new Response(
//         JSON.stringify({ message: "Missing required fields" }),
//         { status: 400, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     // Format Brevo tags
//     const tagValue = interest
//       ? interest
//           .split(",")
//           .map((tag) => tag.trim().replace(/\s+/g, "_").toLowerCase())
//           .join(",")
//       : "waitlist";

//     // Call Brevo API
//     const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // "api-key": process.env.BREVO_API_KEY, // ✅ Use API key (not SMTP creds)
//         "api-key": env.BREVO_API_KEY, // ✅ Use API key (not SMTP creds)
//         // "api-key": env.BREVO_API_KEY, // ✅ For Cloudflare
//       },
//       body: JSON.stringify({
//         sender: {
//           name: "Your Company Name",
//         //   email: process.env.BREVO_SMTP_SENDER, // your verified sender
//           email: env.BREVO_SMTP_SENDER, // your verified sender
//         //   email: env.BREVO_SMTP_SENDER, // For Cloudflare
//         },
//         to: [{ email: toEmail }],
//         subject,
//         htmlContent,
//         tags: tagValue.split(","), // Brevo accepts array of tags
//       }),
//     });

//     const result = await brevoResponse.json();

//     if (!brevoResponse.ok) {
//       return new Response(
//         JSON.stringify({ message: "Failed to send email", error: result }),
//         { status: brevoResponse.status, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     return new Response(
//       JSON.stringify({ message: "Email sent", result }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (err) {
//     console.error("Email send error:", err);
//     return new Response(
//       JSON.stringify({ message: "Error sending email", error: err.message }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );  
//   }
// } 

export const runtime = "edge";
import { getRequestContext } from "@cloudflare/next-on-pages";

export async function POST(req) {
  let env = {};
  try {
    env = getRequestContext().env;
  } catch {
    env = process.env;
  }

  try {
    const { toEmail, subject, htmlContent, interest } = await req.json();

    if (!toEmail || !subject || !htmlContent) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const tags = interest
      ? interest.split(",").map((t) => t.trim().replace(/\s+/g, "_").toLowerCase())
      : ["waitlist"];

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": env.BREVO_API_KEY, // only API key works
      },
      body: JSON.stringify({
        sender: { name: "Dekr", email: env.BREVO_SMTP_SENDER },
        to: [{ email: toEmail }],
        subject,
        htmlContent,
        tags,
      }),
    });

    const result = await brevoResponse.json();
    if (!brevoResponse.ok) {
      return new Response(
        JSON.stringify({ message: "Failed to send email", error: result }),
        { status: brevoResponse.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully", result }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(
      JSON.stringify({ message: "Error sending email", error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

