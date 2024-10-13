import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NatureCraft 新手指南",
  description: "NatureCraft官方Wiki",
  head: [
    ['link', { rel: 'icon', href: '/img/logoIcon.ico' }] // 引用 favicon.ico
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '新手指南',
        items: [
          { text: '游戏下载与安装', link: '/install' },
          { text: '初始装备与物品说明', link: '/newkit' },
          { text: '经济系统说明', link: '/eco' },
          { text: '死亡与掉落机制说明', link: '/dead' },
          { text: '体温与季节机制说明', link: '/season' },
          { text: '领地保护机制说明', link: '/home' },
          { text: '服务器须知', link: '/server' },
          { text: '开发者与特别鸣谢', link: '/dev' }
        ]
      }
    ],

    sidebar: [
      {
        text: '新手指南',
        items: [
          { text: '游戏下载与安装', link: '/install' },
          { text: '初始装备与物品说明', link: '/newkit' },
          { text: '经济系统说明', link: '/eco' },
          { text: '死亡与掉落机制说明', link: '/dead' },
          { text: '体温与季节机制说明', link: '/season' },
          { text: '领地保护机制说明', link: '/home' },
          { text: '服务器须知', link: '/server' },
          { text: '开发者与特别鸣谢', link: '/dev' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M256 16l-256 256 48 48 48-48v208h128v-96h64v96h128v-208l48 48 48-48-256-256zM256 224c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32z"></path></svg>' 
        },
        link: 'https://www.naturecraft.cn',
        ariaLabel: 'naturecraft'
      }
    ]
  }
})
