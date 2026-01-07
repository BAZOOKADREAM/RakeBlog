export const SITE = {
  website: "https://BAZOOKADREAM.github.io/RakeBlog", // replace this with your deployed domain
  author: "RakeXD",
  profile: "https://github.com/BAZOOKADREAM",
  desc: "Rake的个人博客，记录学习和生活点滴。",
  title: "Rake's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/BAZOOKADREAM/RakeBlog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

// 在你的 SITE 对象定义之后，追加以下内容：

export const LOCALE = {
  main: "zh-CN", // 修改为中文
  date: "zh-CN",
} as const;

export const NAV_LINKS = [
  {
    href: "/posts",
    linkText: "文章",
  },
  {
    href: "/resources",
    linkText: "资源站",
  },
  {
    href: "/tags",
    linkText: "标签",
  },
  {
    href: "/about",
    linkText: "关于",
  },
];

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/BAZOOKADREAM",
    linkTitle: `在 Github 上关注 ${SITE.author}`,
    active: true,
  },
];