/**
 * Club-specific records: terms, board, projects, news, bulletins.
 *
 * The club has supplied none of this yet. Every entry below carries
 * `taslak: true` and renders with a visible "TASLAK" badge so it can never be
 * mistaken for a real club record. Nothing here is presented as fact.
 *
 * When the real data arrives: replace the arrays and drop `taslak` — the badges
 * disappear on their own. Numbers (member count, project count, awards) are
 * deliberately absent: the statistics band does not render without real data.
 */

export type Taslak = { taslak?: true };

export type Donem = Taslak & {
  kod: string; // "2026–27"
  baskan: string | null;
  tema: string | null;
  mesaj: string[] | null;
};

export type KurulUyesi = Taslak & { ad: string | null; gorev: string };

export type Komite = Taslak & { ad: string; baskan: string | null; ozet: string };

export type Proje = Taslak & {
  slug: string;
  ad: string;
  donem: string;
  odak: string; // matches an odakAlanlari[].ad
  tarih: string | null;
  konum: string | null;
  ortaklar: string[];
  ozet: string;
  detay: string[];
};

export type Haber = Taslak & {
  slug: string;
  baslik: string;
  tarih: string; // ISO
  ozet: string;
  govde: string[];
};

export type Bulten = Taslak & {
  donem: string;
  sayi: number;
  baslik: string;
  tarih: string; // ISO
  pdf: string | null;
};

/* ------------------------------------------------------------------ */

export const donemler: Donem[] = [
  { taslak: true, kod: '2026–27', baskan: null, tema: null, mesaj: null },
];

export const yonetimKurulu: KurulUyesi[] = [
  { taslak: true, ad: null, gorev: 'Dönem Başkanı' },
  { taslak: true, ad: null, gorev: 'Gelecek Dönem Başkanı' },
  { taslak: true, ad: null, gorev: 'Geçmiş Dönem Başkanı' },
  { taslak: true, ad: null, gorev: 'Sekreter' },
  { taslak: true, ad: null, gorev: 'Sayman' },
  { taslak: true, ad: null, gorev: 'Üye' },
];

export const komiteler: Komite[] = [
  { taslak: true, ad: 'Kulüp Yönetimi', baskan: null, ozet: 'Toplantı düzeni, üye ilişkileri ve kulübün günlük işleyişi.' },
  { taslak: true, ad: 'Üyelik', baskan: null, ozet: 'Üye adaylarının değerlendirilmesi ve kulübe uyumu.' },
  { taslak: true, ad: 'Hizmet Projeleri', baskan: null, ozet: 'Toplum ve uluslararası projelerin planlanması, yürütülmesi.' },
  { taslak: true, ad: 'Rotary Vakfı', baskan: null, ozet: 'Vakıf bağışları, hibe başvuruları ve PolioPlus desteği.' },
  { taslak: true, ad: 'Halkla İlişkiler', baskan: null, ozet: 'Kulübün çalışmalarının kamuoyuna doğru biçimde aktarılması.' },
  { taslak: true, ad: 'Gençlik Hizmetleri', baskan: null, ozet: 'Rotaract ve Interact ile bağ, burs ve gençlik değişimi.' },
];

/** Past presidents. The real roll is TODO(brief) — this is shape, not history. */
export const gecmisBaskanlar: Array<Taslak & { donem: string; ad: string | null }> = [
  { taslak: true, donem: '2025–26', ad: null },
  { taslak: true, donem: '2024–25', ad: null },
  { taslak: true, donem: '2023–24', ad: null },
  { taslak: true, donem: '2022–23', ad: null },
  { taslak: true, donem: '2021–22', ad: null },
];

