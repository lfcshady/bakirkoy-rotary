/**
 * Club records: terms, board, committees, projects, news, bulletins, statistics.
 *
 * ⚠️ TASLAK MODE (`_shared/taslak-mode.md`). Everything here is invented Class A
 * content written to make the demo convincing: names, project stories, dates,
 * figures. Every row is listed in `site/DEMO.md` and must be replaced with the
 * club's own material before this site goes live.
 *
 * Never invented, here or anywhere: club registration / dernek sicil numbers.
 */

import type { ImageMetadata } from 'astro';

import kulupToplanti from '../assets/kulup-toplanti.jpg';
import kulupOzet from '../assets/kulup-ozet.jpg';
import baskanFoto from '../assets/baskan.jpg';
import kurul1 from '../assets/kurul-1.jpg';
import kurul2 from '../assets/kurul-2.jpg';
import kurul3 from '../assets/kurul-3.jpg';
import kurul4 from '../assets/kurul-4.jpg';
import kurul5 from '../assets/kurul-5.jpg';
import kurul6 from '../assets/kurul-6.jpg';
import projeOkuma from '../assets/proje-okuma.jpg';
import projeSu from '../assets/proje-su.jpg';
import projeMeslek from '../assets/proje-meslek.jpg';
import projePolio from '../assets/proje-polio.jpg';
import projeSahil from '../assets/proje-sahil.jpg';
import projeAnneCocuk from '../assets/proje-anne-cocuk.jpg';
import galeriOkuma2 from '../assets/galeri-okuma-2.jpg';
import galeriOkuma3 from '../assets/galeri-okuma-3.jpg';
import galeriSu2 from '../assets/galeri-su-2.jpg';
import galeriMeslek2 from '../assets/galeri-meslek-2.jpg';
import galeriSahil2 from '../assets/galeri-sahil-2.jpg';
import galeriAnne2 from '../assets/galeri-anne-2.jpg';
import haberDevir from '../assets/haber-devir.jpg';
import haberAsamble from '../assets/haber-asamble.jpg';
import haberSeminer from '../assets/haber-seminer.jpg';
import bulten1 from '../assets/bulten-1.jpg';
import bulten2 from '../assets/bulten-2.jpg';
import bulten3 from '../assets/bulten-3.jpg';
import bulten4 from '../assets/bulten-4.jpg';

export const gorseller = { kulupToplanti, kulupOzet, baskanFoto };

export type Donem = {
  kod: string;
  baskan: string;
  meslek: string;
  gorsel: ImageMetadata;
  tema: string;
  mesaj: string[];
};

export type KurulUyesi = { ad: string; gorev: string; meslek: string; gorsel: ImageMetadata };

export type Komite = { ad: string; baskan: string; ozet: string };

export type Proje = {
  slug: string;
  ad: string;
  donem: string;
  odak: string;
  tarih: string;
  konum: string;
  ortaklar: string[];
  etki: Array<{ etiket: string; deger: string }>;
  kapak: ImageMetadata;
  galeri: ImageMetadata[];
  ozet: string;
  detay: string[];
};

export type Haber = {
  slug: string;
  baslik: string;
  tarih: string;
  kapak: ImageMetadata;
  ozet: string;
  govde: string[];
};

export type Bulten = {
  donem: string;
  sayi: number;
  baslik: string;
  tarih: string;
  kapak: ImageMetadata;
  icindekiler: string[];
};

/* ------------------------------------------------------------------ */

export const donemler: Donem[] = [
  {
    kod: '2026–27',
    baskan: 'Deniz Aksoy',
    meslek: 'İnşaat Mühendisi',
    gorsel: baskanFoto,
    tema: 'Yerelde derinleş, dünyada bağlan',
    mesaj: [
      'Bir Rotary yılı kısa görünür. On iki ay içinde bir kulüp ya birkaç güzel etkinlik yapar, ya da bulunduğu mahallede yıllarca kalacak bir şey bırakır. Bu dönem ikincisini seçtik.',
      'Üç işi büyütüyoruz: Bakırköy’deki devlet okullarında okuma alışkanlığı, kadın girişimcilere meslek edindirme, ve kıyı şeridimizin temizliği. Üçü de tek seferlik etkinlik değil, takvime bağlanmış, ölçülen ve raporlanan programlar.',
      'Kapımız açık. Toplantılarımıza konuk olmak için üye olmanız gerekmiyor — gelin, ne yaptığımızı görün, sonra karar verin.',
    ],
  },
];

