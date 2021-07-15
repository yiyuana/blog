import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'yy',
  mode: 'site',
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
