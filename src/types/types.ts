// Define the types/interfaces here and export them
export interface MockApiData {
  success: boolean;
  url: string;
  filename: string;
  original_size: number;
  compressed_size: number;
}

export interface FileUploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  accept: string;
  multiple?: boolean;
  children: React.ReactNode;
  hasFiles: boolean;
}

export interface ProgressBarProps {
  progress: number;
  label: string;
}

export interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
  component: React.FC;
}

export interface BaseFileResult {
  success: boolean;
  filename: string;
  download_url: string;
  url?: string;
  expires_at?: string;
}

export interface BaseJobFileResult {
  filename: string;
  download_url: string;
  url?: string;
  expires_at?: string;
}

export interface CompressedImageResult extends BaseFileResult {
  original_size: number;
  compressed_size: number;
}

export interface SplitPdfOB extends BaseJobFileResult {
  range: string;
}

export interface SplitPdfResult {
  split_pdfs: SplitPdfOB[];
  zip: BaseJobFileResult;
}

export interface FileJobResponse {
  status: "pending" | "processing" | "completed" | "failed";
  progress_stage: string | null;
  result: SplitPdfResult | BaseJobFileResult | null;
}
