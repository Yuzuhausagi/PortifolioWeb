"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: any) => void;
    };
  }
}

export default function ContactSection() {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "cf-turnstile-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (turnstileRef.current) {
          window.turnstile.render(turnstileRef.current, {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "your_turnstile_site_key_here",
            callback: (token: string) => {
              console.log("Turnstile token:", token);
              handleVerification(token);
            },
            "error-callback": () => {
              setError("An error occurred with the verification. Please try again.");
              setVerified(false);
            },
            "expired-callback": () => {
              setError("Verification has expired. Please solve the challenge again.");
              setVerified(false);
            },
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleVerification = async (token: string) => {
    const response = await fetch("/api/verify-turnstile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (response.ok) setVerified(true);
    else {
      setError("Verification failed. Please try again.");
      setVerified(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col gap-2 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
      <span className="text-sm sm:text-base">Don't hesitate to reach out. I'll get back to you promptly.</span>
      <div className="flex justify-center mt-4">
        {verified ? (
          <a
            href="mailto:your-email@example.com"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded text-sm sm:text-base"
          >
            Contact me!
          </a>
        ) : (
          <div ref={turnstileRef} aria-label="CAPTCHA verification challenge"></div>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </section>
  );
}