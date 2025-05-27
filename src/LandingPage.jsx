import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="max-w-2xl w-full text-center bg-white bg-opacity-80 rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">The Truth Telling Space</h1>
        <p className="text-lg mb-6 text-gray-700">
          Democratizing Knowledge, One Voice at a Time.<br />
          A platform for sharing wisdom, stories, and insights—especially from marginalized voices.
        </p>
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
