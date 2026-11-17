import { useEffect, useState } from "react";
import {
  Truck,
  Package,
  Users,
  ShieldCheck,
  Home as HomeIcon,
  Phone,
  Mail,
  Star,
  Check,
  ChevronDown,
  Menu,
  X,
  Building2,
  Boxes,
  Zap,
  School,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Removals", href: "/moving" },
  { label: "Cleaning", href: "/cleaning" },
  { label: "Contact", href: "/contact" },
];

const STATS = [
  { value: "4.9★", label: "Average Rating" },
];

const SERVICES = [
  {
    icon: Package,
    title: "Specialized Packing",
    body: "Double-walled boxes, custom crates, and tissue wrapping protect your fragile valuables from scratches or breakage.",
  },
  {
    icon: Users,
    title: "Expert Loading",
    body: "Our trained crew ensures heavy assets are safely hoisted, balanced, and strapped down inside custom moving vehicles.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Transportation",
    body: "Closed container trucks driven by certified personnel guard your cargo from climate, dust, and shocks.",
  },
  {
    icon: HomeIcon,
    title: "Interior Placement",
    body: "We don't just drop boxes. We unpack and arrange every furniture item exactly where you want it in your new home.",
  },
];

const ALL_SERVICES = [
  { icon: HomeIcon, title: "Residential Moving", body: "Apartments and townhouse relocations." },
  { icon: Building2, title: "Office & Commercial", body: "Corporate offices, IT hardware, and workspaces." },
  { icon: Boxes, title: "Moving & Storage", body: "Secure, climate-controlled storage facilities." },
  { icon: Zap, title: "Emergency Moving", body: "Same-day or next-day express relocations." },
];

const CLEANING_SERVICES = [
  {
    icon: School,
    title: "Schools, Nurseries & Colleges",
    body: "Reliable cleaning for classrooms, shared spaces, washrooms, and other learning environments.",
  },
  {
    icon: Building2,
    title: "Office Buildings",
    body: "Keep workspaces, meeting rooms, kitchens, and common areas clean and welcoming.",
  },
  {
    icon: Stethoscope,
    title: "Medical Surgeries",
    body: "Cleaning for reception areas, waiting rooms, and clinical spaces, arranged around your site's requirements.",
  },
];

const STEPS = [
  { n: "01", title: "Book Your Move", body: "Get an instant quote online or request a free survey of your London or Essex property." },
  { n: "02", title: "We Pack for You", body: "Our experienced crew arrives with premium packing materials and packs everything safely." },
  { n: "03", title: "Secure Transport", body: "Your belongings travel inside our closed container fleet." },
  { n: "04", title: "Place & Unpack", body: "We place and arrange your furniture in your new home, taking away the packaging debris." },
];

const REVIEWS = [
  {
    name: "Robert Chen",
    role: "London Resident",
    stars: 5,
    quote: "Extremely professional. They handled my premium sound system and glass cabinets with absolute care. Highly recommended for premium moves!",
  },
  {
    name: "Amna Al-Shehhi",
    role: "Essex Resident",
    stars: 5,
    quote: "Moving day is always tough, but they made our London to Essex transition smooth and fast. The quoted cost was clear and fair.",
  },
  {
    name: "Michael Peterson",
    role: "Business Owner",
    stars: 5,
    quote: "They moved our corporate IT equipment over the weekend. Minimal downtime, clean setup, and excellent care. Terrific job!",
  },
];

const PROPERTY_SIZES = [
  "Studio",
  "1 Bedroom",
  "2 Bedroom",
  "3 Bedroom",
  "4 Bedroom",
  "5 Bedroom",
  "6 Bedroom",
  "7 Bedroom",
  "8 Bedroom",
  "9 Bedroom",
  "10 Bedroom",
  "Office",
];

function Logo() {
  return (
    <a href="/" className="flex items-center" aria-label="Light touch removals home">
      <img src="/Light touch removals.jpeg" alt="Light touch removals Logo" className="h-12 w-auto" />
    </a>
  );
}

