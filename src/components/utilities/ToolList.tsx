// components/ToolList.tsx
import { Link, useLocation } from "react-router-dom";
import { toolCategories } from "../../helpers/toolsData";

interface ToolListProps {
  onNavigate?: () => void; // optional, used to close drawer on mobile
}

const ToolList = ({ onNavigate }: ToolListProps) => {
  const location = useLocation();

  return (
    <div className="p-4">
      {toolCategories.map((category) => (
        <div key={category.label} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">
            {category.label}
          </h3>
          <div className="space-y-2">
            {category.tools.map((tool) => {
              const isActive = location.pathname === tool.path;
              return (
                <Link
                  key={tool.id}
                  to={tool.path}
                  onClick={onNavigate}
                  className={`block px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  <div className="font-semibold flex items-center gap-2">
                    <tool.icon size={16} />
                    {tool.label}
                  </div>
                  <div
                    className={`text-xs mt-0.5 ${
                      isActive ? "text-blue-200" : "text-gray-500"
                    }`}
                  >
                    {tool.description}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolList;
