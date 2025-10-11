import { Outlet, useLocation } from "react-router-dom"; // IMPORTED
import { toolCategories } from "../../helpers/toolsData";

// 1. DEFINE THE PROPS INTERFACE
interface ToolWrapperProps {
  // This tells TypeScript the component expects JSX elements inside it.
  children?: React.ReactNode;
}

const ToolWrapper = () => {
  // Get the current URL path for highlighting the active menu item
  const location = useLocation();

  // Flatten
  const allTools = toolCategories.flatMap((category) => category.tools);
  // 1. Find the current tool object based on the path
  const currentTool = allTools.find((tool) => tool.path === location.pathname);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            FastFileTools
          </h1>
          {/* 2. DYNAMIC DESCRIPTION TEXT */}
          {currentTool && (
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              {currentTool.description}
            </p>
          )}
        </div>

        {/* Main Content (NOW USES <Outlet />) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* This is where the specific tool component will be rendered */}
            <Outlet />
          </div>

          {/* Long description below the tool UI */}
          {currentTool?.longDescription && (
            <div className="mt-20 prose prose-sm max-w-none text-gray-700">
              <hr className="border-gray-200 mb-8" />
              <div
                dangerouslySetInnerHTML={{
                  __html: currentTool.longDescription,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolWrapper;