function PageHero({ eyebrow, title, description, actionLabel, actionHref, icon: Icon }) {
  return (
    <section className="bg-[#F4F8FC]">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-[1fr_auto] md:py-16">
        <div>
          <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-[34px] font-extrabold leading-tight text-[#0B1D3A] sm:text-[42px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[#5B6785]">{description}</p>
          <a
            href={actionHref}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1E7FE0] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-[#1468BE]"
          >
            {actionLabel} →
          </a>
        </div>
        <div className="hidden h-36 w-36 place-items-center rounded-[2rem] border-8 border-white bg-[#E4F0FD] shadow-lg md:grid">
          <Icon className="h-16 w-16 text-[#1E7FE0]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const page = window.location.pathname.replace(/\/+$/, "") || "/";
  const pageHero = {
    "/moving": {
      eyebrow: "MOVING & REMOVALS",
      title: "A smoother move starts here",
      description: "From careful packing to safe transport and placement, our team is ready to help with your next move.",
      actionLabel: "Get a Free Quote",
      actionHref: "/contact",
      icon: Truck,
    },
    "/cleaning": {
      eyebrow: "COMMERCIAL CLEANING",
      title: "A cleaner space for your team and visitors",
      description: "Flexible cleaning for schools, nurseries, colleges, office buildings, and medical surgeries.",
      actionLabel: "Discuss Your Cleaning Needs",
      actionHref: "/contact",
      icon: Sparkles,
    },
    "/contact": {
      eyebrow: "GET IN TOUCH",
      title: "How can we help?",
      description: "Tell us about your move or cleaning requirements and our team will be in touch.",
      actionLabel: "Call Us",
      actionHref: "tel:+447496876085",
      icon: Phone,
    },
  }[page];
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    size: "",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const titles = {
      "/": "Light touch removals — Moving with care across the UK",
      "/moving": "Moving & Removals | Light touch removals",
      "/cleaning": "Commercial Cleaning | Light touch removals",
      "/contact": "Contact & Get a Quote | Light touch removals",
    };
    document.title = titles[page] || "Page Not Found | Light touch removals";
  }, [page]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setSubmitError("");
    setLoading(true);

    try {
      const response = await fetch("https://easy-move-backend-vrw8.onrender.com/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit your request.");
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-[Inter,ui-sans-serif] text-[#12203F] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#EDF1F7] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14.5px] font-medium text-[#4B5875] transition-colors hover:text-[#0B1D3A]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="/contact"
            className="hidden rounded-full bg-[#1E7FE0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1468BE] md:block"
          >
            Get in Touch
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#EDF1F7] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[14.5px] font-medium text-[#4B5875]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#1E7FE0] px-5 py-2.5 text-center text-[14px] font-semibold text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
      {pageHero && <PageHero {...pageHero} />}
      {page === "/" && (
      <>
      {/* Hero */}
      <section id="home" className="bg-[#F4F8FC]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              LONDON & ESSEX MOVERS
            </span>
            <h1 className="mt-5 text-[38px] font-extrabold leading-[1.12] text-[#0B1D3A] sm:text-[46px]">
              Moving with
              <br />
              <span className="text-[#1E7FE0]">Light touch removals</span>
              <br />
              across England
            </h1>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-[#5B6785]">
              Light touch removals handles everything — specialized packing, secure loading, safe transportation, and
              precise placement — so you can enjoy a smooth transition.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-[20px] font-extrabold text-[#0B1D3A] sm:text-[22px]">{s.value}</div>
                  <div className="mt-0.5 text-[11.5px] leading-tight text-[#8792A8]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-[#1E7FE0] px-6 py-3 text-[14.5px] font-semibold text-white shadow-sm shadow-blue-200 transition-colors hover:bg-[#1468BE]"
              >
                Get Your Free Quote →
              </a>
              <a
                href="tel:+447496876085"
                className="flex items-center gap-2 rounded-full border border-[#DCE3EE] bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0B1D3A] transition-colors hover:bg-[#F4F8FC]"
              >
                <Phone className="h-4 w-4" /> Call Us: +44 7496 876085
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#5B6785]">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#1E7FE0]" /> Fully Insured
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#1E7FE0]" /> Expert Packers
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[40%] border-8 border-white shadow-xl">
              <img
                src="/Light touch removals.jpeg"
                alt="Light touch removals logo"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <div className="leading-tight">
                <div className="text-[12.5px] font-bold text-[#0B1D3A]">5.0 Rating</div>
                <div className="text-[10.5px] text-[#8792A8]">Rated by Customers</div>
              </div>
            </div>
            <div className="absolute -bottom-2 right-0 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg">
              <Truck className="h-4 w-4 text-[#1E7FE0]" />
              <div className="leading-tight">
                <div className="text-[12.5px] font-bold text-[#0B1D3A]">Active Fleet</div>
                <div className="text-[10.5px] text-[#8792A8]">London & Essex</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-2">
        {[
          {
            title: "Moving & Removals",
            body: "Home and office moves with packing, careful transport, and placement.",
            href: "/moving",
            link: "Explore removals",
          },
          {
            title: "Commercial Cleaning",
            body: "Cleaning for schools, nurseries, colleges, office buildings, and medical surgeries.",
            href: "/cleaning",
            link: "Explore cleaning",
          },
        ].map((service) => (
          <a
            key={service.title}
            href={service.href}
            className="rounded-2xl border border-[#EDF1F7] bg-white p-7 transition-colors hover:border-[#D6E6FA]"
          >
            <h2 className="text-[20px] font-bold text-[#0B1D3A]">{service.title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[#5B6785]">{service.body}</p>
            <span className="mt-5 inline-block text-[14px] font-semibold text-[#1E7FE0]">{service.link} →</span>
          </a>
        ))}
      </section>
      </>
      )}

      {/* Services */}
      {page === "/moving" && (
      <section id="services" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
            OUR SERVICES
          </span>
          <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">
            End-to-End Moving Solutions
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
            From the first box packed to the last piece of furniture placed — we handle everything with absolute
            care.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#EDF1F7] bg-[#FAFBFD] p-7 transition-colors hover:border-[#D6E6FA]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#E4F0FD]">
                <s.icon className="h-5 w-5 text-[#1E7FE0]" />
              </div>
              <h3 className="mt-5 text-[16.5px] font-bold text-[#0B1D3A]">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5B6785]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-[19px] font-bold text-[#0B1D3A]">Explore All Moving Services</h3>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-3 rounded-xl border border-[#EDF1F7] px-5 py-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1E7FE0]" />
                <div>
                  <div className="text-[14px] font-semibold text-[#0B1D3A]">{s.title}</div>
                  <div className="mt-0.5 text-[12.5px] leading-snug text-[#8792A8]">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {page === "/cleaning" && (
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[26px] font-extrabold text-[#0B1D3A] sm:text-[30px]">
              Cleaning for Workplaces & Institutions
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
              Discuss your site and schedule with us to find a cleaning service that suits your needs.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {CLEANING_SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#EDF1F7] bg-[#FAFBFD] p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#E4F0FD]">
                  <s.icon className="h-5 w-5 text-[#1E7FE0]" />
                </div>
                <h2 className="mt-5 text-[16.5px] font-bold text-[#0B1D3A]">{s.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6785]">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:infolightouchmove@gmail.com?subject=Commercial%20Cleaning%20Enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E7FE0] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-[#1468BE]"
            >
              <Sparkles className="h-4 w-4" /> Ask About Cleaning
            </a>
            <a
              href="/contact"
              className="rounded-full border border-[#DCE3EE] bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0B1D3A] transition-colors hover:bg-[#F4F8FC]"
            >
              Contact Us
            </a>
          </div>
        </section>
      )}

      {/* Process */}
      {page === "/moving" && (
      <section id="how-it-works" className="bg-[#F4F8FC] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              EASY PROCESS
            </span>
            <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">Your Move in 4 Simple Steps</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
              We've streamlined every stage to keep your relocation completely stress-free.
            </p>
          </div>

          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[#D6E2F2] lg:block" />
            {STEPS.map((s) => (
              <div key={s.n} className="relative text-center">
                <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#1E7FE0] text-[15px] font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-5 text-[15.5px] font-bold text-[#0B1D3A]">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[200px] text-[13px] leading-relaxed text-[#5B6785]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Quote form */}
      {page === "/contact" && (
      <section id="quote" className="bg-[#F4F8FC] py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              GET A QUOTE
            </span>
            <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">Tell Us What You Need</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
              Share your requirements and contact details, and we'll get back to you about your request.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-3xl border border-[#EDF1F7] bg-white p-7 shadow-sm sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name *">
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Enter full name"
                  className="input"
                />
              </Field>
              <Field label="Phone Number *">
                <input
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="e.g., +44 7496 876085"
                  className="input"
                />
              </Field>
              <Field label="Moving From *">
                <input
                  required
                  value={form.from}
                  onChange={update("from")}
                  placeholder="Area or building in England"
                  className="input"
                />
              </Field>
              <Field label="Moving To *">
                <input
                  required
                  value={form.to}
                  onChange={update("to")}
                  placeholder="Destination area/city"
                  className="input"
                />
              </Field>
              <Field label="Property Size *">
                <div className="relative">
                  <select
                    required
                    value={form.size}
                    onChange={update("size")}
                    className="input appearance-none pr-9"
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    {PROPERTY_SIZES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8792A8]" />
                </div>
              </Field>
              <Field label="Preferred Move Date">
                <input type="date" value={form.date} onChange={update("date")} className="input" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Special Requirements (Optional)">
                <textarea
                  value={form.notes}
                  onChange={update("notes")}
                  placeholder="Any fragile items, heavy pianos, storage needs, or specific timing instructions..."
                  rows={4}
                  className="input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-full bg-[#1E7FE0] py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1468BE] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
            >
              {loading ? "Sending..." : submitted ? "Request Sent ✓" : "Get My Free Estimate Now"}
            </button>
            {submitError && <p className="mt-4 text-[12.5px] text-red-600">{submitError}</p>}
            <p className="mt-4 flex items-center gap-1.5 text-[12.5px] text-[#8792A8]">
              🔒 Your details are protected and will never be shared with third parties.
            </p>
          </form>
        </div>
      </section>
      )}



      {/* Reviews */}
      {page === "/" && (
      <section id="reviews" className="bg-[#F4F8FC] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              CUSTOMER STORIES
            </span>
            <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">What Our Customers Say</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
              Read authentic reviews from families and business owners across London and Essex.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl border border-[#EDF1F7] bg-white p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-[#3F4A63]">"{r.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#4C93E0] to-[#1E4E8C]" />
                  <div className="leading-tight">
                    <div className="text-[13.5px] font-semibold text-[#0B1D3A]">{r.name}</div>
                    <div className="text-[11.5px] text-[#8792A8]">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA */}
      {page === "/" && (
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
            GET STARTED NOW
          </span>
          <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">Ready to Make Your Move Easy?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
            Contact us today to schedule your slot or request a free onsite survey.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            { icon: Phone, label: "Call Us Free", value: "+44 7496 876085", href: "tel:+447496876085" },
            { icon: Mail, label: "Email Us", value: "infolightouchmove@gmail.com", href: "mailto:infolightouchmove@gmail.com" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="rounded-2xl border border-[#EDF1F7] bg-[#FAFBFD] p-7 text-center transition-colors hover:border-[#D6E6FA] hover:bg-[#F5F9FF]"
            >
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-[#E4F0FD]">
                <c.icon className="h-5 w-5 text-[#1E7FE0]" />
              </div>
              <div className="mt-4 text-[13px] font-medium text-[#8792A8]">{c.label}</div>
              <div className="mt-1 text-[15px] font-bold text-[#0B1D3A]">{c.value}</div>
            </a>
          ))}
        </div>

      </section>
      )}

      {!["/", "/moving", "/cleaning", "/contact"].includes(page) && (
        <section className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h1 className="text-[32px] font-extrabold text-[#0B1D3A]">Page not found</h1>
          <p className="mt-3 text-[15px] text-[#5B6785]">The page you're looking for doesn't exist.</p>
          <a href="/" className="mt-6 inline-block font-semibold text-[#1E7FE0]">Return home →</a>
        </section>
      )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1D3A] text-[#B9C4DC]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed">
                Providing removals and commercial cleaning services across London and Essex, England.
              </p>
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-white">Moving Services</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li><a href="/moving" className="hover:text-white">Residential Moving</a></li>
                <li><a href="/moving" className="hover:text-white">Office & Corporate Moving</a></li>
                <li><a href="/moving" className="hover:text-white">Climate Storage</a></li>
                <li><a href="/moving" className="hover:text-white">Specialized Packing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-white">Cleaning Services</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li><a href="/cleaning" className="hover:text-white">Schools, Nurseries & Colleges</a></li>
                <li><a href="/cleaning" className="hover:text-white">Office Buildings</a></li>
                <li><a href="/cleaning" className="hover:text-white">Medical Surgeries</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-white">Service Areas</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li>London</li>
                <li>Essex</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-white">Contact Us</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> <a href="tel:+447496876085">+44 7496 876085</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> <a href="mailto:infolightouchmove@gmail.com">infolightouchmove@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[12px] sm:flex-row">
            <span>© 2026 Light touch removals England. All rights reserved.</span>
            <div className="flex gap-5">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        section[id] {
          scroll-margin-top: 76px;
        }
        .input {
          width: 100%;
          border: 1px solid #E1E7F0;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 14px;
          color: #12203F;
          background: #fff;
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus {
          border-color: #1E7FE0;
        }
        .input::placeholder {
          color: #A3ADC2;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-[#3F4A63]">{label}</span>
      {children}
    </label>
  );
}
