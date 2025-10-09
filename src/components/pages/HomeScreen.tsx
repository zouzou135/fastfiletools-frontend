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
    </div>
  );
};

export default HomeScreen;