export const projeler: Proje[] = [
  {
    taslak: true,
    slug: 'okuma-atolyesi',
    ad: 'İlkokul Okuma Atölyesi',
    donem: '2025–26',
    odak: 'Eğitim ve Okuryazarlık',
    tarih: null,
    konum: 'Bakırköy',
    ortaklar: [],
    ozet: 'Bir devlet ilkokulunda kitaplık kurulumu ve haftalık okuma saatleri.',
    detay: [
      'Bu bir taslak proje kaydıdır. Kulübün gerçek proje arşivi geldiğinde içerik bütünüyle değişecektir.',
      'Kayıt yapısı şunları taşır: dönem, odak alanı, tarih, konum, proje ortakları, kapak görseli, galeri ve anlatım metni.',
    ],
  },
  {
    taslak: true,
    slug: 'temiz-su-kampanyasi',
    ad: 'Kırsal Okullarda Temiz Su',
    donem: '2025–26',
    odak: 'Temiz Su ve Hijyen',
    tarih: null,
    konum: null,
    ortaklar: [],
    ozet: 'Su arıtma ünitesi kurulumu ve hijyen eğitimi.',
    detay: ['Bu bir taslak proje kaydıdır.'],
  },
  {
    taslak: true,
    slug: 'meslek-edindirme',
    ad: 'Kadın Girişimciler Meslek Edindirme',
    donem: '2024–25',
    odak: 'Yerel Ekonomilerin Gelişimi',
    tarih: null,
    konum: 'İstanbul',
    ortaklar: [],
    ozet: 'El sanatları atölyesi ve ardından pazara erişim desteği.',
    detay: ['Bu bir taslak proje kaydıdır.'],
  },
  {
    taslak: true,
    slug: 'polioplus-farkindalik',
    ad: 'PolioPlus Farkındalık Yürüyüşü',
    donem: '2024–25',
    odak: 'Hastalıklarla Mücadele',
    tarih: null,
    konum: 'Bakırköy Sahil',
    ortaklar: [],
    ozet: 'Dünya Polio Günü kapsamında farkındalık yürüyüşü.',
    detay: ['Bu bir taslak proje kaydıdır.'],
  },
  {
    taslak: true,
    slug: 'sahil-temizligi',
    ad: 'Sahil Şeridi Temizliği',
    donem: '2023–24',
    odak: 'Çevrenin Korunması',
    tarih: null,
    konum: 'Bakırköy Sahil',
    ortaklar: [],
    ozet: 'Rotaract kulübüyle ortak kıyı temizliği ve atık ayrıştırma çalışması.',
    detay: ['Bu bir taslak proje kaydıdır.'],
  },
  {
    taslak: true,
    slug: 'anne-cocuk-saglik-taramasi',
    ad: 'Anne ve Çocuk Sağlık Taraması',
    donem: '2023–24',
    odak: 'Anne ve Çocuk Sağlığı',
    tarih: null,
    konum: null,
    ortaklar: [],
    ozet: 'Gönüllü hekimlerle ücretsiz tarama ve bilgilendirme günü.',
    detay: ['Bu bir taslak proje kaydıdır.'],
  },
];

export const haberler: Haber[] = [
  {
    taslak: true,
    slug: 'donem-devir-teslim',
    baslik: 'Dönem Devir Teslim Toplantısı',
    tarih: '2026-07-01',
    ozet: 'Rotary yılı 1 Temmuz’da başlar; başkanlık rozeti yeni dönem başkanına devredilir.',
    govde: ['Bu bir taslak haber kaydıdır. Kulübün gerçek duyuruları geldiğinde değiştirilecektir.'],
  },
  {
    taslak: true,
    slug: 'bolge-asamblesi',
    baslik: 'UR 2420. Bölge Asamblesi',
    tarih: '2026-05-17',
    ozet: 'Bölgedeki kulüplerin dönem planlarını paylaştığı yıllık asamble.',
    govde: ['Bu bir taslak haber kaydıdır.'],
  },
  {
    taslak: true,
    slug: 'meslek-hizmetleri-semineri',
    baslik: 'Konuk Konuşmacı: Meslek Hizmetleri Semineri',
    tarih: '2026-03-10',
    ozet: 'Haftalık toplantıda meslek etiği üzerine konuk konuşma.',
    govde: ['Bu bir taslak haber kaydıdır.'],
  },
];

export const bultenler: Bulten[] = [
  { taslak: true, donem: '2026–27', sayi: 2, baslik: 'Ağustos Bülteni', tarih: '2026-08-31', pdf: null },
  { taslak: true, donem: '2026–27', sayi: 1, baslik: 'Temmuz Bülteni — Dönem Açılışı', tarih: '2026-07-31', pdf: null },
  { taslak: true, donem: '2025–26', sayi: 12, baslik: 'Haziran Bülteni — Dönem Kapanışı', tarih: '2026-06-30', pdf: null },
  { taslak: true, donem: '2025–26', sayi: 11, baslik: 'Mayıs Bülteni', tarih: '2026-05-31', pdf: null },
];

/** True while any club record is still a placeholder — drives the draft notice bar. */
export const taslakModu = true;

export function tarihTR(iso: string): string {
  return new Date(iso).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
