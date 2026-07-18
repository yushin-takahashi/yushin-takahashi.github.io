// i18n ヘルパー
// 翻訳が必要なテキストは { ja, en } のペアで持ち、t() で言語に応じて取り出す。
// 言語によらず同一のテキスト (固有名詞など) はプレーンな string のままでよい。

export type Lang = 'ja' | 'en';

export interface Localized {
  ja: string;
  en: string;
}

export function t(text: Localized | string, lang: Lang): string {
  return typeof text === 'string' ? text : text[lang];
}

/** 言語ごとのトップページパス */
export function homePath(lang: Lang): string {
  return lang === 'en' ? '/en/' : '/';
}
