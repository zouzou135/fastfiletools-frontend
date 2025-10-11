import { Link } from "react-router-dom";
import { toolCategories } from "../../helpers/toolsData";

const HomeScreen = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">FastFileTools</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Free, privacy-conscious tools for images and PDFs. Compress, convert,
          merge, and split files instantly — no signup, no tracking.
        </p>
      </div>

      <div className="lg:mx-6">
        {toolCategories.map((toolCategory) => {
          return (
            <div>
              <h2 className="text-xl font-bold text-gray-700 mb-4 mt-12">
                {toolCategory.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolCategory.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.id}
                      to={tool.path}
                      className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-3 text-blue-600">
                        <Icon size={24} />
                        <h2 className="text-lg font-semibold">{tool.label}</h2>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {tool.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 prose prose-sm max-w-none text-gray-700 lg:mx-6">
        <hr className="border-gray-200 mb-8" />
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          About FastFileTools
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          FastFileTools provides simple, reliable utilities for images and PDFs.
          From compressing photos to merging or splitting PDFs, our tools are
          built for speed, clarity, and trust.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          All processing is handled securely on our servers to ensure
          consistent, high-quality results across formats. Files are processed
          only to complete your request, stored briefly for download, and
          automatically expired after a short period. This approach allows us to
          support complex conversions and large files while keeping the
          experience fast and dependable.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          There's no signup, no dark patterns, and no tracking beyond what's
          needed for basic functionality and reliability. Our goal is
          straightforward: tools that work quickly, respect your data, and keep
          the experience clean.
        </p>
        <ul className="mt-1 text-sm text-gray-600 leading-relaxed">
          <li>
            <strong>Fast:</strong> Minimal friction, quick results.
          </li>
          <li>
            <strong>Privacy:</strong> Files are processed securely and deleted
            automatically after 2 hours.
          </li>
          <li>
            <strong>Transparent:</strong> Clear progress and short‑lived
            download links.
          </li>
          <li>
            <strong>Free:</strong> No account required.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeScreen;
