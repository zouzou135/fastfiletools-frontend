import { FileText, Scissors, Merge, Zap, Settings } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom"; // IMPORTED
import Layout from "../utilities/Layout";

// Define the tool data with the actual PATHS (Crucial for SEO)
const toolRoutes = [
  {
    id: "compress",
    label: "Image Compressor",
    icon: Zap,
    path: "/compress-image",
  },
  { id: "tune", label: "Image Tuner", icon: Settings, path: "/tune-image" },
  {
    id: "img-to-pdf",
    label: "Images to PDF",
    icon: FileText,
    path: "/img-to-pdf",
  },
  { id: "split-pdf", label: "Split PDF", icon: Scissors, path: "/split-pdf" },
  { id: "merge-pdf", label: "Merge PDFs", icon: Merge, path: "/merge-pdf" },
];

// 1. DEFINE THE PROPS INTERFACE
interface ToolWrapperProps {
  // This tells TypeScript the component expects JSX elements inside it.
  children?: React.ReactNode;
}

const ToolWrapper = () => {
  // Get the current URL path for highlighting the active menu item
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            FastFileTools
          </h1>
        </div>

        {/* Tab Navigation (NOW A LINK MENU) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {toolRoutes.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link // CHANGED FROM <button> to <Link>
                key={tab.id}
                to={tab.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  // Highlight based on URL path
                  location.pathname === tab.path
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 shadow-sm"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Main Content (NOW USES <Outlet />) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* This is where the specific tool component will be rendered */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolWrapper;
