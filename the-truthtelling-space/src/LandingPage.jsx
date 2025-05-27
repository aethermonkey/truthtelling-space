import { FaFeatherAlt, FaLock, FaLanguage, FaMagic } from "react-icons/fa";
import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E1C0] via-[#D9A441] to-[#B86B1F] p-8">
      <div className="max-w-2xl w-full text-center bg-white bg-opacity-90 rounded-2xl shadow-2xl p-12 border-4 border-[#D9A441]">
        <h1 className="text-5xl font-extrabold mb-4 text-[#B86B1F] tracking-tight flex items-center justify-center gap-3">
          <FaFeatherAlt className="inline text-[#D9A441] text-4xl" />
          The Truth Telling Space
        </h1>
        <p className="text-xl mb-8 text-[#7C4A03] font-semibold flex items-center justify-center gap-2">
          <span role="img" aria-label="construction">🚧</span> Under Construction <span role="img" aria-label="construction">🚧</span>
        </p>
        <p className="text-lg mb-8 text-[#7C4A03]">
          We are building a platform to democratize knowledge and amplify marginalized voices.<br />
          Soon, you’ll be able to:
        </p>
        <ul className="text-left text-[#7C4A03] mb-8 list-none mx-auto max-w-md space-y-5">
          <li className="flex items-center gap-3 text-lg">
            <FaLock className="text-[#B86B1F] text-2xl" />
            Share your story anonymously and securely
          </li>
          <li className="flex items-center gap-3 text-lg">
            <FaMagic className="text-[#D9A441] text-2xl" />
            Transform your words into academic or creative formats with AI
          </li>
          <li className="flex items-center gap-3 text-lg">
            <FaLanguage className="text-[#B86B1F] text-2xl" />
            Read and contribute in multiple languages
          </li>
        </ul>
        <a
          href="https://the.truthtelling.space"
          className="inline-block bg-[#B86B1F] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#D9A441] hover:text-[#7C4A03] transition text-lg tracking-wide border-2 border-[#D9A441]"
        >
          Learn More
        </a>
      </div>
      <footer className="mt-12 text-[#7C4A03] text-base font-medium">
        &copy; {new Date().getFullYear()} The Truth Telling Space
      </footer>
    </main>
  );
}
