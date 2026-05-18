'use client';

import { useApp } from '@/lib/AppContext';

export default function EnrollModal() {
  const { enrollOpen, closeEnroll, showToast } = useApp();

  if (!enrollOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeEnroll();
    showToast("🎉 Enrollment submitted! We'll contact you within 24 hours.");
  };

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) closeEnroll(); }}>
      <div className="modal">
        <button className="modal-close" onClick={closeEnroll}>✕</button>
        <h2>🌱 Enroll at Tech Bloom</h2>
        <p>Fill in your details and we&apos;ll get back to you within 24 hours with next steps.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group"><label>First Name</label><input type="text" placeholder="Amara" required /></div>
            <div className="form-group"><label>Last Name</label><input type="text" placeholder="Okafor" required /></div>
          </div>
          <div className="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com" required /></div>
          <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+234 800 000 0000" required /></div>
          <div className="form-group">
            <label>Course of Interest</label>
            <select required>
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
            <select>
              <option value="">Select...</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
              <option>Friend / Referral</option>
              <option>Google Search</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>Submit Enrollment →</button>
        </form>
      </div>
    </div>
  );
}
