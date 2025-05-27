import { FaFeatherAlt, FaLock, FaLanguage, FaMagic } from "react-icons/fa";
import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full bg-[#1a1816] font-sans text-[#F5E1C0]">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 md:px-0">
        <div className="max-w-3xl w-full text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#F5E1C0] flex items-center justify-center gap-4">
            <FaFeatherAlt className="inline text-[#B86B1F] text-5xl" />
            The Truth Telling Space
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-[#D9A441]">Decolonizing knowledge, one story at a time.</p>
          <p className="text-lg md:text-xl mb-8 text-[#F5E1C0] font-normal">
            We are building a platform to democratize knowledge and amplify marginalized voices.<br />
            <span className="inline-block mt-2 text-[#B86B1F] font-bold">🚧 Under Construction 🚧</span>
          </p>
          <a
            href="https://the.truthtelling.space"
            className="inline-block bg-[#7C4A03] text-[#F5E1C0] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#B86B1F] hover:text-[#FFF6E0] transition text-lg tracking-wide border-2 border-[#B86L1F] mt-2"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full flex flex-col items-center py-16 px-4 bg-[#2A2113]">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#D9A441] text-center">What You’ll Be Able To Do</h2>
          <ul className="space-y-8 w-full">
            <li className="flex items-start gap-5 bg-[#3B2F1C] rounded-xl p-6 shadow-lg w-full overflow-x-auto">
              <FaLock className="text-[#D9A441] text-3xl mt-1 shrink-0" />
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[#F5E1C0] mb-1">Share your story anonymously and securely</h3>
                <p className="text-[#FFF6E0]">Your privacy is our priority. End-to-end encryption and anonymity by default.</p>
              </div>
            </li>
            <li className="flex items-start gap-5 bg-[#4B371B] rounded-xl p-6 shadow-lg w-full overflow-x-auto">
              <FaMagic className="text-[#B86B1F] text-3xl mt-1 shrink-0" />
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[#F5E1C0] mb-1">Transform your words with AI</h3>
                <p className="text-[#FFF6E0]">Turn your thoughts into academic papers, creative stories, or philosophical essays with a click.</p>
              </div>
            </li>
            <li className="flex items-start gap-5 bg-[#3B2F1C] rounded-xl p-6 shadow-lg w-full overflow-x-auto">
              <FaLanguage className="text-[#D9A441] text-3xl mt-1 shrink-0" />
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[#F5E1C0] mb-1">Read and contribute in any language</h3>
                <p className="text-[#FFF6E0]">AI-powered translation and multilingual support for a truly global community.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* About/Longform Section */}
      <section className="w-full flex flex-col items-center py-20 px-4">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D9A441]">Why Truth Telling?</h2>
          <p className="text-lg md:text-xl mb-6 text-[#F5E1C0]">
            Inspired by the Aboriginal Australian tradition of truth telling as a means of decolonization, our mission is to create a safe, inclusive, and empowering environment where anyone can share their stories, insights, and wisdom—regardless of academic or intellectual background.
          </p>
          <p className="text-lg md:text-xl mb-6 text-[#F5E1C0]">
            <span className="text-[#B86B1F] font-semibold">Privacy and Anonymity:</span> Users are protected by end-to-end encryption and anonymity features, ensuring their safety and freedom of expression.
          </p>
          <p className="text-lg md:text-xl mb-6 text-[#F5E1C0]">
            <span className="text-[#B86B1F] font-semibold">AI-Powered Content Transformation:</span> Instantly convert user-submitted thoughts into academic papers, stories, or philosophical treatises. Lower the barrier for participation by providing editorial and structural support through AI.
          </p>
          <p className="text-lg md:text-xl mb-6 text-[#F5E1C0]">
            <span className="text-[#B86B1F] font-semibold">Multilingual Support:</span> Share ideas in any language. AI-driven translation ensures accessibility and global reach.
          </p>
          <p className="text-lg md:text-xl mb-6 text-[#F5E1C0]">
            <span className="text-[#B86B1F] font-semibold">Community & Social Impact:</span> Give voice to those historically silenced or ignored. Foster a global community of storytellers and knowledge sharers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-[#D9A441] bg-[#2A2113] font-medium text-base">
        &copy; {new Date().getFullYear()} The Truth Telling Space
      </footer>
    </main>
  );
}
