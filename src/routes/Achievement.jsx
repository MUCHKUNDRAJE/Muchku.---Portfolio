import React from "react";
import Nav from "../components/resuable/nav";
import { Star } from "lucide-react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "../pages/Home/footer";

// ─────────────────────────────────────────────
//  GOOGLE FONTS  →  add to your index.html <head>
//  <link href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet">
// ─────────────────────────────────────────────

const achievements = [
  {
    id: 1,
    category: "SPACE TECHNOLOGY",
    headline: "NASA Space Apps Challenge NAGPUR 2nd Runner Up",
    subheadline:
      "First Indian team to clinch top honours at the world's largest hackathon",
    body1:
      "Our team XEBEC secured 3rd place 🥉 at the NASA Space Apps Challenge, organized by the NASA Space Committee Nagpur at GH Raisoni College!",
    body2:
      "We developed Solar Shield — an AI-powered platform designed to predict solar storms and coronal mass ejections (CMEs) and there Simulation . These phenomena can disrupt satellite communication, GPS systems, and power grids — and our solution aims to provide early warnings to help mitigate their impact.",
    tag: "2024",
    image: "/image/nasa1.png", // replace with "/images/nasa.jpg"
    featured: true,
  },
  {
    id: 2,
    category: "ACADEMIC EXCELLENCE",
    headline: "Topped District in Class XII Board Examinations",
    body: "Secured 94.2% aggregate in the Maharashtra State Board examinations, ranking first among 3,400 students across the district. Awarded the Excellence Shield by the Principal for outstanding performance.",
    tag: "2023",

  },
  {
    id: 3,
    category: "TECHNICAL FEAT",
    headline: "National Finalist at Smart India Hackathon",
    body: "Led a six-member team to the national finals of SIH 2024, developing an AI-powered crop disease detection system. Recognised by the Ministry of Agriculture for innovation and real-world impact.",
    tag: "2024",
    image:"/image/nasa5.png",
  },
  {
    id: 4,
    category: "LEADERSHIP",
    headline: "Elected General Secretary, YCCE Student Council",
    body: "Unanimously elected to represent 4,000+ students as General Secretary. Spearheaded the annual technical fest YANTRA, drawing over 12,000 participants across two action-packed days.",
    tag: "2024",
    image: null,
  },
  {
    id: 5,
    category: "SPORTS",
    headline: "Gold Medal — Inter-University Table Tennis Championship",
    body: "Clinched gold at the Nagpur University Inter-College Table Tennis tournament, defeating seven opponents in the singles bracket without dropping a single set throughout the competition.",
    tag: "2025",
    image: null,
  },
  {
    id: 6,
    category: "COMMUNITY",
    headline: "Founded CodeForNagpur — 800+ Developers Strong",
    body: "Established a grassroots developer community that grew to 800 members within six months. Organised monthly hackathons, workshops and mentorship sessions connecting students with industry professionals.",
    tag: "2025",
    image: null,
  },
  {
    id: 7,
    category: "CERTIFICATION",
    headline: "AWS Certified Solutions Architect — Associate",
    body: "Cleared the AWS Solutions Architect Associate exam with a score of 892/1000, demonstrating expertise in cloud architecture, security, and scalable system design on Amazon Web Services.",
    tag: "2025",
    image: null,
  },
  {
    id: 8,
    category: "RESEARCH",
    headline: "Published Paper at IEEE International Conference",
    body: "Co-authored a research paper on lightweight deep learning models for edge devices, accepted and presented at the IEEE International Conference on Emerging Technologies, Pune.",
    tag: "2026",
    image: null,
  },
];

// ─────────────────────────────────────────────
//  SHARED UTILITIES
// ─────────────────────────────────────────────

function DividerThick() {
  return (
    <div className="w-full ">
      <div className="w-full h-[3px] bg-zinc-900" />
      <div className="w-full h-[1px] mt-[3px] bg-zinc-900" />
    </div>
  );
}

function DividerThin() {
  return <div className="w-full h-[1px] bg-zinc-600" />;
}

