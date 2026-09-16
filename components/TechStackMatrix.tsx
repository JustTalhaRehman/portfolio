'use client';

import React from 'react';
import {
  AwsLogo,
  KubernetesLogo,
  TerraformLogo,
  OpenTofuLogo,
  ArgoCdLogo,
  HelmLogo,
  IstioLogo,
  DockerLogo,
  GitHubActionsLogo,
  GitLabLogo,
  PrometheusLogo,
  GrafanaLogo,
  DatadogLogo,
  KyvernoLogo,
  KedaLogo,
} from './logos';

const stackGroups = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'Amazon Web Services', desc: 'Multi-account AWS Organizations & Transit Gateway', logo: <AwsLogo size={20} /> },
      { name: 'HashiCorp Terraform', desc: 'Immutable IaC pipelines & remote state locking', logo: <TerraformLogo size={20} /> },
      { name: 'OpenTofu', desc: 'Open-source infrastructure codification & modules', logo: <OpenTofuLogo size={20} /> },
    ],
  },
  {
    category: 'Kubernetes & Platform',
    items: [
      { name: 'Amazon EKS', desc: 'Hardened Kubernetes 1.30 production clusters', logo: <KubernetesLogo size={20} /> },
      { name: 'Helm', desc: 'Versioned, parameterized application package management', logo: <HelmLogo size={20} /> },
      { name: 'Istio Service Mesh', desc: 'Mutual TLS encryption & fine-grained traffic policy', logo: <IstioLogo size={20} /> },
    ],
  },
  {
    category: 'CI/CD & Delivery',
    items: [
      { name: 'ArgoCD', desc: 'Declarative GitOps sync & automated drift correction', logo: <ArgoCdLogo size={20} /> },
      { name: 'GitHub Actions', desc: 'Automated CI pipelines, test runners & container builds', logo: <GitHubActionsLogo size={20} /> },
      { name: 'GitLab CI/CD', desc: 'Enterprise multi-stage pipelines with security scans', logo: <GitLabLogo size={20} /> },
    ],
  },
  {
    category: 'Observability & SRE',
    items: [
      { name: 'Prometheus', desc: 'Time-series metrics collection & alert evaluation', logo: <PrometheusLogo size={20} /> },
      { name: 'Grafana LGTM', desc: 'Production dashboards, log queries & trace visualization', logo: <GrafanaLogo size={20} /> },
      { name: 'Datadog', desc: 'Cloud-wide APM, synthetic monitors & host telemetry', logo: <DatadogLogo size={20} /> },
    ],
  },
  {
    category: 'Containers & Runtimes',
    items: [
      { name: 'Docker', desc: 'Multi-stage lean container images with minimal attack surface', logo: <DockerLogo size={20} /> },
      { name: 'Kyverno Policy Engine', desc: 'Kubernetes admission validation & image signature checks', logo: <KyvernoLogo size={20} /> },
      { name: 'KEDA Autoscaler', desc: 'Queue- and metric-driven event autoscaling for pods', logo: <KedaLogo size={20} /> },
    ],
  },
  {
    category: 'Security & Networking',
    items: [
      { name: 'AWS KMS & IAM', desc: 'Hardware-backed CMK encryption & least-privilege IRSA', logo: <AwsLogo size={20} /> },
      { name: 'NetworkPolicies', desc: 'Calico / Cilium zero-trust pod egress isolation', logo: <KubernetesLogo size={20} /> },
      { name: 'AWS Transit Gateway', desc: 'Hub-and-spoke interconnect between VPCs & on-prem', logo: <AwsLogo size={20} /> },
    ],
  },
];

export const TechStackMatrix = () => {
  return (
    <section className="section section-alt" id="stack">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Production Stack</span>
          <h2 className="section-title">Battle-Tested Technologies</h2>
          <p className="section-desc">
            We build exclusively with proven open-source and cloud-native standards. Every tool in our stack has operated under production load.
          </p>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group, idx) => (
            <div key={idx} className="stack-group">
              <h3 className="stack-group-title">{group.category}</h3>
              <div className="stack-items">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="stack-item">
                    <div style={{ flexShrink: 0 }}>{item.logo}</div>
                    <div>
                      <div className="stack-item-name">{item.name}</div>
                      <div className="stack-item-desc">{item.desc}</div>
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
