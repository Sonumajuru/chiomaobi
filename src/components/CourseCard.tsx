'use client';

import { Course } from '@/lib/courses';
import { useApp } from '@/lib/AppContext';
import { useState } from 'react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { openEnroll } = useApp();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="course-card" onClick={() => setModalOpen(true)}>
        <div className="course-top" style={{ background: `${course.color}20` }}>
          <span style={{ position: 'relative', zIndex: 2, fontSize: '3rem' }}>{course.icon}</span>
        </div>
        <div className="course-body">
          <div className="course-tag">{course.tag}</div>
          <h3>{course.title}</h3>
          <p>{course.desc}</p>
        </div>
        <div className="course-footer">
          <span className="course-level">📅 {course.duration} &nbsp;·&nbsp; 🎯 {course.level}</span>
          <span className="course-arrow">→</span>
        </div>
      </div>

      {/* Course Detail Modal */}
      <div
        className={`modal-overlay ${modalOpen ? 'open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
      >
        <div className="modal">
          <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{course.icon}</div>
          <p className="section-label">{course.tag}</p>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1.7rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
            {course.title}
          </h2>
          <p style={{ color: 'var(--gray)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{course.desc}</p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {[`📅 ${course.duration}`, `🎯 ${course.level}`, '📜 Certificate Included'].map(tag => (
              <span key={tag} style={{ background: 'var(--light)', padding: '0.4rem 0.9rem', borderRadius: '100px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)' }}>
                {tag}
              </span>
            ))}
          </div>
          <h4 style={{ fontFamily: 'Syne,sans-serif', fontSize: '1rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>
            Course Syllabus
          </h4>
          <ul className="syllabus">
            {course.syllabus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}
            onClick={() => { setModalOpen(false); openEnroll(); }}
          >
            Enroll in This Course →
          </button>
        </div>
      </div>
    </>
  );
}
