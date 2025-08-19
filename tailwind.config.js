@@ .. @@
 /** @type {import('tailwindcss').Config} */
 module.exports = {
-    content: [
-      "./pages/**/*.{js,ts,jsx,tsx}",
-      "./components/**/*.{js,ts,jsx,tsx}",
-      "./app/**/*.{js,ts,jsx,tsx}",
-    ],
-    theme: {
-      extend: {},
-    },
-    plugins: [],
-  }
+  content: [
+    "./pages/**/*.{js,ts,jsx,tsx}",
+    "./components/**/*.{js,ts,jsx,tsx}",
+    "./app/**/*.{js,ts,jsx,tsx}",
+    "./src/**/*.{js,ts,jsx,tsx}",
+  ],
+  theme: {
+    extend: {
+      colors: {
+        // Primary brand colors
+        'brand': {
+          50: '#fff7ed',
+          100: '#ffedd5',
+          200: '#fed7aa',
+          300: '#fdba74',
+          400: '#fb923c',
+          500: '#f97316', // Main brand orange
+          600: '#ea580c',
+          700: '#c2410c',
+          800: '#9a3412',
+          900: '#7c2d12',
+          DEFAULT: '#f97316',
+        },
+        
+        // Secondary brand colors (dark navy)
+        'brand-dark': {
+          50: '#f8fafc',
+          100: '#f1f5f9',
+          200: '#e2e8f0',
+          300: '#cbd5e1',
+          400: '#94a3b8',
+          500: '#64748b',
+          600: '#475569',
+          700: '#334155',
+          800: '#1e293b',
+          900: '#0f172a',
+          950: '#050a1e', // Your existing dark color
+          DEFAULT: '#050a1e',
+        },
+        
+        // Accent colors for variety
+        'accent': {
+          blue: '#3b82f6',
+          green: '#10b981',
+          purple: '#8b5cf6',
+          pink: '#ec4899',
+          yellow: '#f59e0b',
+          DEFAULT: '#3b82f6',
+        },
+        
+        // Semantic colors for UI states
+        'success': {
+          50: '#f0fdf4',
+          100: '#dcfce7',
+          200: '#bbf7d0',
+          300: '#86efac',
+          400: '#4ade80',
+          500: '#22c55e',
+          600: '#16a34a',
+          700: '#15803d',
+          800: '#166534',
+          900: '#14532d',
+          DEFAULT: '#22c55e',
+        },
+        
+        'warning': {
+          50: '#fffbeb',
+          100: '#fef3c7',
+          200: '#fde68a',
+          300: '#fcd34d',
+          400: '#fbbf24',
+          500: '#f59e0b',
+          600: '#d97706',
+          700: '#b45309',
+          800: '#92400e',
+          900: '#78350f',
+          DEFAULT: '#f59e0b',
+        },
+        
+        'error': {
+          50: '#fef2f2',
+          100: '#fee2e2',
+          200: '#fecaca',
+          300: '#fca5a5',
+          400: '#f87171',
+          500: '#ef4444',
+          600: '#dc2626',
+          700: '#b91c1c',
+          800: '#991b1b',
+          900: '#7f1d1d',
+          DEFAULT: '#ef4444',
+        },
+        
+        'info': {
+          50: '#eff6ff',
+          100: '#dbeafe',
+          200: '#bfdbfe',
+          300: '#93c5fd',
+          400: '#60a5fa',
+          500: '#3b82f6',
+          600: '#2563eb',
+          700: '#1d4ed8',
+          800: '#1e40af',
+          900: '#1e3a8a',
+          DEFAULT: '#3b82f6',
+        },
+        
+        // Custom neutral grays
+        'neutral': {
+          50: '#fafafa',
+          100: '#f5f5f5',
+          200: '#e5e5e5',
+          300: '#d4d4d4',
+          400: '#a3a3a3',
+          500: '#737373',
+          600: '#525252',
+          700: '#404040',
+          800: '#262626',
+          900: '#171717',
+          950: '#0a0a0a',
+          DEFAULT: '#737373',
+        },
+      },
+      
+      // Custom spacing for consistent design
+      spacing: {
+        '18': '4.5rem',
+        '88': '22rem',
+        '128': '32rem',
+      },
+      
+      // Custom font sizes
+      fontSize: {
+        'xs': ['0.75rem', { lineHeight: '1rem' }],
+        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
+        'base': ['1rem', { lineHeight: '1.5rem' }],
+        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
+        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
+        '2xl': ['1.5rem', { lineHeight: '2rem' }],
+        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
+        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
+        '5xl': ['3rem', { lineHeight: '1' }],
+        '6xl': ['3.75rem', { lineHeight: '1' }],
+      },
+      
+      // Custom box shadows for depth
+      boxShadow: {
+        'brand': '0 4px 14px 0 rgba(249, 115, 22, 0.15)',
+        'brand-lg': '0 10px 25px -3px rgba(249, 115, 22, 0.1), 0 4px 6px -2px rgba(249, 115, 22, 0.05)',
+        'dark': '0 4px 14px 0 rgba(5, 10, 30, 0.15)',
+      },
+    },
+  },
+  plugins: [],
+}