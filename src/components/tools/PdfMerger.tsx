import { Download, Merge } from "lucide-react";
import FileUploadZone from "../utilities/FileUploadZone";
import { useState } from "react";
import { BaseFileResult } from "../../types/types";
import { pdfService } from "../../services/api";

const PdfMerger = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<BaseFileResult | null>(null);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(files);
    setResult(null);
  };

  const mergePdfs = async () => {
    if (selectedFiles.length < 2) return;

    setProcessing(true);
    try {
      const response = await pdfService.merge(selectedFiles);
      setResult(response.data);
    } catch (error) {
      console.error("Merge failed:", error);
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
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Merge className="text-indigo-600" />
        PDF Merger
      </h2>

      <FileUploadZone
        onFilesSelected={handleFileSelect}
        accept=".pdf"
        multiple={true}
      >
        <p className="text-gray-600 mb-2">
          Drop multiple PDFs here or click to browse
        </p>
        <p className="text-sm text-gray-400">
          Combine multiple PDFs into one document
        </p>
      </FileUploadZone>

      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">
            Selected PDFs ({selectedFiles.length}):
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {selectedFiles.map((file: File, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded group"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col space-y-1">
                    <button
                      onClick={() => moveFile(index, Math.max(0, index - 1))}
                      disabled={index === 0}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() =>
                        moveFile(
                          index,
                          Math.min(selectedFiles.length - 1, index + 1)
                        )
                      }
                      disabled={index === selectedFiles.length - 1}
                      className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs"
                    >
                      ↓
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong> Use the ↑↓ arrows to reorder PDFs. The final
              merged PDF will follow this order.
            </p>
          </div>

          <button
            onClick={mergePdfs}
            disabled={selectedFiles.length < 2 || processing}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 transition-colors"
          >
            {processing
              ? "Merging PDFs..."
              : `Merge ${selectedFiles.length} PDFs`}
          </button>
        </div>
      )}

      {selectedFiles.length === 1 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            Please select at least 2 PDF files to merge.
          </p>
        </div>
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">
            PDFs Merged Successfully!
          </h3>
          <p className="text-green-700 text-sm mb-3">
            Combined {selectedFiles.length} PDFs into one document
          </p>
          <a
            href={result.download_url}
            download={result.filename}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            <Download className="inline mr-2" size={16} />
            Download Merged PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfMerger;
