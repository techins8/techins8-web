import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            a: {
              color: "#3b82f6",
              "&:hover": {
                color: "#2563eb",
              },
            },
            h1: {
              fontWeight: "700",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h2: {
              fontWeight: "700",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              fontWeight: "600",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            h4: {
              fontWeight: "600",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            p: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            ul: {
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            },
            ol: {
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.125rem 0.25rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "#f3f4f6",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
            blockquote: {
              borderLeftWidth: "4px",
              borderLeftColor: "#3b82f6",
              paddingLeft: "1rem",
              fontStyle: "italic",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            },
            table: {
              width: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            },
            thead: {
              borderBottomWidth: "1px",
            },
            th: {
              backgroundColor: "#f3f4f6",
              padding: "0.75rem",
              textAlign: "left",
            },
            td: {
              padding: "0.75rem",
              borderWidth: "1px",
              borderColor: "#e5e7eb",
            },
            img: {
              borderRadius: "0.5rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            },
            strong: {
              fontWeight: "600",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
