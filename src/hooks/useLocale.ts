"use client";

import { usePathname } from "next/navigation";
import { Locale } from "@/lib/getDictionary";

const useLocale = (): Locale => {
  const pathname = usePathname();
  return pathname.startsWith("/en") ? "en" : "pt";
};

export default useLocale;
