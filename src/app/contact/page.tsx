'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/AppContext';

export default function ContactPage() {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(false);

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'First Name': (form.elements.namedItem('firstName') as HTMLInputElement).value,
          'Last Name': (form.elements.namedItem('lastName') as HTMLInputElement).value,
          'Email': (form.elements.namedItem('email') as HTMLInputElement).value,
          'Phone': (form.elements.namedItem('phone') as HTMLInputElement).value,
          'Interested In': (form.elements.namedItem('interest') as HTMLSelectElement).value,
          'Message': (form.elements.namedItem('message') as HTMLTextAreaElement).value,
          _to: 'techbloomltd@gmail.com',
          _subject: 'New Contact Form Message – Tech Bloom',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      showToast('✅ Message sent! Our team will reply shortly.');
      form.reset();
    } catch {
      showToast('❌ Something went wrong. Please email us at techbloomltd@gmail.com');
    } finally {
      setLoading(false);
    }
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
                  <div className="form-group"><label>First Name</label><input name="firstName" type="text" placeholder="e.g. Amara" required /></div>
                  <div className="form-group"><label>Last Name</label><input name="lastName" type="text" placeholder="e.g. Okafor" required /></div>
                </div>
                <div className="form-group"><label>Email Address</label><input name="email" type="email" placeholder="your@email.com" required /></div>
                <div className="form-group"><label>Phone Number</label><input name="phone" type="tel" placeholder="+234 800 000 0000" /></div>
                <div className="form-group">
                  <label>I&apos;m Interested In</label>
                  <select name="interest">
                    <option value="">Select an option...</option>
                    <option>Enrolling in a Course</option>
                    <option>Job Placement Programme</option>
                    <option>Corporate Training</option>
                    <option>Employer Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="form-group"><label>Message</label><textarea name="message" placeholder="Tell us how we can help you..."></textarea></div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>{loading ? 'Sending...' : 'Send Message →'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
