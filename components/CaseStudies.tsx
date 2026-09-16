'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AwsLogo, KubernetesLogo, KyvernoLogo, ArgoCdLogo, GrafanaLogo } from './logos';

const caseStudies = [
  {
    num: 'CASE STUDY 01 // PLATFORM MIGRATION',
    title: 'Multi-Region AWS EKS Migration with Zero Downtime',
    desc: 'Migrated a mission-critical multi-tenant fintech microservice architecture from legacy EC2 instances to Amazon EKS 1.30 across dual AWS regions.',
    logo: <KubernetesLogo size={24} />,
    metrics: [
      { val: '99.99%', label: 'Uptime Achieved' },
      { val: '38%', label: 'AWS Compute Savings' },
      { val: '0', label: 'Downtime Minutes' },
    ],
    highlights: [
      'Dual-region active-passive cluster failover with Route 53 latency routing',
      'Automated rolling worker node replacement via Karpenter spot orchestration',
      'Zero-loss stateful database cutover to Aurora Multi-Region Global DB',
    ],
  },
  {
    num: 'CASE STUDY 02 // CLOUD SECURITY',
    title: 'Zero-Trust Kubernetes Hardening & Strict Egress Control',
    desc: 'Implemented end-to-end zero-trust network policies, mutual TLS encryption, automated admission webhooks, and centralized egress filtering.',
    logo: <KyvernoLogo size={24} />,
    metrics: [
      { val: '100%', label: 'CIS Benchmark Pass' },
      { val: '0', label: 'Unsigned Images Allowed' },
      { val: '100%', label: 'Traffic mTLS Encrypted' },
    ],
    highlights: [
      'Kyverno validating webhooks enforcing non-root execution and Cosign signatures',
      'Istio service mesh enforcing strict mTLS between all container workloads',
      'Centralized NAT & egress gateway blocking arbitrary outbound IP connections',
    ],
  },
  {
    num: 'CASE STUDY 03 // INFRASTRUCTURE AS CODE',
    title: 'Multi-Account AWS Hub-and-Spoke via Terraform & Transit Gateway',
    desc: 'Architected an automated multi-account AWS Organization supporting 8 separate environments, centralized egress, and audited IAM federations.',
    logo: <AwsLogo size={24} />,
    metrics: [
      { val: '8', label: 'Isolated AWS Accounts' },
      { val: '< 2 hrs', label: 'Full Env Provisioning' },
      { val: '100%', label: 'IaC Drift Detection' },
    ],
    highlights: [
      'Terraform & Terragrunt modular state architecture with remote S3 locking',
      'AWS Transit Gateway routing inter-account communication through security inspection VPC',
      'Centralized audit trails with AWS CloudTrail, GuardDuty and AWS Security Hub',
    ],
  },
];

export const CaseStudies = () => {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Production Work</span>
          <h2 className="section-title">Verified Engineering Outcomes</h2>
          <p className="section-desc">
            Explore deep technical breakdowns of high-scale Kubernetes migrations, zero-trust security hardening, and multi-region infrastructure.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr',
                gap: '32px',
                transition: 'var(--transition)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {cs.logo}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                    {cs.num}
                  </span>
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '14px', lineHeight: '1.25' }}>
                  {cs.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '24px' }}>
                  {cs.desc}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  {cs.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/engineering/" className="btn btn-sm btn-secondary">
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Metrics Right */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Key Production Metrics
                </div>
                {cs.metrics.map((m, mIdx) => (
                  <div key={mIdx} style={{ borderBottom: mIdx < cs.metrics.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: mIdx < cs.metrics.length - 1 ? '12px' : '0' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '900', color: 'var(--accent-cyan)' }}>
                      {m.val}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
