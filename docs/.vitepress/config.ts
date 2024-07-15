import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Amine El Qazoui's Portfolio",
  description: "Professional portfolio and CV of Amine El Qazoui",
  base: "/SRE-DevOps-Financial-Markets-Portfolio/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Curriculum Vitae', link: '/curriculum-vitae' },
      { text: 'SRE Practices', link: '/sre-practices-implementation' },
    ],
    sidebar: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'Curriculum Vitae', link: '/curriculum-vitae' },
          { text: 'SRE Practices', link: '/sre-practices-implementation' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amine-el-qazoui-43450926' },
      { icon: 'github', link: 'https://github.com/Crypto-Aggressor' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
})