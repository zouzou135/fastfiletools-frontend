import { Download, Scissors } from "lucide-react";
import { useEffect, useState } from "react";
import FileUploadZone from "../utilities/FileUploadZone";
import { FileJobResponse, SplitPdfResult } from "../../types/types";
import { pdfService } from "../../services/api";
import ProgressBar from "../utilities/ProgressBar";
import { Helmet } from "react-helmet-async";
import FileItem from "../utilities/FileItem";
import { useUploadProgress } from "../../hooks/useUploadProgress";

const PdfSplitter = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pageRange, setPageRange] = useState("");
  const [processingJob, setProcessingJob] = useState(false);
  const [result, setResult] = useState<SplitPdfResult | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [progressStage, setProgressStage] = useState<string | null>(null);
  const stageMap: Record<string, number> = {
    queued: 10,
    uploaded: 20,
    normalizing: 40,
    splitting: 70,
    completed: 100,
    error: 100,
  };
  const {
    progress,
    speed,
    uploading,
    processing,
    runWithUploadProgress,
    cancelUpload,
  } = useUploadProgress({ enableFakeProcessing: true });

  const jobProgress = stageMap[progressStage || "queued"] || 0;

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setResult(null);
    }
  };

  const splitPdf = async () => {
    if (!selectedFile || !pageRange) return;

    try {
      const response = await runWithUploadProgress((onProgress, signal) =>
        pdfService.split(selectedFile, pageRange, onProgress, signal)
      );

      if (response.data.job_id) {
        // Now returns { job_id }
        setJobId(response.data.job_id);
        setStatus("pending");
        setProgressStage("queued");
        setProcessingJob(true);
      } else {
        setResult(response.data);
      }
    } catch (error: any) {
      console.error("Split failed:", error);
    }
  };

  useEffect(() => {
    if (!jobId) return;

    const interval = setInterval(async () => {
      try {
        const res = await pdfService.getJob(jobId);
        const fileJobResponse: FileJobResponse = res.data;

        setStatus(fileJobResponse.status);
        setProgressStage(fileJobResponse.progress_stage);

        if (
          fileJobResponse.status === "completed" ||
          fileJobResponse.status === "failed"
        ) {
          clearInterval(interval);
          setProcessingJob(false);
          if (fileJobResponse.status === "completed") {
            setResult(fileJobResponse.result as SplitPdfResult);
          }
        }
      } catch (err) {
        console.error("Polling failed:", err);
        clearInterval(interval);
        setProcessingJob(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [jobId]);

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
        <Scissors className="text-orange-600" />
        PDF Splitter
      </h2>

      <FileUploadZone
        onFilesSelected={handleFileSelect}
        accept=".pdf"
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
              Drop your PDF here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Extract specific pages from your PDF
            </p>
          </>
        )}
      </FileUploadZone>

      {selectedFile && (
        <div className="space-y-4">
          {/* <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Selected PDF:</h3>
            <p className="text-sm text-gray-600">{selectedFile.name}</p>
            <p className="text-sm text-gray-500">
              Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Page Range
            </label>
            <input
              type="text"
              value={pageRange}
              onChange={(e) => {
                const value = e.target.value;

                // Allow empty string (so user can clear input)
                if (
                  value === "" ||
                  /^\s*(\d+(-\d*)?)(\s*,\s*(\d+(-\d*)?))*\s*,?\s*$/.test(value)
                ) {
                  setPageRange(value);
                }
              }}
              placeholder="e.g., 1,3,5-8,10"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Specify individual pages (1,3,5) or ranges (5-8)
            </p>
          </div>

          {selectedFile && (
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setResult(null);
                  setJobId(null);
                  setStatus(null);
                  setProgressStage(null);
                  setPageRange("");
                  setProcessingJob(false);
                  cancelUpload();
                }}
                className="text-sm text-white bg-red-600 hover:bg-red-700 px-2 rounded-md"
              >
                Clear
              </button>
            </div>
          )}

          <button
            onClick={splitPdf}
            disabled={!pageRange || processing || uploading || processingJob}
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 disabled:bg-gray-300 transition-colors"
          >
            {processing || uploading || processingJob
              ? "Splitting PDF..."
              : "Split PDF"}
          </button>
        </div>
      )}

      {(uploading || processing || processingJob) && (
        <ProgressBar
          progress={processingJob ? jobProgress : progress}
          label={
            uploading
              ? `Uploading (${speed})`
              : progressStage
              ? progressStage
              : "Splitting"
          }
        />
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
                <span className="text-sm">
                  Page{pdf.range.includes("-") ? "s" : ""} {pdf.range}
                </span>
                <a
                  href={pdf.download_url}
                  download={pdf.filename}
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

export default PdfSplitter;
