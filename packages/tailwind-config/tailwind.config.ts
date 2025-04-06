import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F3FDFB",
          200: "#C6F7EC",
          300: "#8CEFD9",
          400: "#54E7C7",
          500: "#1ADFB4",
        },

        gray: {
          100: "#F2F4F6",
          200: "#E3E3E3",
          300: "#BFBFBF",
          400: "#9E9E9E",
          500: "#787878",
          600: "#5A5A5A",
        },

        sub: {
          yellow: "#FFF176",
          blue: "#4572FF",
          red: "#FF3B30",
        },

        black: "#04201A",
        white: "#FFFFFF",
      },
      fontSize: {
        h1: ["32px", { lineHeight: "130%", fontWeight: 700 }],
        h2: ["28px", { lineHeight: "130%", fontWeight: 600 }],
        h3: ["24px", { lineHeight: "140%", fontWeight: 600 }],
        h4: ["24px", { lineHeight: "140%", fontWeight: 500 }],
        h5: ["20px", { lineHeight: "150%", fontWeight: 600 }],

        p1: ["20px", { lineHeight: "150%", fontWeight: 400 }],
        p2: ["18px", { lineHeight: "150%", fontWeight: 600 }],
        p3: ["18px", { lineHeight: "150%", fontWeight: 400 }],
        p4: ["16px", { lineHeight: "160%", fontWeight: 500 }],
        p5: ["16px", { lineHeight: "150%", fontWeight: 400 }],

        btn1: ["14px", { lineHeight: "160%", fontWeight: 500 }],

        caption1: ["14px", { lineHeight: "150%", fontWeight: 400 }],
        caption2: ["12px", { lineHeight: "140%", fontWeight: 400 }],
      },

      boxShadow: {
        custom: "0px 1px 4px 0px rgba(197, 197, 197, 0.30)",
      },
    },

    gray: {
      100: "#F2F4F6",
      200: "#E3E3E3",
      300: "#BFBFBF",
      400: "#9E9E9E",
      500: "#787878",
      600: "#5A5A5A",
    },

    sub: {
      yellow: "#FFF176",
      blue: "#4572FF",
      red: "#FF3B30",
    },

    black: "#04201A",
    white: "#FFFFFF",
  },
  fontSize: {
    h1: ["32px", { lineHeight: "130%", fontWeight: 700 }],
    h2: ["28px", { lineHeight: "130%", fontWeight: 600 }],
    h3: ["24px", { lineHeight: "140%", fontWeight: 600 }],
    h4: ["24px", { lineHeight: "140%", fontWeight: 500 }],
    h5: ["20px", { lineHeight: "150%", fontWeight: 600 }],

    p1: ["20px", { lineHeight: "150%", fontWeight: 400 }],
    p2: ["18px", { lineHeight: "150%", fontWeight: 600 }],
    p3: ["18px", { lineHeight: "150%", fontWeight: 400 }],
    p4: ["16px", { lineHeight: "160%", fontWeight: 500 }],
    p5: ["16px", { lineHeight: "150%", fontWeight: 400 }],

    btn1: ["14px", { lineHeight: "160%", fontWeight: 500 }],

    caption1: ["14px", { lineHeight: "150%", fontWeight: 400 }],
    caption2: ["12px", { lineHeight: "140%", fontWeight: 400 }],
  },
  zIndex: {
    header: 5,
    dropdown: 1,
    sidebar: 0,
    input: 0,
  },

  plugins: [],
};

export default config;
