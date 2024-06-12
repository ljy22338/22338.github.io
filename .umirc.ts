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
      name: 'Openai api 测试',
      path: '/openai-test',
      component: './OpenAI-Test',
    },
 

  ],
  npmClient: 'pnpm',
});