export const yonetimKurulu: KurulUyesi[] = [
  { ad: 'Deniz Aksoy', gorev: 'Dönem Başkanı', meslek: 'İnşaat Mühendisi', gorsel: baskanFoto },
  { ad: 'Selin Yücel', gorev: 'Gelecek Dönem Başkanı', meslek: 'Diş Hekimi', gorsel: kurul1 },
  { ad: 'Murat Şahin', gorev: 'Geçmiş Dönem Başkanı', meslek: 'Mali Müşavir', gorsel: kurul2 },
  { ad: 'Ayşe Demirtaş', gorev: 'Sekreter', meslek: 'Eczacı', gorsel: kurul3 },
  { ad: 'Kaan Erdoğdu', gorev: 'Sayman', meslek: 'Bankacı', gorsel: kurul4 },
  { ad: 'Emre Balcı', gorev: 'Üye', meslek: 'Mimar', gorsel: kurul5 },
  { ad: 'Pelin Karataş', gorev: 'Üye', meslek: 'Avukat', gorsel: kurul6 },
];

export const komiteler: Komite[] = [
  { ad: 'Kulüp Yönetimi', baskan: 'Ayşe Demirtaş', ozet: 'Toplantı düzeni, üye ilişkileri ve kulübün günlük işleyişi.' },
  { ad: 'Üyelik', baskan: 'Emre Balcı', ozet: 'Üye adaylarının değerlendirilmesi ve kulübe uyumu.' },
  { ad: 'Hizmet Projeleri', baskan: 'Selin Yücel', ozet: 'Toplum ve uluslararası projelerin planlanması, yürütülmesi.' },
  { ad: 'Rotary Vakfı', baskan: 'Kaan Erdoğdu', ozet: 'Vakıf bağışları, hibe başvuruları ve PolioPlus desteği.' },
  { ad: 'Halkla İlişkiler', baskan: 'Pelin Karataş', ozet: 'Kulübün çalışmalarının kamuoyuna doğru biçimde aktarılması.' },
  { ad: 'Gençlik Hizmetleri', baskan: 'Murat Şahin', ozet: 'Rotaract ve Interact ile bağ, burs ve gençlik değişimi.' },
];

export const gecmisBaskanlar: Array<{ donem: string; ad: string }> = [
  { donem: '2025–26', ad: 'Murat Şahin' },
  { donem: '2024–25', ad: 'Gülşah Toprak' },
  { donem: '2023–24', ad: 'Cem Aydınlı' },
  { donem: '2022–23', ad: 'Nihal Ersoy' },
  { donem: '2021–22', ad: 'Barış Öztürk' },
  { donem: '2020–21', ad: 'Sevil Kandemir' },
  { donem: '2019–20', ad: 'Tarık Güneş' },
];

/** Home-page figures. Class A in taslak mode — invented, listed in DEMO.md. */
export const sayilar = [
  { deger: '39', etiket: 'yıllık kulüp', not: '1987’den bu yana' },
  { deger: '42', etiket: 'aktif üye', not: 'farklı meslek dallarından' },
  { deger: '180+', etiket: 'tamamlanan proje', not: 'kuruluşundan bugüne' },
  { deger: '26', etiket: 'burslu öğrenci', not: 'bu dönem' },
];

