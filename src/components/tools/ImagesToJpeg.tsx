import { Download, Image } from "lucide-react";
import FileUploadZone from "../utilities/FileUploadZone";
import { useState } from "react";
import { ImagesResult } from "../../types/types";
import { imageService } from "../../services/api";
import ProgressBar from "../utilities/ProgressBar";
import { Helmet } from "react-helmet-async";
import FileList from "../utilities/FileList";
import { useUploadProgress } from "../../hooks/useUploadProgress";

const ImagesToJpeg = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [result, setResult] = useState<ImagesResult | null>(null);
  const {
    progress,
    speed,
    uploading,
    processing,
    runWithUploadProgress,
    cancelUpload,
  } = useUploadProgress({ enableFakeProcessing: true });

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles((prev) => [...prev, ...files]);
    setResult(null);
  };

  const convertToJpeg = async () => {
    try {
      const response = await runWithUploadProgress((onProgress, signal) =>
        imageService.convertToJpeg(selectedFiles, onProgress, signal)
      );
      setResult(response.data);
    } catch (error) {
      console.error("Conversion failed:", error);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const moveFile = (fromIndex: number, toIndex: number) => {
    setSelectedFiles((prev) => {
      const newFiles = [...prev];
      const [removed] = newFiles.splice(fromIndex, 1);
      newFiles.splice(toIndex, 0, removed);
      return newFiles;
    });
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
        <Image className="text-pink-600" />
        Images To JPEG Converter
      </h2>

      <FileUploadZone
        onFilesSelected={handleFileSelect}
        accept="image/*, !image/jpeg, !image/jpg"
        multiple={true}
        hasFiles={selectedFiles.length != 0}
      >
        {selectedFiles.length != 0 ? (
          <FileList
            files={selectedFiles}
            onRemove={removeFile}
            onMove={moveFile}
          />
        ) : (
          <>
            <p className="text-gray-600 mb-2">
              Drop images here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Convert other image formats to JPEG
            </p>{" "}
          </>
        )}
      </FileUploadZone>

      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">
            Selected Images ({selectedFiles.length})
          </h3>

          {selectedFiles.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedFiles([]);
                  setResult(null);
                  cancelUpload();
                }}
                className="text-sm text-white bg-red-600 hover:bg-red-700 px-2 rounded-md"
              >
                Clear All
              </button>
            </div>
          )}

          <button
            onClick={convertToJpeg}
            disabled={processing || uploading}
            className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-pink-700 disabled:bg-gray-300 transition-colors"
          >
            {processing || uploading
              ? "Converting to JPEG..."
              : `Convert to JPEG`}
          </button>
        </div>
      )}

      {(uploading || processing) && (
        <ProgressBar
          progress={progress}
          label={uploading ? `Uploading (${speed})` : "Converting"}
        />
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">
            Images Converted Successfully!
          </h3>
          <div className="space-y-2">
            {result.images.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded"
              >
                <span className="text-sm">{image.filename}</span>
                <a
                  href={image.download_url}
                  download={image.filename}
                  className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700 transition-colors"
                >
                  <Download className="inline mr-1" size={14} />
                  Download
                </a>
              </div>
            ))}
          </div>
          {result.zip && (
            <a
              href={result.zip.download_url}
              download={result.zip.filename}
              className="bg-green-600 text-white mt-3 px-4 py-2 rounded hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Download className="inline mr-2" size={16} />
              Download All
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagesToJpeg;
