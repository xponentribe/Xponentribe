// // components/EmailPopupForm.tsx
// import axios from "axios";
// import { useState } from "react";

// interface EmailPopupFormProps {
//   onClose: () => void; // Callback function to close the popup
// }

// const EmailPopupForm: React.FC<EmailPopupFormProps> = ({ onClose }) => {
//   const [email, setEmail] = useState<string>("");
//   const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
//   const [showForm, setShowForm] = useState<boolean>(false);
//   const [status, setStatus] = useState<{
//     message: string;
//     type: "success" | "error";
//   } | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle email submission logic here (e.g., send email to backend, etc.)
//     console.log("Input submitted:", email);
//     setIsSubscribed(true);
//     setShowForm(false);
//     try {
//       const response = await axios.post("http://localhost:3000/api/send", {
//         email,
//       });
//       console.log("Response:", response);
//       setStatus({ message: "Email sent successfully!", type: "success" });
//       setEmail("");
//     } catch (error) {
//       setStatus({ message: "Failed to send email.", type: "error" });
//       console.error("Error:");
//     }
//     console.log("Email :", email);
//     onClose(); // Close the popup after submission
//   };

//   return (
//     <div className="popup">
//       <div className="popup-content bottom-2 bg-slate-200 p-4 rounded-xl m-8">
//         <span className="close cursor-pointer" onClick={onClose}>
//           &times;
//         </span>

//         <form onSubmit={handleSubmit}>
//           <div className="flex items-center justify-center">
//             <label htmlFor="npm-install" className="sr-only">
//               Label
//             </label>
//             <input
//               type="email"
//               value={email}
//               id="email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//             <button
//               data-copy-to-clipboard-target="npm-install"
//               type="submit"
//               className="col-span-2 w-40 text-white p-2 m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
//             >
//               Subscribe
//             </button>
//             {status && (
//               <p
//                 className={`p-4 mb-4 text-sm rounded-lg bg-green-50 dark:bg-gray-800  ${
//                   status.type === "success" ? "text-green-500" : "text-red-500"
//                 }`}
//               >
//                 {status.message}
//               </p>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmailPopupForm;

// components/SubscriptionForm.tsx
import axios from "axios";
import { useEffect, useState } from "react";

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the submission logic here (e.g., send data to the backend)
    console.log("Input submitted:", email);
    setIsSubscribed(true);
    setShowForm(false);
    try {
      const response = await axios.post(`/api/send`, {
        //${process.env.URL}
        email,
      });
      console.log("Response:", response);

      setStatus({ message: "Email sent successfully!", type: "success" });
      // Clear the form fields
      setEmail("");
    } catch (error) {
      setStatus({ message: "Failed to send email.", type: "error" });
      console.error("Error:");
    }
  };

  return (
    <div>
      {!isSubscribed ? (
        <div className="grid place-items-center p-8">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-white border-2 border-teal-200 text-teal-400 font-bold p-2 rounded-lg m-4 text-sm"
            >
              Subscribe To our letter
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="grid place-items-center">
              <input
                type="email"
                value={email}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="text-white mt-6 bg-teal-400 hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="grid place-items-center">
          <button
            disabled
            className="bg-white border-2 border-red-200 text-red-400 font-bold p-2 rounded-lg m-4 text-sm"
          >
            Subscribed
          </button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
