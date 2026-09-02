"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || isLoading) return;

    setIsLoading(true);
    setStatus(null);

    try {
      const response = await axios.post(`/api/send`, {
        email: email.trim(),
      });
      console.log("Response:", response);

      setIsSubscribed(true);
      setShowForm(false);
      setStatus({ message: "Subscribed successfully!", type: "success" });
      setEmail("");
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error ||
        "Failed to subscribe. Please try again.";
      setStatus({ message: errorMessage, type: "error" });
      console.error("Subscription error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {!isSubscribed ? (
        <div className="grid place-items-center p-8">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-bold p-2 rounded-lg m-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              Subscribe to our letters
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="grid place-items-center">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="text-white mt-6 bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 transition-colors disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="grid place-items-center">
          <button
            disabled
            className="bg-white border-2 border-teal-600 text-teal-600 font-bold p-2 rounded-lg m-4 text-sm"
          >
            Subscribed
          </button>
        </div>
      )}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="text-center"
      >
        {status && (
          <p
            className={`p-4 mb-4 text-sm rounded-lg ${
              status.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionForm;

