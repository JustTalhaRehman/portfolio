'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'kubernetes',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Start a Conversation</span>
          <h2 className="section-title">Let&apos;s Build Your Infrastructure.</h2>
          <p className="section-desc">
            Direct access to cloud &amp; platform engineering expertise. No sales overhead, no junior handoffs.
          </p>
        </div>

        <div className="contact-grid">
          {/* Channels Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a
              href="mailto:talha@devistio.com"
              className="channel-card"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Direct Email</div>
                <strong style={{ fontSize: '15px', color: 'var(--text-primary)' }}>talha@devistio.com</strong>
              </div>
            </a>

            <a
              href="https://wa.me/923156569204"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-bright)' }}>
                <MessageCircle size={20} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>WhatsApp Urgent</div>
                <strong style={{ fontSize: '15px', color: 'var(--text-primary)' }}>+92 315 6569204</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/talha-rehman-devops-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-bright)' }}>
                <Linkedin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Executive Network</div>
                <strong style={{ fontSize: '15px', color: 'var(--text-primary)' }}>LinkedIn / Talha Rehman</strong>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                <Github size={20} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Code &amp; Templates</div>
                <strong style={{ fontSize: '15px', color: 'var(--text-primary)' }}>GitHub Organization</strong>
              </div>
            </a>
          </div>

          {/* Form Right */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={48} color="var(--green-bright)" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>Transmission Received</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Thank you for reaching out. We will review your infrastructure requirements and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Work Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Engineering Focus</label>
                  <select
                    id="service"
                    className="form-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="kubernetes">Kubernetes &amp; EKS Platform Engineering</option>
                    <option value="cloud">AWS Infrastructure &amp; Cloud Migration</option>
                    <option value="devops">CI/CD &amp; GitOps Automation</option>
                    <option value="security">Cloud Security &amp; Compliance Hardening</option>
                    <option value="observability">Observability &amp; Production SRE</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Infrastructure Needs</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Describe your current cloud architecture, cluster challenges, or upcoming migration goals..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Initiate Consultation</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
