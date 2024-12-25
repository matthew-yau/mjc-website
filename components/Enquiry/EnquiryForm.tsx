"use client";

import React, { useState } from "react";

const EnquiryForm: React.FC<{ language: "en" | "jp" }> = ({ language }) => {
  const translations = {
    title: { en: "Enquiry Form", jp: "お問い合わせフォーム" },
    name: { en: "Name", jp: "名前" },
    email: { en: "Email", jp: "メールアドレス" },
    message: { en: "Message", jp: "メッセージ" },
    placeholder: {
      name: { en: "Enter your name", jp: "名前を入力してください" },
      email: { en: "Enter your email", jp: "メールアドレスを入力してください" },
      message: { en: "Enter your message", jp: "メッセージを入力してください" },
    },
    submit: { en: "Submit", jp: "送信" },
    success: {
      en: "Your message has been sent successfully.",
      jp: "メッセージが正常に送信されました。",
    },
    error: {
      fillFields: {
        en: "Please fill in all fields.",
        jp: "全ての項目を入力してください。",
      },
      invalidEmail: {
        en: "Please enter a valid email address.",
        jp: "有効なメールアドレスを入力してください。",
      },
      generic: { en: "Something went wrong.", jp: "エラーが発生しました。" },
    },
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccess("");

    const { name, email, message } = formState;

    if (!name || !email || !message) {
      setError(translations.error.fillFields[language]);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(translations.error.invalidEmail[language]);
      return;
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || translations.error.generic[language]);
      }

      const { message: successMessage } = await response.json();
      setSuccess(successMessage || translations.success[language]);

      // Clear the form
      setFormState({ name: "", email: "", message: "" });
    } catch (error: any) {
      setError(error.message || translations.error.generic[language]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full sm:max-w-lg mx-auto p-4 sm:p-6 border rounded shadow bg-white"
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        {translations.title[language]}
      </h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-3">{success}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {translations.name[language]}
        </label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={translations.placeholder.name[language]}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {translations.email[language]}
        </label>
        <input
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={translations.placeholder.email[language]}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {translations.message[language]}
        </label>
        <textarea
          id="message"
          value={formState.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
          placeholder={translations.placeholder.message[language]}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {translations.submit[language]}
      </button>
    </form>
  );
};

export default EnquiryForm;
