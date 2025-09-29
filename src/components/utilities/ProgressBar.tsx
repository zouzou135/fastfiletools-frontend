import { ProgressBarProps } from "../../types/types";

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => (
  <div className="w-full">
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>{label}</span>
      <span>{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
