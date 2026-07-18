// 学歴 (EDUCATION_PATH) のデータ定義
// 配列は表示順(新しい順)に並べる。

export type EducationStatus = "Incoming" | "Current" | "Graduated";

export interface Education {
  period: string;
  school: string;
  schoolJa: string;
  dept: string;
  deptJa: string;
  detail: string;
  status: EducationStatus;
}

export const educationHistory: Education[] = [
  {
    period: "2026.04 - ",
    school: "Institute of Science Tokyo (Tokyo Tech)",
    schoolJa: "東京科学大学 (旧: 東京工業大学)",
    dept: "School of Computing, Department of Computer Science",
    deptJa: "情報理工学院 情報工学系",
    detail: "Master's Program",
    status: "Current"
  },
  {
    period: "2024.04 - 2026.03",
    school: "Hokkaido University",
    schoolJa: "北海道大学",
    dept: "Faculty of Engineering, Department of Information and Electronics Engineering",
    deptJa: "工学部 情報エレクトロニクス学科",
    detail: "Bachelor of Engineering",
    status: "Graduated"
  },
  {
    period: "2019.04 - 2024.03",
    school: "NIT, Asahikawa College",
    schoolJa: "旭川工業高等専門学校",
    dept: "Electrical and Information Engineering",
    deptJa: "電気情報工学科",
    detail: "Associate Degree of Engineering",
    status: "Graduated"
  }
];
