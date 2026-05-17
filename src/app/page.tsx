import Link from 'next/link';
import { courses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';
import EnrollButton from '@/components/EnrollButton';

export default function HomePage() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero" style={{ minHeight: '100vh', background: 'var(--navy)', display: 'flex', alignItems: 'center', paddingTop: '70px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(10,147,150,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(10,147,150,.06) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 70% 40%,rgba(10,147,150,.18) 0%,transparent 70%)' }} />

        <div className="section-inner" style={{ padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'rgba(10,147,150,.2)', border: '1px solid rgba(10,147,150,.4)', color: 'var(--mint)', padding: '.4rem 1rem', borderRadius: '100px', fontSize: '.82rem', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              🌱 Port Harcourt, Nigeria
            </div>
            <h1 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(2.4rem,5vw,3.6rem)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Transform Your Future With <em style={{ color: 'var(--teal)', fontStyle: 'normal' }}>Digital Skills</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,.72)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '500px' }}>
              Tech Bloom Limited equips you with in-demand tech skills and connects you with employers. From AI tools to project management — we train, certify, and place you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/courses" className="btn btn-primary">🎓 Explore Courses</Link>
              <Link href="/placement" className="btn btn-outline">💼 Job Placement</Link>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '20px', padding: '2rem', backdropFilter: 'blur(10px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '👨‍💻', stat: '500+', label: 'Students Trained' },
                { icon: '💼', stat: '10+', label: 'Employer Partners' },
                { icon: '🏆', stat: '10', label: 'Expert-Led Courses' },
                { icon: '🎯', stat: '85%', label: 'Job Placement Rate' },
              ].map(({ icon, stat, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(10,147,150,.12)', borderRadius: '12px', border: '1px solid rgba(10,147,150,.2)' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--teal)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <strong style={{ display: 'block', fontFamily: 'Syne,sans-serif', fontSize: '1.5rem', color: 'var(--white)' }}>{stat}</strong>
                    <span style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.6)' }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────── */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stats-item"><strong>500+</strong><span>Students Trained</span></div>
          <div className="stats-item"><strong>10</strong><span>Skill Courses</span></div>
          <div className="stats-item"><strong>85%</strong><span>Job Placement Rate</span></div>
          <div className="stats-item"><strong>100%</strong><span>Beginner Friendly</span></div>
        </div>
      </div>

      {/* ── FEATURED COURSES ──────────────────────── */}
      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">What We Teach</p>
            <h2 className="section-title">Our 10 Flagship Courses</h2>
            <p className="section-sub">Beginner-friendly, hands-on training in the most in-demand digital tools trusted by companies worldwide.</p>
          </div>
          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/courses" className="btn btn-primary">View All Courses →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────── */}
      <section style={{ background: 'var(--navy)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label" style={{ color: 'var(--mint)' }}>Why Us</p>
            <h2 className="section-title light">Why Choose Tech Bloom?</h2>
            <p className="section-sub light">We don&apos;t just teach — we transform careers with practical skills and real job connections.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: '🎯', title: 'Beginner Friendly', desc: 'Zero prior experience required. We start from scratch and build your confidence step by step.' },
              { icon: '🛠️', title: 'Hands-On Projects', desc: 'Every course includes real mini-projects you build yourself — not just theory and slides.' },
              { icon: '💼', title: 'Job Placement Support', desc: 'Our placement team actively connects graduates with hiring employers across Nigeria.' },
              { icon: '📜', title: 'Certificate of Completion', desc: 'Earn a recognized Tech Bloom certificate that signals your skills to employers.' },
              { icon: '👩‍🏫', title: 'Expert Coaches', desc: 'Learn from practitioners with real industry experience — not just academics.' },
              { icon: '🤝', title: 'Lifetime Community', desc: 'Join a network of tech professionals and alumni who support each other long after graduation.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────── */}
      <section style={{ background: 'var(--light)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">Student Stories</p>
            <h2 className="section-title">What Our Students Say</h2>
          </div>
          <div className="testi-grid">
            {[
              { initials: 'AC', name: 'Amara C.', role: 'Operations Coordinator, Lagos', quote: 'Tech Bloom changed my life. Within 3 months of graduating, I landed a remote job managing workflows with Notion and ClickUp. The training was practical and the coaches were amazing!' },
              { initials: 'TN', name: 'Tunde N.', role: 'Digital Marketer, Port Harcourt', quote: 'I had zero tech skills before Tech Bloom. Now I use Canva Pro and Zapier daily for my business. The beginner-friendly approach makes all the difference. Highly recommend!' },
              { initials: 'FO', name: 'Funmi O.', role: 'Content Creator, Abuja', quote: 'The ChatGPT and AI tools training was eye-opening. I now use AI every day to write better, work faster, and stand out from my colleagues. Tech Bloom is ahead of the curve!' },
            ].map(({ initials, name, role, quote }) => (
              <div key={name} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p>&ldquo;{quote}&rdquo;</p>
                <div className="testi-author">
                  <div className="testi-avatar">{initials}</div>
                  <div>
                    <div className="testi-name">{name}</div>
                    <div className="testi-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────── */}
      <div className="cta-banner">
        <h2>Ready to Bloom? 🌱</h2>
        <p>Join hundreds of students who have transformed their careers with Tech Bloom Limited. Enrollment is now open!</p>
        <EnrollButton label="Enroll Today — It's Free to Start" className="btn btn-coral" />
      </div>
    </>
  );
}
