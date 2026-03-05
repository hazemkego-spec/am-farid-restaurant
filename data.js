// data.js
export const menuData = {
  sections: [
    {
      id: "fayter-hadak",
      name: "الفطاير الحادقة",
      items: [
        { id: 1, name: "سجق بلدي", prices: { small: 110, medium: 175, large: 210 } },
        { id: 15, name: "فطيرة العم فريد 1", desc: "كباب حلة + بصل مكرمل + فلفل ألوان", prices: { small: 120, medium: 175, large: 235 } },
        // ... أضف باقي أصناف الفطاير الحادقة هنا
      ],
    },
    {
      id: "pizza",
      name: "البيتزا",
      items: [
        { id: 101, name: "مارجريتا", prices: { small: 95, medium: 120, large: 165 } },
        // ... أضف باقي أصناف البيتزا هنا
      ],
    },
    // ... أضف باقي الأقسام هنا: صاروخ، مشويات، باستا، سندوتشات، فطاير حلو
  ],
  contact: {
    address: "6 أكتوبر - الحي الأول - شارع السنترال - 104 أبراج النخيل - أمام المعهد الديني",
    phone1: "01113338098",
    phone2: "01009676779",
    whatsapp: "201122947479",
  },
};
