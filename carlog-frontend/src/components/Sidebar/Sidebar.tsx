import React, { useEffect, useRef } from "react";
import { useSidebar } from "./SidebarContext";
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle";

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Click outside to close on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (window.innerWidth < 640 && isOpen) {
          toggle();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggle]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 dark:bg-gray-800 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {/* Repeat for other sidebar items as needed */}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025A1 1 0 0 0 8.934 3.027a8.5 8.5 0 1 0 9.039 9.039A1 1 0 0 0 16.975 11Z" />
                <path d="M12.5 0a.96.96 0 0 0-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025A1 1 0 0 0 8.934 3.027a8.5 8.5 0 1 0 9.039 9.039A1 1 0 0 0 16.975 11Z" />
                <path d="M12.5 0a.96.96 0 0 0-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Cars</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025A1 1 0 0 0 8.934 3.027a8.5 8.5 0 1 0 9.039 9.039A1 1 0 0 0 16.975 11Z" />
                <path d="M12.5 0a.96.96 0 0 0-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Logs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025A1 1 0 0 0 8.934 3.027a8.5 8.5 0 1 0 9.039 9.039A1 1 0 0 0 16.975 11Z" />
                <path d="M12.5 0a.96.96 0 0 0-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025A1 1 0 0 0 8.934 3.027a8.5 8.5 0 1 0 9.039 9.039A1 1 0 0 0 16.975 11Z" />
                <path d="M12.5 0a.96.96 0 0 0-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Settings</span>
            </a>
          </li>
        </ul>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <DarkModeToggle />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