export const projeler: Proje[] = [
  {
    slug: 'okuma-atolyesi',
    ad: 'İlkokul Okuma Atölyesi',
    donem: '2025–26',
    odak: 'Eğitim ve Okuryazarlık',
    tarih: '2025-11-12',
    konum: 'Bakırköy',
    ortaklar: ['Bakırköy Rotaract Kulübü', 'Bakırköy Halk Kütüphanesi'],
    etki: [
      { etiket: 'Öğrenci', deger: '240' },
      { etiket: 'Kitap', deger: '1.850' },
      { etiket: 'Okul', deger: '3' },
    ],
    kapak: projeOkuma,
    galeri: [galeriOkuma2, galeriOkuma3],
    ozet:
      'Üç devlet ilkokulunda sınıf kitaplığı kurduk ve haftalık okuma saatlerini gönüllü üyelerimizle birlikte yürütüyoruz.',
    detay: [
      'Proje bir tespitle başladı: Bakırköy’deki üç devlet ilkokulunda sınıf kitaplığı ya yoktu ya da yıllardır yenilenmemişti. Öğretmenlerle yaptığımız görüşmelerde asıl eksiğin kitap sayısı değil, kitabın çocuğun eline düzenli olarak ulaşmaması olduğunu gördük.',
      'Bunun üzerine iki katmanlı bir program kurduk. Birinci katman fiziksel: her sınıfa yaş grubuna göre seçilmiş 60–80 kitaplık bir raf, ve okulun ortak alanında bir okuma köşesi. İkinci katman insan: kulüp üyelerimiz ve Bakırköy Rotaract’tan gönüllüler haftada bir gün okullarda okuma saatine katılıyor.',
      'Kitap seçimini Bakırköy Halk Kütüphanesi’nin uzmanlarıyla birlikte yaptık; bağış olarak gelen kitapları rastgele raflara koymak yerine seviye ve tür dengesi gözetildi. Program dönem sonunda öğretmen anketiyle değerlendiriliyor.',
    ],
  },
  {
    slug: 'temiz-su-kampanyasi',
    ad: 'Kırsal Okullarda Temiz Su',
    donem: '2025–26',
    odak: 'Temiz Su ve Hijyen',
    tarih: '2026-04-22',
    konum: 'Tekirdağ, Saray',
    ortaklar: ['UR 2420. Bölge', 'Saray Kaymakamlığı'],
    etki: [
      { etiket: 'Okul', deger: '4' },
      { etiket: 'Öğrenci', deger: '610' },
      { etiket: 'Arıtma ünitesi', deger: '4' },
    ],
    kapak: projeSu,
    galeri: [galeriSu2],
    ozet:
      'Dört köy okuluna su arıtma ünitesi kurduk; kurulumun yanında öğrencilere hijyen eğitimi verdik.',
    detay: [
      'Şebeke suyunun içilebilir olmadığı dört köy okulunda, öğrenciler günlük suyunu evden getirdiği pet şişelerden karşılıyordu. Bölge federasyonunun katkısıyla dört okula da filtreli arıtma ünitesi kuruldu.',
      'Donanım tek başına yeterli değildi: ünitelerin bakımını kimin, hangi sıklıkla yapacağı yazılı bir plana bağlandı ve okul idarelerine teslim edildi. İlk yılın filtre değişim maliyetini kulüp üstlendi.',
      'Kurulumla aynı hafta, sınıflarda el yıkama ve su hijyeni üzerine kısa oturumlar yapıldı. Çocuklara soyut bilgi yerine tek bir alışkanlık öğretmeye çalıştık.',
    ],
  },
  {
    slug: 'meslek-edindirme',
    ad: 'Kadın Girişimciler Meslek Edindirme',
    donem: '2024–25',
    odak: 'Yerel Ekonomilerin Gelişimi',
    tarih: '2025-02-18',
    konum: 'Bakırköy',
    ortaklar: ['Bakırköy Belediyesi Kadın Danışma Merkezi'],
    etki: [
      { etiket: 'Katılımcı', deger: '32' },
      { etiket: 'Kurs saati', deger: '120' },
      { etiket: 'Kendi işini kuran', deger: '9' },
    ],
    kapak: projeMeslek,
    galeri: [galeriMeslek2],
    ozet:
      'Dikiş ve el sanatları atölyesi kurduk; kursu bitirenlere pazara erişim ve satış desteği verdik.',
    detay: [
      'Meslek edindirme kurslarının bilinen sorunu şu: kurs biter, sertifika verilir, iş kurulmaz. Programı bu sorunu çözecek şekilde tasarladık — eğitim tek başına değil, satış desteğiyle birlikte veriliyor.',
      'On iki haftalık atölyenin ardından katılımcılar kulübün düzenlediği iki yerel pazarda tezgâh açtı; ürün fotoğrafı, fiyatlama ve sosyal medya üzerine kısa danışmanlık kulüp üyelerimizden geldi.',
      'Program sonunda dokuz katılımcı kendi küçük işini kurdu. Kalan katılımcılarla takip görüşmeleri sürüyor.',
    ],
  },
  {
    slug: 'polioplus-farkindalik',
    ad: 'PolioPlus Farkındalık Yürüyüşü',
    donem: '2024–25',
    odak: 'Hastalıklarla Mücadele',
    tarih: '2024-10-24',
    konum: 'Bakırköy Sahil',
    ortaklar: ['Bakırköy Rotaract Kulübü', 'Yeşilköy Rotary Kulübü'],
    etki: [
      { etiket: 'Katılımcı', deger: '310' },
      { etiket: 'Kulüp', deger: '5' },
      { etiket: 'Bağış', deger: 'PolioPlus’a aktarıldı' },
    ],
    kapak: projePolio,
    galeri: [],
    ozet:
      'Dünya Polio Günü’nde beş kulübün ortak katılımıyla sahil şeridinde farkındalık yürüyüşü düzenledik.',
    detay: [
      'Rotary’nin kırk yıldır sürdürdüğü PolioPlus programı, çocuk felcini yeryüzünden silmeye bir adım kalmışken en çok görünürlüğe ihtiyaç duyduğu noktada. 24 Ekim Dünya Polio Günü’nde Bakırköy sahilinde beş kulübün ortak yürüyüşünü düzenledik.',
      'Yürüyüş boyunca kurulan stantlarda hastalığın ne olduğu, aşının neden kesintisiz sürmesi gerektiği anlatıldı. Toplanan bağışın tamamı Rotary Vakfı üzerinden PolioPlus’a aktarıldı.',
    ],
  },
  {
    slug: 'sahil-temizligi',
    ad: 'Sahil Şeridi Temizliği',
    donem: '2023–24',
    odak: 'Çevrenin Korunması',
    tarih: '2024-06-08',
    konum: 'Bakırköy Sahil',
    ortaklar: ['Bakırköy Rotaract Kulübü'],
    etki: [
      { etiket: 'Gönüllü', deger: '85' },
      { etiket: 'Toplanan atık', deger: '640 kg' },
      { etiket: 'Kıyı şeridi', deger: '2,4 km' },
    ],
    kapak: projeSahil,
    galeri: [galeriSahil2],
    ozet:
      'Rotaract kulübümüzle birlikte 2,4 kilometrelik kıyı şeridini temizledik ve atığı ayrıştırarak geri dönüşüme verdik.',
    detay: [
      'Dünya Okyanuslar Günü’nde Bakırköy sahilinin 2,4 kilometrelik bölümünde temizlik yaptık. Sekiz beş gönüllü, sabah yedide başlayıp öğlene kadar çalıştı.',
      'Toplanan 640 kilogram atık çöpe gitmedi: cam, metal, plastik ve karışık atık olarak ayrıştırılıp geri dönüşüme verildi. Ayrıştırma verisi belediyeyle paylaşıldı.',
      'Bu artık yıllık bir program — her haziran tekrarlanıyor ve toplanan atık miktarı yıldan yıla karşılaştırılıyor.',
    ],
  },
  {
    slug: 'anne-cocuk-saglik-taramasi',
    ad: 'Anne ve Çocuk Sağlık Taraması',
    donem: '2023–24',
    odak: 'Anne ve Çocuk Sağlığı',
    tarih: '2023-12-09',
    konum: 'Bakırköy',
    ortaklar: ['Gönüllü hekimler'],
    etki: [
      { etiket: 'Tarama', deger: '190' },
      { etiket: 'Hekim', deger: '11' },
      { etiket: 'Sevk', deger: '23' },
    ],
    kapak: projeAnneCocuk,
    galeri: [galeriAnne2],
    ozet:
      'Gönüllü hekimlerle bir günlük ücretsiz tarama ve bilgilendirme merkezi kurduk.',
    detay: [
      'Kulüp üyesi ve üye yakını on bir hekimin gönüllü katılımıyla bir günlüğüne ücretsiz sağlık taraması yapıldı. Çocuk sağlığı, kadın sağlığı ve genel dahiliye başlıklarında 190 kişi muayene edildi.',
      'Taramanın asıl değeri sevklerde ortaya çıktı: ileri tetkik gereken 23 kişi ilgili hastanelere yönlendirildi ve randevu süreçleri takip edildi.',
    ],
  },
];

