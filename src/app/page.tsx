import Image from "next/image";
import logo from "../../public/royalty-academy-logo.jpeg";
import heroImage from "../../public/images/impact-1000-cohort-group-photo-1.jpg";
import legacyImage from "../../public/images/impact-1000-cohort-group-photo-2.jpg";
import leadershipImage from "../../public/images/royalty-academy-leadership-keynote.jpg";
import patronPortrait from "../../public/images/isaiah-macwealth-grand-patron-portrait.png";
import galleryAiFacilitator from "../../public/images/impact-1000-ai-facilitator-session.jpg";
import galleryCorpsQueue from "../../public/images/impact-1000-corps-members-queue.jpg";
import galleryCorpsSeated from "../../public/images/impact-1000-corps-members-seated.jpg";
import gallerySkillTeam from "../../public/images/impact-1000-high-income-skill-team.jpg";
import gallerySkillsSession from "../../public/images/impact-1000-high-income-skills-session.jpg";
import gallerySpeakerPodium from "../../public/images/impact-1000-speaker-podium-session.jpg";
import galleryTrainingHall from "../../public/images/impact-1000-training-hall-screens.jpg";
import galleryTrainingAudience from "../../public/images/impact-1000-training-session-audience.jpg";
import galleryTrainingVenue from "../../public/images/impact-1000-training-venue-wide.jpg";
import galleryChurchRegistration from "../../public/images/royalty-academy-church-registration.jpg";
import galleryCorpsRegistration from "../../public/images/royalty-academy-corps-registration-desk.jpg";
import galleryOutdoorAttendees from "../../public/images/royalty-academy-outdoor-event-attendees.jpg";
import galleryOutdoorAudience from "../../public/images/royalty-academy-outdoor-audience.jpg";
import galleryOutdoorRegistration from "../../public/images/royalty-academy-outdoor-registration.jpg";

const galleryImages = [
  { src: heroImage, alt: "IMPACT 1000 cohort group photo with NYSC corps members" },
  { src: gallerySpeakerPodium, alt: "Royalty Academy facilitator speaking at the IMPACT 1000 training session" },
  { src: galleryTrainingAudience, alt: "Corps members watching the IMPACT 1000 training session on screen" },
  { src: galleryAiFacilitator, alt: "Facilitator Collins O. Arase teaching the Artificial Intelligence session" },
  { src: gallerySkillsSession, alt: "Learn a High Income Skill training session screens" },
  { src: galleryTrainingHall, alt: "IMPACT 1000 training hall filled with corps members" },
  { src: galleryCorpsSeated, alt: "NYSC corps members seated at the IMPACT 1000 training" },
  { src: galleryTrainingVenue, alt: "Wide view of the IMPACT 1000 training venue" },
  { src: legacyImage, alt: "IMPACT 1000 cohort group photo, second batch" },
  { src: galleryCorpsRegistration, alt: "Corps members mentorship and counselling registration desk" },
  { src: galleryOutdoorAttendees, alt: "Royalty Academy outdoor event attendees" },
  { src: galleryOutdoorRegistration, alt: "Outdoor registration at a Royalty Academy community event" },
  { src: galleryOutdoorAudience, alt: "Outdoor audience at a Royalty Academy community event" },
  { src: galleryChurchRegistration, alt: "Corps members registering at a Royalty Academy partner church event" },
  { src: gallerySkillTeam, alt: "Royalty Academy team at the Learn a High Income Skill registration table" },
  { src: galleryCorpsQueue, alt: "NYSC corps members queuing to register for IMPACT 1000 training" },
] as const;

const trainingTopics = [
  {
    title: "Entrepreneurship",
    description:
      "Foundational principles for launching and sustaining successful ventures.",
    icon: "lightbulb",
    accent: "primary",
  },
  {
    title: "Business Development",
    description:
      "Strategies for scaling operations, forming partnerships, and market expansion.",
    icon: "trending_up",
    accent: "tertiary",
  },
  {
    title: "Business Planning & Marketing",
    description:
      "Crafting actionable plans and executing high-impact marketing campaigns.",
    icon: "campaign",
    accent: "secondary",
  },
  {
    title: "Strategic Investment & Risk Analysis",
    description:
      "Identifying lucrative opportunities while mitigating potential liabilities.",
    icon: "shield",
    accent: "tertiary",
  },
  {
    title: "Import & Export Opportunities",
    description:
      "Navigating international trade, supply chains, and global logistics.",
    icon: "flight_takeoff",
    accent: "primary",
  },
  {
    title: "Project Management",
    description:
      "Executing complex initiatives on time, within budget, and to specification.",
    icon: "account_tree",
    accent: "primary",
  },
] as const;

