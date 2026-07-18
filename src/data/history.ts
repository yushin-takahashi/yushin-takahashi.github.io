// 実績・活動履歴 (History & Achievements) のデータ定義
// 配列は表示順(新しい順)に並べる。

import type { Localized } from '../i18n';

export type HistoryType =
  | "Publication"
  | "Research"
  | "Certification"
  | "Experience"
  | "Award"
  | "Activity";

export interface HistoryItem {
  date: string;
  type: HistoryType;
  title: Localized | string;
  detail: Localized | string;
}

export const historyData: HistoryItem[] = [
  {
    date: "2026.06", type: "Publication",
    title: { ja: "Physical Review E 採択", en: "Paper accepted in Physical Review E" },
    detail: "Absence of O(2) symmetry in the Vicsek model"
  },
  {
    date: "2026.02", type: "Research",
    title: { ja: "大学 学士論文", en: "Bachelor's thesis" },
    detail: { ja: "慣性スピン模型におけるカイラル相の分類", en: "Classification of chiral phases in the inertial spin model" }
  },
  {
    date: "2025.04", type: "Certification",
    title: { ja: "普通自動車運転免許", en: "Driver's license (Japan)" },
    detail: ""
  },
  {
    date: "2024.08", type: "Experience",
    title: { ja: "株式会社キカガク", en: "Kikagaku Inc." },
    detail: { ja: "AI/DX領域教材の品質保証・改善業務", en: "QA and improvement of AI/DX educational materials" }
  },
  {
    date: "2024.03", type: "Award",
    title: { ja: "電気学会 北海道支部長賞", en: "IEEJ Hokkaido Branch Chair Award" },
    detail: { ja: "高専卒業時のもの。優秀学生賞相当", en: "Awarded at KOSEN graduation; equivalent to an outstanding student award" }
  },
  {
    date: "2024.03", type: "Certification",
    title: { ja: "JDLA G検定 2024#1 合格", en: "JDLA Deep Learning for GENERAL 2024#1" },
    detail: ""
  },
  {
    date: "2024.01", type: "Research",
    title: { ja: "高専 準学士論文", en: "Associate degree thesis" },
    detail: { ja: "機械学習におけるGrokkingの研究", en: "Study of Grokking in machine learning" }
  },
  {
    date: "2023.06", type: "Activity",
    title: { ja: "まちなかキャンパス学生委員", en: "Machinaka Campus student committee" },
    detail: ""
  },
  {
    date: "2023.04", type: "Certification",
    title: "TOEIC L&R IP 840",
    detail: ""
  },
  {
    date: "2022.12", type: "Award",
    title: { ja: "グッドデザイン・ニューホープ賞 入選", en: "Good Design New Hope Award (Selected)" },
    detail: { ja: "まちなかキャンパス", en: "Machinaka Campus" }
  },
  {
    date: "2022.11", type: "Activity",
    title: { ja: "旭川高専アイデアソン", en: "NIT Asahikawa Ideathon" },
    detail: { ja: "地域課題解決・自動運転データ活用アイデア", en: "Ideas for local issues and autonomous-driving data" }
  },
  {
    date: "2022.06", type: "Activity",
    title: { ja: "まちなかキャンパス学生委員 副委員長", en: "Machinaka Campus student committee, vice chair" },
    detail: ""
  },
  {
    date: "2021.12", type: "Certification",
    title: { ja: "ITパスポート 合格", en: "IT Passport Examination" },
    detail: ""
  },
  {
    date: "2021.03", type: "Award",
    title: { ja: "東京ガス ビジネスコンテスト 優秀賞", en: "Tokyo Gas Business Contest, Excellence Award" },
    detail: { ja: "フレイル検知見守りサービスの立案", en: "Proposed a frailty-detection monitoring service" }
  },
  {
    date: "2021.03", type: "Award",
    title: { ja: "RPAホールディングス ビジコン チーム賞", en: "RPA Holdings Business Contest, Team Award" },
    detail: { ja: "「脱スマホ依存」を目的とした対戦型スマホ抑制アプリの立案", en: "Proposed a competitive app to curb smartphone addiction" }
  },
];
