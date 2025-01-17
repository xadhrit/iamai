import fs from "fs";
import path from "path";
import { defineConfig, DefaultTheme } from "vitepress";

const baseDir: string = "docs";

export default defineConfig({
  lang: "zh-CN",
  title: "iamai",
  description: "可用于机器学习的 Python 异步多后端聊天机器人框架",
  base: "/iamai/",
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" }],
    ["link", { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg" }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/mstile-150x150.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#2d89ef" }],
  ],

  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api/" },
      { text: "更新日志", link: "/changelog" },
    ],

    sidebar: {
      "/guide/": sidebarGuide(),
      "/api/": sidebarApi("/api/"),
      "/dev-api/": sidebarApi("/dev-api/"),
    },

    editLink: {
      pattern:
        "https://github.com/retrofor/iamai/edit/master/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdatedText: "上次更新",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/retrofor/iamai",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present HsiangNianian",
    },
  },
});

function getSidebarItem(file: string): DefaultTheme.SidebarItem {
  const content = fs.readFileSync(path.join(baseDir, file), "utf-8");
  const match = content.match(/^\s*#+\s+(.*)/m);
  if (match === null) {
    return {
      text: "",
      link: file,
    };
  }
  return {
    text: match[1].trim(),
    link: file,
  };
}

function getSidebarChildrenItems(dir: string): DefaultTheme.SidebarItem[] {
  try {
    let readme_flag = false;
    let temp = fs.readdirSync(path.join(baseDir, dir)).filter((name) => {
      if (name == "index.md") {
        readme_flag = true;
        return false;
      }
      return (
        !name.startsWith(".") &&
        fs.statSync(path.join(baseDir, dir, name)).isFile()
      );
    });
    if (readme_flag) temp.unshift("index.md");
    return temp.map((item) => getSidebarItem(path.join(dir, item)));
  } catch {
    return [];
  }
}

function sidebarGuide() {
  return [
    {
      text: "开始",
      collapsible: false,
      items: [
        "/guide/index.md",
        "/guide/quick-start.md",
        "/guide/basic-config.md",
      ].map(getSidebarItem),
    },
    {
      text: "基础",
      collapsible: false,
      items: [
        "/guide/basics/basic-concepts.md",
        "/guide/basics/load-plugin.md",
        "/guide/basics/create-plugin.md",
        "/guide/basics/builtin-message.md",
      ].map(getSidebarItem),
    },
    {
      text: "进阶",
      collapsible: false,
      items: [
        "/guide/advanced/event-propagation.md",
        "/guide/advanced/state-storage.md",
        "/guide/advanced/plugin-config.md",
        "/guide/advanced/generic-plugin.md",
        "/guide/advanced/dependency.md",
        "/guide/advanced/general-plugin.md",
        "/guide/advanced/scheduler.md",
        "/guide/advanced/hook-function.md",
        "/guide/advanced/hot-reload.md",
      ].map(getSidebarItem),
    },
    {
      text: "协议适配器",
      collapsible: false,
      items: [
        "/guide/adapters/cqhttp-adapter.md",
        "/guide/adapters/mirai-adapter.md",
        "/guide/adapters/dingtalk-adapter.md",
      ].map(getSidebarItem),
    },
  ];
}

function sidebarApi(base: string) {
  return [
    {
      text: "iamai Api Reference",
      items: [
        ...getSidebarChildrenItems(base),
        getSidebarItem(base + "adapter/index.md"),
        {
          text: "iamai.adapter.utils",
          link: base + "adapter/utils.md",
        },
        {
          text: "iamai.adapter.cqhttp",
          link: base + "adapter/cqhttp/index.md",
          items: getSidebarChildrenItems(base + "adapter/cqhttp/"),
        },
        {
          text: "iamai.adapter.onebot",
          link: base + "adapter/onebot/index.md",
          items: getSidebarChildrenItems(base + "adapter/onebot/"),
        },
        {
          text: "iamai.adapter.mirai",
          link: base + "adapter/mirai/index.md",
          items: getSidebarChildrenItems(base + "adapter/mirai/"),
        },
        {
          text: "iamai.adapter.dingtalk",
          link: base + "adapter/dingtalk/index.md",
          items: getSidebarChildrenItems(base + "adapter/dingtalk/"),
        },
        {
          text: "iamai.adapter.apscheduler",
          link: base + "adapter/apscheduler/index.md",
          items: getSidebarChildrenItems(base + "adapter/apscheduler/"),
        },
      ],
    },
  ];
}
