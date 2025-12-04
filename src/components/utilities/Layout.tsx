// components/Layout.tsx
import { AppShell, Burger, Group, Text, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet, useLocation } from "react-router-dom";
import ToolList from "./ToolList";
import { toolPaths } from "../../helpers/toolsData";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import ConsentBanner from "./ConsentBanner";

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  const isToolPage = toolPaths.includes(location.pathname);
  const isHome = location.pathname === "/";
  const isMetaPage = !isToolPage && !isHome;

  return (
    <AppShell
      padding={0}
      header={{ height: 60 }}
      navbar={
        isToolPage
          ? {
              width: 280,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }
          : undefined
      }
      className="bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* {isToolPage && (
        <Helmet>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9323073702818036"
            crossOrigin="anonymous"
          ></script>
        </Helmet>
      )} */}

      {/* Header */}
      <AppShell.Header className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Group justify="space-between" px="md" h="100%">
          <Link to="/">
            <Text fw={700}>FastFileTools</Text>
          </Link>

          {isToolPage && (
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label={
                opened ? "Close navigation menu" : "Open navigation menu"
              }
            />
          )}

          {isMetaPage && (
            <Link
              to="/"
              className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium"
            >
              ← Back to Tools
            </Link>
          )}
        </Group>
      </AppShell.Header>

      {/* Sidebar only on tool pages */}
      {isToolPage && (
        <AppShell.Navbar className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <ScrollArea style={{ height: "100%" }}>
            <ToolList onNavigate={toggle} />
          </ScrollArea>
        </AppShell.Navbar>
      )}

      {/* Main content */}
      <AppShell.Main>
        <div className="py-8">
          <Outlet />
        </div>
        {/* Footer always present */}
        <footer className="text-center pb-4 text-gray-500 text-sm">
          <p>© 2025 FastFileTools</p>
          <Link to="/about" className="text-blue-600 hover:underline">
            About Us
          </Link>{" "}
          ·{" "}
          <Link to="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </footer>
        <ConsentBanner />
      </AppShell.Main>
    </AppShell>
  );
}