export const haberler: Haber[] = [
  {
    slug: 'donem-devir-teslim',
    baslik: 'Dönem Devir Teslim Toplantısı Yapıldı',
    tarih: '2026-07-02',
    kapak: haberDevir,
    ozet:
      '2026–27 Rotary yılı, başkanlık rozetinin Deniz Aksoy’a devredilmesiyle başladı.',
    govde: [
      'Rotary yılı her 1 Temmuz’da yeniden başlar. Kulübümüzün devir teslim toplantısında 2025–26 dönem başkanı Murat Şahin, görevini 2026–27 dönem başkanı Deniz Aksoy’a devretti.',
      'Geçen dönemin kapanış raporu üyelerle paylaşıldı: okuma atölyesi üç okulda tamamlandı, temiz su projesi dört köy okuluna ulaştı, kulüp bursları 26 öğrenciye verildi.',
      'Yeni dönemin teması “Yerelde derinleş, dünyada bağlan” olarak açıklandı. Dönem hedefleri arasında okuma atölyesinin iki okul daha eklenerek büyütülmesi ve bölgedeki bir kardeş kulüple ortak uluslararası proje başlatılması yer alıyor.',
    ],
  },
  {
    slug: 'bolge-asamblesi',
    baslik: 'UR 2420. Bölge Asamblesi’ndeydik',
    tarih: '2026-05-17',
    kapak: haberAsamble,
    ozet:
      'Bölgedeki kulüplerin dönem planlarını paylaştığı yıllık asambleye yönetim kurulumuzla katıldık.',
    govde: [
      'UR 2420. Bölge’nin yıllık asamblesi, bölgedeki kulüplerin gelecek dönem planlarını paylaştığı ve komite başkanlarının eğitim aldığı toplantıdır. Kulübümüz yönetim kurulunun tamamıyla katıldı.',
      'Asamblede kulübümüzün okuma atölyesi programı, bölgedeki diğer kulüplere örnek proje olarak sunuldu. Programın uygulama rehberi bölge paylaşımına açıldı.',
    ],
  },
  {
    slug: 'meslek-hizmetleri-semineri',
    baslik: 'Konuk Konuşmacı: Meslek Etiği Semineri',
    tarih: '2026-03-10',
    kapak: haberSeminer,
    ozet:
      'Haftalık toplantımızda meslek etiği ve Dört Soru Testi’nin iş hayatındaki karşılığı konuşuldu.',
    govde: [
      'Rotary’nin beş hizmet yolundan biri olan Meslek Hizmetleri, üyenin kendi mesleğini dürüstlükle icra etmesini ve mesleğini toplumun yararına kullanmasını kapsar.',
      'Bu haftaki toplantımızda konuk konuşmacımız, Dört Soru Testi’nin gündelik iş kararlarında nasıl bir filtre olarak kullanılabileceğini örneklerle anlattı. Toplantı üyelerin sorularıyla tamamlandı.',
    ],
  },
];

