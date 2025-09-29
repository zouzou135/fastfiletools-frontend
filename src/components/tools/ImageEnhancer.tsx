import { Download, ImageIcon, Settings } from "lucide-react";
import FileUploadZone from "../utilities/FileUploadZone";
import { useState } from "react";
import mockApiCall from "../utilities/mockApiCall";
import { MockApiData } from "../../types/types";

const ImageEnhancer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [settings, setSettings] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<MockApiData | null>(null);

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setResult(null);
    }
  };

  const enhanceImage = async () => {
    if (!selectedFile) return;

    setProcessing(true);
    try {
      const response = await mockApiCall();
      setResult(response.data);
    } catch (error) {
      console.error("Enhancement failed:", error);
    } finally {
      setProcessing(false);
    }
  };

  const resetSettings = () => {
    setSettings({ brightness: 0, contrast: 0, saturation: 0 });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Settings className="text-purple-600" />
        Image Enhancer
      </h2>

      <FileUploadZone onFilesSelected={handleFileSelect} accept="image/*">
        <p className="text-gray-600 mb-2">
          Drop your image here or click to browse
        </p>
        <p className="text-sm text-gray-400">
          Enhance brightness, contrast, and saturation
        </p>
      </FileUploadZone>

      {selectedFile && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Enhancement Settings</h3>
            <div className="space-y-4">
              {Object.entries(settings).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {key}: {value > 0 ? "+" : ""}
                    {value}
                  </label>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={value}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        [key]: parseInt(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ))}

              <div className="flex gap-2">
                <button
                  onClick={resetSettings}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={enhanceImage}
                  disabled={processing}
                  className="flex-1 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:bg-gray-300 transition-colors"
                >
                  {processing ? "Enhancing..." : "Enhance"}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Preview</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <ImageIcon className="text-gray-400" size={48} />
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">
            Enhancement Complete!
          </h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            <Download className="inline mr-2" size={16} />
            Download Enhanced Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageEnhancer;
