import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: ['**/*.{vue,html,jsx,tsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'dist'],
  },
  safelist: [
    range(30).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
  ],
  theme: {
    inset: {
      half: "50%"
    },
    borderRadius: {
      half: '50%'
    }
  },
  plugins: [
    typography({
      dark: true
    }),
    require('@windicss/plugin-icons')
  ],
  darkMode: 'class'
})
