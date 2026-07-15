/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#50C878",
        "surface-dim": "#131313",
        "background": "#131313",
        "on-surface-variant": "#b9cacb",
        "on-secondary-fixed": "#022100",
        "on-primary-fixed": "#002011",
        "inverse-on-surface": "#313030",
        "on-tertiary-container": "#606060",
        "on-tertiary-fixed": "#1b1c1c",
        "primary-fixed-dim": "#45b068",
        "on-primary-container": "#00391c",
        "error-container": "#93000a",
        "on-secondary-container": "#0f6d00",
        "primary-fixed": "#9effc1",
        "on-secondary": "#053900",
        "primary": "#e1ffed",
        "on-surface": "#e5e2e1",
        "on-secondary-fixed-variant": "#095300",
        "on-error-container": "#ffdad6",
        "surface-container": "#201f1f",
        "secondary-container": "#2ff801",
        "on-error": "#690005",
        "error": "#ffb4ab",
        "on-tertiary-fixed-variant": "#464747",
        "surface-container-highest": "#353534",
        "secondary": "#d7ffc5",
        "surface-container-high": "#2a2a2a",
        "surface-bright": "#3a3939",
        "on-tertiary": "#303031",
        "surface-container-low": "#1c1b1b",
        "surface-container-lowest": "#0e0e0e",
        "inverse-surface": "#e5e2e1",
        "surface-tint": "#50C878",
        "tertiary": "#f9f7f7",
        "inverse-primary": "#006d3e",
        "tertiary-fixed-dim": "#c7c6c6",
        "on-primary-fixed-variant": "#00522e",
        "secondary-fixed": "#79ff5b",
        "outline-variant": "#3a494b",
        "on-background": "#e5e2e1",
        "tertiary-fixed": "#e4e2e2",
        "secondary-fixed-dim": "#2ae500",
        "surface-variant": "#353534",
        "surface": "#131313",
        "tertiary-container": "#dcdbdb",
        "on-primary": "#00391c",
        "outline": "#849495"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "section-gap-mobile": "64px",
        "section-gap-desktop": "120px",
        "base": "8px",
        "container-max": "1280px"
      },
      fontFamily: {
        "label-sm": ["Geist", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"],
        "display-xl": ["Sora", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Sora", "sans-serif"]
      },
      fontSize: {
        "label-sm": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-xl": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "body-md": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }]
      }
    },
  },
  plugins: [],
}
