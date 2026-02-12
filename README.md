# 💖 Anniversary Website — Xuân Nam & Diệu Linh

Project Astro + TypeScript để kỷ niệm 4 năm yêu nhau (13/02/2022 - 14/02/2026).

## Tech stack

- **Astro 5** + **TypeScript (strict)**
- **Biome** (tool viết bằng Rust) cho lint + format theo best practices front-end
- **Git hooks (pre-commit)** chạy Biome trước khi commit
- **GitHub Actions** cho CI và auto deploy lên **GitHub Pages**

## Chạy local

```bash
npm install
npm run prepare
npm run dev
```

## Chất lượng mã nguồn

```bash
npm run lint
npm run format
npm run check
```

## Bật pre-commit hook

Lệnh dưới sẽ cấu hình hook path vào `.githooks`:

```bash
npm run prepare
```

## Deploy GitHub Pages

1. Vào `astro.config.mjs`, thay `https://<your-github-username>.github.io` bằng username GitHub thật.
2. Push lên nhánh `main`.
3. Workflow `Deploy to GitHub Pages` sẽ tự build và publish.

> Lưu ý: `base` đang là `/Anniversary`, nếu đổi tên repo thì cập nhật lại giá trị này.
