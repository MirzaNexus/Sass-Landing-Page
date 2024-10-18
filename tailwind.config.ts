import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function (helpers: PluginAPI) {
      const { addUtilities } = helpers;
      addUtilities({
        ".scrollbar-hide": {
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".blur": {
          "backdrop-filter": "blur(2px)",
          "&::-webkit-backdrop-filter": "blur(2px)",
        },
        ".baseColor": {
          "background-color": "#EAEEFE",
        },
      });
    },
  ],
};
export default config;
