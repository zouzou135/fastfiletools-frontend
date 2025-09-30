import { useRef, useState } from "react";
import { FileUploadZoneProps } from "../../types/types";
import { Upload } from "lucide-react";
import { Alert } from "@mantine/core";

const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  onFilesSelected,
  accept,
  multiple = false,
  children,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [hasRejectedFiles, setHasRejectedFiles] = useState(false);

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

    const droppedFiles = Array.from(e.dataTransfer.files);
    const acceptedTypes = accept
      ?.split(",")
      .map((type) => type.trim().toLowerCase());

    const acceptedFiles: File[] = [];
    const rejectedFiles: File[] = [];

    droppedFiles.forEach((file) => {
      const fileType = file.type.toLowerCase();
      const fileName = file.name.toLowerCase();

      const isAccepted = acceptedTypes?.some((type) => {
        if (type.startsWith(".")) return fileName.endsWith(type);
        if (type.endsWith("/*"))
          return fileType.startsWith(type.split("/")[0] + "/");
        return fileType === type;
      });

      if (isAccepted) acceptedFiles.push(file);
      else rejectedFiles.push(file);
    });

    setHasRejectedFiles(rejectedFiles.length > 0);
    onFilesSelected(acceptedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onFilesSelected(files);
  };

  const dropZoneClass = `border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
    hasRejectedFiles
      ? "border-red-500 bg-red-50"
      : isDragOver
      ? "border-blue-500 bg-blue-50 scale-105"
      : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
  }`;

  return (
    <div
      className={dropZoneClass}
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

export default FileUploadZone;
