import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'100': '#FFF1E6',
  				'500': '#FF7000',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			dark: {
  				'100': '#000000',
  				'200': '#0F1117',
  				'300': '#151821',
  				'400': '#212734',
  				'500': '#3F4354',
  				'custom-gradient': 'linear-gradient(90deg, #171C2368, #13161CB2)'
  			},
  			light: {
  				'400': '#858EAD',
  				'500': '#7B8EC8',
  				'700': '#DCE3F1',
  				'800': '#F4F6F8',
  				'850': '#FDFDFD',
  				'900': '#FFFFFF'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {},
  		screens: {
  			xs: '26.25rem',
  			sm: '40rem',
  			md: '48rem',
  			lg: '64rem',
  			xl: '80rem',
  			'2xl': '96rem',
  			mobile: '26.25rem',
  			tablet: '40rem',
  			laptop: '64rem',
  			desktop: '80rem'
  		},
  		borderRadius: {
  			'2': '0.5rem',
  			'1.5': '0.375rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'light-100': '0px 0.75rem 1.25rem 0px rgba(184, 184, 184, 0.03), " +\n          "0px 0.375rem 0.75rem 0px rgba(184, 184, 184, 0.02), " +\n          "0px 0.125rem 0.25rem 0px rgba(184, 184, 184, 0.03)',
  			'light-200': '0.625rem 0.625rem 1.25rem 0px rgba(218, 213, 213, 0.10)',
  			'light-300': '-0.625rem 0.625rem 1.25rem 0px rgba(218, 213, 213, 0.10)',
  			'dark-100': '0px 0.125rem 0.625rem 0px rgba(46, 52, 56, 0.10)',
  			'dark-200': '0.125rem 0px 1.25rem 0px rgba(39, 36, 36, 0.04)'
  		},
  		backgroundImage: {
  			'auth-dark': 'url("/images/auth-dark.png")',
  			'auth-light': 'url("/images/auth-light.png")'
  		},
  		fontFamily: {
  			inter: ["var(--font-inter)"],
  			'space-grotesk': ["var(--font-space-grotesk)"]
  		}
  	}
  },
  plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
} satisfies Config;
