import { FileText, Scissors, Merge, Zap, Settings, Image } from "lucide-react";

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
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">Image Compressor - Reduce file size without losing quality</h3>
<p class="text-sm text-gray-600 leading-relaxed">Our Image Compressor is designed to shrink large image files while keeping them visually sharp. By adjusting the quality slider, you can find the perfect balance between smaller file size and clear detail. This is especially useful for web developers, bloggers, and everyday users who want faster page loads, smaller email attachments, or reduced storage usage. Unlike many online compressors, FastFileTools processes everything directly in your browser, so your images never leave your device. That means no waiting for uploads, no privacy concerns, and instant results. Whether you’re optimizing product photos for an online store, preparing images for social media, or just cleaning up your photo library, this tool makes the process quick, secure, and hassle-free.</p>
        `,
      },
      {
        id: "tune",
        label: "Image Tuner",
        icon: Settings,
        path: "/tune-image",
        description: "Crop, resize, and convert images with precision.",
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">Image Tuner - Quick edits made simple</h3>
<p class="text-sm text-gray-600 leading-relaxed">The Image Tuner is your lightweight editor for everyday adjustments. You can crop out unwanted areas, resize images to exact dimensions, or convert between formats like JPG, PNG, and WebP. This is perfect for preparing profile pictures, product photos, or presentation graphics without needing heavy desktop software. Because the tool runs entirely in your browser, edits are instant and private. No files are uploaded to external servers, so you stay in control of your data. Whether you’re a designer making quick tweaks, a student preparing slides, or just someone who wants to resize a picture for social media, the Image Tuner gives you the flexibility you need in a clean, easy-to-use interface.</p>
        `,
      },
      {
        id: "img-to-pdf",
        label: "Images to PDF",
        icon: FileText,
        path: "/img-to-pdf",
        description: "Convert multiple images into a single PDF document.",
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">Images to PDF - Combine images into one document</h3>
<p class="text-sm text-gray-600 leading-relaxed">Turn a collection of images into a single, shareable PDF in seconds. This tool is ideal for scanned documents, receipts, homework submissions, or photo albums. Simply upload your images, reorder them as needed, and generate a polished PDF instantly. Because the conversion happens locally in your browser, your files remain private and secure. No signup, no watermarks, and no hidden limits. The resulting PDF is lightweight, easy to share, and works across all devices. Whether you're a student, professional, or casual user, this tool saves you time and makes organizing images effortless.</p>
        `,
      },
      {
        id: "img-to-jpeg",
        label: "Images To JPEG Converter",
        icon: Image,
        path: "/img-to-jpeg",
        description: "Convert various image formats to JPEG.",
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">Images to JPEG - Universal compatibility</h3>
<p class="text-sm text-gray-600 leading-relaxed">JPEG is the most widely supported image format, making it perfect for sharing and uploading. This converter lets you transform PNG, GIF, BMP, or WebP files into high-quality JPEGs instantly. It's especially useful when you need smaller file sizes or guaranteed compatibility with websites, apps, and email platforms. The process is fast, secure, and happens entirely in your browser. Whether you're preparing images for a blog, compressing photos for storage, or ensuring compatibility for online forms, this tool makes the conversion seamless.</p>
        `,
      },
      {
        id: "img-to-png",
        label: "Images To PNG Converter",
        icon: Image,
        path: "/img-to-png",
        description: "Convert various image formats to PNG.",
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">Images to PNG - Crisp graphics with transparency</h3>
<p class="text-sm text-gray-600 leading-relaxed">PNG is the go-to format for logos, icons, and design assets because it supports transparency and lossless quality. This converter allows you to transform JPG, GIF, BMP, or WebP files into clean PNGs instantly. It's perfect for designers, developers, and anyone who needs sharp graphics with transparent backgrounds. The conversion is quick, private, and requires no signup. Whether you're preparing assets for a website, editing a presentation, or just cleaning up your image library, this tool ensures your files are ready to use anywhere.</p>
        `,
      },
    ],
  },
  {
    label: "PDF Tools",
    tools: [
      {
        id: "pdf-to-img",
        label: "PDF To Images Converter",
        icon: Image,
        path: "/pdf-to-img",
        description: "Extract pages from a PDF and convert them to images.",
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">PDF to Images - Extract pages as high-quality images</h3>
<p class="text-sm text-gray-600 leading-relaxed">This tool converts each page of your PDF into a separate image (JPG or PNG). It's useful for sharing slides, posting documents online, or extracting graphics from reports. You can download all pages at once or just the ones you need. Everything is processed securely in your browser, so your files remain private. Whether you're a student sharing notes, a professional preparing slides, or just someone who needs a quick image from a PDF, this tool makes it simple and fast.</p>
        `,
      },
      {
        id: "split-pdf",
        label: "Split PDF",
        icon: Scissors,
        path: "/split-pdf",
        description: "Extract specific pages or ranges from a PDF file.",
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">Split PDF - Extract only what you need</h3>
<p class="text-sm text-gray-600 leading-relaxed">Split a large PDF into smaller, more manageable files. You can select individual pages or define ranges (e.g., pages 5-10) and download them as a new PDF. This is ideal for sharing only the relevant sections of a document without exposing the entire file. The process is quick, private, and requires no signup. Whether you're working with contracts, reports, or e-books, this tool helps you stay organized and efficient.</p>
        `,
      },
      {
        id: "merge-pdf",
        label: "Merge PDFs",
        icon: Merge,
        path: "/merge-pdf",
        description: "Combine multiple PDFs into one unified document.",
        longDescription: `
<h3 class="text-lg font-bold text-gray-800 mb-2">Merge PDFs - Combine multiple files into one</h3>
<p class="text-sm text-gray-600 leading-relaxed">Upload two or more PDF files and merge them into a single, unified document. Perfect for combining reports, contracts, or scanned pages into one file. You can reorder files before merging, and the process is fast, private, and requires no signup. The resulting PDF is clean, lightweight, and ready to share. Whether you're a student compiling notes, a professional preparing documents, or just someone organizing files, this tool saves you time and effort.</p>
        `,
      },
    ],
  },
];

export const toolPaths = toolCategories.flatMap((cat) =>
  cat.tools.map((tool) => tool.path)
);
