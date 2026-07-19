// プロジェクト(Selected Works)のデータ定義
// IDは制作年代順の固定連番(古い順)。配列は表示順(新しい順)。
// 新規追加時は次のID(現在の最大+1)を振り、配列の先頭に挿入する。既存IDは変更しない。

import type { Localized } from "../i18n";

export interface ProjectLink {
  label: Localized | string;
  /** 空文字の場合はリンクにせずテキストとして表示される */
  url: string;
}

export interface Milestone {
  label: Localized | string;
  date: string;
}

export interface Project {
  id: string;
  date: string;
  /** 制作/展示/採択など、代表日付以外に補足したいマイルストーンがある場合のみ指定 */
  milestones?: Milestone[];
  title: Localized | string;
  category: string;
  tech: string[];
  description: Localized | string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "DEV_05",
    date: "2026.07",
    milestones: [
      { label: "Arxiv", date: "2026.04" },
      { label: { ja: "採択", en: "Accepted" }, date: "2026.06" },
      { label: { ja: "出版", en: "Published" }, date: "2026.07" },
    ],
    title: "Absence of O(2) symmetry in the Vicsek model",
    category: "Research / Physics / Active Matter",
    tech: ["Python", "NumPy / Pandas", "C++", "pybind11"],
    description: {
      ja: "Vicsek模型の相転移が二次元回転対称性O(2)の自発的破れに起因するという従来の理解に対し、元のVicsek模型にはO(2)対称性が実在しないことを数値的に実証した。Physical Review E 採択。日本物理学会 第81回年次大会にて発表予定。",
      en: "Contrary to the conventional understanding that the phase transition of the Vicsek model originates from spontaneous breaking of the two-dimensional rotational symmetry O(2), we numerically demonstrated that the original Vicsek model has no O(2) symmetry. Accepted in Physical Review E; to be presented at the 81st JPS Annual Meeting.",
    },
    links: [
      { label: "Arxiv", url: "https://arxiv.org/abs/2604.00930" },
      {
        label: "Physical Review E",
        url: "https://journals.aps.org/pre/abstract/10.1103/9gcy-ky3z",
      },
      { label: "JPS2026 (Coming Soon)", url: "" },
    ],
  },
  {
    id: "DEV_04",
    date: "2026.02",
    title: {
      ja: "慣性スピン模型におけるカイラル相の分類",
      en: "Classification of chiral phases in the inertial spin model",
    },
    category: "Research / Physics / Active Matter",
    tech: ["Python", "NumPy / Pandas", "C++", "pybind11"],
    description: {
      ja: "集団運動におけるカイラル相の分類指標の多くが2次元座標系に依存し、3次元以上への拡張が困難という課題に対し、次元に依存しない新指標「平均平面相関(MPC)」を提案。3次元慣性スピン模型においてその有用性を確認した。",
      en: "Most indicators for classifying chiral phases in collective motion depend on a 2D coordinate system and are hard to extend to three or more dimensions. Proposed a dimension-independent indicator, Mean Plane Correlation (MPC), and confirmed its usefulness in the 3D inertial spin model.",
    },
    links: [
      {
        label: { ja: "論文 (PDF)", en: "Thesis (PDF)" },
        url: "/docs/bachelor-thesis-2026.pdf",
      },
    ],
  },
  {
    id: "DEV_03",
    date: "2024.01",
    title: {
      ja: "TransformerによるGrokking現象の再現と解析",
      en: "Reproducing and analyzing Grokking in Transformers",
    },
    category: "Research / Machine Learning",
    tech: ["Python", "NumPy", "PyTorch", "Google Colab"],
    description: {
      ja: "小規模なTransformerモデルを用いて、モジュラ演算タスクにおけるGrokking現象を再現し、損失関数の推移や内部パラメータの可視化を通じてその発生メカニズムを検証する実験。",
      en: "Reproduced the Grokking phenomenon on modular-arithmetic tasks with a small Transformer model, and examined its mechanism through loss curves and visualization of internal parameters.",
    },
    links: [
      {
        label: "Colab",
        url: "https://colab.research.google.com/drive/1Y5AQl7gkYdPNIqI5eN0X9Cgea98Tagxe",
      },
    ],
  },
  {
    id: "DEV_02",
    date: "2023.02",
    milestones: [
      { label: { ja: "展示", en: "Exhibited" }, date: "2023.07" },
    ],
    title: "Super Volt Maker",
    category: "Game Dev / Unity",
    tech: ["C#", "Unity"],
    description: {
      ja: "災害対策をテーマにしたカードゲームのアプリ化プロジェクト。高専の創成工学演習にて開発し、オープンキャンパスで展示。",
      en: "An app adaptation of a card game themed on disaster preparedness. Developed in an engineering design course at KOSEN and exhibited at the open campus.",
    },
    links: [
      {
        label: { ja: "URL", en: "URL" },
        url: "https://yushin-takahashi.github.io/SuperVoltMaker-web/",
      },
    ],
  },
  {
    id: "DEV_01",
    date: "2021.12",
    title: "Fragant",
    category: "Web Application",
    tech: ["Flutter", "Go", "Firebase"],
    description: {
      ja: "「Hack U KOSEN 2021」出場。高専生向け教科書解答共有プラットフォーム。解答のない専門書の問題解決を学生間の集合知でサポートする。",
      en: "Built for Hack U KOSEN 2021: a textbook-answer sharing platform for KOSEN students that supports solving problems in technical books without official answers through collective knowledge.",
    },
    links: [
      {
        label: { ja: "発表資料 (PDF)", en: "Slides (PDF)" },
        url: "/docs/hacku-2021-fragant-slides.pdf",
      },
    ],
  },
];
