import React, { useState, useRef, DragEvent } from "react";
import {
  Upload,
  Download,
  Image as ImageIcon,
  FileText,
  Scissors,
  Merge,
  Zap,
  Settings,
} from "lucide-react";
import {
  FileUploadZoneProps,
  MockApiData,
  ProgressBarProps,
  SplitPdfResult,
} from "../types/types";
import ImageCompressor from "./tools/ImageCompressor";
import ImageToPdfConverter from "./tools/ImageToPdfConverter";
import ImageEnhancer from "./tools/ImageEnhancer";
import PdfSplitter from "./tools/PdfSplitter";
import PdfMerger from "./tools/PdfMerger";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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
      id: "enhance",
      label: "Image Enhancer",
      icon: Settings,
      component: ImageEnhancer,
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

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true); // Desktop sidebar is open by default
  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  const theme = useMantineTheme();

  // Navigation links for the sidebar
  const navLinks = tabs.map((tab) => {
    const Icon = tab.icon;
    return (
      <NavLink
        key={tab.id}
        label={tab.label}
        leftSection={<Icon size={20} />}
        active={activeTab === tab.id}
        onClick={() => {
          setActiveTab(tab.id);
          toggleMobile(); // Close the menu on mobile after selection
        }}
      />
    );
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "lg", // Breakpoint for desktop/mobile transition
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      {/* 1. Header (Always visible) */}
      <AppShell.Header>
        <Group h="100%" px="md">
          {/* Burger icon is only visible on mobile */}
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="lg"
            size="sm"
          />
          <Title order={3}>FastFileTools</Title>
        </Group>
      </AppShell.Header>

      {/* 2. Navigation (Sidebar/Drawer) */}
      <AppShell.Navbar p="md">
        <Title order={5} mb="sm" visibleFrom="lg">
          Tools
        </Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing.xs,
          }}
        >
          {navLinks}
        </div>
      </AppShell.Navbar>

      {/* 3. Main Content Area */}
      <AppShell.Main>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default ImageToolsApp;
