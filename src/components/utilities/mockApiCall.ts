import { MockApiData } from "../../types/types";

// Mock API service (replace with actual API calls)
const mockApiCall = (delay = 2000): Promise<{ data: MockApiData }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          success: true,
          url: "https://via.placeholder.com/400x300.jpg",
          filename: "processed_file.jpg",
          original_size: 1024000,
          compressed_size: 512000,
        },
      });
    }, delay);
  });
};

export default mockApiCall;
