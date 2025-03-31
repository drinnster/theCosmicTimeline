import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepspaceblue: "#0D1B2A",
        nebulapurple: "#5A189A",
        galacticteal: "#1B4965",
        stellargold: "#FFD700",
        eclipsegray: "#495867",
        supernovawhite: "#F8F9FA",
        meteororange: "#FF6D00",
        darkmatterblack: "#121212",
      },
    },
  },
  plugins: [],
}

export default config