'use client';

import React from 'react';
import {
  ArgoCdLogo,
  AwsLogo,
  KubernetesLogo,
  KyvernoLogo,
  GrafanaLogo,
  TerraformLogo,
} from './logos';

const capabilities = [
  {
    num: '01 // DEVOPS',
    title: 'DevOps & Automation',
    desc: 'CI/CD, GitOps, deployment automation and repeatable delivery across production staging and live clusters.',
    logo: <ArgoCdLogo size={26} />,
    tags: ['CI/CD Pipelines', 'GitOps Delivery', 'Deployment Automation', 'Repeatable Delivery'],
  },
  {
    num: '02 // CLOUD',
    title: 'Cloud Infrastructure',
    desc: 'AWS infrastructure, networking, multi-account environments, VPC topologies, and transit gateway routing.',
    logo: <AwsLogo size={26} />,
    tags: ['AWS Multi-Account', 'VPC Topology', 'Transit Gateway', 'Scalable Platforms'],
  },
  {
    num: '03 // PLATFORM',
    title: 'Kubernetes & Platform Engineering',
    desc: 'EKS, Helm, ArgoCD, Istio, KEDA and production platform operations engineered for resilient container workloads.',
    logo: <KubernetesLogo size={26} />,
    tags: ['Amazon EKS', 'Helm & ArgoCD', 'Istio Service Mesh', 'KEDA Autoscaling'],
  },
  {
    num: '04 // SECURITY',
    title: 'Cloud Security',
    desc: 'IAM, IRSA, KMS, Kyverno, NetworkPolicies, workload security hardening, and zero-trust egress control.',
    logo: <KyvernoLogo size={26} />,
    tags: ['IAM & IRSA', 'KMS Separation', 'Kyverno Admission', 'NetworkPolicies'],
  },
  {
    num: '05 // SRE',
    title: 'Observability & Reliability',
    desc: 'Metrics, logs, traces, alerting, root-cause troubleshooting, and SLA/SLO-backed production reliability.',
    logo: <GrafanaLogo size={26} />,
    tags: ['Grafana LGTM', 'Distributed Tracing', 'Alerting Rules', 'Troubleshooting & RCA'],
  },
  {
    num: '06 // IAC',
    title: 'Infrastructure as Code',
    desc: 'Terraform, OpenTofu, Terragrunt, modular infrastructure components, and automated state management.',
    logo: <TerraformLogo size={26} />,
    tags: ['Terraform', 'OpenTofu', 'Terragrunt', 'Lifecycle Automation'],
  },
];

export const CoreCapabilities = () => {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">What We Do</h2>
          <p className="section-desc">
            Direct technical execution across production cloud environments. Six core engineering capabilities, zero filler.
          </p>
        </div>

        <div className="domains-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="domain-card">
              <div className="domain-top">
                <div className="domain-logo-box">{cap.logo}</div>
                <div className="domain-num">{cap.num}</div>
              </div>
              <h3 className="domain-title">{cap.title}</h3>
              <p className="domain-desc">{cap.desc}</p>
              <div className="domain-tags">
                {cap.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="domain-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
