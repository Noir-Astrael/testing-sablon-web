import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import heroImg from "@/assets/hero-shirts.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { useParallax, useReveal } from "@/hooks/useParallax";
import { BRAND_EMAIL, BRAND_LOCATION, BRAND_NAME } from "@/lib/contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink antialiased">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppLink
        variant="floating"
        message={`Halo ${BRAND_NAME}, saya ingin bertanya tentang jasa sablon.`}
      />
    </div>
  );
}

/* -------------------------------- NAV -------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled
          ? "border-black/10 bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          KARSA<span className="text-brand">.</span>
        </a>
        <div className="hidden gap-8 text-sm font-medium text-zinc-600 md:flex">
          <a href="#layanan" className="hover:text-brand">Layanan</a>
          <a href="#portfolio" className="hover:text-brand">Portfolio</a>
          <a href="#proses" className="hover:text-brand">Cara Pesan</a>
          <a href="#testimoni" className="hover:text-brand">Testimoni</a>
        </div>
        <WhatsAppLink
          message={`Halo ${BRAND_NAME}, saya tertarik untuk pesan sablon.`}
          className="!py-2 !text-xs sm:!text-sm"
        >
          Pesan Sekarang
        </WhatsAppLink>
      </div>
    </nav>
  );
}

/* -------------------------------- HERO ------------------------------- */

function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.15);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="max-w-xl">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Workshop Sablon Premium
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
            Sablon Berkualitas untuk Identitas Tanpa Batas.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg">
            Jasa sablon pakaian spesialis: sablon manual, DTF full-color, hingga
            custom jersey. Hasil rapi, tahan lama, dan proses transparan dari
            desain sampai kirim.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppLink
              message={`Halo ${BRAND_NAME}, saya mau konsultasi pesanan sablon.`}
              className="!px-6 !py-4 !text-base"
            >
              Pesan via WhatsApp
            </WhatsAppLink>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-semibold text-ink ring-1 ring-black/10 transition hover:bg-zinc-50"
            >
              Lihat Portfolio
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            <Stat label="Brand dipercaya" value="500+" />
            <Stat label="Pesanan selesai" value="50rb+" />
            <Stat label="Tahun berpengalaman" value="8+" />
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden size-24 border-l-2 border-t-2 border-brand/40 sm:block" />
          <div
            ref={ref}
            style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            className="will-change-transform"
          >
            <img
              src={heroImg}
              alt="Tumpukan kaos hasil sablon di workshop"
              width={1200}
              height={1400}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-xl border border-black/5 bg-white p-5 shadow-xl sm:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Est. 2017
            </p>
            <p className="mt-2 text-sm leading-snug text-zinc-600">
              Workshop di {BRAND_LOCATION}. Kirim ke seluruh Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        {value}
      </dt>
      <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{label}</dd>
    </div>
  );
}

/* ----------------------------- SERVICES ------------------------------ */

const services = [
  {
    title: "Sablon Manual",
    desc: "Teknik klasik dengan tinta Plastisol & Rubber untuk ketahanan maksimal di setiap serat kain.",
    tag: "Mulai Rp 25.000",
  },
  {
    title: "DTF Full Color",
    desc: "Solusi untuk desain full color dan detail rumit, tanpa minimum order warna.",
    tag: "Tanpa Minimum",
  },
  {
    title: "Custom Jersey",
    desc: "Jersey olahraga & komunitas dengan teknik sublimasi. Warna tidak luntur, bahan breathable.",
    tag: "Bahan Premium",
  },
  {
    title: "Merchandise Brand",
    desc: "Produksi kaos, hoodie, totebag untuk brand clothing lokal dengan finishing rapi.",
    tag: "Siap Kirim",
  },
];

