'use client';

import Link from 'next/link';
import { courses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';
import EnrollButton from '@/components/EnrollButton';

export default function HomePage() {
  const featuredCourses = courses.slice(0, 6);

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
            <h2 className="section-title">Our 10 Flagship Courses</h2>
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
            <p className="section-sub light">We don&apos;t just teach — we transform careers with practical skills and real job connections.</p>
          </div>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon">🎯</div><h3>Beginner Friendly</h3><p>Zero prior experience required. We start from scratch and build your confidence step by step.</p></div>
            <div className="why-card"><div className="why-icon">🛠️</div><h3>Hands-On Projects</h3><p>Every course includes real mini-projects you build yourself — not just theory and slides.</p></div>
            <div className="why-card"><div className="why-icon">💼</div><h3>Job Placement Support</h3><p>Our placement team actively connects graduates with hiring employers across Nigeria.</p></div>
            <div className="why-card"><div className="why-icon">📜</div><h3>Certificate of Completion</h3><p>Earn a recognized Tech Bloom certificate that signals your skills to employers.</p></div>
            <div className="why-card"><div className="why-icon">👩‍🏫</div><h3>Expert Coaches</h3><p>Learn from practitioners with real industry experience — not just academics.</p></div>
            <div className="why-card"><div className="why-icon">🤝</div><h3>Lifetime Community</h3><p>Join a network of tech professionals and alumni who support each other long after graduation.</p></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--light)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">Student Stories</p>
            <h2 className="section-title">What Our Students Say</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>&ldquo;Tech Bloom changed my life. Within 3 months of graduating, I landed a remote job managing workflows with Notion and ClickUp. The training was practical and the coaches were amazing!&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">AC</div>
                <div><div className="testi-name">Amara C.</div><div className="testi-role">Operations Coordinator, Lagos</div></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>&ldquo;I had zero tech skills before Tech Bloom. Now I use Canva Pro and Zapier daily for my business. The beginner-friendly approach makes all the difference. Highly recommend!&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">TN</div>
                <div><div className="testi-name">Tunde N.</div><div className="testi-role">Digital Marketer, Port Harcourt</div></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>&ldquo;The ChatGPT and AI tools training was eye-opening. I now use AI every day to write better, work faster, and stand out from my colleagues. Tech Bloom is ahead of the curve!&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">FO</div>
                <div><div className="testi-name">Funmi O.</div><div className="testi-role">Content Creator, Abuja</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2>Ready to Bloom? 🌱</h2>
          <p>Join hundreds of students who have transformed their careers with Tech Bloom Limited. Enrollment is now open!</p>
          <EnrollButton label="Enroll Today — It's Free to Start" className="btn btn-coral" />
        </div>
      </div>
    </>
  );
}
