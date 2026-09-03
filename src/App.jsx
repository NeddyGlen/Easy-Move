import { useState } from "react";
import LogoImg from "./assets/Logo.png";
import {
  Truck,
  Package,
  Users,
  ShieldCheck,
  Home as HomeIcon,
  Phone,
  Mail,
  MapPin,
  Star,
  Check,
  ChevronDown,
  Menu,
  X,
  Building2,
  Boxes,
  Globe2,
  Zap,
  Gem,
  Quote,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Locations", href: "#locations" },
  { label: "Reviews", href: "#reviews" },
];

const STATS = [
  { value: "10,000+", label: "Successful Moves" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Damage-Free" },
  { value: "24/7", label: "Support Team" },
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
    body: "GPS-tracked closed container trucks driven by certified personnel guard your cargo from climate, dust, and shocks.",
  },
  {
    icon: HomeIcon,
    title: "Interior Placement",
    body: "We don't just drop boxes. We unpack and arrange every furniture item exactly where you want it in your new home.",
  },
];

const ALL_SERVICES = [
  { icon: HomeIcon, title: "Residential Moving", body: "Apartments, villas, and townhouse relocations." },
  { icon: Building2, title: "Office & Commercial", body: "Corporate offices, IT hardware, and workspaces." },
  { icon: Boxes, title: "Moving & Storage", body: "Secure, climate-controlled storage facilities." },
  { icon: Globe2, title: "International Relocation", body: "Expert customs handling and global transport." },
  { icon: Zap, title: "Emergency Moving", body: "Same-day or next-day express relocations." },
  { icon: Gem, title: "Fine Art & Antique", body: "Special white-glove museum-grade handling." },
];

const STEPS = [
  { n: "01", title: "Book Your Move", body: "Get an instant quote online or request a free survey of your villa or apartment." },
  { n: "02", title: "We Pack for You", body: "Our experienced crew arrives with premium packing materials and packs everything safely." },
  { n: "03", title: "Secure Transport", body: "Your belongings travel inside our closed container, GPS-tracked fleet." },
  { n: "04", title: "Place & Unpack", body: "We assemble and arrange your furniture in your new home, taking away the packaging debris." },
];

const LOCATIONS = [
  {
    title: "London Movers",
    body: "Full local moves across top neighborhoods with dedicated flat and house teams.",
    tags: ["Central London", "East London", "West London", "North London", "South London", "Canary Wharf"],
    cta: "Book London Movers",
  },
  {
    title: "Manchester Relocation",
    body: "Inter-city moving specialists connecting Manchester and surrounding areas hourly.",
    tags: ["Manchester City Centre", "Salford", "Stockport", "Trafford", "Oldham"],
    cta: "Book Manchester Movers",
  },
  {
    title: "National Coverage",
    body: "Reliable freight, delivery, and storage services covering all UK regions.",
    tags: ["Birmingham", "Leeds", "Liverpool", "Bristol", "Edinburgh", "Cardiff"],
    cta: "Inquire Service Area",
  },
];

const PROMISE = [
  { title: "Full Packing & Unpacking Included", body: "No need to stress over boxes. We label and wrap every item, and organize your new place completely." },
  { title: "No Hidden Costs or Toll Surprises", body: "Our upfront quote covers Salik, transport fees, fuel, crew labor, and packing materials." },
  { title: "Comprehensive Transit Insurance", body: "Accidents are rare, but we fully cover and insure your items against unexpected damages during transit." },
];

const REVIEWS = [
  {
    name: "Robert Chen",
    role: "Marina Resident",
    stars: 5,
    quote: "Extremely professional. They handled my premium sound system and glass cabinets with absolute care. Highly recommended for premium moves!",
  },
  {
    name: "Amna Al-Shehhi",
    role: "Khalifa City Resident",
    stars: 5,
    quote: "Moving state is always tough but they made our Dubai to Abu Dhabi transition smooth and fast. The cost beat the quote perfectly.",
  },
  {
    name: "Michael Peterson",
    role: "Business Owner",
    stars: 5,
    quote: "They moved our corporate IT equipment over the weekend. Minimal downtime, zero damage, and clean setup. Terrific job!",
  },
];

