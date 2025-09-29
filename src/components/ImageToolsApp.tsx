import React, { useState, useRef, DragEvent } from "react";
import {
  Upload,
  Download,
  Image as ImageIcon,
  FileText,
  Scissors,
  Merge,
  Zap,
  Settings,
} from "lucide-react";
import {
  FileUploadZoneProps,
  MockApiData,
  ProgressBarProps,
  SplitPdfResult,
} from "../types/types";

// Mock API service (replace with actual API calls)
const mockApiCall = (delay = 2000): Promise<{ data: MockApiData }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          success: true,
          url: "https://via.placeholder.com/400x300.jpg",
          filename: "processed_file.jpg",
          original_size: 1024000,
          compressed_size: 512000,
        },
      });
    }, delay);
  });
};

const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  onFilesSelected,
  accept,
  multiple = false,
  children,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    onFilesSelected(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onFilesSelected(files);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
        isDragOver
          ? "border-blue-500 bg-blue-50 scale-105"
          : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileSelect}
        className="hidden"
      />
      <Upload className="mx-auto mb-4 text-gray-400" size={48} />
      {children}
    </div>
  );
};

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

const ImageToPdfConverter: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<MockApiData | null>(null);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(files);
    setResult(null);
  };

  const convertToPdf = async () => {
    if (selectedFiles.length === 0) return;

    setProcessing(true);
    try {
      const response = await mockApiCall(3000);
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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FileText className="text-red-600" />
        Images to PDF Converter
      </h2>

      <FileUploadZone
        onFilesSelected={handleFileSelect}
        accept="image/*"
        multiple={true}
      >
        <p className="text-gray-600 mb-2">
          Drop multiple images here or click to browse
        </p>
        <p className="text-sm text-gray-400">
          All images will be combined into one PDF
        </p>
      </FileUploadZone>

      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">
            Selected Images ({selectedFiles.length}):
          </h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded"
              >
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

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
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            <Download className="inline mr-2" size={16} />
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
};

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

const PdfMerger = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<MockApiData | null>(null);

  const handleFileSelect = (files: File[]) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    setResult(null);
  };

  const mergePdfs = async () => {
    if (selectedFiles.length < 2) return;

    setProcessing(true);
    try {
      const response = await mockApiCall(3000);
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
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            <Download className="inline mr-2" size={16} />
            Download Merged PDF
          </button>
        </div>
      )}
    </div>
  );
};

const ImageToolsApp = () => {
  const [activeTab, setActiveTab] = useState("compress");

  const tabs = [
    {
      id: "compress",
      label: "Image Compressor",
      icon: Zap,
      component: ImageCompressor,
    },
    {
      id: "enhance",
      label: "Image Enhancer",
      icon: Settings,
      component: ImageEnhancer,
    },
    {
      id: "img-to-pdf",
      label: "Images to PDF",
      icon: FileText,
      component: ImageToPdfConverter,
    },
    {
      id: "split-pdf",
      label: "Split PDF",
      icon: Scissors,
      component: PdfSplitter,
    },
    { id: "merge-pdf", label: "Merge PDFs", icon: Merge, component: PdfMerger },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Image & PDF Tools
          </h1>
          <p className="text-gray-600">
            Professional image processing and PDF manipulation tools
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 shadow-sm"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>&copy; 2025 Image & PDF Tools. Built with React.js and Laravel.</p>
        </div>
      </div>
    </div>
  );
};

export default ImageToolsApp;
