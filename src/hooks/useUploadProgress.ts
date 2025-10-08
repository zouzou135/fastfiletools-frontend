import { useState, useRef } from "react";

export function useUploadProgress({ enableFakeProcessing = true } = {}) {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);
  const fakeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const runWithUploadProgress = async <T>(
    request: (
      onProgress: (percent: number, speed: string) => void,
      signal: AbortSignal
    ) => Promise<T>
  ) => {
    setUploading(true);
    setProcessing(false);
    setProgress(0);
    setSpeed(null);

    controllerRef.current = new AbortController();

    try {
      const result = await request((percent, speed) => {
        setProgress(percent);
        setSpeed(speed);

        // When upload finishes, optionally start fake processing
        if (
          percent === 100 &&
          enableFakeProcessing &&
          !fakeIntervalRef.current
        ) {
          setProcessing(true);
          fakeIntervalRef.current = setInterval(() => {
            setProgress((p) => {
              if (p >= 90) {
                clearInterval(fakeIntervalRef.current!);
                fakeIntervalRef.current = null;
                return 90;
              }
              return p + 10;
            });
          }, 300);
        }
      }, controllerRef.current.signal);

      // Server finished → clear fake interval and jump to 100%
      if (fakeIntervalRef.current) {
        clearInterval(fakeIntervalRef.current);
        fakeIntervalRef.current = null;
      }
      setProgress(100);
      setProcessing(false);

      return result;
    } finally {
      setUploading(false);
    }
  };

  const cancelUpload = () => {
    controllerRef.current?.abort();
    if (fakeIntervalRef.current) {
      clearInterval(fakeIntervalRef.current);
      fakeIntervalRef.current = null;
    }
    setUploading(false);
    setProcessing(false);
    setProgress(0);
    setSpeed(null);
  };

  return {
    progress,
    speed,
    uploading,
    processing,
    runWithUploadProgress,
    cancelUpload,
  };
}
