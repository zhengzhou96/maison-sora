"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// NAVIGATION COMPONENT
// ============================================
function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".nav-link-item",
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.4,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-shiro/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="heading-3 text-sumi">
            MAISON SORA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Philosophy", "Rooms", "Architecture", "Kyoto", "Book"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link-item nav-link"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-sumi font-medium">MENU</span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-shiro z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {["Philosophy", "Rooms", "Architecture", "Kyoto", "Book"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="heading-2 text-sumi"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="text-sumi font-medium">CLOSE</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================
// HERO SECTION
// ============================================
function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        ".hero-image",
        { scale: 1.05 },
        { scale: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
      );
  
      gsap.fromTo(
        ".hero-line",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.5,
        }
      );
  
      gsap.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.9 }
      );
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-sumi">
      <div className="absolute inset-0 hero-image">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
          alt="MAISON SORA architectural exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sumi/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="heading-1 mb-8" style={{ color: 'var(--shiro)' }}>
          <span className="hero-line block">Where Architecture</span>
          <span className="hero-line block">Meets Stillness</span>
        </h1>
        <p className="hero-line body-large max-w-2xl mx-auto mb-12 text-pretty" style={{ color: 'var(--shiro)', opacity: 0.9 }}>
          An intimate architectural retreat in the heart of Kyoto, where
          traditional craftsmanship and contemporary minimalism create a
          sanctuary for the design-conscious traveler.
        </p>
        <div className="hero-cta">
          <a href="#book" className="btn-primary">
            Reserve Your Stay
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-shiro/50 animate-pulse" />
      </div>
    </section>
  );
}