const PROPERTY_SIZES = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "Villa", "Office"];

function Logo() {
  return (
    <div className="flex items-center">
      <img src={LogoImg} alt="Easy Move Logo" className="h-10 w-auto" />
    </div>
  );
}

export default function App() {
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
  const [submitError, setSubmitError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit your request.");
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message);
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
            href="#quote"
            className="hidden rounded-full bg-[#1E7FE0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1468BE] md:block"
          >
            Get Free Quote
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
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#1E7FE0] px-5 py-2.5 text-center text-[14px] font-semibold text-white"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="bg-[#F4F8FC]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              THE UK'S TRUSTED MOVERS
            </span>
            <h1 className="mt-5 text-[38px] font-extrabold leading-[1.12] text-[#0B1D3A] sm:text-[46px]">
              Moving Made
              <br />
              <span className="text-[#1E7FE0]">Easy</span> Across
              <br />
              UK
            </h1>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-[#5B6785]">
              Easy Move handles everything — specialized packing, secure loading, safe transportation, and precise
              placement — so you can enjoy a completely hands-free transition.
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
              <button className="rounded-full bg-[#1E7FE0] px-6 py-3 text-[14.5px] font-semibold text-white shadow-sm shadow-blue-200 transition-colors hover:bg-[#1468BE]">
                Get Your Free Quote →
              </button>
              <button className="flex items-center gap-2 rounded-full border border-[#DCE3EE] bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0B1D3A] transition-colors hover:bg-[#F4F8FC]">
                <Phone className="h-4 w-4" /> Call Us: 800-MOVE
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#5B6785]">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#1E7FE0]" /> Fully Insured
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#1E7FE0]" /> Expert Packers
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#1E7FE0]" /> No Hidden Fees
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[40%] border-8 border-white shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-[#2A4A7A] to-[#0B1D3A]" />
            </div>
            <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <div className="leading-tight">
                <div className="text-[12.5px] font-bold text-[#0B1D3A]">5.0 Rating</div>
                <div className="text-[10.5px] text-[#8792A8]">Trustpilot Verified</div>
              </div>
            </div>
            <div className="absolute -bottom-2 right-0 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg">
              <Truck className="h-4 w-4 text-[#1E7FE0]" />
              <div className="leading-tight">
                <div className="text-[12.5px] font-bold text-[#0B1D3A]">Active Fleet</div>
                <div className="text-[10.5px] text-[#8792A8]">All UK Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
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

      {/* Process */}
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

      {/* Locations */}
      <section id="locations" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
            WE ARE EVERYWHERE
          </span>
          <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">We Move Across All UK Areas</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
            Whether you are moving next door or across different regions, Easy Move guarantees a seamless transfer.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <div key={loc.title} className="flex flex-col rounded-2xl border border-[#EDF1F7] bg-[#FAFBFD] p-7">
              <h3 className="text-[16.5px] font-bold text-[#0B1D3A]">{loc.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5B6785]">{loc.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {loc.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white px-2.5 py-1 text-[11.5px] font-medium text-[#4B5875] ring-1 ring-[#EDF1F7]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button className="mt-6 w-fit rounded-full bg-[#1E7FE0] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#1468BE]">
                {loc.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-[#F4F8FC] py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              GET A QUOTE
            </span>
            <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">Get Your Free Moving Quote</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
              Tell us about your upcoming move and get a precise, customized estimate within 15 minutes.
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
                  placeholder="e.g., +971 50 000 0000"
                  className="input"
                />
              </Field>
              <Field label="Moving From *">
                <input
                  required
                  value={form.from}
                  onChange={update("from")}
                  placeholder="Area or building in UK"
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
              className="mt-6 w-full rounded-full bg-[#1E7FE0] py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1468BE] sm:w-auto sm:px-8"
            >
              {submitted ? "Request Sent ✓" : "Get My Free Estimate Now"}
            </button>
            {submitError && <p className="mt-4 text-[12.5px] text-red-600">{submitError}</p>}
            <p className="mt-4 flex items-center gap-1.5 text-[12.5px] text-[#8792A8]">
              🔒 Your details are protected and will never be shared with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* Promise */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              THE EASY MOVE PROMISE
            </span>
            <h2 className="mt-4 text-[28px] font-extrabold leading-tight text-[#0B1D3A] sm:text-[32px]">
              A Completely Hands-Off Moving Experience
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5B6785]">
              Sit back and relax. Our certified team handles every heavy lifting and coordination detail from start
              to finish.
            </p>

            <div className="mt-7 space-y-5">
              {PROMISE.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#E7F6EC]">
                    <Check className="h-3 w-3 text-[#22A05A]" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-[#0B1D3A]">{p.title}</div>
                    <div className="mt-1 text-[13.5px] leading-relaxed text-[#5B6785]">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-5 rounded-2xl border border-[#EDF1F7] bg-[#FAFBFD] p-7">
              <div className="text-[32px] font-extrabold text-[#1E7FE0]">100%</div>
              <div>
                <div className="text-[14.5px] font-bold text-[#0B1D3A]">Stress-Free Guarantee</div>
                <div className="mt-1 text-[13px] leading-relaxed text-[#5B6785]">
                  Complete refund if you are not fully satisfied with our service quality.
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0B1D3A] p-7 text-white">
              <Quote className="h-6 w-6 text-[#4C93E0]" />
              <p className="mt-3 text-[14.5px] italic leading-relaxed text-[#D7E1F2]">
                "The crew from Easy Move unpacked our 3-bedroom villa in Dubai Hills in less than 5 hours.
                Outstanding service, completely hands-off as advertised!"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#4C93E0] to-[#1E4E8C]" />
                <div className="leading-tight">
                  <div className="text-[13.5px] font-semibold">Ayesha Al-Mansoori</div>
                  <div className="text-[11.5px] text-[#8FA3C4]">Villa Owner, Dubai Hills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-[#F4F8FC] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-[#E4F0FD] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#1E7FE0]">
              CUSTOMER STORIES
            </span>
            <h2 className="mt-4 text-[30px] font-extrabold text-[#0B1D3A] sm:text-[34px]">What Our Customers Say</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6785]">
              Read authentic reviews from families and business owners across UK.
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

      {/* CTA */}
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

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Phone, label: "Call Us Free", value: "800-MOVE (6683)" },
            { icon: Mail, label: "Email Us", value: "hello@easymove.ae" },
            { icon: MapPin, label: "Our HQ Location", value: "Marina Plaza, London, UK" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-[#EDF1F7] bg-[#FAFBFD] p-7 text-center">
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-[#E4F0FD]">
                <c.icon className="h-5 w-5 text-[#1E7FE0]" />
              </div>
              <div className="mt-4 text-[13px] font-medium text-[#8792A8]">{c.label}</div>
              <div className="mt-1 text-[15px] font-bold text-[#0B1D3A]">{c.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0B1D3A] px-7 py-6 sm:flex-row">
          <div>
            <div className="text-[15px] font-bold text-white">Need to Move Urgently?</div>
            <div className="mt-1 text-[13px] text-[#8FA3C4]">
              We offer same-day emergency relocations depending on crew availability.
            </div>
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#F5A623] px-6 py-3 text-[14px] font-semibold text-[#0B1D3A] transition-colors hover:bg-[#E5971A]">
            <Zap className="h-4 w-4" /> Book Express Move
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1D3A] text-[#B9C4DC]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed">
                Providing premium, transparent, and completely hands-off residential & commercial relocations across
                London, Manchester, and all UK regions.
              </p>
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-white">Our Services</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li>Residential Moving</li>
                <li>Office & Corporate Moving</li>
                <li>Climate Storage</li>
                <li>Specialized Packing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-white">Service Areas</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li>Movers in Dubai</li>
                <li>Movers in Manchester</li>
                <li>Movers in Birmingham</li>
                <li>Movers in Leeds</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-white">Contact Us</h4>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> 800-MOVE (6683)
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> hello@easymove.uk
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" /> Marina Plaza, London, UK
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[12px] sm:flex-row">
            <span>© 2026 Easy Move UK. All rights reserved.</span>
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
