import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--card-border))",
        input: "hsl(var(--card-border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--text-primary-foreground))",
        title: "hsl(var(--heading-foreground))",
        primary: {
          DEFAULT: "hsl(var(--button-background))",
          foreground: "hsl(var(--button-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--accent-2-background))",
          foreground: "hsl(var(--accent-2-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--subtitle-foreground))",
          foreground: "hsl(var(--text-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent-light-background))",
          foreground: "hsl(var(--text-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--background-2))",
          foreground: "hsl(var(--text-primary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card-background))",
          foreground: "hsl(var(--card-title-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        heading: ["var(--font-poppins)", ...fontFamily.sans],
        body: ["var(--font-poppins)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate"), import("tailwindcss-animate")],
};
