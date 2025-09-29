import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const imageService = {
  compress: (file, quality = 80) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("quality", quality);
    return api.post("/image/compress", formData);
  },

  enhance: (file, options = {}) => {
    const formData = new FormData();
    formData.append("image", file);
    Object.keys(options).forEach((key) => {
      formData.append(key, options[key]);
    });
    return api.post("/image/enhance", formData);
  },

  convertToPdf: (files) => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });
    return api.post("/image/convert-to-pdf", formData);
  },
};

export const pdfService = {
  split: (file, pages) => {
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("pages", pages);
    return api.post("/pdf/split", formData);
  },

  merge: (files) => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`pdfs[${index}]`, file);
    });
    return api.post("/pdf/merge", formData);
  },
};
