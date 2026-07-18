// 研究興味・技術スタック (Research Interests / Engineering Stack) のデータ定義

import type { Localized } from '../i18n';

export interface ResearchTopic {
  id: string;
  area: string;
  detail: Localized | string;
  status: "Current Focus" | "Past Research";
}

export const researchTopics: ResearchTopic[] = [
  {
    id: "01",
    area: "Graph Signal Processing / Graph Learning",
    detail: {
      ja: "現在の主な関心領域。グラフ信号処理、特にグラフ学習をテーマに、数理最適化に基づく手法の設計・解析に取り組んでいる。",
      en: "Current main focus. Working on graph signal processing — graph learning in particular — designing and analyzing methods grounded in mathematical optimization."
    },
    status: "Current Focus"
  },
  {
    id: "02",
    area: "Statistical Mechanics / Collective Motion",
    detail: {
      ja: "学士課程では、自己駆動粒子系における非相反作用と集団運動のダイナミクスを解析。統計力学的なモデリングの視点を培った。",
      en: "In the bachelor's program, analyzed non-reciprocal interactions and collective-motion dynamics in self-propelled particle systems, developing a statistical-mechanics perspective on modeling."
    },
    status: "Past Research"
  },
  {
    id: "03",
    area: "Deep Learning Dynamics",
    detail: {
      ja: "準学士課程では、ニューラルネットワークの学習ダイナミクスそのものを対象に、Grokking現象の解析に取り組んだ。",
      en: "In the associate program, studied the training dynamics of neural networks themselves, analyzing the Grokking phenomenon."
    },
    status: "Past Research"
  }
];

// 習熟度カテゴリ (パーセント表記は廃止し、簡潔なバッジ表記に統一)
export interface TechnicalSkill {
  name: string;
  level: "PRIMARY" | "WORKING";
}

export const technicalSkills: TechnicalSkill[] = [
  { name: "Python (PyTorch, NumPy, Pandas)", level: "PRIMARY" },
  { name: "MATLAB", level: "WORKING" },
  { name: "C, C++, C#", level: "WORKING" },
  { name: "Machine Learning / Data Science", level: "WORKING" },
  { name: "Mathematical Modeling / Simulation", level: "WORKING" }
];

export const otherTools: string[] = ["Git/GitHub", "VS Code", "LaTeX"];
