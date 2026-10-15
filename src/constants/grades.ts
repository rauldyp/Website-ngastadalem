/**
 * Helper terpusat untuk standarisasi nama Grade di Ngastadalem Studio:
 * Tiga grade baku: "Grade Premium", "Grade Menengah", "Grade Hemat"
 */

export type StandardGrade = "Grade Premium" | "Grade Menengah" | "Grade Hemat";

export function formatGradeLabel(rawGrade?: string | null): StandardGrade {
  if (!rawGrade) return "Grade Menengah";

  const lower = rawGrade.toLowerCase();

  // Premium / Mewah / High / Prestisius
  if (
    lower.includes("premium") ||
    lower.includes("high") ||
    lower.includes("mewah") ||
    lower.includes("prestisius") ||
    lower.includes("luxury")
  ) {
    return "Grade Premium";
  }

  // Hemat / Low / Efisien / Cerdas / Tumbuh
  if (
    lower.includes("hemat") ||
    lower.includes("low") ||
    lower.includes("efisien") ||
    lower.includes("cerdas") ||
    lower.includes("tumbuh")
  ) {
    return "Grade Hemat";
  }

  // Default / Menengah / Medium
  return "Grade Menengah";
}
