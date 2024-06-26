/** @type {import('tailwindcss').Config} */
import sharedConfig from '@repo/tailwind-config'

module.exports = {
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [sharedConfig],
}
