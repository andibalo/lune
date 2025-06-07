import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberToCurrency = (number: number, locale = "id-ID", currency = "IDR"): string => {
  if (isNaN(number)) {
    return "Rp0";
  }

  if (number < 0) {
    return "Rp0";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(number);
}
