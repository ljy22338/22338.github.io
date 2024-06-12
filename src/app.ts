// 运行时配置

import { Header } from "antd/es/layout/layout";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return {
    name: '@小🐟'
  };
}

export const layout = () => {
  return {
    logo: '/鹿头-头像-small.png',
    locale: false,
    menu: {
      locale: false,
    },
  };
};
