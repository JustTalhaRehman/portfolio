'use client';

import React from 'react';

const metrics = [
  {
    val: '99.99%',
    label: 'Production SLA Maintained',
    sub: 'Across multi-region container & database workloads',
  },
  {
    val: '< 15 min',
    label: 'Mean Time to Recovery (MTTR)',
    sub: 'Automated self-healing & GitOps rollbacks',
  },
  {
    val: '100%',
    label: 'Infrastructure as Code',
    sub: 'Zero manual console changes in production',
  },
  {
    val: 'Zero',
    label: 'Security Breaches',
    sub: 'CIS benchmark compliance & admission control',
  },
];

export const ProofMetrics = () => {
  return (
    <section className="section" id="proof">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Track Record</span>
          <h2 className="section-title">Measurable Reliability.</h2>
          <p className="section-desc">
            We measure engineering success through uptime, security enforcement, deployment velocity, and infrastructure repeatability.
          </p>
        </div>

        <div className="proof-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="proof-card">
              <div className="proof-val">{m.val}</div>
              <div className="proof-label">{m.label}</div>
              <div className="proof-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
