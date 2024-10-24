import { Category } from "@/types";

export function getCategoryName(
  categories: Category[] | undefined,
  categoryId: string
): string {
  if (categories && categories.length > 0) {
    const matchingCategory = categories.filter(
      (category) => category.id == categoryId
    );
    if (matchingCategory.length > 0) {
      return matchingCategory[0].name;
    }
  }
  return "";
}
