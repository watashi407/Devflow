"use client";
import {
  ThemeProviderProps,
  ThemeProvider as NextThemeProviders,
} from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeProviders {...props}>{children}</NextThemeProviders>;
};

export default ThemeProvider;
