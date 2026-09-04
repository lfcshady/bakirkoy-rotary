/**
 * Verified Rotary content.
 *
 * Everything in this file is institutional Rotary International / Rotary Türkiye
 * material, not club-specific data. It is accurate and complete — unlike the
 * club's own records, which are still `TODO(brief)`. Do not edit these wordings
 * casually: the Four-Way Test and the areas of focus are fixed institutional text.
 */

export const dortSoruTesti = {
  giris: 'Düşündüklerimiz, söylediklerimiz ve yaptıklarımız:',
  sorular: [
    'Gerçeğe uygun mu?',
    'İlgililerin tümü için adil mi?',
    'İyi niyet ve daha iyi dostluklar sağlayacak mı?',
    'İlgililerin tümü için yararlı mı?',
  ],
} as const;

export type OdakAlani = {
  no: string;
  ad: string;
  ozet: string;
};

/** Rotary's seven areas of focus. */
export const odakAlanlari: OdakAlani[] = [
  { no: '01', ad: 'Barışın Desteklenmesi', ozet: 'Çatışmaların nedenlerini ele alan eğitim, diyalog ve burs programları.' },
  { no: '02', ad: 'Hastalıklarla Mücadele', ozet: 'Koruyucu sağlık, tarama ve aşılama; çocuk felcinin dünyadan silinmesi.' },
  { no: '03', ad: 'Temiz Su ve Hijyen', ozet: 'Güvenli içme suyu, sanitasyon altyapısı ve hijyen eğitimi.' },
  { no: '04', ad: 'Anne ve Çocuk Sağlığı', ozet: 'Doğum öncesi bakım, beslenme ve temel sağlık hizmetlerine erişim.' },
  { no: '05', ad: 'Eğitim ve Okuryazarlık', ozet: 'Okuma yazma, öğretmen desteği ve eğitimde fırsat eşitliği.' },
  { no: '06', ad: 'Yerel Ekonomilerin Gelişimi', ozet: 'Meslek edindirme, girişimcilik ve sürdürülebilir gelir kaynakları.' },
  { no: '07', ad: 'Çevrenin Korunması', ozet: 'Doğal kaynakların korunması, iklim etkisinin azaltılması, ekosistem onarımı.' },
];

/** The five avenues of service — Rotary's own organising principle for club work. */
export const hizmetYollari = [
  { ad: 'Kulüp Hizmetleri', ozet: 'Kulübün kendi işleyişi: üyelik, toplantılar, dostluk ve süreklilik.' },
  { ad: 'Meslek Hizmetleri', ozet: 'Her üyenin mesleğini dürüstlük ölçüsüyle icra etmesi ve mesleğini topluma açması.' },
  { ad: 'Toplum Hizmetleri', ozet: 'Kulübün bulunduğu bölgede yürüttüğü doğrudan yardım ve kalkınma projeleri.' },
  { ad: 'Uluslararası Hizmetler', ozet: 'Sınır ötesi projeler, kardeş kulüpler ve uluslararası iş birlikleri.' },
  { ad: 'Gençlik Hizmetleri', ozet: 'Rotaract, Interact, gençlik değişimi ve burs programlarıyla genç liderlerin desteklenmesi.' },
];

/** Institutional timeline — Rotary International, not the club. */
export const kurumTarihi = [
  { yil: '1905', olay: 'Paul Harris ve üç arkadaşı Chicago’da ilk Rotary Kulübü’nü kurdu. Ad, toplantıların üyelerin ofisleri arasında sırayla dönmesinden geliyordu.' },
  { yil: '1917', olay: 'Rotary Vakfı, “dünyada iyilik yapmak” için ayrılan 26,50 dolarlık bir bağışla doğdu.' },
  { yil: '1954', olay: 'Türkiye’nin ilk Rotary Kulübü Ankara’da kuruldu.' },
  { yil: '1956', olay: '8 Şubat 1956’da İstanbul Rotary Kulübü kuruldu; İstanbul’daki Rotary hareketi buradan yayıldı.' },
  { yil: '1985', olay: 'PolioPlus başlatıldı; çocuk felcinin yeryüzünden silinmesi Rotary’nin ortak taahhüdü oldu.' },
  { yil: '1989', olay: 'Kadınların üyeliği dünya genelinde kabul edildi.' },
  { yil: '2021', olay: 'Çevrenin korunması, yedinci odak alanı olarak eklendi.' },
];

/** Rotary year: 1 July – 30 June. The site's whole structure is indexed on this. */
export function guncelDonem(bugun: Date = new Date()): string {
  const y = bugun.getFullYear();
  const baslangic = bugun.getMonth() >= 6 ? y : y - 1;
  return `${baslangic}–${String(baslangic + 1).slice(2)}`;
}
