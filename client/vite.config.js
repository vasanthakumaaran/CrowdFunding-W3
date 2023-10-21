import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/CrowdFunding-W3/",
  define: {
    global: "globalThis",
    "process.env": {},
  },
});