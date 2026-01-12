"use client"
import React from "react";

const PHONE_NUMBER = "+94 770265453";
const DEFAULT_MESSAGE = encodeURIComponent("Hello! I have a question about your tours.");

export default function WhatsAppButton({ phone = PHONE_NUMBER, message = DEFAULT_MESSAGE }: { phone?: string; message?: string }) {
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 .02 5.353 0 12c0 2.11.55 4.17 1.6 6.02L0 24l6.36-1.64A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.6 0-3.14-.38-4.52-1.1l-.32-.18-3.78.97.99-3.68-.2-.36A9.5 9.5 0 012.5 12 9.5 9.5 0 1112 21.5zm5.32-7.9c-.12-.2-.42-.3-.88-.52-.45-.22-1.04-.52-1.2-.58-.16-.06-.28-.08-.4.08-.12.16-.48.58-.58.7-.1.12-.2.14-.38.05-.19-.10-.8-.3-1.5-.94-.56-.5-.94-1.12-1.05-1.3-.12-.18-.01-.28.09-.37.1-.1.22-.26.33-.4.11-.14.15-.24.23-.4.08-.16.04-.3-.02-.42-.06-.12-.4-.96-.56-1.32-.15-.34-.3-.3-.45-.3-.12 0-.26 0-.4 0-.14 0-.37.05-.56.26-.19.22-.72.7-.72 1.7s.74 1.98.84 2.12c.1.14 1.46 2.28 3.54 3.2 2.47 1.08 2.47.72 2.92.68.45-.04 1.46-.6 1.67-1.18.21-.58.21-1.06.15-1.18z" />
      </svg>
    </a>
  );
}
