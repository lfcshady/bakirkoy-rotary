/**
 * Single source of truth for the club's identity, contact details and links.
 * Footer, contact page, schema.org and every CTA read from here — that is what
 * keeps NAP consistent.
 *
 * `null` means: the club has not supplied it yet. Components render a visible
 * placeholder for a null value and never invent one.
 */

export const site = {
  name: 'Bakırköy Rotary Kulübü',
  shortName: 'Bakırköy Rotary',
  bolge: 'UR 2420. Bölge',
  bolgeUrl: 'https://www.rotary2420.org/tr',
  federasyonUrl: 'https://rotary.org.tr',
  riUrl: 'https://www.rotary.org/tr',
  sehir: 'Bakırköy, İstanbul',

  // TODO(brief): every null below waits on the club.
  kurulusYili: null as string | null,
  kulupNo: null as string | null,
  uyeSayisi: null as number | null,

  phone: null as string | null,
  phoneDisplay: null as string | null,
  whatsapp: null as string | null,
  email: null as string | null,

  address: {
    street: null as string | null,
    locality: 'Bakırköy',
    region: 'İstanbul',
    postalCode: null as string | null,
  },

  maps: {
    url: null as string | null,
    lat: null as number | null,
    lng: null as number | null,
  },

  toplanti: {
    gun: null as string | null,
    saat: null as string | null,
    yer: null as string | null,
    adres: null as string | null,
    konukKabul: true,
  },

  social: [
    { label: 'Instagram', href: null as string | null },
    { label: 'Facebook', href: null as string | null },
    { label: 'LinkedIn', href: null as string | null },
  ],
} as const;

/** Builds a `wa.me` link with a pre-filled message, or null if there is no number. */
export function whatsappLink(mesaj: string): string | null {
  if (!site.whatsapp) return null;
  return `https://wa.me/${String(site.whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent(mesaj)}`;
}

/** Builds a mailto: with subject and body, or null if there is no address. */
export function mailtoLink(konu: string, govde = ''): string | null {
  if (!site.email) return null;
  const q = new URLSearchParams({ subject: konu, ...(govde ? { body: govde } : {}) });
  return `mailto:${site.email}?${q.toString()}`;
}
