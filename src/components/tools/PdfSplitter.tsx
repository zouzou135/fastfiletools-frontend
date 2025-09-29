import { Download, Scissors } from "lucide-react";
import { useState } from "react";
import mockApiCall from "../utilities/mockApiCall";
import FileUploadZone from "../utilities/FileUploadZone";
import { SplitPdfResult } from "../../types/types";

const PdfSplitter = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pageRange, setPageRange] = useState("");
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<SplitPdfResult | null>(null);

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setResult(null);
    }
  };

  const splitPdf = async () => {
    if (!selectedFile || !pageRange) return;

    setProcessing(true);
    try {
      const response = await mockApiCall(2500);
      setResult({
        ...response.data,
        split_pdfs: [
          { page: 1, filename: "page_1.pdf", url: "#" },
          { page: 3, filename: "page_3.pdf", url: "#" },
          { page: 5, filename: "page_5.pdf", url: "#" },
        ],
      });
    } catch (error) {
      console.error("Split failed:", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Scissors className="text-orange-600" />
        PDF Splitter
      </h2>

      <FileUploadZone onFilesSelected={handleFileSelect} accept=".pdf">
        <p className="text-gray-600 mb-2">
          Drop your PDF here or click to browse
        </p>
        <p className="text-sm text-gray-400">
          Extract specific pages from your PDF
        </p>
      </FileUploadZone>

      {selectedFile && (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Selected PDF:</h3>
            <p className="text-sm text-gray-600">{selectedFile.name}</p>
            <p className="text-sm text-gray-500">
              Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Page Range
            </label>
            <input
              type="text"
              value={pageRange}
              onChange={(e) => setPageRange(e.target.value)}
              placeholder="e.g., 1,3,5-8,10"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Specify individual pages (1,3,5) or ranges (5-8)
            </p>
          </div>

          <button
            onClick={splitPdf}
            disabled={!pageRange || processing}
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 disabled:bg-gray-300 transition-colors"
          >
            {processing ? "Splitting PDF..." : "Split PDF"}
          </button>
        </div>
      )}

      {result && result.split_pdfs && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-3">
            PDF Split Successfully!
          </h3>
          <div className="space-y-2">
            {result.split_pdfs.map((pdf, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded"
              >
                <span className="text-sm">Page {pdf.page}</span>
                <button className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700 transition-colors">
                  <Download className="inline mr-1" size={14} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfSplitter;
