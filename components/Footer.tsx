'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand-logo" style={{ marginBottom: '14px' }}>
              <div className="brand-mark">D</div>
              <span>DEVISTIO</span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.65', maxWidth: '360px' }}>
              Specialized B2B Cloud, Platform &amp; DevOps Engineering company. We build, automate, secure and operate infrastructure that stays up in production.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '16px' }}>
              Navigation
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <li><Link href="/" style={{ transition: 'var(--transition-fast)' }}>Home</Link></li>
              <li><Link href="/engineering/" style={{ transition: 'var(--transition-fast)' }}>Engineering Case Studies</Link></li>
              <li><Link href="/#architecture" style={{ transition: 'var(--transition-fast)' }}>Topology Blueprint</Link></li>
              <li><Link href="/#contact" style={{ transition: 'var(--transition-fast)' }}>Contact Engineering</Link></li>
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '16px' }}>
              Capabilities
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <li><Link href="/#capabilities">Kubernetes &amp; EKS</Link></li>
              <li><Link href="/#capabilities">AWS Infrastructure</Link></li>
              <li><Link href="/#capabilities">Terraform &amp; GitOps</Link></li>
              <li><Link href="/#capabilities">Cloud Security &amp; SRE</Link></li>
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '16px' }}>
              Direct Channels
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <li><a href="mailto:talha@devistio.com">talha@devistio.com</a></li>
              <li><a href="https://wa.me/923156569204" target="_blank" rel="noopener noreferrer">WhatsApp Direct</a></li>
              <li><a href="https://www.linkedin.com/in/talha-rehman-devops-engineer/" target="_blank" rel="noopener noreferrer">LinkedIn Page</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Org</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (NO MIDDLE DOTS / NO BALLS) */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Devistio. All rights reserved. Production Cloud &amp; DevOps Engineering.
          </div>
          <div className="footer-tags">
            <span>Multi-Region AWS</span>
            <span>Kubernetes 1.30</span>
            <span>CIS Benchmark</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