// ============================================
// PHILOSOPHY SECTION
// ============================================
function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        ".philosophy-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
      gsap.fromTo(
        ".philosophy-body",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
      gsap.fromTo(
        ".philosophy-image",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0 0 0 0)",
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="py-24 px-6 lg:px-8 bg-shiro">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="heading-2 text-sumi mb-8 philosophy-heading text-balance">
              Quiet Confidence,
              <br />
              Intentional Space
            </h2>
            <div className="philosophy-body body text-text-secondary space-y-6 text-pretty">
              <p>
                MAISON SORA was born from a simple belief: true luxury lies not
                in excess, but in intention. Every surface, every shadow, every
                silence has been considered.
              </p>
              <p>
                We honor the Japanese philosophy of ma—the beauty of negative
                space. Our rooms are not filled; they are composed. Not
                decorated; they are curated.
              </p>
              <p>
                Here, you will find not just accommodation, but an architectural
                experience. A place where design-conscious travelers can
                reconnect with the essence of space, light, and material.
              </p>
            </div>
          </div>

          <div className="philosophy-image overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
              alt="Minimalist interior with natural light"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ROOMS & SUITES SECTION
// ============================================
function Rooms() {
  const sectionRef = useRef<HTMLElement>(null);

  const rooms = [
    {
      name: "The Sora Suite",
      size: "85 sqm",
      description:
        "Our flagship suite with panoramic city views, private terrace, and bespoke furnishings.",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    },
    {
      name: "Garden Room",
      size: "55 sqm",
      description:
        "Ground-floor sanctuary overlooking our contemplative garden, with direct access to nature.",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Studio",
      size: "40 sqm",
      description:
        "Efficient elegance for the solo traveler or couple, featuring custom built-ins and natural materials.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        ".rooms-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
      gsap.fromTo(
        ".room-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rooms" className="py-24 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-2 text-sumi mb-16 rooms-heading">
          Rooms & Suites
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="room-card group">
              <div className="overflow-hidden mb-6 image-hover">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="caption mb-2">{room.size}</div>
              <h3 className="heading-3 text-sumi mb-4">{room.name}</h3>
              <p className="body text-text-secondary text-pretty">
                {room.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// ARCHITECTURAL EXPERIENCE SECTION
// ============================================
function Architecture() {
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070&auto=format&fit=crop",
      alt: "Architectural detail - concrete and wood",
      caption: "Raw concrete meets warm cedar",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      alt: "Minimalist staircase",
      caption: "Circulation as sculpture",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop",
      alt: "Light and shadow play",
      caption: "The poetry of natural light",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        ".architecture-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
      // Horizontal scroll with pin
      const track = sectionRef.current?.querySelector('.architecture-track');
      if (track) {
        gsap.to(track, {
          xPercent: -100 * (images.length - 1) / images.length,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            end: "+=1500",
            invalidateOnRefresh: true,
          },
        });
      }
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="architecture" className="overflow-hidden">
      <div className="py-24 px-6 lg:px-8 bg-shiro">
        <h2 className="heading-2 text-sumi architecture-heading">
          Architectural Experience
        </h2>
        <p className="body text-text-secondary max-w-2xl mt-6 text-pretty">
          Every material, every joint, every shadow was considered. The building
          itself is the primary amenity.
        </p>
      </div>

      <div className="architecture-wrapper relative w-full h-screen overflow-hidden">
        <div className="architecture-track flex h-full" style={{ width: `${images.length * 100}%` }}>
          {images.map((image, i) => (
            <div
              key={i}
              className="architecture-slide w-screen h-full flex-shrink-0 relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-sumi/80 to-transparent">
                <p className="text-shiro body-large">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TAGLINE REVEAL SECTION
// ============================================
function TaglineReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = document.querySelectorAll(".tagline-word");
  
      gsap.fromTo(
        words,
        { color: "rgb(140, 138, 133)" },
        {
          color: "rgb(13, 13, 13)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-8 bg-shiro text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-2">
          <span className="tagline-word">Design</span>{" "}
          <span className="tagline-word">as</span>{" "}
          <span className="tagline-word">Hospitality</span>
          <br />
          <span className="tagline-word">Stillness</span>{" "}
          <span className="tagline-word">as</span>{" "}
          <span className="tagline-word">Luxury</span>
        </h2>
      </div>
    </section>
  );
}

// ============================================
// KYOTO EXPERIENCES SECTION
// ============================================
function Kyoto() {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      title: "Private Tea Ceremony",
      description:
        "Learn the art of chanoyu from a tea master in our dedicated tea room.",
      image:
        "https://images.unsplash.com/photo-1531300185372-b7cbe2eddf0b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Curated Temple Tours",
      description:
        "Access to Kyoto's most significant temples with expert cultural guides.",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Artisan Workshops",
      description:
        "Pottery, textiles, and traditional crafts with local master artisans.",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        ".kyoto-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
      gsap.fromTo(
        ".kyoto-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="kyoto" className="py-24 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-2 text-sumi mb-6 kyoto-heading">
          Kyoto Experiences
        </h2>
        <p className="body text-text-secondary max-w-2xl mb-16 text-pretty">
          Beyond our walls lies one of the world's great cultural capitals. We
          curate access to the city's most meaningful experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="kyoto-card group">
              <div className="overflow-hidden mb-6 image-hover">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="heading-3 text-sumi mb-3">{exp.title}</h3>
              <p className="body text-text-secondary text-pretty">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// BOOKING CTA SECTION
// ============================================
function BookingCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        ".booking-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
      gsap.fromTo(
        ".booking-cta",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="book" className="py-24 px-6 lg:px-8 bg-sumi text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-2 text-shiro mb-8 booking-heading text-balance">
          Begin Your Stay
        </h2>
        <p className="body-large text-shiro/80 mb-12 text-pretty">
          Limited availability. Each room is unique. Reserve your sanctuary in
          Kyoto.
        </p>
        <div className="booking-cta">
          <a
            href="mailto:reservations@maisonsora.jp"
            className="btn-primary bg-aka hover:bg-aka/90"
          >
            Check Availability
          </a>
        </div>
        <p className="caption text-shiro/60 mt-8">
          Or contact us directly: reservations@maisonsora.jp
        </p>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        ".footer-logo",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );
  
      gsap.fromTo(
        ".footer-nav",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );
  
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-shiro py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="heading-3 text-sumi mb-6 footer-logo">
              MAISON SORA
            </h3>
            <p className="caption text-text-secondary">
              Architectural Retreat
              <br />
              Kyoto, Japan
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="caption mb-4 text-text-tertiary">Explore</h4>
            <ul className="space-y-3">
              {["Philosophy", "Rooms", "Architecture", "Kyoto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="body text-text-secondary hover:text-sumi transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="caption mb-4 text-text-tertiary">Contact</h4>
            <ul className="space-y-3">
              <li className="body text-text-secondary">
                reservations@maisonsora.jp
              </li>
              <li className="body text-text-secondary">+81 75 123 4567</li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="caption mb-4 text-text-tertiary">Follow</h4>
            <ul className="space-y-3">
              {["Instagram", "Pinterest"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="body text-text-secondary hover:text-sumi transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="caption text-text-tertiary">
            © 2026 MAISON SORA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="caption text-text-tertiary hover:text-sumi transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="caption text-text-tertiary hover:text-sumi transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main id="main-content">
      <Navigation />
      <Hero />
      <Philosophy />
      <Rooms />
      <Architecture />
      <TaglineReveal />
      <Kyoto />
      <BookingCTA />
      <Footer />
    </main>
  );
}
