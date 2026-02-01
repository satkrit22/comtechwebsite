import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-light": "var(--color-surface-light)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        base: "var(--transition-base)",
        slow: "var(--transition-slow)",
      },
      animation: {
        "fade-in-up": "fadeInUp var(--transition-base) ease-out forwards",
        "fade-in-down": "fadeInDown var(--transition-base) ease-out forwards",
        "fade-in-left": "fadeInLeft var(--transition-base) ease-out forwards",
        "fade-in-right":
          "fadeInRight var(--transition-base) ease-out forwards",
        "scale-in": "scaleIn var(--transition-base) ease-out forwards",
        "slide-in-up": "slideInUp var(--transition-slow) ease-out forwards",
        "slide-in-down":
          "slideInDown var(--transition-slow) ease-out forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
