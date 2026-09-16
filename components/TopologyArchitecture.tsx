'use client';

import React, { useState } from 'react';
import { AwsLogo, KubernetesLogo, ArgoCdLogo, IstioLogo, KyvernoLogo } from './logos';
import { ShieldCheck, Cpu, Network, CheckCircle2 } from 'lucide-react';

export const TopologyArchitecture = () => {
  const [activeTab, setActiveTab] = useState<'vpc' | 'eks'>('vpc');
  const [selectedNode, setSelectedNode] = useState<string>('public');

  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Architecture Topology</span>
          <h2 className="section-title">Production Cloud Blueprint</h2>
          <p className="section-desc">
            Explore our hardened reference architecture: zero-trust network segmentation, isolated Kubernetes node pools, and audited GitOps synchronization.
          </p>
        </div>

        <div className="arch-card">
          <div className="arch-header">
            <div className="arch-tabs">
              <button
                className={`arch-tab-btn ${activeTab === 'vpc' ? 'active' : ''}`}
                onClick={() => { setActiveTab('vpc'); setSelectedNode('public'); }}
              >
                Multi-Tier VPC Networking
              </button>
              <button
                className={`arch-tab-btn ${activeTab === 'eks' ? 'active' : ''}`}
                onClick={() => { setActiveTab('eks'); setSelectedNode('control-plane'); }}
              >
                EKS Cluster &amp; GitOps Engine
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              <span>PROD // US-EAST-1</span>
              <span style={{ color: 'var(--green-bright)' }}>ACTIVE</span>
            </div>
          </div>

          <div className="arch-body">
            {activeTab === 'vpc' ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    onClick={() => setSelectedNode('public')}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius)',
                      background: selectedNode === 'public' ? 'var(--surface-hover)' : 'var(--surface-2)',
                      border: `1.5px solid ${selectedNode === 'public' ? 'var(--accent)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <Network size={18} color="var(--accent-cyan)" />
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Public Subnet Tier (DMZ)</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      AWS ALB, WAF v2 rate limiting, Cloudflare edge termination, and redundant NAT Gateways per AZ.
                    </p>
                  </div>

                  <div
                    onClick={() => setSelectedNode('private')}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius)',
                      background: selectedNode === 'private' ? 'var(--surface-hover)' : 'var(--surface-2)',
                      border: `1.5px solid ${selectedNode === 'private' ? 'var(--accent)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <Cpu size={18} color="var(--accent-bright)" />
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Private Application Tier (EKS Nodes)</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Non-routable RFC-1918 subnets, Karpenter-managed node groups, IAM roles for service accounts (IRSA).
                    </p>
                  </div>

                  <div
                    onClick={() => setSelectedNode('database')}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius)',
                      background: selectedNode === 'database' ? 'var(--surface-hover)' : 'var(--surface-2)',
                      border: `1.5px solid ${selectedNode === 'database' ? 'var(--accent)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <ShieldCheck size={18} color="var(--green-bright)" />
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Isolated Data Tier (Zero Inbound Internet)</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Aurora PostgreSQL / RDS multi-AZ, AWS KMS envelope encryption, dedicated DB security groups.
                    </p>
                  </div>
                </div>

                {/* Node Inspector Panel */}
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <AwsLogo size={24} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)' }}>
                      INSPECTOR // {selectedNode.toUpperCase()}
                    </span>
                  </div>

                  {selectedNode === 'public' && (
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Ingress &amp; Perimeter Defense</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                        Inbound HTTPS traffic arrives via Cloudflare DDOS protection, validated against AWS WAF Managed Rule sets (OWASP Top 10), and TLS 1.3 terminated at Application Load Balancers.
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> AWS WAF Rate Limiting &amp; Bot Control</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Multi-AZ Highly Available NAT Gateways</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> VPC Flow Logs streamed to S3 / CloudWatch</li>
                      </ul>
                    </div>
                  )}

                  {selectedNode === 'private' && (
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Compute &amp; Pod Isolation</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                        Worker nodes run in private subnets with no public IPs. Egress traffic routes through NAT Gateways and Istio egress gateways with strict domain whitelisting.
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Calico / Cilium CNI NetworkPolicies</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> AWS Secrets Manager integration via CSI</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Node problem detector + drain automation</li>
                      </ul>
                    </div>
                  )}

                  {selectedNode === 'database' && (
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Zero-Trust Persistence</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                        Data stores reside in subnets without Internet gateway or NAT routes. Only application pods bearing verified IRSA credentials and explicit security group ingress can connect.
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> KMS Customer Managed Keys (CMK)</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Automated Point-in-Time Recovery (PITR)</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> TLS enforced on all wire connections</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    onClick={() => setSelectedNode('control-plane')}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius)',
                      background: selectedNode === 'control-plane' ? 'var(--surface-hover)' : 'var(--surface-2)',
                      border: `1.5px solid ${selectedNode === 'control-plane' ? 'var(--accent)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <KubernetesLogo size={18} />
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Amazon EKS 1.30 Control Plane</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      AWS-managed control plane with private endpoint access, audit logging, and envelope encryption.
                    </p>
                  </div>

                  <div
                    onClick={() => setSelectedNode('argocd')}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius)',
                      background: selectedNode === 'argocd' ? 'var(--surface-hover)' : 'var(--surface-2)',
                      border: `1.5px solid ${selectedNode === 'argocd' ? 'var(--accent)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <ArgoCdLogo size={18} />
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>GitOps Continuous Delivery (ArgoCD)</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Declarative state synchronization, automated drift remediation, and multi-cluster app-of-apps model.
                    </p>
                  </div>

                  <div
                    onClick={() => setSelectedNode('mesh')}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius)',
                      background: selectedNode === 'mesh' ? 'var(--surface-hover)' : 'var(--surface-2)',
                      border: `1.5px solid ${selectedNode === 'mesh' ? 'var(--accent)' : 'var(--border)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <IstioLogo size={18} />
                      <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Istio Service Mesh &amp; Kyverno Admission</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Automatic mutual TLS between all microservices, Kyverno policy validation, and zero-trust egress gates.
                    </p>
                  </div>
                </div>

                {/* EKS Inspector */}
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <KubernetesLogo size={24} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)' }}>
                      CLUSTER // {selectedNode.toUpperCase()}
                    </span>
                  </div>

                  {selectedNode === 'control-plane' && (
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>EKS Hardening &amp; Compliance</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                        API server endpoint configured with private-only access from VPC bastion/VPN. Secrets stored in etcd are hardware-encrypted with dedicated AWS KMS keys.
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> CIS EKS Benchmark compliant</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Full API audit &amp; authenticator logs enabled</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Automated cluster version upgrade pipelines</li>
                      </ul>
                    </div>
                  )}

                  {selectedNode === 'argocd' && (
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Automated GitOps Sync</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                        All cluster states are committed to Git. ArgoCD enforces continuous reconciliation, rolling back unauthorized cluster modifications in under 30 seconds.
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Self-healing &amp; automated sync enabled</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Rollouts with Prometheus canary metrics</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> SealedSecrets / External Secrets Operator</li>
                      </ul>
                    </div>
                  )}

                  {selectedNode === 'mesh' && (
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>mTLS &amp; Admission Verification</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                        Istio sidecars encrypt all pod-to-pod communications via SPIFFE identities. Kyverno blocks non-root containers, unsigned images, and unauthorized external host connections.
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Strict PeerAuthentication policy</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> Cosign image signature enforcement</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} color="var(--green)" /> KEDA event-driven autoscaling</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