const accentClasses: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/10 group-hover:bg-primary", text: "text-primary group-hover:text-on-primary" },
  secondary: { bg: "bg-secondary/10 group-hover:bg-secondary", text: "text-secondary group-hover:text-on-secondary" },
  tertiary: { bg: "bg-tertiary/10 group-hover:bg-tertiary", text: "text-tertiary group-hover:text-on-tertiary" },
};

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#giving-back", label: "Giving Back" },
  { href: "#grand-patron", label: "Grand Patron" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface shadow-sm border-b border-tertiary/20">
        <a href="#" className="flex items-center">
          <Image
            src={logo}
            alt="Royalty Academy"
            className="h-12 w-auto"
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-headline font-semibold text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors duration-200 ease-in-out px-3 py-2 rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm"
          >
            Join Us
          </a>
          <button className="md:hidden text-on-surface p-2" aria-label="Open menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden hero-gradient">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
              <h1 className="text-5xl lg:text-7xl font-headline font-black text-on-surface leading-tight tracking-tight">
                Equipping &amp; Empowering
                <br />
                <span className="text-primary relative inline-block">
                  Money Missionaries
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-tertiary/20 -z-10 rounded" />
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Royalty Academy is a leading institution dedicated to
                empowering entrepreneurs, career enthusiasts, and business
                professionals to excel in their fields &mdash; through
                high-quality, practical training programs delivered from
                Lagos, Nigeria to people around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#programs"
                  className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-1"
                >
                  Join Our Next Program
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
                <a
                  href="#about"
                  className="inline-flex justify-center items-center gap-2 bg-surface text-tertiary border-2 border-tertiary font-label font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-tertiary hover:text-on-tertiary hover:shadow-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[560px] border border-surface-variant">
              <Image
                src={galleryChurchRegistration}
                alt="IMPACT 1000 cohort group photo with NYSC corps members"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-surface/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container border-2 border-surface flex items-center justify-center text-on-primary text-xs font-bold">
                        JD
                      </div>
                      <div className="w-10 h-10 rounded-full bg-secondary border-2 border-surface flex items-center justify-center text-on-secondary text-xs font-bold">
                        SO
                      </div>
                      <div className="w-10 h-10 rounded-full bg-tertiary border-2 border-surface flex items-center justify-center text-on-tertiary text-xs font-bold">
                        OA
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-on-surface">
                      Several hundred graduands and counting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* ABOUT THE GRAND PATRON */}
        <section className="py-24 bg-surface-container-low" id="grand-patron">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-primary to-on-primary-fixed-variant p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-high">
                    <Image
                      src={patronPortrait}
                      alt="Dr. Isaiah Macwealth, Founder of Royalty Academy and Grand Patron of Higher Impact Club"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-tertiary border-4 border-surface-container-low flex items-center justify-center shadow-lg">
                    <span
                      className="material-symbols-outlined text-on-tertiary text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      workspace_premium
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
                  Leadership
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">
                  About the Grand Patron
                </h2>
                <div className="gold-accent-line" />
                <p className="text-xl font-headline font-bold text-on-surface">
                  Dr. Isaiah Macwealth
                </p>
                <p className="text-sm font-label font-semibold text-primary uppercase tracking-wide">
                  Founder, Royalty Academy &middot; Grand Patron, Higher Impact
                  Club
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Dr. Isaiah Macwealth founded Royalty Academy to equip
                  entrepreneurs, career enthusiasts, and business
                  professionals with practical, high-quality training. As
                  Grand Patron of the Higher Impact Club, he champions
                  initiatives such as the IMPACT 1000 High-Income Skills
                  Training, extending free, practical skills training to
                  youths in dedication to youth development and national
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-24 bg-surface" id="about">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4">
              <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
                Our Purpose
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">
                Our Mission
              </h2>
              <div className="gold-accent-line" />
            </div>
            <div className="bg-surface-container-lowest p-10 md:p-16 rounded-3xl shadow-xl shadow-surface-variant/50 border border-surface-container-high relative">
              <p className="text-xl md:text-3xl text-on-surface-variant leading-relaxed font-medium relative z-10">
                At <strong className="text-primary">Royalty Academy</strong>,
                our mission is to equip individuals with the knowledge and
                expertise required to succeed in today&apos;s competitive
                business and career landscape through high-quality, practical
                training programs that are tailored to their unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* TRAINING SCOPE */}
        <section className="py-24 bg-surface-container-low" id="programs">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
                Curriculum
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">
                What We Teach
              </h2>
              <div className="gold-accent-line" />
              <p className="text-on-surface-variant max-w-2xl mt-4">
                Our professional training sessions cover a wide range of
                topics designed to forge industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainingTopics.slice(0, 2).map((topic) => (
                <TrainingCard key={topic.title} topic={topic} />
              ))}

              {/* Featured wide card */}
              <div className="bg-primary rounded-2xl p-8 border border-primary-fixed shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 relative overflow-hidden text-on-primary">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <span className="material-symbols-outlined text-9xl">analytics</span>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-14 h-14 rounded-xl bg-on-primary/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-on-primary text-3xl">finance</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold mb-3">
                      Financial Education &amp; Cash Analysis
                    </h3>
                    <p className="text-primary-fixed text-base leading-relaxed max-w-md">
                      Mastering cash flow, understanding financial statements,
                      and developing robust economic models for enterprise
                      growth.
                    </p>
                  </div>
                </div>
              </div>

              {trainingTopics.slice(2).map((topic) => (
                <TrainingCard key={topic.title} topic={topic} />
              ))}

              {/* Business Analytics wide card */}
              <div className="bg-surface rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-surface to-surface-container-high">
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-tertiary/20 flex items-center justify-center border border-tertiary/30">
                    <span className="material-symbols-outlined text-tertiary text-4xl">pie_chart</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                      Business Analytics
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                      Leveraging data-driven insights to make informed,
                      strategic decisions that propel organizational growth.
                    </p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-label font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Enquire About This Program
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LEGACY */}
        <section className="py-24 bg-surface border-y border-surface-variant">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
                    Our Impact
                  </span>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">
                    Our Legacy
                  </h2>
                  <div className="gold-accent-line" />
                </div>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  With a proven track record of excellence, Royalty Academy
                  has produced several hundreds of notable graduands, as we
                  continue to strive towards creating a community of
                  successful professionals who make a positive impact in
                  their respective industries.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                  <div className="p-6 rounded-2xl bg-surface-container border border-surface-variant text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-3">school</span>
                    <div className="text-3xl font-headline font-black text-on-surface">
                      500+
                    </div>
                    <div className="text-sm font-medium text-on-surface-variant mt-1">
                      Graduands
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container border border-surface-variant text-center">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-3">location_on</span>
                    <div className="text-xl font-headline font-bold text-on-surface mt-2">
                      Lagos, NG
                    </div>
                    <div className="text-sm font-medium text-on-surface-variant mt-1">
                      Headquarters
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container border border-surface-variant text-center">
                    <span className="material-symbols-outlined text-tertiary text-4xl mb-3">language</span>
                    <div className="text-xl font-headline font-bold text-on-surface mt-2">
                      Global
                    </div>
                    <div className="text-sm font-medium text-on-surface-variant mt-1">
                      Reach
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={legacyImage}
                  alt="IMPACT 1000 cohort group photo, second batch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        {/* GIVING BACK */}
        <section className="py-24 relative overflow-hidden bg-[#fbfaf5]" id="giving-back">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#c69b4a 2px, transparent 2px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="bg-surface rounded-3xl p-10 md:p-16 border-2 border-tertiary/20 shadow-2xl text-center space-y-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-tertiary/10 flex items-center justify-center mb-4">
                <span
                  className="material-symbols-outlined text-tertiary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  volunteer_activism
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
                Giving Back
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                As part of our commitment to social responsibility, Royalty
                Academy collaborates with{" "}
                <strong className="text-tertiary">Higher Impact Club</strong>{" "}
                and other charity interests to offer{" "}
                <strong className="text-secondary">FREE</strong> training for
                youths and other selected segments of society, in dedication
                to making a positive impact in our community.
              </p>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                Through the <strong className="text-tertiary">IMPACT 1000</strong>{" "}
                High-Income Skills Training, we&apos;ve equipped corps members
                with practical, in-demand skills &mdash; Data Analysis, Web
                Development, Graphic Design, and Artificial Intelligence &mdash;
                starting with our first cohort at the Port Harcourt Training
                Centre, to enhance their employability and entrepreneurship in
                today&apos;s economy.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 bg-surface-container-low" id="gallery">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
                Moments
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">
                Gallery
              </h2>
              <div className="gold-accent-line" />
              <p className="text-on-surface-variant max-w-2xl mt-4">
                Highlights from the IMPACT 1000 High-Income Skills Training
                cohort, in partnership with Higher Impact Club.
              </p>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 [column-fill:_balance]">
              {galleryImages.map((image) => (
                <div
                  key={image.alt}
                  className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <Image src={image.src} alt={image.alt} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

        {/* JOIN US */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-surface-container-high rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-xl">
              <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-8 bg-primary text-on-primary">
                <div className="space-y-4">
                  <span className="text-primary-fixed font-bold tracking-widest uppercase text-sm">
                    Leadership
                  </span>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-primary">
                    Join Us
                  </h2>
                  <div className="w-20 h-1 bg-tertiary rounded" />
                </div>
                <p className="text-lg text-primary-fixed-dim leading-relaxed">
                  If you&apos;re looking to take your business or career to
                  the next level, join us at Royalty Academy. Our expert
                  trainers and mentors, led by{" "}
                  <strong className="text-on-primary">
                    Dr. Isaiah Macwealth
                  </strong>
                  , are committed to helping you achieve your goals and
                  realize your full potential.
                </p>
                <ul className="space-y-4 text-primary-fixed pt-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    Expert Mentorship
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    Practical, Tailored Training
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    A Global Community of Graduands
                  </li>
                </ul>
                <div className="pt-8 mt-auto">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-surface text-primary font-label font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:bg-surface-variant hover:shadow-lg"
                  >
                    Contact Us Today
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 min-h-[300px] lg:min-h-full relative">
                <Image
                  src={galleryOutdoorRegistration}
                  alt="Royalty Academy leadership addressing the IMPACT 1000 cohort"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-surface-container w-full py-12 px-6 border-t border-tertiary/30"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Image src={logo} alt="Royalty Academy" className="h-14 w-auto" />
            <p className="font-body text-sm text-on-surface-variant">
              &copy; {new Date().getFullYear()} Royalty Academy. Equipping and
              Empowering Money Missionaries. All rights reserved.
            </p>
          </div>

          {/* <div className="space-y-4">
            <h4 className="font-headline font-semibold text-on-surface">
              About
            </h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Royalty Academy, founded by Dr. Isaiah Macwealth, is a leading
              institution dedicated to empowering entrepreneurs, career
              enthusiasts, and business professionals to excel in their
              respective fields.
            </p>
          </div> */}

          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-on-surface">
              Reach Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">public</span>
                <a
                  className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="https://www.royaltyacademy.org"
                >
                  www.royaltyacademy.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">mail</span>
                <a
                  className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="mailto:info@royaltyacademy.org"
                >
                  info@royaltyacademy.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">location_on</span>
                <span className="font-body text-sm text-on-surface-variant"> Ark of Light for all Nations, 11 Kudirat Abiola Way, Alausa, Ikeja, Lagos.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

function TrainingCard({
  topic,
}: {
  topic: (typeof trainingTopics)[number];
}) {
  const accent = accentClasses[topic.accent];
  return (
    <div className="bg-surface rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${accent.bg}`}
      >
        <span className={`material-symbols-outlined text-3xl ${accent.text}`}>
          {topic.icon}
        </span>
      </div>
      <h3 className="text-xl font-headline font-bold text-on-surface mb-3">
        {topic.title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        {topic.description}
      </p>
    </div>
  );
}
