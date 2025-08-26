import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-inr">
          <div className="ftr-title-text">
            Have questions or feedback? Reach us at
            <Link href="mailto:support@dekr.io" className="px-2">support@dekr.io</Link>
          </div>
          <div className="ftr-widget">
            <div className="copyright">
              &copy; 2025 Dekr, Inc. All rights reserved.
            </div>
            <p>
              By joining our waitlist, you agree to receive occasional updates,
              product news, and insider tips. No spam—we promise.
            </p>
            <div className="policy-links">
              <Link href="/Dekr_Privacy_Policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> |
              <Link href="/Dekr_Terms_of_Service.pdf" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
