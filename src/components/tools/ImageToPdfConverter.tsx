import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { BaseFileResult } from "../../types/types";
import FileUploadZone from "../utilities/FileUploadZone";
import { imageService } from "../../services/api";
import ToolWrapper from "../pages/ToolWrapper";
import { Helmet } from "react-helmet-async";
import FileList from "../utilities/FileList";

const ImageToPdfConverter: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<BaseFileResult | null>(null);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles((prev) => [...prev, ...files]);
    setResult(null);
  };

  const convertToPdf = async () => {
    if (selectedFiles.length === 0) return;

    setProcessing(true);
    try {
      const response = await imageService.convertToPdf(selectedFiles);

      setResult(response.data);
    } catch (error) {
      console.error("Conversion failed:", error);
    } finally {
      setProcessing(false);
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
        <FileText className="text-red-600" />
        Images to PDF Converter
      </h2>

      <FileUploadZone
        onFilesSelected={handleFileSelect}
        accept="image/*"
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
              Drop multiple images here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              All images will be combined into one PDF
            </p>
          </>
        )}
      </FileUploadZone>

      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">
            Selected Images ({selectedFiles.length})
          </h3>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong>{" "}
              {"Use the < > arrows or drag to reorder images."}
            </p>
          </div>

          {selectedFiles.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedFiles([]);
                  setResult(null);
                }}
                className="text-sm text-white bg-red-600 hover:bg-red-700 px-2 rounded-md"
              >
                Clear All
              </button>
            </div>
          )}
          <button
            onClick={convertToPdf}
            disabled={processing}
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 transition-colors"
          >
            {processing ? "Converting to PDF..." : "Convert to PDF"}
          </button>
        </div>
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">
            PDF Created Successfully!
          </h3>
          <a
            href={result.download_url}
            download={result.filename}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            <Download className="inline mr-2" size={16} />
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageToPdfConverter;
