import { FileText, Scissors, Merge, Zap, Settings } from "lucide-react";

export const toolCategories = [
  {
    label: "Image Tools",
    tools: [
      {
        id: "compress",
        label: "Image Compressor",
        icon: Zap,
        path: "/compress-image",
        description:
          "Compress and optimize JPEG, PNG, and GIF images instantly.",
      },
      {
        id: "tune",
        label: "Image Tuner",
        icon: Settings,
        path: "/tune-image",
        description: "Crop, resize, and convert images with precision.",
      },
      {
        id: "img-to-pdf",
        label: "Images to PDF",
        icon: FileText,
        path: "/img-to-pdf",
        description: "Convert multiple images into a single PDF document.",
      },
    ],
  },
  {
    label: "PDF Tools",
    tools: [
      {
        id: "split-pdf",
        label: "Split PDF",
        icon: Scissors,
        path: "/split-pdf",
        description: "Extract specific pages or ranges from a PDF file.",
      },
      {
        id: "merge-pdf",
        label: "Merge PDFs",
        icon: Merge,
        path: "/merge-pdf",
        description: "Combine multiple PDFs into one unified document.",
      },
    ],
  },
];

export const toolPaths = toolCategories.flatMap((cat) =>
  cat.tools.map((tool) => tool.path)
);