function ImageSlot({ src, alt = "Achievement photo", label, minH = "280px" }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: "#d4c8b0", minHeight: minH }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(45%) sepia(25%)", minHeight: minH }}
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2 p-6 text-center w-full"
          style={{ minHeight: minH }}
        >
          <span className="text-3xl opacity-30">📷</span>
          <span
            className="text-[0.58rem] italic text-zinc-500 leading-relaxed"
            style={{ fontFamily: "'IM Fell English', serif" }}
          >
            Your photo here
            {label && (
              <>
                <br />
                <span className="not-italic tracking-widest uppercase text-[0.46rem] text-zinc-400">
                  {label}
                </span>
              </>
            )}
          </span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
//  FEATURED STORY COMPONENT
//  Layout: full-width headline → 3 cols: left text | tall image | right text
// ─────────────────────────────────────────────

function FeaturedStory({ achievement }) {
  return (
    <div className="w-full border border-zinc-400 overflow-hidden">
      {/* ── TOP LABEL BAR ── */}
      <div
        className="flex items-center gap-3 px-4 py-[5px] border-b border-zinc-400"
        style={{ fontFamily: "'IM Fell English', serif" }}
      >
        <span className="bg-zinc-900 text-[#EEE4D6] text-[0.48rem] tracking-[0.26em] uppercase px-2 py-[2px] shrink-0">
          ★ &nbsp;Featured Story
        </span>
        <div className="flex-1 h-px text- bg-zinc-300" />
        <span className="text-[0.5rem] tracking-[0.18em] uppercase text-zinc-500 shrink-0">
          {achievement.category}
        </span>
        <Star size={8} fill="#999" className="text-zinc-400 shrink-0" />
        <span className="text-[0.5rem] tracking-[0.18em] uppercase text-zinc-500 shrink-0">
          {achievement.tag}
        </span>
      </div>

      {/* ── FULL-WIDTH BIG HEADLINE ── */}
      <div className="px-5 pt-5 pb-3 border-b border-zinc-400 text-center">
        <h2
          className="uppercase leading-[0.9] text-zinc-900 tracking-tight"
          style={{
            fontFamily: "'League Gothic', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
          }}
        >
          {achievement.headline}
        </h2>
        {achievement.subheadline && (
          <p
            className="text-[0.7rem] italic text-zinc-500 mt-2"
            style={{ fontFamily: "'IM Fell English', serif" }}
          >
            {achievement.subheadline}
          </p>
        )}
      </div>

      {/* ── 3-COLUMN BODY: left text | centre image | right text ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr]">
        {/* LEFT COLUMN — sub-label + first paragraph + pull quote */}
        <div className="border-r border-zinc-400 p-5 flex flex-col gap-3">
          <h3
            className="uppercase text-[1rem] font-bold leading-snug text-zinc-800 tracking-widest"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {achievement.category}
          </h3>

          <DividerThin />
          <i>
            <p
              className="text-[1.3rem] leading-[1.75] text-zinc-700  text-justify hyphens-auto flex-1"
              style={{ fontFamily: "'IM Fell English', serif" }}
            >
              {achievement.body1}
            </p>
          </i>
          <div className="w-full h-80 bg-red-200">
            <img
              src="/image/nasa2.png"
              className="h-full w-full object-cover "
              alt=""
            />
          </div>

          <i>
            <p
              className="text-[1.5rem] leading-[1.75] text-zinc-700 text-justify hyphens-auto"
              style={{ fontFamily: "'IM Fell English', serif" }}
            >
              {achievement.body2}
            </p>
          </i>

          <div className="w-full h-70 mt-4 bg-red-200">
            <img
              src="/image/nasa4.png"
              className="h-full w-full object-cover "
              alt=""
            />
          </div>

          {/* Pull quote */}
          <div className="border-t border-zinc-400 pt-3 mt-2"></div>
        </div>

        {/* CENTRE COLUMN — tall image */}
        <div className="border-r border-zinc-400">
          <ImageSlot
            src={achievement.image}
            alt={achievement.headline}
            label="achievement.image"
            minH="440px"
          />
        </div>

        {/* RIGHT COLUMN — second paragraph + year badge */}
        <div className="p-5 flex flex-col ">
          <i>
            <p
              className="text-[1.5rem] leading-[1.75] text-zinc-700 text-justify hyphens-auto"
              style={{ fontFamily: "'IM Fell English', serif" }}
            >
              This experience was an incredible opportunity to explore AI for
              space weather prediction, collaborate with passionate innovators,
              and learn from mentors who inspired us to think beyond boundaries.
              Grateful to NASA Space Committee, GH Raisoni organizers, and my
              amazing teammates for making this possible!
              <br />
              <b>Our team was acknowledged in the newspaper.</b>
            </p>
          </i>
          <div className="w-full h-auto mt-4 bg-red-200">
            <img
              src="/image/nasa3.png"
              className="h-full w-full object-cover "
              alt=""
            />
          </div>

          <div className="border-t border-zinc-400 pt-3 flex items-center gap-2">
            <Star size={9} fill="#777" className="text-zinc-500 shrink-0" />
            <span
              className="text-[0.5rem] tracking-[0.22em] uppercase border border-zinc-500 px-2 py-[2px] text-zinc-600"
              style={{ fontFamily: "'IM Fell English', serif" }}
            >
              No.01 · {achievement.tag}
            </span>
            <Star size={9} fill="#777" className="text-zinc-500 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  REGULAR ALTERNATING ROW
// ─────────────────────────────────────────────

function AchievementRow({ achievement, index }) {
  const imageLeft = index % 2 === 0;

  const TextBlock = () => (
    <div className="flex flex-col justify-center gap-4 px-8 py-8 h-full min-h-[280px]">
      <div className="flex items-center gap-3">
        <span
          className="text-[0.55rem] tracking-[0.22em] uppercase text-zinc-400 border border-zinc-400 px-2 py-0.5 shrink-0"
          style={{ fontFamily: "'IM Fell English', serif" }}
        >
          No.{String(index + 2).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-zinc-300" />
        <span
          className="text-[0.55rem] tracking-[0.18em] uppercase text-zinc-500 shrink-0"
          style={{ fontFamily: "'IM Fell English', serif" }}
        >
          {achievement.category}
        </span>
      </div>

      <h2
        className="text-2xl md:text-[1.65rem] font-black uppercase leading-tight text-zinc-900"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
      >
        {achievement.headline}
      </h2>

      <DividerThin />

      <p
        className="text-[0.76rem] leading-[1.65] text-zinc-700 text-justify hyphens-auto"
        style={{ fontFamily: "'IM Fell English', serif" }}
      >
        {achievement.body}
      </p>

      <div className="flex items-center gap-3">
        <Star size={10} fill="#777" className="text-zinc-500 shrink-0" />
        <span
          className="text-[0.58rem] tracking-[0.22em] uppercase border border-zinc-500 px-2 py-0.5 text-zinc-600"
          style={{ fontFamily: "'IM Fell English', serif" }}
        >
          {achievement.tag}
        </span>
        <Star size={10} fill="#777" className="text-zinc-500 shrink-0" />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-400 last:border-b-0">
      {imageLeft ? (
        <>
          <div className="border-r border-zinc-400">
            <ImageSlot
              src={achievement.image}
              label={`achievements[${index + 1}].image`}
            />
          </div>
          <TextBlock />
        </>
      ) : (
        <>
          <div className="border-r border-zinc-400 order-2 md:order-1">
            <TextBlock />
          </div>
          <div className="order-1 md:order-2">
            <ImageSlot
              src={achievement.image}
              label={`achievements[${index + 1}].image`}
            />
          </div>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
//  PAGE
// ─────────────────────────────────────────────

function Achievement() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const [featured, featured2, ...rest] = achievements;

  return (
    <>
      <Nav />

      <div
        className="min-h-screen w-full px-6 pb-16 pt-22"
        style={{
          backgroundColor: "#EEE4D6",
          backgroundImage: `
            radial-gradient(ellipse at 20% 10%, rgba(255,245,210,0.5) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 90%, rgba(170,135,80,0.2) 0%, transparent 50%)
          `,
        }}
      >
        {/* ── MASTHEAD ── */}
        <DividerThick />
        <div className="text-center w-full overflow-hidden">
          <h1
            className="leading-none tracking-tight text-zinc-900 uppercase"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              marginTop: "-0.05em",
              marginBottom: "-0.05em",
            }}
          >
            My Achievement Page
          </h1>
        </div>
        <DividerThick />

        {/* ── META BAR ── */}
        <div
          className="flex items-center justify-around py-2 border-b-2 border-zinc-700 mb-1"
          style={{ fontFamily: "'IM Fell English', serif" }}
        >
          <span className="text-base tracking-wide">Vol No.190</span>
          <Star size={13} fill="black" />
          <span className="text-base tracking-wide">Muchkund Thote</span>
          <Star size={13} fill="black" />
          <span className="text-base tracking-wide">YCCE</span>
        </div>
        <div className="w-full h-[3px] bg-zinc-900 mb-8" />

        {/* ── FEATURED STORY ── */}
        <FeaturedStory achievement={featured} />

   <div className="w-full border border-zinc-400 overflow-hidden">

  {/* ── TOP LABEL BAR ── */}
  <div
    className="flex flex-wrap items-center gap-2 px-4 py-[5px] border-b border-zinc-400"
    style={{ fontFamily: "'IM Fell English', serif" }}
  >
    <span className="bg-zinc-900 text-[#EEE4D6] text-[0.48rem] tracking-[0.26em] uppercase px-2 py-[2px] shrink-0">
      ★ &nbsp;Second Featured Story
    </span>
    <div className="flex-1 h-px bg-zinc-300 hidden md:block" />
    <span className="text-[0.5rem] tracking-[0.18em] uppercase text-zinc-500 shrink-0">
      Education
    </span>
    <Star size={8} fill="#999" className="text-zinc-400 shrink-0" />
    <span className="text-[0.5rem] tracking-[0.18em] uppercase text-zinc-500 shrink-0">
      2025
    </span>
  </div>

  {/* ── HEADLINE ── */}
  <div className="px-5 pt-5 pb-3 border-b border-zinc-400 text-left">
    <h2
      className="uppercase leading-[0.9] text-zinc-900 tracking-tight"
      style={{
        fontFamily: "'League Gothic', sans-serif",
        fontSize: "clamp(2.8rem, 8vw, 6rem)",
      }}
    >
      Ycap 4 Top Performer
    </h2>
  </div>

  {/* ── BODY: text LEFT | image RIGHT ── */}
  <div className="flex flex-col md:flex-row">

    {/* TEXT — full width on mobile, half on desktop */}
    <div className="w-full md:w-1/2 px-6 md:px-10 py-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-zinc-400">
      <p
        className="text-lg md:text-[1.8rem] italic leading-snug text-zinc-700"
        style={{ fontFamily: "'IM Fell English', serif" }}
      >
        Ycap 4 Top Performer in Communication and Technical
      </p>
      <div className="h-px bg-zinc-800" />
      <i>
      <p
        className="text-xl md:text-[1.5rem] leading-[1.75] text-zinc-700 text-justify hyphens-auto"
        style={{ fontFamily: "'IM Fell English', serif" }}
      >
        I was also honored with the Y-CAP Four Top Performer for communication
        and Technical both, Award by my college — a recognition that inspires me
        to keep pushing boundaries, learning, and innovating every day.
        <br /><br />
        In the Communication domain, I excelled across multiple areas, including
        <u> Group Discussions (GD), podcasting, and skit performances,</u> showcasing my
        ability to express ideas clearly and connect with diverse audiences. On
        the Technical front, I demonstrated strong proficiency in <u> SQL and
        Object-Oriented Programming using C++</u> , further strengthening my
        problem-solving and development skills.
      </p>

      </i>
    </div>

    {/* IMAGE — full width on mobile, half on desktop */}
    <div className="w-full md:w-1/2 h-full md:h-[540px]">
      <img
        className="w-full h-full object-cover"
        style={{
          objectPosition: "20% 10%",
          
      
        }}
        src="/image/ycap.png"
        alt="YCAP Top Performer"
      />
    </div>

  </div>
</div>

  <DividerThick/>

     <div className="w-full border border-zinc-400 overflow-hidden">

  {/* ── TOP LABEL BAR ── */}
  <div
    className="flex flex-wrap items-center gap-2 px-4 py-[5px] border-b border-zinc-400"
    style={{ fontFamily: "'IM Fell English', serif" }}
  >
    <span className="bg-zinc-900 text-[#EEE4D6] text-[0.48rem] tracking-[0.26em] uppercase px-2 py-[2px] shrink-0">
      ★ &nbsp;Third Featured Story
    </span>
    <div className="flex-1 h-px bg-zinc-300 hidden md:block" />
    <span className="text-[0.5rem] tracking-[0.18em] uppercase text-zinc-500 shrink-0">
      Education
    </span>
    <Star size={8} fill="#999" className="text-zinc-400 shrink-0" />
    <span className="text-[0.5rem] tracking-[0.18em] uppercase text-zinc-500 shrink-0">
      2025
    </span>
  </div>

  {/* ── HEADLINE ── */}
  <div className="px-5 pt-5 pb-3 border-b border-zinc-400 text-right">
    <h2
      className="uppercase leading-[0.9] text-zinc-900 tracking-tight"
      style={{
        fontFamily: "'League Gothic', sans-serif",
        fontSize: "clamp(2.8rem, 8vw, 6rem)",
      }}
    >
     AIDS department Topper 
    </h2>
  </div>

  {/* ── BODY: text LEFT | image RIGHT ── */}
  <div className="flex md:flex-row-reverse flex-col ">

    {/* TEXT — full width on mobile, half on desktop */}
    <div className="w-full md:w-1/2 px-6 md:px-10 py-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-zinc-400">
      <p
        className="text-lg md:text-[1.8rem] italic leading-snug text-zinc-700"
        style={{ fontFamily: "'IM Fell English', serif" }}
      >
        AIDS Third and Fourth Semester Topper
      </p>
      <div className="h-px bg-zinc-800" />
      <i>
      <p
        className="text-xl md:text-[1.5rem] leading-[1.75] text-zinc-700 text-justify hyphens-auto"
        style={{ fontFamily: "'IM Fell English', serif" }}
      >
       I am honored to be felicitated by my department for securing 1st Rank in the 3rd Semester and 5th Rank in the 4th Semester.
Grateful to my professors and mentors for their constant guidance and support. Looking forward to learning more and achieving greater milestones ahead. 

<br />
<br />
Building on this achievement, I have focused on maintaining a balance between academics and practical learning by actively engaging in projects, technical events, and collaborative activities. These experiences have helped me develop a deeper understanding of concepts, improve my problem-solving abilities, and grow both technically and personally. I aim to continue this journey with dedication, curiosity, and a constant drive to excel.

      </p>

      </i>
    </div>

    {/* IMAGE — full width on mobile, half on desktop */}
    <div className="w-full md:w-1/2 h-full md:h-[560px]">
      <img
        className="w-full h-full object-cover"
        style={{
          objectPosition: "20% 30%",
          
      
        }}
        src="/image/Topper.png"
        alt="YCAP Top Performer"
      />
    </div>

  </div>
</div>

        {/* ── ALTERNATING ROWS ── */}
        {/* <div className="w-full border mt-10 border-zinc-400 border-t-0 overflow-hidden">
          {rest.map((achievement, index) => (
            <AchievementRow
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div> */}

        {/* ── FOOTER ── */}
        <div className="mt-8">
          <DividerThick />
          <p
            className="text-center text-[0.6rem] tracking-[0.25em] uppercase text-zinc-500 mt-2"
            style={{ fontFamily: "'IM Fell English', serif" }}
          >
            Printed & Published by Muchkund Thote · YCCE, Nagpur
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Achievement;
