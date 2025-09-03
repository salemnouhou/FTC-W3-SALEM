/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";


const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        primary:
        {
          DEFAULT: "#003459",
          dark40: "#0078CD",
          dark60: "#00528C",
          dark80: "#002A48",

        },
        secondary: {
          DEFAULT: "#F7DBA7",
          yellow40: "#FCEED5",
          yellow60: "#F1D092",
          yellow80: "#EEC77E",
        },
        state: {
          red: "#FF564F",
          green: "#34C759",
          orange: "#FF912C",
          blue: "#00A7E7",
        },
        neutral : {
          DEFAULT : "#FDFDFD",
          10 : "#EBEEEF",
          20 : "#CCD1D2",
          40 : "#99A2A5",
          60 : "#667479",
          80 : "#242B33",
          100 : "#00171F",

        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const types = ["body", "heading"];
      const weights = {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      };
      const sizes = [8, 10, 12, 14, 16, 20, 24, 28, 36, 46, 60];

      const utilities = {};

      types.forEach((type) => {
        Object.entries(weights).forEach(([weightName, weightValue]) => {
          sizes.forEach((size) => {
            utilities[`.text-${type}-${weightName}-${size}`] = {
              "font-size": `${size}px`,
              "font-weight": weightValue,
              "line-height": "1.3",
            };
          });
        });
      });

      addUtilities(utilities);
    }),
  ],
};

export default tailwindConfig;
