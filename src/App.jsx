import "./App.css";
import ToolWrapper from "./components/pages/ToolWrapper";
import AboutUs from "./components/pages/AboutUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ImageCompressor from "./components/tools/ImageCompressor";
import ImageTuner from "./components/tools/ImageTuner";
import ImageToPdfConverter from "./components/tools/ImageToPdfConverter";
import PdfMerger from "./components/tools/PdfMerger";
import PdfSplitter from "./components/tools/PdfSplitter";
import PdfToImagesConverter from "./components/tools/PdfToImagesConverter";
import ImagesToJpeg from "./components/tools/ImagesToJpeg";
import ImagesToPng from "./components/tools/ImagesToPng";
import HomeScreen from "./components/pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/utilities/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* TOP-LEVEL WRAPPER: Layout (Header/Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          {/* 1. TOOL WRAPPER (Handles ALL Tool-Related Paths) */}
          <Route element={<ToolWrapper />}>
            {/* The specific tool paths (Children of ToolWrapper) */}
            <Route path="compress-image" element={<ImageCompressor />} />
            <Route path="tune-image" element={<ImageTuner />} />
            <Route path="img-to-pdf" element={<ImageToPdfConverter />} />
            <Route path="merge-pdf" element={<PdfMerger />} />
            <Route path="split-pdf" element={<PdfSplitter />} />
            <Route path="pdf-to-img" element={<PdfToImagesConverter />} />
            <Route path="img-to-jpeg" element={<ImagesToJpeg />} />
            <Route path="img-to-png" element={<ImagesToPng />} />
          </Route>

          {/* 2. STANDALONE PAGES (Also rendered inside the top-level Layout) */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* 3. Catch-all 404 Route */}
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
