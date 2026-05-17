'use client';

import Link from 'next/link';
import { useApp } from '@/lib/AppContext';

export default function ContactPage() {
  const { showToast } = useApp();

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
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link href="/"><span>Home</span></Link>
            <span className="sep">/</span>
            <span className="active">Contact</span>
          </div>
          <h1>Get In Touch</h1>
          <p>Have questions? Ready to enroll? We&apos;d love to hear from you. Reach out any time!</p>
        </div>
      </div>

      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>We&apos;re Here to Help 👋</h3>
              <p>Whether you have a question about our courses or you&apos;re an employer looking to hire — our team is ready to assist.</p>
              
              <a href="mailto:techbloomltd@gmail.com" className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div className="contact-item-text"><strong>Email Us</strong><span>techbloomltd@gmail.com</span></div>
              </a>
              
              <a href="https://facebook.com" target="_blank" className="contact-item">
                <div className="contact-item-icon" style={{ background: '#1877F2' }}>📘</div>
                <div className="contact-item-text"><strong>Facebook</strong><span>Follow Tech Bloom</span></div>
              </a>

              <div className="contact-item" style={{ cursor: 'default' }}>
                <div className="contact-item-icon" style={{ background: 'var(--coral)' }}>📍</div>
                <div className="contact-item-text"><strong>Location</strong><span>Port Harcourt, Nigeria</span></div>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--light)', borderRadius: '16px', border: '1px dashed var(--teal)' }}>
                <h4 style={{ marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif' }}>Feeling Adventurous?</h4>
                <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Not sure which path to take? Let the Tech Bloom destiny wheel decide for you!</p>
                <button onClick={surpriseMe} className="btn btn-outline" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>
                  🎁 Surprise Me
                </button>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem' }}>
                Send Us a Message
              </h3>
              <form onSubmit={handleContact}>
                <div className="form-row">
                  <div className="form-group"><label>First Name</label><input type="text" placeholder="e.g. Amara" required /></div>
                  <div className="form-group"><label>Last Name</label><input type="text" placeholder="e.g. Okafor" required /></div>
                </div>
                <div className="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com" required /></div>
                <div className="form-group">
                  <label>Subject</label>
                  <select required>
                    <option value="">Select an option...</option>
                    <option>Enrolling in a Course</option>
                    <option>Job Placement Inquiry</option>
                    <option>Employer Partnership</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="How can we help you?" style={{ minHeight: '120px', width: '100%' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}