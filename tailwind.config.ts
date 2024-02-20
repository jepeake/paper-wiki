import type { Config } from "tailwindcss";
import { darkBackground } from "./blog.config";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                dark: darkBackground || "#f5f2e9",
                gray: "#000000",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
