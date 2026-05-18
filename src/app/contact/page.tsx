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
              <p>Whether you have a question about our courses, want to know about enrollment, or are an employer looking to hire our graduates — our team is ready to assist.</p>
              <a href="mailto:techbloomltd@gmail.com" className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div className="contact-item-text"><strong>Email Us</strong><span>techbloomltd@gmail.com</span></div>
              </a>
              <a href="https://www.facebook.com/share/1Ec2zKxjS6/" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon" style={{ background: '#1877F2' }}>📘</div>
                <div className="contact-item-text"><strong>Facebook</strong><span>Follow us on Facebook</span></div>
              </a>
              <a href="https://www.linkedin.com/in/chiomaruth-obi" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon" style={{ background: '#0A66C2' }}>💼</div>
                <div className="contact-item-text"><strong>LinkedIn</strong><span>linkedin.com/in/chiomaruth-obi</span></div>
              </a>
              <div className="contact-item" style={{ cursor: 'default' }}>
                <div className="contact-item-icon" style={{ background: 'var(--coral)' }}>📍</div>
                <div className="contact-item-text"><strong>Location</strong><span>Port Harcourt, Rivers State, Nigeria</span></div>
              </div>
              <div className="contact-item" style={{ cursor: 'default' }}>
                <div className="contact-item-icon" style={{ background: 'var(--coral)' }}>🕒</div>
                <div className="contact-item-text"><strong>Office Hours</strong><span>Mon – Sat: 8:00 AM – 6:00 PM</span></div>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem' }}>Send Us a Message</h3>
              <form onSubmit={handleContact}>
                <div className="form-row">
                  <div className="form-group"><label>First Name</label><input type="text" placeholder="e.g. Amara" required /></div>
                  <div className="form-group"><label>Last Name</label><input type="text" placeholder="e.g. Okafor" required /></div>
                </div>
                <div className="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com" required /></div>
                <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+234 800 000 0000" /></div>
                <div className="form-group">
                  <label>I&apos;m Interested In</label>
                  <select>
                    <option value="">Select an option...</option>
                    <option>Enrolling in a Course</option>
                    <option>Job Placement Programme</option>
                    <option>Corporate Training</option>
                    <option>Employer Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="form-group"><label>Message</label><textarea placeholder="Tell us how we can help you..."></textarea></div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
