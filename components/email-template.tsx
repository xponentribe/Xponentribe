import * as React from "react";

interface EmailTemplateProps {
  name?: string;
  email: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: "sans-serif", padding: "16px", color: "#333" }}>
    {name || message ? (
      <>
        <h2 style={{ color: "#0d9488" }}>New Contact / Support Request</h2>
        {name && <p><strong>Name:</strong> {name}</p>}
        <p><strong>Email:</strong> {email}</p>
        {message && (
          <div>
            <strong>Message:</strong>
            <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
          </div>
        )}
      </>
    ) : (
      <>
        <h2 style={{ color: "#0d9488" }}>New Newsletter Subscription</h2>
        <p><strong>Subscriber Email:</strong> {email}</p>
        <p>A new user has subscribed to the Xponent Tribe newsletter.</p>
      </>
    )}
  </div>
);

export default EmailTemplate;

