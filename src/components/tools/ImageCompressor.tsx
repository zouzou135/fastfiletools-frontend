import { useState } from "react";
import { CompressedImageResult } from "../../types/types";
import FileUploadZone from "../utilities/FileUploadZone";
import { Download, Zap } from "lucide-react";
import ProgressBar from "../utilities/ProgressBar";
import { imageService } from "../../services/api";
import { formatBytes } from "../../helpers/helperfunctions";
import { Helmet } from "react-helmet-async";
import FileItem from "../utilities/FileItem";
import { useUploadProgress } from "../../hooks/useUploadProgress";

const ImageCompressor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [result, setResult] = useState<CompressedImageResult | null>(null);
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

  const compressImage = async () => {
    if (!selectedFile) return;

    try {
      const response = await runWithUploadProgress((onProgress, signal) =>
        imageService.compress(selectedFile, quality, onProgress, signal)
      );
      setResult(response.data); // Make sure response.data matches MockApiData
    } catch (error) {
      console.error("Compression failed:", error);
    }
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9323073702818036"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Zap className="text-blue-600" />
        Image Compressor
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
              Supports JPG, PNG, GIF, WebP
            </p>
          </>
        )}
      </FileUploadZone>

      {/* {selectedFile && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Selected File:</h3>
          <p className="text-sm text-gray-600">{selectedFile.name}</p>
          <p className="text-sm text-gray-500">
            Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )} */}

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

        {selectedFile && (
          <div className="flex justify-end">
            <button
              onClick={() => {
                setSelectedFile(null);
                setResult(null);
                cancelUpload();
              }}
              className="text-sm text-white bg-red-600 hover:bg-red-700 px-2 rounded-md"
            >
              Clear
            </button>
          </div>
        )}

        <button
          onClick={compressImage}
          disabled={!selectedFile || processing}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {processing ? "Compressing..." : "Compress Image"}
        </button>
      </div>

      {(uploading || processing) && (
        <ProgressBar
          progress={progress}
          label={uploading ? `Uploading (${speed})` : "Compressing image"}
        />
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">
            Compression Complete!
          </h3>
          {/* NEW: Display the size comparison */}
          <div className="text-green-700 text-sm mb-3">
            <p className="font-medium">
              Original Size:{" "}
              <span className="line-through">
                {formatBytes(result.original_size)}
              </span>
            </p>
            <p className="font-medium">
              Compressed Size:{" "}
              <strong>{formatBytes(result.compressed_size)}</strong>
            </p>
            <p className="mt-1">
              Total Reduction:{" "}
              <strong className="text-lg">
                {(
                  (1 - result.compressed_size / result.original_size) *
                  100
                ).toFixed(1)}
                %
              </strong>
            </p>
          </div>
          <a
            href={result.download_url}
            download={result.filename}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <Download className="inline mr-2" size={16} />
            Download Compressed Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
