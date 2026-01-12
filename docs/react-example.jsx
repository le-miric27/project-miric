import React, { useState } from "react";

export default function SkillsSection() {
  const [hoveredConcept, setHoveredConcept] = useState(null);

  const stack = {
    "What I Build With": [
      { name: "NestJS", icon: "🔴", note: "Primary backend framework" },
      { name: "Vue / Nuxt", icon: "💚", note: "Go-to for frontend" },
      { name: "TypeScript", icon: "🔷", note: "Everywhere possible" },
      { name: "PostgreSQL", icon: "🐘", note: "Default database choice" },
    ],
    "Also Comfortable With": [
      { name: "React / Next.js", icon: "⚛️" },
      { name: "Express.js", icon: "⚡" },
      { name: "Laravel", icon: "🔶" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔻" },
    ],
    Infrastructure: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️", note: "EC2, S3, RDS, Lambda" },
      { name: "CI/CD", icon: "🔄", note: "GitHub Actions, GitLab CI" },
      { name: "Linux", icon: "🐧" },
    ],
  };

  const concepts = [
    {
      name: "REST API Design",
      level: "applied",
      desc: "Design and build RESTful services daily",
    },
    {
      name: "Database Indexing",
      level: "applied",
      desc: "Optimize queries, understand execution plans",
    },
    {
      name: "Caching Strategies",
      level: "applied",
      desc: "Redis caching, HTTP caching, memoization",
    },
    {
      name: "Authentication",
      level: "applied",
      desc: "JWT, OAuth2, session management",
    },
    {
      name: "Message Queues",
      level: "familiar",
      desc: "Used RabbitMQ and Redis pub/sub",
    },
    {
      name: "Containerization",
      level: "applied",
      desc: "Docker for dev and production",
    },
    {
      name: "CI/CD Pipelines",
      level: "applied",
      desc: "Automated testing and deployment",
    },
    {
      name: "Microservices",
      level: "familiar",
      desc: "Built a few, understand the tradeoffs",
    },
    {
      name: "Load Balancing",
      level: "conceptual",
      desc: "Understand principles, limited hands-on",
    },
    {
      name: "Rate Limiting",
      level: "applied",
      desc: "Implemented API rate limiting",
    },
  ];

  const levelColors = {
    applied: {
      bg: "rgba(34, 197, 94, 0.15)",
      border: "rgba(34, 197, 94, 0.4)",
      text: "#22c55e",
    },
    familiar: {
      bg: "rgba(59, 130, 246, 0.15)",
      border: "rgba(59, 130, 246, 0.4)",
      text: "#3b82f6",
    },
    conceptual: {
      bg: "rgba(156, 163, 175, 0.15)",
      border: "rgba(156, 163, 175, 0.4)",
      text: "#9ca3af",
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0b",
        color: "#e4e4e7",
        fontFamily: "'Inter', -apple-system, sans-serif",
        padding: "5rem 2rem",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .stack-card {
          background: linear-gradient(145deg, rgba(39, 39, 42, 0.6) 0%, rgba(24, 24, 27, 0.8) 100%);
          border: 1px solid rgba(63, 63, 70, 0.5);
          border-radius: 16px;
          padding: 1.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stack-card:hover {
          border-color: rgba(113, 113, 122, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(63, 63, 70, 0.3);
          transition: all 0.2s ease;
        }
        
        .tech-item:last-child {
          border-bottom: none;
        }
        
        .tech-item:hover {
          padding-left: 0.5rem;
        }
        
        .tech-icon {
          font-size: 1.25rem;
          width: 2rem;
          text-align: center;
        }
        
        .tech-name {
          font-weight: 500;
          font-size: 0.95rem;
        }
        
        .tech-note {
          font-size: 0.75rem;
          color: #71717a;
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .concept-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: default;
          transition: all 0.2s ease;
          border: 1px solid;
        }
        
        .concept-chip:hover {
          transform: scale(1.02);
        }
        
        .section-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #52525b;
          margin-bottom: 0.75rem;
        }
        
        .category-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: #fafafa;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #71717a;
        }
        
        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: #27272a;
          border: 1px solid #3f3f46;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #a1a1aa;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 10;
        }
        
        .concept-wrapper:hover .tooltip {
          opacity: 1;
        }
        
        .humble-note {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(251, 191, 36, 0.02) 100%);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .humble-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }
      `}</style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">Technical Background</p>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #fafafa 0%, #a1a1aa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tools & Concepts
          </h2>
          <p
            style={{
              color: "#71717a",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            A honest overview of what I work with. I'm not claiming expertise in
            everything—just showing what I reach for and what I understand.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="stack-card">
              <h3 className="category-title">{category}</h3>
              <div>
                {items.map(({ name, icon, note }) => (
                  <div key={name} className="tech-item">
                    <span className="tech-icon">{icon}</span>
                    <span className="tech-name">{name}</span>
                    {note && <span className="tech-note">{note}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* System Design Concepts */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p className="section-label">Beyond Frameworks</p>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                Concepts I've Applied
              </h3>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ background: levelColors.applied.text }}
                ></div>
                <span>Hands-on experience</span>
              </div>
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ background: levelColors.familiar.text }}
                ></div>
                <span>Familiar with</span>
              </div>
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ background: levelColors.conceptual.text }}
                ></div>
                <span>Understand concepts</span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              padding: "1.5rem",
              background: "rgba(24, 24, 27, 0.5)",
              borderRadius: "16px",
              border: "1px solid rgba(63, 63, 70, 0.3)",
            }}
          >
            {concepts.map(({ name, level, desc }) => (
              <div
                key={name}
                className="concept-wrapper"
                style={{ position: "relative" }}
              >
                <div
                  className="concept-chip"
                  style={{
                    background: levelColors[level].bg,
                    borderColor: levelColors[level].border,
                    color: levelColors[level].text,
                  }}
                >
                  {name}
                </div>
                <div className="tooltip">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Humble note */}
        <div className="humble-note">
          <span className="humble-icon">📝</span>
          <div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#d4d4d8",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#fbbf24" }}>A note on honesty:</strong>{" "}
              I've deliberately avoided listing every technology I've touched.
              This represents tools I can actually be productive with on day
              one, not a keyword-stuffed wishlist. The best proof is in the{" "}
              <a
                href="#projects"
                style={{ color: "#fbbf24", textDecoration: "underline" }}
              >
                projects below
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
