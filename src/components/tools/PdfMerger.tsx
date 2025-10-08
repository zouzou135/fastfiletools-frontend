import { Download, Merge } from "lucide-react";
import FileUploadZone from "../utilities/FileUploadZone";
import { useEffect, useState } from "react";
import { BaseJobFileResult, FileJobResponse } from "../../types/types";
import { pdfService } from "../../services/api";
import ToolWrapper from "../pages/ToolWrapper";
import ProgressBar from "../utilities/ProgressBar";
import { Helmet } from "react-helmet-async";
import FileList from "../utilities/FileList";
import { useUploadProgress } from "../../hooks/useUploadProgress";

const PdfMerger = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [processingJob, setProcessingJob] = useState(false);
  const [result, setResult] = useState<BaseJobFileResult | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [progressStage, setProgressStage] = useState<string | null>(null);
  const stageMap: Record<string, number> = {
    queued: 10,
    uploaded: 20,
    normalizing: 40,
    merging: 70,
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
    setSelectedFiles((prev) => [...prev, ...files]);
    setResult(null);
  };

  const mergePdfs = async () => {
    if (selectedFiles.length < 2) return;

    try {
      const response = await runWithUploadProgress((onProgress, signal) =>
        pdfService.merge(selectedFiles, onProgress, signal)
      );
      // Now returns { job_id }
      setJobId(response.data.job_id);
      setStatus("pending");
      setProgressStage("queued");
    } catch (error) {
      console.error("Merge failed:", error);
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
            setResult(fileJobResponse.result as BaseJobFileResult);
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
        <Merge className="text-indigo-600" />
        PDF Merger
      </h2>

      <FileUploadZone
        onFilesSelected={handleFileSelect}
        accept=".pdf"
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
              Drop multiple PDFs here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Combine multiple PDFs into one document
            </p>{" "}
          </>
        )}
      </FileUploadZone>

      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">
            Selected PDFs ({selectedFiles.length})
          </h3>
          {/* <div className="space-y-2 max-h-60 overflow-y-auto">
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
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div> */}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong>{" "}
              {
                "Use the < > arrows or drag to reorder PDFs. The final merged PDF will follow this order."
              }
            </p>
          </div>

          {selectedFiles.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedFiles([]);
                  setResult(null);
                  setJobId(null);
                  setStatus(null);
                  setProgressStage(null);
                  cancelUpload();
                }}
                className="text-sm text-white bg-red-600 hover:bg-red-700 px-2 rounded-md"
              >
                Clear All
              </button>
            </div>
          )}

          <button
            onClick={mergePdfs}
            disabled={
              selectedFiles.length < 2 ||
              processing ||
              uploading ||
              processingJob
            }
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 transition-colors"
          >
            {processing || uploading || processingJob
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

      {(uploading || processingJob || processing) && (
        <ProgressBar
          progress={processingJob ? jobProgress : progress}
          label={
            uploading
              ? `Uploading (${speed})`
              : progressStage
              ? progressStage
              : "Merging"
          }
        />
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
