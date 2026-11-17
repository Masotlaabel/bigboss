'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/digital-solutions', label: 'Digital Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/impact', label: 'Impact' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const LOGO_BASE64 = '/bigboss.png'; // Place your bigboss.png in /public folder

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close sidebar on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        className="bb-site-navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(204,0,0,0.15)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              flexShrink: 0,
            }}
          >
            <img
              src={LOGO_BASE64}
              alt="BigBoss Corporate Consulting"
              style={{
                height: '128px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 8px rgba(204,0,0,0.3))',
                transition: 'filter 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(204,0,0,0.6))')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(204,0,0,0.3))')}
            />
          </Link>

          {/* ── Desktop nav ── */}
          <div
            style={{
              display: 'flex',
              gap: '1.15rem',
              alignItems: 'center',
            }}
            className="bb-desktop-links"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`bb-nav-link ${pathname === link.href ? "is-active" : ""}`}
                href={link.href}
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color:
                    pathname === link.href
                      ? '#CC0000'
                      : hoveredLink === link.href
                      ? '#F5F5F0'
                      : '#888888',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                {/* Active/hover underline */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '1px',
                    width: pathname === link.href || hoveredLink === link.href ? '100%' : '0%',
                    background: '#CC0000',
                    transition: 'width 0.25s ease',
                    display: 'block',
                  }}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '0.55rem 1.4rem',
                background: '#CC0000',
                color: '#F5F5F0',
                border: '1px solid #CC0000',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#CC0000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#CC0000';
                e.currentTarget.style.color = '#F5F5F0';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            style={{
              background: 'none',
              border: '1px solid rgba(204,0,0,0.4)',
              cursor: 'pointer',
              color: '#F5F5F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            className="bb-mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(204,0,0,0.1)';
              e.currentTarget.style.borderColor = '#CC0000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.borderColor = 'rgba(204,0,0,0.4)';
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 250,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
        className="bb-mobile-nav"
        aria-hidden="true"
      />

      {/* ── Sidebar ── */}
      <aside
        ref={sidebarRef}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 300,
          width: 'min(340px, 88vw)',
          background: '#0A0A0A',
          borderLeft: '1px solid rgba(204,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: menuOpen ? '-8px 0 48px rgba(0,0,0,0.7)' : 'none',
        }}
        className="bb-mobile-nav"
      >
        {/* Sidebar header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            height: '72px',
            borderBottom: '1px solid #1A1A1A',
            flexShrink: 0,
          }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
            <img
              src={LOGO_BASE64}
              alt="BigBoss"
              style={{ height: '120px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'none',
              border: '1px solid #2A2A2A',
              cursor: 'pointer',
              color: '#888888',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              transition: 'all 0.2s ease',
            }}
            aria-label="Close menu"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#CC0000';
              e.currentTarget.style.color = '#CC0000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2A2A2A';
              e.currentTarget.style.color = '#888888';
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Sidebar nav links */}
        <nav
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem 0',
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1.05rem',
                fontWeight: pathname === link.href ? 700 : 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === link.href ? '#CC0000' : '#C0C0C0',
                borderBottom: '1px solid #141414',
                transition: 'all 0.2s ease',
                // Stagger animation delay hint (for CSS animation)
                animationDelay: `${i * 50}ms`,
                background: pathname === link.href ? 'rgba(204,0,0,0.05)' : 'transparent',
                borderLeft: pathname === link.href ? '2px solid #CC0000' : '2px solid transparent',
              }}
              onMouseEnter={e => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = '#F5F5F0';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderLeftColor = 'rgba(204,0,0,0.4)';
                }
              }}
              onMouseLeave={e => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = '#C0C0C0';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderLeftColor = 'transparent';
                }
              }}
            >
              <span>{link.label}</span>
              <ChevronRight
                size={14}
                style={{
                  color: pathname === link.href ? '#CC0000' : '#3A3A3A',
                  flexShrink: 0,
                }}
              />
            </Link>
          ))}
        </nav>

        {/* Sidebar footer CTA */}
        <div
          style={{
            padding: '1.5rem',
            borderTop: '1px solid #1A1A1A',
            flexShrink: 0,
          }}
        >
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.9rem 1.5rem',
              background: '#CC0000',
              color: '#F5F5F0',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              width: '100%',
              boxSizing: 'border-box',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#AA0000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#CC0000';
            }}
          >
            Get Started
          </Link>
          <p
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '0.65rem',
              color: '#444',
              letterSpacing: '0.1em',
              textAlign: 'center',
              marginTop: '1rem',
              textTransform: 'uppercase',
            }}
          >
            BigBoss Corporate Consulting
          </p>
        </div>
      </aside>
    </>
  );
}