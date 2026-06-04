'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/impact', label: 'Impact' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(10,10,10,0.97)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em', color: '#F5F5F0' }}>
              BIG<span style={{ color: '#CC0000' }}>BOSS</span>
            </span>
            <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300, fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888888' }}>
              Corporate Consulting
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: pathname === link.href ? '#CC0000' : '#888888',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F0')}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? '#CC0000' : '#888888')}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.7rem', padding: '0.6rem 1.4rem' }}>
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F5F5F0', display: 'flex' }}
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, bottom: 0,
          background: '#0A0A0A', zIndex: 99, padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }} className="md:hidden">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem',
                fontWeight: 600,
                textDecoration: 'none',
                color: pathname === link.href ? '#CC0000' : '#F5F5F0',
                borderBottom: '1px solid #2A2A2A',
                paddingBottom: '1rem',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
