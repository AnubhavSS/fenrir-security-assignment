"use client";

import { useEffect } from "react";
import { useStore } from "../store";

/**
 * Theme provider component that synchronizes the application's theme state with the DOM.
 * Listens for changes in the `darkMode` state from the global store and updates the
 * `dark` class on the root HTML element.
 */
export default function ThemeProvider({
  children,
}: {
  /** The child components that will be rendered within the theme context. */
  children: React.ReactNode;
}) {
  /** Current dark mode state from the global store. */
  const darkMode = useStore((state) => state.darkMode);

  /**
   * Effect hook to apply or remove the 'dark' class on the document root
   * whenever the darkMode state changes.
   */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return <>{children}</>;
}