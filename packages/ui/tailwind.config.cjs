/** @type {import('tailwindcss').Config} */
import sharedConfig from '@repo/tailwind-config'

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [sharedConfig],
}
