'use client';

import Link from 'next/link';
import { useState } from 'react';
import { courses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';
import EnrollButton from '@/components/EnrollButton';

const filters = [
  { label: 'All Courses', value: 'all' },
  { label: 'AI Tools', value: 'ai' },
  { label: 'Productivity', value: 'productivity' },
  { label: 'Automation', value: 'automation' },
  { label: 'Design', value: 'design' },
];

export default function CoursesPage() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? courses : courses.filter((c) => c.cat === active);

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link href="/"><span>Home</span></Link>
            <span className="sep">/</span>
            <span className="active">Courses</span>
          </div>
          <h1>Our 10 Flagship Courses</h1>
          <p>Beginner-friendly, project-based training in the most in-demand digital tools in the job market today.</p>
        </div>
      </div>

      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`filter-btn ${active === f.value ? 'active' : ''}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="courses-grid">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready to Pick Your Course? 🎓</h2>
        <p>All courses are beginner-friendly and include a certificate of completion plus job placement support.</p>
        <EnrollButton label="Enroll Now — Spots Limited!" className="btn btn-coral" />
      </div>
    </>
  );
}
