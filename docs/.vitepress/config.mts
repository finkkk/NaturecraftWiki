import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NatureCraft 新手指南",
  description: "NatureCraft官方Wiki",
  head: [
    ['link', { rel: 'icon', href: '/img/logoIcon.ico' }],
    ['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-BMW5VB9YCS' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BMW5VB9YCS');
    `]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '新手指南',
        items: [
          { text: '服务器须知', link: '/server' },
          { text: '游戏安装与注册登录', link: '/install' },
          { text: '初始装备与物品', link: '/newkit' },
          { text: '语音系统', link: '/voice' },
          { text: '经济系统', link: '/eco' },
          { text: '死亡与掉落机制', link: '/dead' },
          { text: '体温与季节机制', link: '/season' },
          { text: '领地保护机制', link: '/home' },
          { text: '主城与服务器公共区域', link: '/town' },
          { text: 'VR按键映射说明', link: '/vrbtn' },
          { text: 'PVP机制', link: '/pvp' },
          { text: '传送机制', link: '/teleport' },
          { text: '宠物拾取机制', link: '/pet' },
          { text: '光影设置说明', link: '/shader'},
          { text: 'MC游玩常识', link: '/know' },
          { text: '全身追踪配置介绍', link: '/fbt' },
          { text: '优秀玩家建筑展示', link: '/building' },
          { text: '服务器已禁物品列表', link: '/ban' },
          { text: '服务器已知BUG列表', link: '/bugs' },
          { text: '服务器模组列表', link: '/mods' },
          { text: 'YSM模组说明', link: '/ysm' },
          { text: '常见问题解答', link: '/qna' },
          { text: '开发者与特别鸣谢', link: '/dev' }
        ]
      }
    ],

    sidebar: [
      {
        text: '新手指南',
        items: [
          { text: '服务器须知', link: '/server' },
          { text: '游戏安装与注册登录', link: '/install' },
          { text: '初始装备与物品', link: '/newkit' },
          { text: '语音系统', link: '/voice' },
          { text: '经济系统', link: '/eco' },
          { text: '死亡与掉落机制', link: '/dead' },
          { text: '体温与季节机制', link: '/season' },
          { text: '领地保护机制', link: '/home' },
          { text: '主城与服务器公共区域', link: '/town' },
          { text: 'VR按键映射说明', link: '/vrbtn' },
          { text: 'PVP机制', link: '/pvp' },
          { text: '传送机制', link: '/teleport' },
          { text: '宠物拾取机制', link: '/pet' },
          { text: '光影设置说明', link: '/shader'},
          { text: 'MC游玩常识', link: '/know' },
          { text: '全身追踪配置介绍', link: '/fbt' },
          { text: '优秀玩家建筑展示', link: '/building' },
          { text: '服务器已禁物品列表', link: '/ban' },
          { text: '服务器已知BUG列表', link: '/bugs' },
          { text: '服务器模组列表', link: '/mods' },
          { text: 'YSM模组说明', link: '/ysm' },
          { text: '常见问题解答', link: '/qna' },
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
