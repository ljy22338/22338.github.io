import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '小🐟的地摊',
    
  },
  esbuildMinifyIIFE: true,
  proxy: {
    '/api': {
      'target': 'https://uapis.cn',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/Home',
      
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '笔记',
      path:'/note',
      component:'./Note'
    },
    {
      name: 'IP测试',
      path:'/ip-test',
      component:'./IP-Test'
    },
    {
      name: 'Openai api 测试',
      path: '/openai-test',
      component: './OpenAI-Test',
    },
 

  ],
  npmClient: 'pnpm',
});
