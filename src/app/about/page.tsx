import Link from 'next/link';
import EnrollButton from '@/components/EnrollButton';

export const metadata = {
  title: 'About Us | Tech Bloom Limited',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link href="/" className="breadcrumb-link"><span>Home</span></Link>
            <span className="sep">/</span>
            <span className="active">About Us</span>
          </div>
          <h1>About Tech Bloom Limited</h1>
          <p>We exist to bridge the digital skills gap in Nigeria — one student at a time.</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="mission-grid">
            <div className="mission-img">🌱</div>
            <div className="mission-text">
              <p className="section-label">Our Story</p>
              <h2>Empowering Nigerians With Skills That Pay</h2>
              <p>Tech Bloom Limited was founded in Port Harcourt, Rivers State, with one clear purpose: to make high-quality digital skills training accessible and affordable to every Nigerian — regardless of their background.</p>
              <p>We recognized that the digital economy was growing rapidly but most Nigerians lacked the practical tools training needed to participate. That gap is what we&apos;re closing, one graduate at a time.</p>
              <ul className="check-list">
                <li>Practical, hands-on training — not just theory</li>
                <li>Job placement support for all graduates</li>
                <li>Beginner-friendly programs for all ages</li>
                <li>Internationally recognized tools and certifications</li>
                <li>A growing community of 500+ trained professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--light)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className="values-grid" style={{ marginTop: '2.5rem' }}>
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To equip Nigerians with in-demand digital skills that open doors to employment, entrepreneurship, and global opportunities.' },
              { icon: '🔭', title: 'Our Vision', desc: 'To become West Africa\'s leading digital skills training and job placement institution — where potential meets opportunity.' },
              { icon: '💡', title: 'Innovation', desc: 'We continuously update our curriculum to reflect the latest tools and technologies employers actually use.' },
              { icon: '🤝', title: 'Integrity', desc: 'We promise honest guidance, quality training, and genuine support — no empty guarantees.' },
              { icon: '🌍', title: 'Inclusion', desc: 'Our doors are open to everyone regardless of age, gender, background, or prior education level.' },
              { icon: '🏆', title: 'Excellence', desc: 'We hold ourselves and our students to the highest standards of skill, professionalism, and impact.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="value-card">
                <div className="value-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">The People Behind It</p>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👩‍💼</div>
              <h3>Chiomaruth Obi</h3>
              <div className="role">Founder & Lead Coach</div>
              <p>Visionary leader and certified digital skills trainer passionate about empowering Nigerians with world-class tech competencies.</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                <a href="https://www.linkedin.com/in/chiomaruth-obi" target="_blank" rel="noreferrer" className="social-btn social-li" title="LinkedIn">in</a>
                <a href="mailto:techbloomltd@gmail.com" className="social-btn social-em" title="Email">✉</a>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <h3>Tech Trainer</h3>
              <div className="role">AI & Automation Coach</div>
              <p>Specialist in AI tools, workflow automation with Zapier & Make, and building efficient no-code systems for businesses.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍🎨</div>
              <h3>Design Trainer</h3>
              <div className="role">Canva & Creative Tools Coach</div>
              <p>Expert in visual communication, Canva Pro, and helping students build stunning personal and professional brands.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Placement Officer</h3>
              <div className="role">Career & Job Placement</div>
              <p>Dedicated to connecting graduates with employers and helping students build CVs, portfolios, and interview readiness.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Join the Tech Bloom Family 🌱</h2>
        <p>Be part of the movement transforming careers across Nigeria. Your journey starts here.</p>
        <EnrollButton label="Start Your Journey Today" className="btn btn-coral" />
      </div>
    </>
  );
}
