import { useState } from "react";
import { FileText, Scissors, Merge, Zap, Settings } from "lucide-react";
import ImageCompressor from "../tools/ImageCompressor";
import ImageToPdfConverter from "../tools/ImageToPdfConverter";
import PdfSplitter from "../tools/PdfSplitter";
import PdfMerger from "../tools/PdfMerger";
import ImageTuner from "../tools/ImageTuner";
import Layout from "../utilities/Layout";

const ImageToolsApp = () => {
  const [activeTab, setActiveTab] = useState("compress");

  const tabs = [
    {
      id: "compress",
      label: "Image Compressor",
      icon: Zap,
      component: ImageCompressor,
    },
    {
      id: "tune",
      label: "Image Tuner",
      icon: Settings,
      component: ImageTuner,
    },
    {
      id: "img-to-pdf",
      label: "Images to PDF",
      icon: FileText,
      component: ImageToPdfConverter,
    },
    {
      id: "split-pdf",
      label: "Split PDF",
      icon: Scissors,
      component: PdfSplitter,
    },
    { id: "merge-pdf", label: "Merge PDFs", icon: Merge, component: PdfMerger },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              FastFileTools
            </h1>
            {/* <Image
            className="mb-2 mx-auto h-20 sm:h-40 md:h-30 lg:h-34"
            src={fastFileToolsLogo}
            fit="contain"
          /> */}
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 shadow-sm"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {ActiveComponent && <ActiveComponent />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImageToolsApp;
