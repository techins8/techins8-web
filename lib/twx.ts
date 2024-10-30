import { ClassValue, clsx } from "clsx";
import { createTwc } from "react-twc";
import { twMerge } from "tailwind-merge";

// Using `clsx` + `twMerge` for a complete flexibility (taken from shadcn/ui)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twx = createTwc({ compose: cn });
