import { Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";

type FileItemProps = {
  file: File;
  index: number;
  lastIndex: number;
  onRemove: (index: number) => void;
  onMove?: (from: number, to: number) => void;
};

const FileItem = ({
  file,
  index,
  lastIndex,
  onRemove,
  onMove,
}: FileItemProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const generatePreview = async () => {
      const fileType = file.type;

      if (fileType.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        if (!cancelled) {
          setPreviewUrl(imageUrl);
        }
      } else if (fileType === "application/pdf") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        if (!cancelled) {
          setPreviewUrl(canvas.toDataURL());
        }
      } else {
        setPreviewUrl(null);
      }
    };

    generatePreview();

    return () => {
      cancelled = true;
      if (file.type.startsWith("image/")) {
        URL.revokeObjectURL(previewUrl || "");
      }
    };
  }, [file]);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
  }, []);

  return (
    <div
      className="relative flex flex-col items-center bg-gray-100 rounded w-28 shadow"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Circle X button */}
      <button
        data-no-dnd
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onRemove(index);
        }}
        className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center 
               rounded-full bg-red-500/70 text-white text-sm font-bold 
               hover:bg-red-600 shadow"
      >
        ✕
      </button>

      {/* Preview */}
      <div className="w-28 h-28 bg-gray-200 flex items-center justify-center overflow-hidden rounded-tl rounded-tr">
        {(file.type.startsWith("image/") || file.type === "application/pdf") &&
          previewUrl && (
            <img
              src={previewUrl}
              alt={file.name}
              className="object-contain w-full h-full"
              draggable={false}
            />
          )}
      </div>

      <div className="relative flex flex-col items-center w-28 px-2 py-1">
        {/* File info */}
        <Tooltip label={file.name}>
          <p className="text-xs text-center truncate w-full">{file.name}</p>
        </Tooltip>

        <p className="text-[10px] text-gray-500">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>

        {/* Arrows */}
        {onMove && (
          <div className="flex gap-5 mt-1">
            <button
              data-no-dnd
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onMove(index, index - 1);
              }}
              disabled={index === 0}
              className="rounded-full w-6 h-6 text-lg text-gray-600 hover:bg-gray-200 
                   disabled:text-gray-300 disabled:hover:bg-transparent flex items-center
                    justify-center leading-none"
            >
              <span className="text-lg font-mono">{"<"}</span>
            </button>
            <button
              data-no-dnd
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onMove(index, index + 1);
              }}
              disabled={index === lastIndex}
              className="rounded-full w-6 h-6 text-lg text-gray-600 hover:bg-gray-200 
                   disabled:text-gray-300 disabled:hover:bg-transparent flex items-center
                    justify-center leading-none"
            >
              <span className="text-lg font-mono">{">"}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileItem;
