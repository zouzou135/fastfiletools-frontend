const AboutUs = () => {
  return (
    <div className="px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="mb-4 text-gray-700">
          Welcome to <strong>FastFileTools</strong>, a lightweight,
          privacy‑friendly platform designed to make working with images and
          PDFs fast, simple, and secure.
        </p>
        <p className="mb-4 text-gray-700">
          Our mission is to provide everyday users and developers with tools
          that are:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Fast, optimized for performance and minimal waiting time.</li>
          <li>
            Private, your files are processed securely and expire automatically.
          </li>
          <li>Simple, no clutter, just the tools you need.</li>
        </ul>
        <p className="mb-4 text-gray-700">
          Whether you're compressing images, tuning them for the web, converting
          photos to PDF, or splitting and merging documents, FastFileTools helps
          you get it done quickly without sacrificing quality.
        </p>
        <p className="text-gray-700">
          We're constantly improving and adding new features. If you have
          feedback or suggestions, we'd love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
