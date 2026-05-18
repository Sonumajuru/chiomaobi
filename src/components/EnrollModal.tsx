'use client';

import { useState } from 'react';
import { useApp } from '@/lib/AppContext';

export default function EnrollModal() {
  const { enrollOpen, closeEnroll, showToast } = useApp();
  const [loading, setLoading] = useState(false);

  if (!enrollOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
    const course = (form.elements.namedItem('course') as HTMLSelectElement).value;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'First Name': firstName,
          'Last Name': (form.elements.namedItem('lastName') as HTMLInputElement).value,
          'Email': (form.elements.namedItem('email') as HTMLInputElement).value,
          'Phone': (form.elements.namedItem('phone') as HTMLInputElement).value,
          'Course': course,
          'Heard Via': (form.elements.namedItem('source') as HTMLSelectElement).value,
          _to: 'chiomaobi587@gmail.com',
          _cc: 'Chiomaekeneobi@gmail.com',
          _subject: `New Enrollment: ${firstName} — ${course}`,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      closeEnroll();
      showToast("🎉 Enrollment submitted! We'll contact you within 24 hours.");
    } catch {
      showToast('❌ Something went wrong. Please email us at techbloomltd@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) closeEnroll(); }}>
      <div className="modal">
        <button className="modal-close" onClick={closeEnroll}>✕</button>
        <h2>🌱 Enroll at Tech Bloom</h2>
        <p>Fill in your details and we&apos;ll get back to you within 24 hours with next steps.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group"><label>First Name</label><input name="firstName" type="text" placeholder="Amara" required /></div>
            <div className="form-group"><label>Last Name</label><input name="lastName" type="text" placeholder="Okafor" required /></div>
          </div>
          <div className="form-group"><label>Email Address</label><input name="email" type="email" placeholder="your@email.com" required /></div>
          <div className="form-group"><label>Phone Number</label><input name="phone" type="tel" placeholder="+234 800 000 0000" required /></div>
          <div className="form-group">
            <label>Course of Interest</label>
            <select name="course" required>
              <option value="">Choose a course...</option>
              <option>ChatGPT + Prompting</option>
              <option>Gemini AI</option>
              <option>Grammarly</option>
              <option>Loom</option>
              <option>Notion</option>
              <option>Zapier</option>
              <option>Make</option>
              <option>Airtable</option>
              <option>ClickUp</option>
              <option>Canva Pro</option>
              <option>All Courses (Full Programme)</option>
            </select>
          </div>
          <div className="form-group">
            <label>How did you hear about us?</label>
            <select name="source">
              <option value="">Select...</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
              <option>Friend / Referral</option>
              <option>Google Search</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }} disabled={loading}>
            {loading ? 'Sending...' : 'Submit Enrollment →'}
          </button>
        </form>
      </div>
    </div>
  );
}
