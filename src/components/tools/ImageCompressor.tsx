import { useState } from "react";
import { MockApiData } from "../../types/types";
import FileUploadZone from "../utilities/FileUploadZone";
import { Download, Zap } from "lucide-react";
import ProgressBar from "../utilities/ProgressBar";
import mockApiCall from "../utilities/mockApiCall";

const ImageCompressor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<MockApiData | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setResult(null);
    }
  };

  const compressImage = async () => {
    if (!selectedFile) return;

    setProcessing(true);
    setProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      const response = await mockApiCall();
      setProgress(100);
      setResult(response.data);
    } catch (error) {
      console.error("Compression failed:", error);
    } finally {
      setProcessing(false);
      clearInterval(progressInterval);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Zap className="text-blue-600" />
        Image Compressor
      </h2>

      <FileUploadZone onFilesSelected={handleFileSelect} accept="image/*">
        <p className="text-gray-600 mb-2">
          Drop your image here or click to browse
        </p>
        <p className="text-sm text-gray-400">Supports JPG, PNG, GIF, WebP</p>
      </FileUploadZone>

      {selectedFile && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Selected File:</h3>
          <p className="text-sm text-gray-600">{selectedFile.name}</p>
          <p className="text-sm text-gray-500">
            Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quality: {quality}%
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => setQuality(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <button
          onClick={compressImage}
          disabled={!selectedFile || processing}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {processing ? "Compressing..." : "Compress Image"}
        </button>
      </div>

      {processing && (
        <ProgressBar progress={progress} label="Compressing image" />
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">
            Compression Complete!
          </h3>
          <p className="text-green-700 text-sm mb-3">
            Size reduced by{" "}
            {(
              (1 - result.compressed_size / result.original_size) *
              100
            ).toFixed(1)}
            %
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            <Download className="inline mr-2" size={16} />
            Download Compressed Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