export const bultenler: Bulten[] = [
  {
    donem: '2026–27',
    sayi: 2,
    baslik: 'Ağustos Bülteni',
    tarih: '2026-08-31',
    kapak: bulten1,
    icindekiler: ['Dönem hedefleri', 'Yeni üye tanıtımı', 'Okuma atölyesi hazırlıkları'],
  },
  {
    donem: '2026–27',
    sayi: 1,
    baslik: 'Temmuz Bülteni — Dönem Açılışı',
    tarih: '2026-07-31',
    kapak: bulten2,
    icindekiler: ['Başkan mesajı', 'Devir teslim toplantısı', 'Komite görevlendirmeleri'],
  },
  {
    donem: '2025–26',
    sayi: 12,
    baslik: 'Haziran Bülteni — Dönem Kapanışı',
    tarih: '2026-06-30',
    kapak: bulten3,
    icindekiler: ['Dönem değerlendirmesi', 'Proje raporları', 'Sahil temizliği'],
  },
  {
    donem: '2025–26',
    sayi: 11,
    baslik: 'Mayıs Bülteni',
    tarih: '2026-05-31',
    kapak: bulten4,
    icindekiler: ['Bölge asamblesi', 'Temiz su projesi teslimi', 'Burs komitesi raporu'],
  },
];

export function tarihTR(iso: string): string {
  return new Date(iso).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
