# GitHub Pages 部署说明

本目录是一个纯静态项目展示页，不需要构建命令。部署时只要保证 `index.html`、`styles.css`、`script.js` 和 `assets/` 在同一个目录下即可。

## 方式一：作为独立仓库部署

适合只想公开项目展示页，不公开完整项目源码的情况。

1. 在 GitHub 新建仓库，例如 `ai-contentops-showcase`。
2. 将 `project_showcase` 目录里的全部文件上传到仓库根目录。
3. 确认仓库根目录包含：

```text
index.html
styles.css
script.js
assets/
DEPLOY_GITHUB_PAGES.md
```

4. 进入仓库页面，点击 `Settings`。
5. 左侧进入 `Pages`。
6. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
7. 点击 `Save`。
8. 等待 1-3 分钟，GitHub 会生成访问地址，通常是：

```text
https://你的GitHub用户名.github.io/ai-contentops-showcase/
```

## 方式二：放在当前项目仓库的 docs 目录

适合想把源码和展示页放在同一个仓库里。

1. 在仓库根目录新建 `docs` 目录。
2. 将 `project_showcase` 目录里的全部文件复制到 `docs` 目录。
3. 提交并推送到 GitHub。
4. 进入仓库 `Settings` -> `Pages`。
5. 选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/docs`
6. 点击 `Save`。
7. 访问地址通常是：

```text
https://你的GitHub用户名.github.io/仓库名/
```

## 上线前检查

- 删除 `.env`、API Key、Token、真实手机号、邮箱和企业敏感资料。
- 视频中不要出现密钥、后台管理 Token、真实账号或不可公开的数据。
- 仓库不要提交 `node_modules`、`__pycache__`、日志文件、Chroma 大缓存和无关数据集。
- 如果不想把视频放进仓库，可以删除 `assets/demo.mp4`，把视频上传到 B 站或 GitHub Release，再把 `index.html` 中的 video 区域改成外链按钮。
- 部署完成后，将展示页链接放到简历项目经历最后一行。
