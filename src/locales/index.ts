import { en } from "./en";
import { th } from "./th";

export type Locale = "en" | "th";

export const locales = { en, th };

export function getLocale(locale: Locale) {
  return locales[locale];
}
