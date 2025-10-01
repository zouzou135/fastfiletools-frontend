import React from "react";
import { AppShell, Group, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
            {links.map((link) => (
              <Link
                to={link.to}
                className={`px-2 py-1 rounded-lg transition-all duration-200 ${
                  location.pathname === link.to
                    ? "bg-blue-600/60 text-white transform"
                    : "text-gray-600 hover:bg-blue-600/10 hover:text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <div className="py-8">{children}</div>
      </AppShell.Main>

      <footer className="text-center pb-4 text-gray-500 text-sm">
        <p>© 2025 FastFileTools</p>
        <a href="/about" className="text-blue-600 hover:none">
          About Us
        </a>{" "}
        ·{" "}
        <a href="/privacy" className="text-blue-600 hover:none">
          Privacy Policy
        </a>
      </footer>
    </AppShell>
  );
};

export default Layout;