function Services() {
  return (
    <Section id="layanan" bg="bg-white">
      <SectionHeader
        eyebrow="Layanan Kami"
        title="Pilih Teknik Terbaik untuk Produk Anda"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="group flex h-full flex-col rounded-2xl bg-canvas p-6 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="mb-6 grid size-11 place-items-center rounded-lg bg-brand-light ring-1 ring-brand/20">
                <div className="size-4 rounded-sm bg-brand transition-transform group-hover:rotate-45" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-zinc-600">
                {s.desc}
              </p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand">
                {s.tag}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- PORTFOLIO ----------------------------- */

const portfolio = [
  { src: p1, alt: "Kaos hitam sablon oranye", aspect: "aspect-[4/5]" },
  { src: p2, alt: "Hoodie custom", aspect: "aspect-square" },
  { src: p3, alt: "Polo DTF", aspect: "aspect-[2/3]" },
  { src: p4, alt: "Jersey custom", aspect: "aspect-square" },
  { src: p5, alt: "Proses sablon manual", aspect: "aspect-[4/5]" },
  { src: p6, alt: "Kaos brand terlipat", aspect: "aspect-[3/4]" },
];

function Portfolio() {
  return (
    <Section id="portfolio" bg="bg-canvas">
      <div className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 md:flex-row md:items-end">
        <div className="max-w-xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Portfolio
          </span>
          <h2 className="font-display text-3xl font-semibold text-balance text-ink sm:text-4xl">
            Hasil Karya Terbaru dari Workshop Kami
          </h2>
          <p className="mt-4 text-zinc-600">
            Lihat lebih dekat kualitas cetakan dan material yang kami gunakan
            untuk klien kami.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        <div className="space-y-3 sm:space-y-4">
          <PortfolioImg {...portfolio[0]} />
          <PortfolioImg {...portfolio[1]} />
        </div>
        <div className="space-y-3 pt-8 sm:space-y-4 md:pt-10">
          <PortfolioImg {...portfolio[2]} />
        </div>
        <div className="space-y-3 sm:space-y-4">
          <PortfolioImg {...portfolio[3]} />
          <PortfolioImg {...portfolio[4]} />
        </div>
        <div className="space-y-3 pt-12 sm:space-y-4 md:pt-14">
          <PortfolioImg {...portfolio[5]} />
        </div>
      </div>
    </Section>
  );
}

function PortfolioImg({
  src,
  alt,
  aspect,
}: {
  src: string;
  alt: string;
  aspect: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl ring-1 ring-black/5 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full ${aspect} object-cover transition-transform duration-700 hover:scale-105`}
      />
    </div>
  );
}

/* ------------------------------ PROCESS ------------------------------ */

const steps = [
  {
    n: "01",
    title: "Diskusi Desain",
    desc: "Konsultasi desain, bahan, dan jumlah pesanan via WhatsApp dengan admin kami.",
  },
  {
    n: "02",
    title: "Penawaran Harga",
    desc: "Estimasi biaya transparan sesuai kuantitas dan tingkat kesulitan desain.",
  },
  {
    n: "03",
    title: "Produksi",
    desc: "Pengerjaan oleh tenaga ahli dengan kontrol kualitas berlapis di setiap tahap.",
  },
  {
    n: "04",
    title: "Pengiriman",
    desc: "Pesanan dikemas rapi dan dikirim ke seluruh wilayah Indonesia.",
  },
];

function Process() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.08);
  return (
    <section id="proses" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div
        ref={ref}
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.06] will-change-transform"
        aria-hidden="true"
      >
        <div className="mx-auto h-full max-w-7xl px-6">
          <p className="font-display text-[22vw] font-bold leading-none tracking-tighter text-brand-light">
            SABLON
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/80">
            Cara Pesan
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-balance sm:text-4xl">
            Proses transparan dari diskusi desain sampai kirim ke rumah Anda.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div>
                <div className="font-display text-5xl font-semibold text-brand">
                  {s.n}
                </div>
                <h4 className="mt-4 text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS ---------------------------- */

const testimonials = [
  {
    name: "Rizky A.",
    role: "Owner Brand Streetwear",
    quote:
      "Hasil sablonnya rapi, warna tajam, dan awet dicuci berkali-kali. Komunikasi admin juga cepat dan detail.",
  },
  {
    name: "Komunitas Lari Bandung",
    role: "Pesanan Jersey 80 pcs",
    quote:
      "Deadline mepet tetap ditepati. Bahan jersey nyaman dipakai lari jauh. Bakal repeat order.",
  },
  {
    name: "Dina M.",
    role: "Event Organizer",
    quote:
      "Kami order kaos panitia berkali-kali, konsisten kualitasnya. Harga juga fair untuk hasil sekelas ini.",
  },
];

function Testimonials() {
  return (
    <Section id="testimoni" bg="bg-white">
      <SectionHeader
        eyebrow="Testimoni"
        title="Dipercaya oleh brand, komunitas, dan pelanggan setia."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="flex h-full flex-col justify-between rounded-2xl bg-canvas p-6 ring-1 ring-black/5 sm:p-8">
              <blockquote className="text-base leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-black/10 pt-4">
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-zinc-500">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- CTA -------------------------------- */

function FinalCTA() {
  return (
    <section className="bg-canvas py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-brand/15 bg-gradient-to-br from-brand-light to-canvas p-8 text-center shadow-sm sm:p-14">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-balance text-ink sm:text-4xl">
              Siap menghidupkan desain Anda?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-600">
              Konsultasi gratis dan penawaran khusus untuk komunitas atau brand
              clothing. Balasan cepat via WhatsApp.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppLink
                message={`Halo ${BRAND_NAME}, saya ingin konsultasi pesanan sablon.`}
                className="!px-7 !py-4 !text-base"
              >
                Chat WhatsApp Sekarang
              </WhatsAppLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white pb-8 pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 md:grid-cols-3">
        <div className="max-w-sm">
          <div className="font-display text-xl font-semibold text-ink">
            KARSA<span className="text-brand">.</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            Workshop sablon profesional yang berdedikasi pada kualitas hasil
            cetak dan kepuasan pelanggan di setiap jahitan.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink">
            Workshop
          </h4>
          <p className="text-sm text-zinc-600">Jl. Sablon Kreasi No. 42</p>
          <p className="text-sm text-zinc-600">{BRAND_LOCATION}</p>
          <p className="mt-2 text-sm text-zinc-600">
            Senin – Sabtu, 09.00 – 18.00
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink">
            Kontak
          </h4>
          <p className="text-sm text-zinc-600">{BRAND_EMAIL}</p>
          <div className="mt-3">
            <WhatsAppLink variant="inline">Chat via WhatsApp</WhatsAppLink>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-black/10 px-5 pt-6 text-xs text-zinc-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {BRAND_NAME}. Hak cipta dilindungi.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-brand">Instagram</a>
          <a href="#" className="hover:text-brand">TikTok</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------- PRIMITIVES ----------------------------- */

function Section({
  id,
  bg,
  children,
}: {
  id?: string;
  bg: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${bg} py-20 sm:py-28`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6">{children}</div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold text-balance text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
