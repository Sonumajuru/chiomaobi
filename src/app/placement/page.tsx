import Link from 'next/link';
import EnrollButton from '@/components/EnrollButton';

export const metadata = {
  title: 'Job Placement | Tech Bloom Limited',
};

export default function PlacementPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link href="/"><span>Home</span></Link>
            <span className="sep">/</span>
            <span className="active">Job Placement</span>
          </div>
          <h1>Job Placement Programme</h1>
          <p>We don&apos;t just train you — we connect you with employers who are hiring right now.</p>
        </div>
      </div>

      {/* How We Get You Hired */}
      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">Our Promise</p>
            <h2 className="section-title">How We Get You Hired</h2>
            <p className="section-sub">From CV writing to interview coaching to direct employer introductions — we walk with you every step of the job search journey.</p>
          </div>
          <div className="placement-grid">
            {[
              { icon: '📄', title: 'CV & Portfolio Building', desc: 'Our coaches help you craft a standout CV and digital portfolio that showcases your Tech Bloom projects to employers.' },
              { icon: '🎤', title: 'Interview Preparation', desc: 'Mock interviews, common question drills, and professional communication coaching to help you walk into any interview with confidence.' },
              { icon: '🔗', title: 'Employer Connections', desc: 'We have active relationships with companies in tech, media, logistics, and more who regularly hire from our graduate pool.' },
              { icon: '🌐', title: 'LinkedIn Profile Optimization', desc: 'We help you build a powerful LinkedIn presence that attracts recruiters and highlights your new digital skills.' },
              { icon: '💡', title: 'Freelance Launch Support', desc: 'Not looking for a 9-5? We help you set up on Upwork, Fiverr, or launch your own digital services business.' },
              { icon: '📊', title: 'Career Tracking', desc: 'We follow up with graduates for 6 months post-training to ensure you\'ve successfully transitioned into your new role.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="placement-card">
                <div className="placement-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stats-item"><strong>85%</strong><span>Job Placement Rate</span></div>
          <div className="stats-item"><strong>10+</strong><span>Employer Partners</span></div>
          <div className="stats-item"><strong>500+</strong><span>Graduates</span></div>
          <div className="stats-item"><strong>6 Months</strong><span>Post-Training Support</span></div>
        </div>
      </div>

      {/* Career Paths */}
      <section style={{ background: 'var(--light)' }}>
        <div className="section-inner">
          <div className="text-center">
            <p className="section-label">Career Paths</p>
            <h2 className="section-title">Jobs Our Graduates Get</h2>
            <p className="section-sub">Our graduates go on to work in a wide range of roles across industries.</p>
          </div>
          <div className="placement-grid" style={{ marginTop: '2.5rem' }}>
            {[
              { icon: '🤖', title: 'AI Prompt Engineer', desc: 'Use ChatGPT and Gemini to automate content, support, and business processes for companies.' },
              { icon: '🎨', title: 'Graphic Designer', desc: 'Create visual content for brands using Canva Pro — social media posts, presentations, and marketing materials.' },
              { icon: '⚙️', title: 'Automation Specialist', desc: 'Build Zapier and Make workflows that save businesses hours of manual work every week.' },
              { icon: '📋', title: 'Project Manager', desc: 'Lead teams using ClickUp, Notion, and Airtable to deliver projects on time and within scope.' },
              { icon: '📹', title: 'Video Content Creator', desc: 'Record and share professional tutorials, onboarding videos, and demos using Loom.' },
              { icon: '✍️', title: 'Content Writer', desc: 'Produce polished, professional written content enhanced with Grammarly and AI writing tools.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="placement-card">
                <div className="placement-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Your Dream Job Is One Course Away 💼</h2>
        <p>Enroll today and let our placement team help you land the role you deserve.</p>
        <EnrollButton label="Get Job-Ready Now" className="btn btn-coral" />
      </div>
    </>
  );
}
