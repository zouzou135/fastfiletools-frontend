// PdfThumbnail.tsx
import { useEffect } from "react";
import { pdfjs } from "react-pdf";

type PdfThumbnailProps = {
  file: File;
  onReady: (url: string) => void;
};

const PdfThumbnail = ({ file, onReady }: PdfThumbnailProps) => {
  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      const buffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buffer }).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 0.5 }); // smaller scale for thumbnail
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;

      if (!cancelled) {
        onReady(canvas.toDataURL("image/png"));
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [file]);

  return null;
};

export default PdfThumbnail;
