// 定义资源的类型接口，这样 TypeScript 就能帮你检查错误
export interface Resource {
  name: string;
  description: string;
  link: string;
  category: string;
}

// 正确的导出数组
export const resources: Resource[] = [
  {
    name: "Astro 官方文档",
    description: "学习 Astro 的最佳起点",
    link: "https://docs.astro.build/",
    category: "开发工具"
  },
  {
    name: "Tailwind CSS",
    description: "快速构建 UI 的 CSS 框架",
    link: "https://tailwindcss.com/",
    category: "前端"
  }
];