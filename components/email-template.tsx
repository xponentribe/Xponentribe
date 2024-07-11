import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>{email}</p>
    <h4>This is {name}</h4>
    <p>{message}</p>
    <p>Thankyou for connecting</p>
  </div>
);

export default EmailTemplate;
