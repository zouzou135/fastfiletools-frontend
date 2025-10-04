import React from "react";
import Layout from "../utilities/Layout";

const PrivacyPolicy = () => {
  return (
    <div className="px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Privacy Policy
        </h1>
        <p className="mb-4 text-gray-700">
          At <strong>FastFileTools</strong>, your privacy is important to us.
          This Privacy Policy explains how we handle your information when you
          use our tools.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          Information We Collect
        </h2>
        <p className="mb-4 text-gray-700">
          We do not require you to create an account or provide personal details
          to use our tools. Uploaded files are processed temporarily and deleted
          automatically after expiration. We do not associate these files with
          any personal information, IP address, or device data. If we begin
          collecting technical data in the future, we will update this Privacy
          Policy to reflect those changes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          Cookies and Advertising
        </h2>
        <p className="mb-4 text-gray-700">
          We do not currently use cookies or display ads on our site. If we
          integrate Google AdSense or other advertising services in the future,
          we will update this policy and display a cookie consent banner where
          required by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          File Handling
        </h2>
        <p className="mb-4 text-gray-700">
          Files you upload are stored temporarily for processing and are deleted
          automatically after their expiration time. We do not use your files
          for training, sharing, or any purpose beyond providing the requested
          service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:support@fastfiletools.com"
            className="text-blue-600 underline"
          >
            support@fastfiletools.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
