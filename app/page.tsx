"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { IoBarcodeOutline, IoCardOutline, IoCashOutline, IoCloudDoneOutline, IoCloudOfflineOutline, IoCloudOutline, IoCloudUploadOutline, IoCubeOutline, IoLockClosedOutline, IoLogoWhatsapp, IoPricetagOutline, IoPrintOutline, IoReceiptOutline } from "react-icons/io5";

const WHATSAPP_NUMBER = "919999999999"; // ← Replace with your WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in InstantBill POS software. Can you tell me more?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const features = [
  {
    icon: <IoCloudOfflineOutline className="text-2xl text-green-500" />,
    title: "100% Offline",
    desc: "Works without internet. Power cut, no WiFi — your billing never stops.",
  },
  {
    icon: <IoReceiptOutline className="text-2xl text-green-500" />,
    title: "GST Invoices",
    desc: "Auto-calculates CGST & SGST. Prints GST-compliant tax invoices instantly.",
  },
  {
    icon: <IoPrintOutline className="text-2xl text-green-500" />,
    title: "Thermal Printer",
    desc: "Plug in any 58mm or 80mm thermal printer and start printing receipts.",
  },
  {
    icon: <IoBarcodeOutline className="text-2xl text-green-500" />,
    title: "Barcode Scanner",
    desc: "Scan products to add them to cart instantly. Works with any USB scanner.",
  },
  {
    icon: <IoCubeOutline className="text-2xl text-green-500" />,
    title: "Inventory Tracking",
    desc: "Track stock levels, get low-stock alerts, manage purchases from suppliers.",
  },
  {
    icon: <IoCardOutline className="text-2xl text-green-500" />,
    title: "Customer Credit",
    desc: "Give credit to trusted customers. Track dues and send payment reminders.",
  },
  {
    icon: <IoPricetagOutline className="text-2xl text-green-500" />,
    title: "Sales Reports",
    desc: "Daily, monthly reports. Top products, profit trends, payment breakdowns.",
  },
  {
    icon: <IoCloudUploadOutline className="text-2xl text-green-500" />,
    title: "Auto Backup",
    desc: "Your data is automatically backed up daily. Restore with one click.",
  },
];

const steps = [
  {
    num: "01",
    title: "Contact on WhatsApp",
    desc: "Send a message and we'll walk you through the demo and answer your questions.",
  },
  {
    num: "02",
    title: "One-Time Payment",
    desc: "Pay ₹1,000 once. No subscriptions, no hidden fees. Yours forever.",
  },
  {
    num: "03",
    title: "Get Your App",
    desc: "We send you the installer file. Install and start billing in minutes.",
  },
];

