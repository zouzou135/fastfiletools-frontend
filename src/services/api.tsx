import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL + "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const imageService = {
  compress: (file: File, quality = 80) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("quality", quality.toString());
    return api.post("/image/compress", formData);
  },

  tune: (file: File, options: Record<string, string | number> = {}) => {
    const formData = new FormData();
    formData.append("image", file);
    Object.keys(options).forEach((key) => {
      formData.append(key, options[key].toString());
    });
    return api.post("/image/tune", formData);
  },

  convertToPdf: (files: File[]) => {
    const formData = new FormData();
    files.forEach((file: File, index) => {
      formData.append(`images[${index}]`, file);
    });
    return api.post("/image/convert-to-pdf", formData);
  },
};

export const pdfService = {
  split: (file: File, pages: string) => {
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("pages", pages);
    return api.post("/pdf/split", formData);
  },

  merge: (files: File[]) => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`pdfs[${index}]`, file);
    });
    return api.post("/pdf/merge", formData);
  },
};
