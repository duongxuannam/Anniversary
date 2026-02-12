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

## Deploy GitHub Pages (Branch: `main` / folder: `docs`)

1. Vào **Settings → Pages** của repo `duongxuannam/Anniversary`.
2. Ở mục **Build and deployment / Source**, chọn **Deploy from a branch**.
3. Chọn branch **main** và folder **/docs**, rồi Save.
4. Thiết lập biến môi trường `SITE_URL` (ví dụ: `https://duongxuannam.github.io`) trong repo secrets/variables hoặc local env.
5. Push lên nhánh `main`. Workflow sẽ build Astro ra thư mục `docs` và tự commit lại vào `main`.

> Lưu ý: `base` đang là `/Anniversary`, nếu đổi tên repo thì cập nhật lại giá trị này.


### Khắc phục lỗi Jekyll `Invalid YAML front matter`

Nếu bạn thấy log kiểu `Invalid YAML front matter in src/pages/index.astro` nghĩa là Pages đang cố build bằng Jekyll ở sai thư mục.

- Đảm bảo **Settings → Pages → Source = Deploy from a branch**
- Chọn đúng **Branch: `main`** và **Folder: `/docs`**
- Repo đã có file `.nojekyll` để tránh Jekyll parse nhầm source Astro

