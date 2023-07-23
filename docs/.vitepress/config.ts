import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Agile css",
  description: "Atomic css",
  outDir: "docs",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hunghg255/agile-css' }
    ]
  }
})
