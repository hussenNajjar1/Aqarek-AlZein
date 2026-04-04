export const properties = [
  {
    id: "1",
    title: "شقة فاخرة بإطلالة بحرية",
    location: "سراقب - إدلب",
    price: 120000,
    type: "للبيع",

    image: "/images/jpeg/image1.jpeg",

    images: [
      "/images/jpeg/image1.jpeg",
      "/images/jpeg/image2.jpeg",
      "/images/jpeg/image3.jpeg",
      "/images/jpeg/image4.jpeg",
    ],

    beds: 3,
    baths: 2,
    area: 160,

    description:
      "شقة فاخرة     ضمن مجمع سكني حديث يحتوي على كافة الخدمات من مسبح وصالة رياضية وأمن 24 ساعة.",

    features: [
      "مسبح",
      "نادي رياضي",
      "موقف سيارات",
      "أمن 24 ساعة",
      "إطلالة بحر",
    ],

    yearBuilt: 2021,
    parking: true,
    furnished: true,

    coordinates: {
      lat: 35.7667, // تعديل الإحداثيات
      lng: 36.8472, // تعديل الإحداثيات
    },
  },

  {
    id: "2",
    title: "فيلا مستقلة مع حديقة",
    location: "سراقب - إدلب",
    price: 350000,
    type: "للبيع",

    image: "/images/jpeg/image2.jpeg",

    images: [
      "/images/jpeg/image1.jpeg",
      "/images/jpeg/image2.jpeg",
      "/images/jpeg/image5.jpeg",
    ],

    beds: 5,
    baths: 4,
    area: 350,

    description:
      "فيلا مستقلة واسعة مع حديقة خاصة وتصميم عصري، مناسبة للعائلات الكبيرة ضمن منطقة هادئة.",

    features: ["حديقة خاصة", "مسبح خاص", "كراج سيارات", "كاميرات مراقبة"],

    yearBuilt: 2020,
    parking: true,
    furnished: false,

    coordinates: {
      lat: 35.77, // تعديل الإحداثيات
      lng: 36.845, // تعديل الإحداثيات
    },
  },

  {
    id: "3",
    title: "شقة اقتصادية مناسبة للاستثمار",
    location: "سراقب - إدلب",
    price: 75000,
    type: "للبيع",

    image: "/images/jpeg/image3.jpeg",
    images: ["/images/jpeg/image1.jpeg", "/images/jpeg/image6.jpeg"],

    beds: 2,
    baths: 1,
    area: 95,

    description:
      "فرصة استثمارية ممتازة في منطقة نامية، قريبة من المواصلات والخدمات.",

    features: ["قريبة من المترو", "مراكز تسوق", "مدارس"],
    yearBuilt: 2019,
    parking: false,
    furnished: false,

    coordinates: {
      lat: 35.774, // تعديل الإحداثيات
      lng: 36.844, // تعديل الإحداثيات
    },
  },

  {
    id: "4",
    title: "شقة حديثة في مركز المدينة",
    location: "سراقب - إدلب",
    price: 180000,
    type: "للبيع",

    image: "/images/jpeg/image5.jpeg",
    images: ["/images/jpeg/image2.jpeg", "/images/jpeg/image3.jpeg"],

    beds: 3,
    baths: 2,
    area: 140,

    description: "شقة حديثة في قلب المدينة قريبة من جميع الخدمات والمواصلات.",

    features: ["مصعد", "أمن", "موقع مركزي"],
    yearBuilt: 2022,
    parking: true,
    furnished: true,

    coordinates: {
      lat: 35.765, // تعديل الإحداثيات
      lng: 36.85, // تعديل الإحداثيات
    },
  },

  {
    id: "5",
    title: "بنتهاوس فاخر بإطلالة بانورامية",
    location: "سراقب - إدلب",
    price: 500000,
    type: "للبيع",

    image: "/images/jpeg/image8.jpeg",
    images: ["/images/jpeg/image9.jpeg", "/images/jpeg/image10.jpeg"],

    beds: 4,
    baths: 3,
    area: 280,

    description: "بنتهاوس فاخر مع تراس واسع وإطلالة بانورامية على المدينة.",

    features: ["تراس", "جاكوزي", "تشطيب فاخر"],
    yearBuilt: 2023,
    parking: true,
    furnished: true,

    coordinates: {
      lat: 35.769, // تعديل الإحداثيات
      lng: 36.846, // تعديل الإحداثيات
    },
  },

  {
    id: "6",
    title: "شقة للإيجار بسعر مناسب",
    location: "سراقب - إدلب",
    price: 800,
    type: "للإيجار",
    image: "/images/jpeg/image11.jpeg",
    images: ["/images/jpeg/image9.jpeg"],
    beds: 2,
    baths: 1,
    area: 90,
    description: "شقة للإيجار قريبة من الجامعات.",
    features: ["قريبة من المترو"],
    yearBuilt: 2018,
    parking: false,
    furnished: true,
    coordinates: { lat: 35.767, lng: 36.848 },
  },
];
