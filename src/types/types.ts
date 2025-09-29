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
}

export interface ProgressBarProps {
  progress: number;
  label: string;
}

export interface SplitPdfResult extends MockApiData {
  split_pdfs: { page: number; filename: string; url: string }[];
}

export interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
  component: React.FC;
}
