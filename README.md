# Yushin Takahashi - Portfolio

[![Built with Astro](https://astro.new/origin.svg)](https://astro.build)
[![Style: Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-blue?logo=github)](https://pages.github.com/)

高橋優心のポートフォリオサイトです。
「Constructed Intellect」をデザインコンセプトに、経歴とエンジニアリングスキルを可視化しています。

**Live Site:** [https://yushin-takahashi.github.io/](https://yushin-takahashi.github.io/)

## Tech Stack

このプロジェクトは、パフォーマンスとメンテナンス性を重視したモダンなスタックで構築されています。

- **Framework:** [Astro](https://astro.build/) (v5+) - 高速な静的サイト生成
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4) - CSS Variablesを用いたテーマ管理
- **Font:** Google Fonts (Noto Sans JP / Roboto Mono)
- **Deployment:** GitHub Actions + GitHub Pages

## Project Structure

コンポーネント指向に基づき、セクションごとにファイルを分割して管理しています。

```text
/
├── public/
│   └── favicon.svg       # サイトアイコン
├── src/
│   ├── components/       # UIコンポーネント（各セクション）
│   │   ├── Header.astro         # スティッキーヘッダー
│   │   ├── Hero.astro           # ファーストビュー（Vicsek Modelのモチーフ）
│   │   ├── About.astro          # 自己紹介、経歴
│   │   ├── ResearchSkills.astro # 研究分野と技術スタックの可視化
│   │   ├── Projects.astro       # 成果物・プロジェクト一覧
│   │   ├── History.astro        # 経歴・受賞歴（テーブルレイアウト）
│   │   └── Footer.astro         # フッター
│   ├── layouts/
│   │   └── Layout.astro         # 全ページの共通レイアウト（Head設定含む）
│   ├── pages/
│   │   └── index.astro          # トップページ（コンポーネントの統合）
│   └── styles/
│       └── global.css           # Tailwind v4設定およびグローバルスタイル
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions デプロイ設定
└── astro.config.mjs      # Astro設定ファイル
