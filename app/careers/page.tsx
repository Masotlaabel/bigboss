'use client';
import HeroScene from '@/app/components/HeroScene';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Upload } from 'lucide-react';

const roles = ['MBA Graduates', 'Accountants & Chartered Accountants', 'Management & Leadership Trainers', 'Programmers', 'SEO Specialists', 'IT Specialists', 'Project Managers', 'Journalists', 'And more...'];
const values = ['Excellence', 'Discipline', 'Ownership', 'Integrity', 'Growth'];
const steps = [
  { num: '01', title: 'Start', desc: 'Join our team and get trained in BigBoss systems and culture. Learn the way we work.' },
  { num: '02', title: 'Excel', desc: 'Deliver results, lead projects, achieve recognition. Stand out through performance.' },
  { num: '03', title: 'Own', desc: 'High performers earn the opportunity to become partners in BigBoss CC.' },
];

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', country: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bb-corporate-hero bb-hero-careers" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #000D00)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <HeroScene variant="careers"/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-50px', bottom: 0, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '14rem', color: 'rgba(204,0,0,0.05)', lineHeight: 1, userSelect: 'none' }}>CAREERS</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Careers</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Grow With<br /><em style={{ color: '#CC0000', fontWeight: 700 }}>BigBoss CC</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            We train SADC talent to lead, build, and own. Start your career. Become a future partner.
          </p>
          <a href="#apply" className="btn-primary">Apply Now</a>
        </div>
      </section>

      {/* CULTURE */}
      <section style={{ padding: '6rem 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="animate-on-scroll">
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Culture</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Train With Us.<br />Win With Us.<br /><em style={{ color: '#CC0000' }}>Own With Us.</em>
            </h2>
            <div className="accent-line" />
            <p style={{ fontSize: '1.05rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              At BigBoss, a job is just the start. We hire locals and develop them into their best selves. You&apos;ll be trained in the BigBoss culture of excellence, discipline, and ownership.
            </p>
            <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.9 }}>
              Do your job well. Achieve accolades. And your path won&apos;t stop at employee. It leads to partnership.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignContent: 'flex-start' }}>
            {values.map(v => (
              <div key={v} style={{
                background: '#1A1A1A', border: '1px solid #2A2A2A', borderLeft: '3px solid #CC0000',
                padding: '1.5rem 2rem', flex: '1 1 180px',
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F5F5F0', fontStyle: 'italic' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HIRE */}
      <section style={{ padding: '6rem 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Roles</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
              Join Africa&apos;s Growth Team
            </h2>
            <p style={{ fontSize: '1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8 }}>
              We&apos;re looking for talent across SADC. If you&apos;re driven, skilled, and ready to build Africa&apos;s future, we want to hear from you.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1px', background: '#2A2A2A' }}>
            {roles.map((role, i) => (
              <div key={role} className="animate-on-scroll" style={{
                background: '#0A0A0A', padding: '1.5rem 2rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                transition: 'background 0.2s',
                transitionDelay: `${i * 0.03}s`,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1A1A1A')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}>
                <span style={{ color: '#CC0000', fontSize: '0.6rem' }}>◆</span>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', color: '#CCCCCC', fontWeight: 400 }}>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH PATH */}
      <section style={{ padding: '6rem 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Your Path</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0' }}>Your Path at BigBoss</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', background: '#2A2A2A' }}>
            {steps.map((step, i) => (
              <div key={step.num} className="animate-on-scroll" style={{
                background: '#111111',
                padding: '3rem',
                borderTop: `3px solid ${i === 0 ? '#888888' : i === 1 ? '#CC0000' : '#D4A017'}`,
                transitionDelay: `${i * 0.1}s`,
                position: 'relative',
              }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, position: 'absolute', top: '1rem', right: '1.5rem' }}>{step.num}</div>
                <div className="section-label" style={{ color: i === 0 ? '#888888' : i === 1 ? '#CC0000' : '#D4A017', marginBottom: '0.8rem' }}>Step {step.num}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#F5F5F0', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.8 }}>{step.desc}</p>
                {i < 2 && <ArrowRight size={20} style={{ color: '#2A2A2A', marginTop: '1.5rem' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" style={{ padding: '6rem 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Apply</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
              Ready to Build<br /><em style={{ color: '#CC0000' }}>With Us?</em>
            </h2>
            <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.8 }}>
              No open role fits you yet? Apply anyway. We&apos;re expanding into every SADC country and new roles open fast.
            </p>
          </div>

          {submitted ? (
            <div className="animate-on-scroll" style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ color: '#CC0000', fontSize: '2rem', marginBottom: '1rem' }}>◆</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#F5F5F0', marginBottom: '0.5rem' }}>Application Received</h3>
              <p style={{ color: '#888888' }}>We&apos;ll be in touch soon. Thank you for your interest in building Africa&apos;s future with us.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { key: 'whatsapp', label: 'WhatsApp Number', type: 'tel', placeholder: '+27 XX XXX XXXX' },
                { key: 'country', label: 'Country', type: 'text', placeholder: 'Your country' },
                { key: 'role', label: 'Role of Interest', type: 'text', placeholder: 'e.g. MBA Graduate, Programmer, Project Manager...' },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', display: 'block', marginBottom: '0.4rem' }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                    required
                    style={{
                      width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A',
                      color: '#F5F5F0', padding: '0.9rem 1.2rem',
                      fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem',
                      outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#CC0000')}
                    onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', display: 'block', marginBottom: '0.4rem' }}>Why BigBoss?</label>
                <textarea
                  placeholder="Tell us why you want to join BigBoss and what you bring to the table..."
                  value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  style={{
                    width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A',
                    color: '#F5F5F0', padding: '0.9rem 1.2rem',
                    fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem',
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#CC0000')}
                  onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Upload size={16} />
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
