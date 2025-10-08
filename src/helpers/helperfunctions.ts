import { AxiosRequestConfig } from "axios";

// Helper function to format bytes to human-readable size
export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export function withUploadProgress(
  onProgress?: (percent: number, speed: string) => void,
  signal?: AbortSignal
): AxiosRequestConfig {
  let startTime = Date.now();
  return {
    signal,
    onUploadProgress: (event) => {
      if (event.total) {
        const percent = Math.round((event.loaded * 100) / event.total);

        // elapsed time in seconds
        const elapsed = (Date.now() - startTime) / 1000;

        // bytes per second
        const bytesPerSecond = event.loaded / elapsed;

        onProgress?.(percent, formatSpeed(bytesPerSecond));
      }
    },
  };
}

export function formatSpeed(bytesPerSecond: number): string {
  if (bytesPerSecond >= 1_000_000) {
    // Show MB/s with 2 decimals
    return (bytesPerSecond / 1_000_000).toFixed(2) + " MB/s";
  } else if (bytesPerSecond >= 1000) {
    // Show KB/s as whole numbers
    return Math.round(bytesPerSecond / 1000) + " KB/s";
  } else {
    // Show raw bytes
    return bytesPerSecond + " B/s";
  }
}
