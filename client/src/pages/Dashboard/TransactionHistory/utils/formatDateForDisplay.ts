import { format, parseISO } from "date-fns";

export function formatDateForDisplay(dateFormatted: string): string {
  const date = parseISO(dateFormatted);

  // Format the date to "dd MMM yy"
  return format(date, "dd MMM yy").toUpperCase();
}
