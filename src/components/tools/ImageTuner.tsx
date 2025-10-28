import { Download, Settings } from "lucide-react";
import FileUploadZone from "../utilities/FileUploadZone";
import { useState } from "react";
import { BaseFileResult } from "../../types/types";
import { imageService } from "../../services/api";
import { Helmet } from "react-helmet-async";
import FileItem from "../utilities/FileItem";
import { useUploadProgress } from "../../hooks/useUploadProgress";
import ProgressBar from "../utilities/ProgressBar";

const ImageTuner: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [settings, setSettings] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
  });
  const [result, setResult] = useState<BaseFileResult | null>(null);
  const {
    progress,
    speed,
    uploading,
    processing,
    runWithUploadProgress,
    cancelUpload,
  } = useUploadProgress({ enableFakeProcessing: true });

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setResult(null);
    }
  };

  const tuneImage = async () => {
    if (!selectedFile) return;

    try {
      const response = await runWithUploadProgress((onProgress, signal) =>
        imageService.tune(selectedFile, settings, onProgress, signal)
      );

      setResult(response.data);
    } catch (error) {
      console.error("Tuning failed:", error);
    }
  };

  const resetSettings = () => {
    setSettings({ brightness: 0, contrast: 0, saturation: 0 });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Settings className="text-purple-600" />
        Image Tuner
      </h2>

      <FileUploadZone
        onFilesSelected={handleFileSelect}
        accept="image/*"
        hasFiles={!!selectedFile}
      >
        {selectedFile ? (
          <FileItem
            file={selectedFile}
            index={0}
            lastIndex={0}
            onRemove={() => setSelectedFile(null)}
          />
        ) : (
          <>
            <p className="text-gray-600 mb-2">
              Drop your image here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Tune brightness, contrast, and saturation
            </p>
          </>
        )}
      </FileUploadZone>

      {selectedFile && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Tuning Settings</h3>
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

              {selectedFile && (
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      resetSettings();
                      setResult(null);
                      cancelUpload();
                    }}
                    className="text-sm text-white bg-red-600 hover:bg-red-700 px-2 rounded-md"
                  >
                    Clear
                  </button>
                </div>
              )}
              <div className="flex gap-2">
                <button
                  onClick={resetSettings}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={tuneImage}
                  disabled={processing || uploading}
                  className="flex-1 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:bg-gray-300 transition-colors"
                >
                  {processing || uploading ? "Tuning..." : "Tune"}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Preview</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected preview"
                className="object-contain w-full h-full"
                style={{
                  filter: `
            brightness(${100 + settings.brightness}%)
            contrast(${100 + settings.contrast}%)
            saturate(${100 + settings.saturation}%)
          `,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {(uploading || processing) && (
        <ProgressBar
          progress={progress}
          label={uploading ? `Uploading (${speed})` : "Tuning"}
        />
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">
            Tunining Complete!
          </h3>
          <a
            href={result.download_url}
            download={result.filename}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            <Download className="inline mr-2" size={16} />
            Download Tuned Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageTuner;