const marqueeItems = [
  "GST Compliant",
  "Offline First",
  "Thermal Printing",
  "Barcode Scanner",
  "Auto Backup",
  "Customer Credit",
  "Sales Reports",
  "Windows & Linux",
  "One-Time Price",
  "No Monthly Fees",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const SPEED = 1.3;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3, // 🔥 controls smoothness
      // smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Simple scroll reveal without GSAP dependency issues
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));


    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;

      const scrolled = Math.min(Math.max(-rect.top, 0), totalHeight);
      const progress = scrolled / totalHeight;

      // 🔥 REAL width calculation (this fixes everything)
      const maxTranslate =
        trackRef.current.scrollWidth - window.innerWidth;

      trackRef.current.style.transform = `translateX(-${progress * maxTranslate * SPEED}px)`;
      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#080808]">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-[#080808]/80 border-b border-white/5">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="InstantBill" width={36} height={36} className="rounded-xl" />
          <span className="font-syne font-700 text-lg text-white tracking-tight">
            Instant<span className="text-green-400">Bill</span>
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 pulse-glow"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Badge */}
        <div className="animate-fade-in-up mb-6 flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">Made for Indian Retail Shops</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-center font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-5xl">
          Billing that
          <span className="block text-green-400 glow-text">never stops.</span>
        </h1>

        {/* CTA */}
        <div className="animate-fade-in-up delay-400 mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 glow"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get InstantBill Now
          </a>
        </div>

        {/* Price tag */}
        {/* <div className="animate-fade-in-up delay-300 mt-8 flex items-center gap-3">
          <div className="border-gradient rounded-2xl px-6 py-3 text-center">
            <div className="text-3xl font-syne font-bold text-white">₹1,000</div>
            <div className="text-xs text-gray-500 mt-0.5">One-time · No subscription</div>
          </div>
        </div> */}

        {/* Image */}
        <div className="animate-fade-in-up delay-400 mt-8">
          <img
            src="/hero.png"
            alt="InstantBill POS System"
            className="rounded-2xl border border-white/10 shadow-xl"
          />
        </div>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 mt-6 text-center text-white text-sm md:text-xl  leading-relaxed font-dm font-semi-bold">
          InstantBill is a
          <span className="text-green-400 font-bold"> fully offline POS system </span>
          fully offline POS system

          built for Indian small shops.
          GST invoices, barcode scanning, thermal printing — all in one app.
        </p>

        {/* Stats bar */}
        <div className="animate-fade-in-up mt-16 grid grid-cols-3 gap-6 border-gradient rounded-2xl px-8 py-5 max-w-lg w-full">
          {[
            { val: "100%", label: "Offline" },
            { val: "₹1K", label: "One-time" },
            { val: "GST", label: "Compliant" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-syne font-bold text-green-400">{s.val}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-6 border-y border-white/5 overflow-hidden bg-[#0d0d0d]">
        <div className="flex marquee-track whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm text-gray-500">
              <span className="text-green-500">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section ref={containerRef} className="hidden sm:block h-[300vh] relative">
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

          {/* Heading */}
          <div className="text-center mb-12 px-6">
            <span className="text-green-500 text-sm uppercase">Features</span>
            <h2 className="text-4xl md:text-5xl text-white font-bold mt-3">
              The simplest yet fastest POS your shop deserves
            </h2>
            <p className="text-gray-400 mt-4">
              Built specifically for Indian retail shops.
            </p>
          </div>

          {/* Horizontal scroll track */}
          <div className="overflow-hidden px-20">
            <div
              ref={trackRef}
              className="flex gap-8 px-1 will-change-transform"
            >
              <img src="/dashboard.png" className="w-[60vw] rounded-2xl border border-white/10" />
              <img src="/products.png" className="w-[60vw] rounded-2xl border border-white/10" />
              <img src="/bill.png" className="w-[60vw] rounded-2xl border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        {/* Sticky viewport */}

        {/* Heading */}
        <div className="text-center mb-12 px-6">
          <span className="text-green-500 text-sm uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl text-white font-bold mt-3">
            The simplest yet fastest POS your shop deserves
          </h2>
          <p className="text-gray-400 mt-4">
            Built specifically for Indian retail shops.
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div className="overflow-hidden px-5 flex sm:hidden">
          <div className="grid gap-2 px-1 will-change-transform">
            <img src="/dashboard.png" className="w-[100vw] rounded-xl border border-white/10" />
            <img src="/products.png" className="w-[100vw] rounded-xl border border-white/10" />
          </div>
          <div>
            <img src="/bill.png" className="w-[60vw] rounded-2xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-green-500 text-sm font-medium tracking-widest uppercase">Features</span>
          <h2 className="mt-3 font-syne font-bold text-4xl md:text-5xl text-white">
            Everything your shop needs
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Built specifically for Indian retail shops. No bloat, no complexity — just what works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 feature-card border-gradient rounded-2xl p-6 bg-[#0d0d0d]`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-syne font-semibold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="px-6 md:px-12 py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <span className="text-green-500 text-sm font-medium tracking-widest uppercase">Process</span>
            <h2 className="mt-3 font-syne font-bold text-4xl md:text-5xl text-white">
              Get started in 3 steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="text-5xl font-syne font-extrabold text-green-500/20 mb-4">{step.num}</div>
                  <h3 className="font-syne font-bold text-white text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-16 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 glow"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start on WhatsApp
            </a>
            <p className="mt-3 text-gray-600 text-sm">Usually replies within 1 hour</p>
          </div>
        </div>
      </section>

      {/* ── WHY INSTANTBILL ── */}
      <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-green-500 text-sm font-medium tracking-widest uppercase">Why Us</span>
          <h2 className="mt-3 font-syne font-bold text-4xl md:text-5xl text-white">
            Why shop owners choose InstantBill
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "No internet? No problem.",
              desc: "Most billing software needs internet. Your shop's WiFi goes down? Billing stops. InstantBill runs completely offline — always.",
              icon: <IoCloudOfflineOutline className="text-3xl text-green-500" />,
            },
            {
              title: "No monthly bills from us.",
              desc: "Tally, Vyapar, others charge monthly. We charge once. ₹1,000 and it's yours forever. No renewals, no surprises.",
              icon: <IoCashOutline className="text-3xl text-green-500" />,
            },
            {
              title: "GST done right.",
              desc: "CGST, SGST, HSN codes — all calculated and printed automatically. Your invoices are legally compliant from day one.",
              icon: <IoReceiptOutline className="text-3xl text-green-500" />,
            },
            {
              title: "Your data stays with you.",
              desc: "No cloud, no servers, no data leaks. Your customer data and sales history live on your computer only.",
              icon: <IoLockClosedOutline className="text-3xl text-green-500" />,
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex gap-5 p-6 border-gradient rounded-2xl bg-[#0d0d0d] feature-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-syne font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="px-6 md:px-12 py-24 bg-[#0d0d0d]">
        <div className="max-w-lg mx-auto text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-green-500 text-sm font-medium tracking-widest uppercase">Pricing</span>
            <h2 className="mt-3 font-syne font-bold text-4xl md:text-5xl text-white">
              Simple pricing.
            </h2>
            <p className="mt-4 text-gray-400">No tricks. No tiers. One price.</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-10 border-gradient rounded-3xl p-8 bg-[#080808] relative overflow-hidden">
            {/* Glow blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-green-500/10 rounded-full blur-[60px]" />

            <div className="relative">
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-6xl font-syne font-extrabold text-white">₹1,000</span>
              </div>
              <p className="text-gray-500 mb-8">One-time purchase · Lifetime license</p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "Full POS billing system",
                  "GST tax invoices (CGST + SGST)",
                  "Thermal printer support",
                  "Barcode scanner support",
                  "Inventory management",
                  "Customer credit tracking",
                  "Sales & profit reports",
                  "Auto daily backup",
                  "Windows installer (.exe)",
                  "Free setup support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-black font-bold text-lg py-4 rounded-2xl transition-all duration-200 glow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Buy on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-12 py-24 max-w-3xl mx-auto">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-green-500 text-sm font-medium tracking-widest uppercase">FAQ</span>
          <h2 className="mt-3 font-syne font-bold text-4xl text-white">Common questions</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Does it really work without internet?",
              a: "Yes, completely. The app runs on your computer locally. No internet needed to create bills, manage stock, or print receipts.",
            },
            {
              q: "Which printers does it support?",
              a: "Any USB thermal printer (58mm or 80mm). Brands like Rongta, Epson TM, Xprinter — all work out of the box.",
            },
            {
              q: "Is it GST compliant?",
              a: "Yes. It generates proper tax invoices with CGST, SGST, HSN codes, and your GSTIN — all required fields for GST compliance.",
            },
            {
              q: "Can multiple staff use the same app?",
              a: "Yes. You can create multiple accounts — owner, manager, and cashier roles with different access levels.",
            },
            {
              q: "What happens if my computer crashes?",
              a: "Your data is automatically backed up every day. You can restore from any backup with one click.",
            },
            {
              q: "Does it work on Windows?",
              a: "Yes. InstantBill comes as a Windows .exe installer. Works on Windows 10 and Windows 11.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 border-gradient rounded-2xl p-6 bg-[#0d0d0d]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <h3 className="font-syne font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 md:px-12 py-24 bg-[#0d0d0d]">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-3xl mx-auto text-center">
          <div className="relative border-gradient rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
            <div className="relative">
              <Image
                src="/logo.png"
                alt="InstantBill"
                width={64}
                height={64}
                className="mx-auto rounded-2xl mb-6"
              />
              <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-4">
                Ready to upgrade your shop?
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Join shop owners who bill faster, track smarter, and never worry about internet.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-200 glow"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-12 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="InstantBill" width={28} height={28} className="rounded-lg" />
            <span className="font-syne font-semibold text-white">
              Instant<span className="text-green-400">Bill</span>
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2026 InstantBill. Built for Indian retail shops.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 text-sm font-medium transition-colors"
          >
            Contact on WhatsApp →
          </a>
        </div>
      </footer>
    </main>
  );
}