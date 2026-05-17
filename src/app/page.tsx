'use client';

import Link from 'next/link';
import { courses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';
import EnrollButton from '@/components/EnrollButton';
import { useApp } from '@/lib/AppContext';

export default function HomePage() {
  const { showToast } = useApp();
  const featuredCourses = courses.slice(0, 6);

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('✅ Message sent! Our team will reply shortly.');
    (e.target as HTMLFormElement).reset();
  };

  const surpriseMe = () => {
    const careers = [
      "🚀 Future AI Prompt Engineer",
      "🎨 Master Graphic Designer",
      "⚡ Automation Rockstar",
      "📊 Data-Driven Project Manager",
      "📓 Notion Workspace Architect",
      "🔄 Workflow Automation Guru"
    ];
    const random = careers[Math.floor(Math.random() * careers.length)];
    showToast(`✨ Surprise! Your Tech Destiny: ${random}`);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div>
            <div className="hero-badge">🌱 Port Harcourt, Nigeria</div>
            <h1>Transform Your Future With <em>Digital Skills</em></h1>
            <p>Tech Bloom Limited equips you with in-demand tech skills and connects you with employers. From AI tools to project management — we train, certify, and place you.</p>
            <div className="hero-btns">
              <Link href="/courses" className="btn btn-primary">🎓 Explore Courses</Link>
              <Link href="/placement" className="btn btn-outline">💼 Job Placement</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-stat">
                <div className="stat-item">
                  <div className="stat-icon">👨‍💻</div>
                  <div className="stat-info"><strong>500+</strong><span>Students Trained</span></div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">💼</div>
                  <div className="stat-info"><strong>10+</strong><span>Employer Partners</span></div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🏆</div>
                  <div className="stat-info"><strong>10</strong><span>Expert-Led Courses</span></div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-info"><strong>85%</strong><span>Job Placement Rate</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stats-item"><strong>500+</strong><span>Students Trained</span></div>
          <div className="stats-item"><strong>10</strong><span>Skill Courses</span></div>
          <div className="stats-item"><strong>85%</strong><span>Job Placement Rate</span></div>
          <div className="stats-item"><strong>100%</strong><span>Beginner Friendly</span></div>
        </div>
      </div>

      {/* Featured Courses */}
      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">What We Teach</p>
            <h2 className="section-title">Our Flagship Courses</h2>
            <p className="section-sub">Beginner-friendly, hands-on training in the most in-demand digital tools trusted by companies worldwide.</p>
          </div>
          <div className="courses-grid">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/courses" className="btn btn-primary">View All Courses →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'var(--navy)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label" style={{ color: 'var(--mint)' }}>Why Us</p>
            <h2 className="section-title light">Why Choose Tech Bloom?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon">🎯</div><h3>Beginner Friendly</h3><p>Zero prior experience required. We start from scratch.</p></div>
            <div className="why-card"><div className="why-icon">🛠️</div><h3>Hands-On Projects</h3><p>Build real systems you can show to employers.</p></div>
            <div className="why-card"><div className="why-icon">💼</div><h3>Job Placement</h3><p>We actively connect graduates with hiring companies.</p></div>
            <div className="why-card"><div className="why-icon">📜</div><h3>Certification</h3><p>Earn recognized certificates that signal your skills.</p></div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2>Ready to Bloom? 🌱</h2>
          <p>Join hundreds of students who have transformed their careers. Enrollment is now open!</p>
          <EnrollButton label="Enroll Today — It's Free to Start" className="btn btn-coral" />
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>We&apos;re Here to Help 👋</h3>
              <p>Contact us about enrollment, courses, or partnerships.</p>
              
              <a href="mailto:techbloomltd@gmail.com" className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div className="contact-item-text"><strong>Email Us</strong><span>techbloomltd@gmail.com</span></div>
              </a>

              <div className="contact-item" style={{ cursor: 'default' }}>
                <div className="contact-item-icon" style={{ background: 'var(--coral)' }}>📍</div>
                <div className="contact-item-text"><strong>Location</strong><span>Port Harcourt, Nigeria</span></div>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--light)', borderRadius: '16px', border: '1px dashed var(--teal)' }}>
                <h4 style={{ marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif' }}>Feeling Adventurous?</h4>
                <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Let the Tech Bloom destiny wheel decide your path!</p>
                <button onClick={surpriseMe} className="btn btn-outline" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>
                  🎁 Surprise Me
                </button>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem' }}>Send Message</h3>
              <form onSubmit={handleContact}>
                <div className="form-row">
                  <div className="form-group"><label>First Name</label><input type="text" placeholder="Amara" required /></div>
                  <div className="form-group"><label>Last Name</label><input type="text" placeholder="Okafor" required /></div>
                </div>
                <div className="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com" required /></div>
                <div className="form-group">
                  <label>Subject</label>
                  <select required>
                    <option value="">Select an option...</option>
                    <option>Enrolling in a Course</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div className="form-group"><label>Message</label><textarea placeholder="How can we help?" style={{ minHeight: '120px' }}></textarea></div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}