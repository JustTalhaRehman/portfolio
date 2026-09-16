'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

export const BehindDevistio = () => {
  return (
    <section className="section section-alt" id="behind-devistio" aria-label="Behind Devistio">
      <div className="container">
        <div className="behind-devistio-card">
          <div style={{ marginBottom: '24px' }}>
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Behind Devistio.</h2>
            <p className="section-desc">
              Devistio is an engineering-first Cloud and DevOps firm founded by Talha Rehman, focused on AWS infrastructure, Kubernetes, platform automation, security, and mission-critical reliability.
            </p>
          </div>

          <div className="founder-box">
            <div className="founder-avatar">
              <Image
                src="/talha.png"
                alt="Talha Rehman, Founder & CEO at Devistio"
                width={280}
                height={373}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="founder-info">
              <div className="founder-name">Talha Rehman</div>
              <div className="founder-title">Founder &amp; CEO</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '20px' }}>
                Hands-on cloud and platform engineer specializing in AWS multi-account architectures, Kubernetes cluster hardening, GitOps delivery models, and high-reliability SRE operations.
              </p>

              <div className="founder-channels">
                <a
                  href="https://www.linkedin.com/in/talha-rehman-devops-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-link"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-link"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:talha@devistio.com"
                  className="founder-link"
                >
                  <Mail size={14} />
                  <span>talha@devistio.com</span>
                </a>
                <a
                  href="https://wa.me/923156569204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-link"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
