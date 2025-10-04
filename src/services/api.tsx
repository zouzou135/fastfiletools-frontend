import axios from "axios";
import { notifications } from "@mantine/notifications";

const API_BASE_URL = import.meta.env.VITE_BASE_URL + "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Global error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 422) {
      notifications.show({
        title: "Validation error",
        message: error.response.data.message || "Invalid request.",
        color: "red",
      });
    } else if (error.response?.status === 500) {
      notifications.show({
        title: "Server error",
        message: "Something went wrong on the server. Please try again later.",
        color: "red",
      });
    } else {
      notifications.show({
        title: "Network error",
        message: "Could not connect to the server. Check your connection.",
        color: "red",
      });
    }

    return Promise.reject(error); // still reject so caller can handle if needed
  }
);

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
