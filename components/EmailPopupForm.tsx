// components/EmailPopupForm.tsx
import axios from "axios";
import { useState } from "react";

interface EmailPopupFormProps {
  onClose: () => void; // Callback function to close the popup
}

const EmailPopupForm: React.FC<EmailPopupFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic here (e.g., send email to backend, etc.)
    try {
      const response = await axios.post("http://localhost:3000/api/send", {
        email,
      });
      console.log("Response:", response);
      setStatus({ message: "Email sent successfully!", type: "success" });
      setEmail("");
    } catch (error) {
      setStatus({ message: "Failed to send email.", type: "error" });
      console.error("Error:");
    }
    console.log("Email :", email);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup">
      <div className="popup-content bottom-2 bg-slate-200 p-4 rounded-xl m-8">
        <span className="close cursor-pointer" onClick={onClose}>
          &times;
        </span>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <label htmlFor="npm-install" className="sr-only">
              Label
            </label>
            <input
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              data-copy-to-clipboard-target="npm-install"
              type="submit"
              className="col-span-2 w-40 text-white p-2 m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailPopupForm;
