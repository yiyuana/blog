import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'yy',
  mode: 'site',
  base: isProd ? '/blog' : '/',
  publicPath: isProd ? '/blog' : '/',
  exportStatic: {},
  favicon: '/images/avatar.jpg',
  logo: '/images/avatar.jpg',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  hash: true,
  history: {
    type: 'hash',
  },
  metas: [
    {
      name: 'title',
      content: 'yy的个人网站',
    },
    {
      name: 'keywords',
      content: 'react, javascript, typescript',
    },
  ],
  // more config: https://d.umijs.org/config
});
