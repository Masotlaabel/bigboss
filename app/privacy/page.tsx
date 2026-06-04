export default function Privacy() {
  return (
    <section style={{ paddingTop: '120px', paddingBottom: '6rem', padding: '120px 2rem 6rem', background: '#0A0A0A', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Legal</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#F5F5F0', marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={{ color: '#888888', lineHeight: 1.9, fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>BigBoss Corporate Consulting (&quot;BigBoss CC&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa and applicable SADC data protection regulations.</p>
          {[
            { title: 'Information We Collect', content: 'We collect personal information you provide directly, including name, email address, phone number, country, and any messages you send us through our contact forms or via WhatsApp. We may also collect information about how you interact with our website.' },
            { title: 'How We Use Your Information', content: 'We use your information to respond to enquiries, process applications, send relevant communications about our services, and improve our website and services. We do not sell your personal information to third parties.' },
            { title: 'Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
            { title: 'Your Rights', content: 'You have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at rolof.bigbosscorporate@outlook.com.' },
            { title: 'Contact', content: 'For privacy-related inquiries: rolof.bigbosscorporate@outlook.com' },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#F5F5F0', marginBottom: '0.75rem' }}>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
          <p style={{ color: '#555555', fontSize: '0.8rem' }}>Last updated: June 2026</p>
        </div>
      </div>
    </section>
  );
}
