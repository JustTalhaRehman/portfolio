'use client';

import React from 'react';

const steps = [
  {
    num: 'Step 01',
    name: 'Assess',
    desc: 'Audit existing cloud topology, security gaps, cost leakage, and CI/CD bottlenecks.',
  },
  {
    num: 'Step 02',
    name: 'Design',
    desc: 'Architect scalable, immutable infrastructure blueprint aligned with CIS benchmarks.',
  },
  {
    num: 'Step 03',
    name: 'Automate',
    desc: 'Codify every resource with Terraform / OpenTofu and GitOps delivery pipelines.',
  },
  {
    num: 'Step 04',
    name: 'Secure',
    desc: 'Embed least-privilege IAM, admission control policies, secret rotation, and mTLS.',
  },
  {
    num: 'Step 05',
    name: 'Deploy',
    desc: 'Execute safe, automated rolling deployments with progressive canary rollouts.',
  },
  {
    num: 'Step 06',
    name: 'Observe',
    desc: 'Ingest correlated logs, metrics, distributed traces, and actionable alert rules.',
  },
  {
    num: 'Step 07',
    name: 'Optimize',
    desc: 'Continuously tune resource requests/limits, spot pools, and latency budgets.',
  },
];

export const EngineeringApproach = () => {
  return (
    <section className="section section-alt" id="approach">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Engineering Approach</span>
          <h2 className="section-title">How We Engineer.</h2>
          <p className="section-desc">
            A disciplined, production-grade delivery lifecycle built on immutability, automated validation, and continuous telemetry.
          </p>
        </div>

        <div className="lifecycle-flow">
          {steps.map((step, idx) => (
            <div key={idx} className="lifecycle-step">
              <div className="step-num">{step.num}</div>
              <h3 className="step-name">{step.name}</h3>
              <p className="step-summary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
