"use client";

import React, { useState, useEffect } from "react";
import JoinWaitlist2 from "./JoinWaitlist2";
import Select from "react-select";

const JoinWaitList = ({ openModal }) => {
  const [openJoinModal2, setOpenJoinModal2] = useState(false);
  const [email, setEmail] = useState("");
  const [features, setFeatures] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const options = [
    { value: "Financial Education", label: "Financial Education" },
    { value: "Stock Screener", label: "Stock Screener" },
    {
      value: "Investment Strategy builder",
      label: "Investment Strategy builder",
    },
    { value: "Investor Community", label: "Investor Community" },
    { value: "AI Coach", label: "AI Coach" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedFeatures = features.map((f) => f.value);

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (selectedFeatures.length === 0) {
      alert("Please select at least one feature.");
      return;
    }

    // const interest = selectedFeatures[0]; // ✅ declared only once, here
    const interest = selectedFeatures.join(", ");
    setStatus("⏳ Sending...");

    try {
      // const brevoRes = await fetch("/api/addToBrevo", {
      const brevoRes = await fetch("https://plrbstage.yilstaging.com/plrb-api/brevo-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interest }),
      });

      const brevoData = await brevoRes.json();

      if (!brevoRes.ok) {
        console.error("Brevo Error:", brevoData.message);
        setStatus("❌ Failed to add contact to waitlist.");
        alert("Failed to add contact to waitlist.");
        return;
      }

      // Pass interest to sendEmail
      await sendEmail(selectedFeatures, interest);

      setOpenJoinModal2(true);

      const joinModalEl = document.getElementById("joinModal");
      if (joinModalEl) {
        const modalInstance = window.bootstrap.Modal.getInstance(joinModalEl);
        if (modalInstance) modalInstance.hide();
      }

      const confirmModalEl = document.getElementById("joinModalConfirm");
      if (confirmModalEl) {
        const bootstrapModal = new window.bootstrap.Modal(confirmModalEl);
        bootstrapModal.show();
      }

      setStatus("");
    } catch (err) {
      console.error("Brevo or SMTP error:", err);
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };

  const sendEmail = async (features, interest, firstName = "") => {
    const featureList = features.join(", ");
    const formattedHtml = `
  <div style="font-family: Arial, sans-serif; font-size: 14px; color: #000000; line-height: 1.6;">
    <p style="color: #000000;">Hi ${firstName || "there"},</p>

    <p style="color: #000000;">Thanks for joining the waitlist!</p>

    <p style="color: #000000;">
      You're officially in line to get early access to exclusive sneak peeks, insider perks, and all the good stuff— 
      <strong style="color: #000000;">100% spam-free</strong>, just as promised.
    </p>

    <p style="color: #000000;">
      You mentioned you're most interested in:
      <strong style="color: #000000;">${featureList}</strong>
    </p>

    <p style="color: #000000;">We’re excited to share more about it soon!</p>

    <p style="color: #000000;"><strong style="color: #000000;">What’s next?</strong></p>

    <ul style="color: #000000; padding-left: 20px;">
      <li style="color: #000000;">Keep an eye on your inbox—we’ll send a confirmation email shortly.</li>
      <li style="color: #000000;">After confirming, you’ll get access to our thank-you page and stay updated with the latest drops.</li>
    </ul>

    <p style="color: #000000;">If you have any questions, just hit reply. We’re always happy to hear from you.</p>

    <p style="text-align: center; margin: 30px 0;">
      <a href="https://dekr.io/ThankYouPage" 
         style="display: inline-block; background-color: #5faae3; color: #ffffff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold;">
        Confirm Your Spot
      </a>
    </p>

    <p style="color: #000000;">Talk soon,</p>

    <p style="color: #000000;">
      <strong style="color: #000000;">Thank you.</strong><br />
      Dekar Team<br />
      <a href=${
        process.env.DOMAIN_NAME || "https://dekr.io/"
      } style="color: #000000; text-decoration: underline;">yourwebsite.com</a>
    </p>
  </div>
`;

    // const res = await fetch("/api/sendSMTP", {
    const res = await fetch("https://plrbstage.yilstaging.com/plrb-api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        toEmail: email,
        subject: "Thanks for Joining the Waitlist!",
        htmlContent: formattedHtml,
        interest,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Email failed");
    }

    setEmail("");
    setFeatures("");
    setStatus("");
  };

  return (
    <>
      <div
        onClick={() => openModal(true)}
        className="modal fade cmn-popwrp"
        id="joinModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="joinModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="cmn-pop-content-wrapper">
                <div className="cmn-pop-head">
                  <h2>Be first in line</h2>
                  <p>
                    Sign up to unlock early access, exclusive sneak-peeks, and
                    insider perks—zero spam, 100% good stuff.
                  </p>
                </div>
                <div className="cmn-pop-inr-content-wrp">
                  <div className="join-form-wrp">
                    <form onSubmit={handleSubmit}>
                      <div className="join-form">
                        <div className="input-grp">
                          <label>Email</label>
                          <input
                            type="email"
                            className="email-input"
                            value={email}
                            placeholder="you@email.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="input-grp">
                          <p>optional question</p>
                          <label>
                            What feature are you most interested in?
                          </label>
                          {isMounted && (
                            <Select
                              isMulti
                              options={options}
                              value={features}
                              onChange={setFeatures}
                              className="react-select-container"
                              classNamePrefix="react-select"
                              placeholder="Features"
                            />
                          )}
                        </div>
                        <div className="btn-wrp">
                          <button
                            type="button"
                            className="cmn-btn active"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                              setOpenJoinModal2(false);
                              setEmail("");
                              setFeatures(""), setStatus("");
                            }}
                          >
                            Cancel
                          </button>
                          <button type="submit" className="cmn-btn">
                            Join the waitlist
                          </button>
                        </div>
                        {status && (
                          <p style={{ marginTop: "10px", color: "#555" }}>
                            {status}
                          </p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JoinWaitlist2
        visible={openJoinModal2}
        onClose={() => setOpenJoinModal2(false)}
      />
    </>
  );
};

export default JoinWaitList;
