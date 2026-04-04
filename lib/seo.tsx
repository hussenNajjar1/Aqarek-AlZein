import { Metadata } from "next";

export const baseSEO: Metadata = {
  metadataBase: new URL("https://alzein-realestate.com"),

  title: {
    default: "شركة الزين للعقارات",
    template: "%s | الزين للعقارات",
  },

  description:
    "أفضل العروض العقارية للبيع والإيجار في سراقب - شقق، فلل، أراضي.",

  keywords: ["عقارات", "شركة الزين", "شقق للبيع", "عقارات تركيا"],

  openGraph: {
    title: "شركة الزين للعقارات",
    description: "أفضل منصة عقارية في سراقب",
    type: "website",
    locale: "ar_TR",
    images: ["/images/png/icon.png"],
  },
  icons: {
    icon: "/images/png/icons.png",
  },
};
