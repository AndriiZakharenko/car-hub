import type { Config } from "tailwindcss";
import { contentPaths } from "./constants/styles/content";
import { colors } from "./constants/styles/colors";
import { fontFamily } from "./constants/styles/fonts";
import { backgroundImage } from "./constants/styles/backgrounds";

const config: Config = {
  content: contentPaths,
  theme: {
    extend: {
      fontFamily,
      colors,
      backgroundImage,
    },
  },
  plugins: [],
};

export default config;
