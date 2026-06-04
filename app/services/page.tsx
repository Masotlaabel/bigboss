'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { Briefcase, Globe, Users, Settings, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Corporate Strategy & Performance',
    desc: 'We bring structure, systems, and execution. Diagnose gaps, build strategy, implement solutions so companies scale and compete globally.',
    outcomes: ['Efficiency', 'Profitability', 'Scale'],
    color: '#CC0000',
  },
  {
    icon: Shield,
    title: 'Government Advisory & Policy',
    desc: 'We work with governments to reduce unemployment and increase GDP. Data-driven advice, project design, and execution support for national impact.',
    outcomes: ['Jobs', 'GDP Growth', 'Policy Impact'],
    color: '#D4A017',
  },
  {
    icon: Globe,
    title: 'Trade & Market Access',
    desc: 'We negotiate business export and import deals. Opening doors for Africa\'s companies into Europe and global markets. From compliance to first shipment.',
    outcomes: ['New Markets', 'Export Revenue', 'Trade Deals'],
    color: '#CC0000',
  },
  {
    icon: Users,
    title: 'Leadership & Talent Development',
    desc: 'We train leaders and teams. MBA graduates to managers. BigBoss culture: excellence, discipline, ownership. Custom programs + in-house training.',
    outcomes: ['Skilled Teams', 'Future Leaders', 'Ownership Culture'],
    color: '#D4A017',
  },
  {
    icon: Settings,
    title: 'Project Management & Execution',
    desc: 'Big ideas fail without delivery. We manage complex projects end-to-end. On time, on budget, measurable results.',
    outcomes: ['On-time Delivery', 'Risk Reduction', 'Results'],
    color: '#CC0000',
  },
  {
    icon: Zap,
    title: 'Digital Transformation & IT',
    desc: 'Programmers, SEO, IT specialists who modernize your business. Websites, systems, data, automation built for African realities.',
    outcomes: ['Digital Systems', 'Automation', 'Growth Online'],
    color: '#D4A017',
  },
];

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #0D0000)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: '20%', right: '5%', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '16rem', color: 'rgba(204,0,0,0.05)', lineHeight: 1, userSelect: 'none' }}>EXPERT</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Services</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            How We<br /><em style={{ color: '#CC0000', fontWeight: 700 }}>Create Success</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8, marginBottom: '2rem' }}>
            We partner with companies and governments across SADC to turn potential into performance.
          </p>
          <Link href="/contact" className="btn-primary">Request a Proposal</Link>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '6rem 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Our Expertise</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F0' }}>6 Areas of Excellence</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem' }}>
            {services.map((svc, i) => (
              <div key={svc.title} className="card animate-on-scroll" style={{
                background: '#1A1A1A',
                borderTop: `3px solid ${svc.color}`,
                transitionDelay: `${i * 0.08}s`,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div style={{ background: `rgba(${svc.color === '#CC0000' ? '204,0,0' : '212,160,23'},0.1)`, padding: '0.75rem', flexShrink: 0 }}>
                    <svc.icon size={24} style={{ color: svc.color }} />
                  </div>
                  <div>
                    <div className="section-label" style={{ color: svc.color, marginBottom: '0.3rem' }}>0{i + 1}</div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#F5F5F0', lineHeight: 1.2 }}>{svc.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.8, marginBottom: '1.5rem', flex: 1 }}>{svc.desc}</p>
                <div>
                  <div style={{ fontSize: '0.65rem', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555555', marginBottom: '0.6rem' }}>Key Outcomes</div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {svc.outcomes.map(o => (
                      <span key={o} style={{
                        fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: svc.color, background: `rgba(${svc.color === '#CC0000' ? '204,0,0' : '212,160,23'},0.08)`,
                        border: `1px solid rgba(${svc.color === '#CC0000' ? '204,0,0' : '212,160,23'},0.2)`,
                        padding: '0.2rem 0.6rem',
                      }}>{o}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: '#111111', textAlign: 'center', borderTop: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }} className="animate-on-scroll">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
            Every challenge is different.<br /><em style={{ color: '#CC0000' }}>Let&apos;s talk about yours.</em>
          </h2>
          <p style={{ color: '#888888', marginBottom: '2rem' }}>Our team of experts is ready to design a solution for your specific needs.</p>
          <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </>
  );
}
