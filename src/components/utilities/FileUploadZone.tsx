import { useRef, useState } from "react";
import { FileUploadZoneProps } from "../../types/types";
import { Upload } from "lucide-react";
import { notifications } from "@mantine/notifications";

const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  onFilesSelected,
  accept,
  multiple = false,
  children,
  hasFiles = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [hasRejectedFiles, setHasRejectedFiles] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.types.includes("Files")) {
      setIsDragOver(true);
    } else {
      e.dataTransfer.dropEffect = "move"; // internal reordering
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const types =
      accept
        ?.split(",")
        .map((type) => type.trim().toLowerCase())
        .filter(Boolean) || [];

    // Separate inclusion and exclusion types
    const inclusionTypes = types.filter((type) => !type.startsWith("!"));
    const exclusionTypes = types
      .filter((type) => type.startsWith("!"))
      .map((type) => type.substring(1));

    const acceptedFiles: File[] = [];
    const rejectedFiles: File[] = [];

    droppedFiles.forEach((file) => {
      const fileType = file.type.toLowerCase();
      const fileName = file.name.toLowerCase();

      // --- Exclusion Check ---
      const isExcluded = exclusionTypes.some((type) => {
        if (type.startsWith(".")) return fileName.endsWith(type);
        if (type.endsWith("/*"))
          return fileType.startsWith(type.split("/")[0] + "/");
        return fileType === type;
      });

      if (isExcluded) {
        rejectedFiles.push(file);
        return; // Skip the inclusion check for excluded files
      }

      const isAccepted = inclusionTypes?.some((type) => {
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

    if (rejectedFiles.length > 0) {
      notifications.show({
        title: "Invalid file type",
        message: `One or more files were rejected because of their type: ${rejectedFiles
          .map((f) => f.name)
          .join(", ")}`,
        color: "red",
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const types =
      accept
        ?.split(",")
        .map((type) => type.trim().toLowerCase())
        .filter(Boolean) || [];

    const inclusionTypes = types.filter((type) => !type.startsWith("!"));
    const exclusionTypes = types
      .filter((type) => type.startsWith("!"))
      .map((type) => type.substring(1));

    const acceptedFiles: File[] = [];
    const rejectedFiles: File[] = [];

    files.forEach((file) => {
      const fileType = file.type.toLowerCase();
      const fileName = file.name.toLowerCase();

      const isExcluded = exclusionTypes.some((type) => {
        if (type.startsWith(".")) return fileName.endsWith(type);
        if (type.endsWith("/*"))
          return fileType.startsWith(type.split("/")[0] + "/");
        return fileType === type;
      });

      if (isExcluded) {
        rejectedFiles.push(file);
        return;
      }

      const isAccepted =
        inclusionTypes.length === 0 ||
        inclusionTypes.some((type) => {
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

    if (rejectedFiles.length > 0) {
      notifications.show({
        title: "Invalid file type",
        message: `One or more files were rejected because of their type: ${rejectedFiles
          .map((f) => f.name)
          .join(", ")}`,
        color: "red",
      });
    }

    // Reset input so same file can be re‑selected
    if (e.target) e.target.value = "";
  };

  const dropZoneClass = `border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
    hasRejectedFiles
      ? "border-red-500 bg-red-50"
      : isDragOver
      ? "border-blue-500 bg-blue-50 scale-105"
      : `border-gray-300 ${
          !hasFiles && "hover:border-gray-400 hover:bg-gray-50"
        }`
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
      {!hasFiles && <Upload className="mx-auto mb-4 text-gray-400" size={48} />}
      {children}
    </div>
  );
};

export default FileUploadZone;
