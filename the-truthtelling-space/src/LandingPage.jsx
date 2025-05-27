import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="max-w-2xl w-full text-center bg-white bg-opacity-80 rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">The Truth Telling Space</h1>
        <p className="text-lg mb-6 text-gray-700 font-semibold">
          🚧 Under Construction 🚧
        </p>
        <p className="text-base mb-6 text-gray-700">
          We are building a platform to democratize knowledge and amplify marginalized voices.<br />
          Soon, you’ll be able to:
        </p>
        <ul className="text-left text-gray-700 mb-6 list-disc list-inside mx-auto max-w-md">
          <li>Share your story anonymously and securely</li>
          <li>Transform your words into academic or creative formats with AI</li>
          <li>Read and contribute in multiple languages</li>
        </ul>
        <a
          href="https://the.truthtelling.space"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-purple-700 transition"
        >
          Learn More
        </a>
      </div>
      <footer className="mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} The Truth Telling Space
      </footer>
    </main>
  );
}
