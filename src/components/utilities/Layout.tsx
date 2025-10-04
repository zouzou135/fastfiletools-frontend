import React from "react";
import { AppShell, Group, Text } from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Tools" },
    { to: "/about", label: "About" },
    { to: "/privacy", label: "Privacy" },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      padding={0}
      className="bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <AppShell.Header className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Group justify="space-between" px="md" h="100%">
          <Text fw={700}>FastFileTools</Text>
          <Group gap="sm">
            {links.map((link) => {
              // 1. Define the active state check for this link
              let isActive = location.pathname === link.to;

              // 2. Special Logic for the "Tools" link
              if (link.to === "/") {
                // Simplified Logic: Highlight Tools if the path doesn't start with any other main link.
                // We assume any path that is not /about or /privacy must belong to a tool.
                isActive =
                  !location.pathname.startsWith("/about") &&
                  !location.pathname.startsWith("/privacy");

                // Note: If you add a /terms page, you MUST exclude that here as well:
                // isActive = !location.pathname.startsWith("/about") && !location.pathname.startsWith("/privacy") && !location.pathname.startsWith("/terms");
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-2 py-1 rounded-lg transition-all duration-200 ${
                    // Use the custom isActive variable
                    isActive
                      ? "bg-blue-600/60 text-white transform"
                      : "text-gray-600 hover:bg-blue-600/10 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <div className="py-8">
          <Outlet />
        </div>
      </AppShell.Main>

      <footer className="text-center pb-4 text-gray-500 text-sm">
        <p>© 2025 FastFileTools</p>
        <Link to="/about" className="text-blue-600 hover:none">
          About Us
        </Link>{" "}
        ·{" "}
        <Link to="/privacy" className="text-blue-600 hover:none">
          Privacy Policy
        </Link>
      </footer>
    </AppShell>
  );
};

export default Layout;
