/**
 * Single source for club identity, contact details and links.
 * Footer, contact page, membership form and schema.org all read from here.
 *
 * ⚠️ TASLAK MODE (`_shared/taslak-mode.md`). Contact values below are the
 * repo's standard placeholders — they belong to no real person or business.
 * They are replaced wholesale when the club supplies its own.
 *
 * Class C fields (kulüp tescil / dernek sicil numbers) are deliberately absent
 * and are never invented, not even in a demo.
 */

export const taslak = true;

export const site = {
  name: 'Bakırköy Rotary Kulübü',
  shortName: 'Bakırköy Rotary',
  sehir: 'Bakırköy, İstanbul',
  bolge: 'UR 2420. Bölge',

  // Class A in taslak mode — plausible, and listed in DEMO.md.
  kurulusYili: '1987',
  uyeSayisi: '42',

  // Class B — standard placeholders, never a reachable number or address.
  phone: '+905555555555',
  phoneDisplay: '0555 555 55 55',
  phoneAlt: '0212 555 55 55',
  whatsapp: '905555555555',
  email: 'ornek@ornekfirma.com',

  address: {
    street: 'Örnek Mah. Örnek Cad. No: 1',
    locality: 'Bakırköy',
    region: 'İstanbul',
    postalCode: '',
  },

  // District-level pin, not a real business listing.
  maps: {
    url: 'https://www.google.com/maps/place/Bak%C4%B1rk%C3%B6y,+%C4%B0stanbul/@40.9819,28.8672,14z',
    lat: 40.9819,
    lng: 28.8672,
  },

  toplanti: {
    gun: 'Perşembe',
    saat: '20:00',
    yer: 'Örnek Otel, Bakırköy',
    adres: 'Örnek Mah. Örnek Cad. No: 1',
    konukKabul: true,
  },

  // Platform home pages — never a real account.
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ] as Array<{ label: string; href: string | null }>,

  riUrl: 'https://www.rotary.org',
  federasyonUrl: 'https://rotary.org.tr',
  bolgeUrl: 'https://www.rotary2420.org/tr',
} as const;

/** `mailto:` with subject and body pre-filled, or null if there is no address. */
export function mailtoLink(konu?: string, govde?: string): string | null {
  if (!site.email) return null;
  const params = new URLSearchParams();
  if (konu) params.set('subject', konu);
  if (govde) params.set('body', govde);
  const qs = params.toString();
  return `mailto:${site.email}${qs ? `?${qs}` : ''}`;
}

/** `wa.me` with the message pre-filled, or null if there is no number. */
export function whatsappLink(mesaj?: string): string | null {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}${mesaj ? `?text=${encodeURIComponent(mesaj)}` : ''}`;
}
