import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Terminal, Layers } from 'lucide-react';
import {
  AwsLogo,
  KubernetesLogo,
  KyvernoLogo,
  ArgoCdLogo,
  GrafanaLogo,
  TerraformLogo,
  IstioLogo,
  DockerLogo,
} from '@/components/logos';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Production Engineering Case Studies | Devistio',
  description:
    'In-depth technical dissections of real-world Kubernetes migrations, zero-trust network hardening, multi-account AWS architecture, and enterprise GitOps platforms.',
};

export default function EngineeringPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero bg-grid" style={{ minHeight: 'auto', padding: '160px 0 60px' }}>
        <div className="ambient-glow" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>
          <div style={{ display: 'inline-block', marginBottom: '16px' }}>
            <span className="section-tag">Production Engineering Deep Dives</span>
          </div>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '20px' }}>
            Verified Technical <br />
            <span className="text-gradient">Deliveries &amp; Architecture.</span>
          </h1>
          <p className="hero-subheadline" style={{ fontSize: '16px', maxWidth: '720px', margin: '0 auto 32px' }}>
            Technical dissections of real-world client engagements. Each breakdown documents architectural context, production bottlenecks, concrete technical solutions, and verified outcomes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link href="/#contact" className="btn btn-primary">
              <span>Discuss Your Infrastructure</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/" className="btn btn-secondary">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            {/* Case Study 1 */}
            <article className="case-study-item" id="case-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <KubernetesLogo size={26} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                      CASE STUDY 01 // KUBERNETES ADMISSION &amp; SECURITY
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>
                      Kubernetes Security Hardening &amp; Policy Enforcement
                    </h2>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag-badge" style={{ color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}>CIS Benchmark Compliant</span>
                  <span className="tag-badge">0 Unsigned Containers</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '8px' }}>01 // CONTEXT</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    An enterprise client operating mission-critical workloads in <strong>AWS GovCloud (US)</strong> on Amazon EKS required defense-in-depth cluster hardening. Because external internet egress was tightly restricted and GitHub Container Registry (GHCR) was unreachable, all upstream artifacts had to be securely mirrored, validated, and continuously verified against federal compliance baselines.
                  </p>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-amber)', marginBottom: '8px' }}>02 // CHALLENGE</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Workloads ran with unverified container images from external repositories. Several application pods ran with escalated privileges (HostPath, root user, host namespaces). Implementing admission webhooks in GovCloud faced regional STS authentication hurdles and 12-hour ECR token expirations.
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '14px' }}>03 // ENGINEERING APPROACH</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>HA Kyverno Deployment:</strong> Deployed highly available Kyverno admission controllers with dedicated background, cleanup, and reporting controllers mirrored to private AWS ECR.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Image Allowlisting &amp; Cosign Verification:</strong> Formulated cluster-wide policies permitting container pulls exclusively from private ECR repositories with cryptographic KMS-signed Cosign verification.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Automated Token Refresh Workflow:</strong> Built a hardened Kubernetes CronJob backed by IRSA with regional STS endpoints to refresh ECR credentials autonomously.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Pod Security Standards (Restricted):</strong> Enforced PSA Restricted profiles blocking privileged containers, hostPID, hostIPC, and HostPath mounts with explicit namespace exception policies.</span>
                  </div>
                </div>

                <div style={{ marginTop: '20px', background: '#05070A', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                  <div style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <span>kyverno-verify-ecr-images.yaml</span>
                    <span>Admission Policy</span>
                  </div>
                  <pre style={{ padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#94A3B8', overflowX: 'auto', lineHeight: '1.6' }}>
{`apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: enforce-signed-private-ecr
spec:
  validationFailureAction: Enforce
  background: false
  rules:
    - name: verify-cosign-signatures
      match:
        any:
          - resources:
              kinds: ["Pod"]
      verifyImages:
        - imageReferences:
            - "*.dkr.ecr.us-gov-west-1.amazonaws.com/*"
          attestors:
            - entries:
                - keys:
                    kms: "awskms:///arn:aws-us-gov:kms:us-gov-west-1:xxx:key/cosign-key"`}
                  </pre>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>04 // TECHNOLOGIES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="tag-badge">Kyverno</span>
                    <span className="tag-badge">Sigstore Cosign</span>
                    <span className="tag-badge">AWS ECR</span>
                    <span className="tag-badge">AWS KMS</span>
                    <span className="tag-badge">PSA Restricted</span>
                    <span className="tag-badge">GovCloud</span>
                  </div>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '10px' }}>05 // VERIFIED OUTCOME</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    100% of untrusted image deployments blocked at admission time. Clean CIS Kubernetes Benchmark pass with zero unverified containers entering GovCloud clusters.
                  </p>
                </div>
              </div>
            </article>

            {/* Case Study 2 */}
            <article className="case-study-item" id="case-2" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IstioLogo size={26} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                      CASE STUDY 02 // NETWORK SECURITY &amp; EGRESS
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>
                      Zero-Trust Networking &amp; Centralized Egress Control
                    </h2>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag-badge" style={{ color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}>100% Egress Audited</span>
                  <span className="tag-badge">Zero Direct Outbound Access</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '8px' }}>01 // CONTEXT</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    A high-throughput distributed platform required strict isolation between application workloads and platform management tools. Production clusters previously operated with open pod-to-pod networking and unrestricted default internet egress.
                  </p>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-amber)', marginBottom: '8px' }}>02 // CHALLENGE</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    CIDR filtering at the AWS Security Group level could not prevent exfiltration over standard ports (80/443). Blanket egress cuts risked breaking external APIs (Stripe, Twilio, external data warehouses) without prior telemetry.
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '14px' }}>03 // ENGINEERING APPROACH</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Evidence-Based Egress Discovery:</strong> Analyzed multi-gigabyte VPC Flow Logs and ArgoCD configurations to catalog all valid external endpoints before enforcing hard boundaries.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Istio Centralized Egress Gateway:</strong> Configured Istio service mesh in REGISTRY_ONLY outbound traffic mode. Calls lacking an explicit ServiceEntry are dropped at the Envoy boundary.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Default-Deny East-West Policies:</strong> Developed reusable Helm NetworkPolicy templates enforcing default-deny ingress and egress across all namespaces.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>AWS Security Group Hardening:</strong> Replaced broad /8 CIDR blocks on node groups with narrow /24 VPC subnets and removed SSH ingress on the managed control plane.</span>
                  </div>
                </div>

                <div style={{ marginTop: '20px', background: '#05070A', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                  <div style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <span>istio-egress-service-entry.yaml</span>
                    <span>Zero-Trust Outbound Rule</span>
                  </div>
                  <pre style={{ padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#94A3B8', overflowX: 'auto', lineHeight: '1.6' }}>
{`apiVersion: networking.istio.io/v1beta1
kind: ServiceEntry
metadata:
  name: allow-external-apis
  namespace: istio-system
spec:
  hosts:
  - "api.external-warehouse.com"
  - "*.amazonaws.com"
  location: MESH_EXTERNAL
  ports:
  - number: 443
    name: https
    protocol: TLS
  resolution: DNS`}
                  </pre>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>04 // TECHNOLOGIES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="tag-badge">Istio Egress Gateway</span>
                    <span className="tag-badge">Kubernetes NetworkPolicy</span>
                    <span className="tag-badge">VPC Flow Logs</span>
                    <span className="tag-badge">AWS Security Groups</span>
                    <span className="tag-badge">mTLS</span>
                  </div>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '10px' }}>05 // VERIFIED OUTCOME</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    All unapproved external requests blocked with zero silent exfiltration paths. 100% of egress traffic routed through monitored Envoy proxies with telemetry streamed into Grafana.
                  </p>
                </div>
              </div>
            </article>

            {/* Case Study 3 */}
            <article className="case-study-item" id="case-3" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AwsLogo size={26} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                      CASE STUDY 03 // IDENTITY &amp; ACCESS MANAGEMENT
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>
                      IAM Modernization: IRSA, EKS Pod Identity &amp; KMS Separation
                    </h2>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag-badge" style={{ color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}>Zero Node Privilege Leaks</span>
                  <span className="tag-badge">Verified API Boundaries</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '8px' }}>01 // CONTEXT</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    The client utilized Amazon EKS with standard node groups. System components like aws-node (VPC CNI) and application workloads executed under the shared EC2 instance profile, allowing any pod to invoke AWS API actions intended for system DaemonSets.
                  </p>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-amber)', marginBottom: '8px' }}>02 // CHALLENGE</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    If an application container was compromised, attackers could leverage node IAM credentials to manipulate VPC interfaces. AWS KMS keys possessed monolithic policies where administrative roles could decrypt confidential data without separation.
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '14px' }}>03 // ENGINEERING APPROACH</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>EKS Pod Identity Migration:</strong> Configured AWS EKS Pod Identity for the aws-node DaemonSet with least-privilege IAM policies. Stripped AmazonEKS_CNI_Policy from worker node instance roles.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Scoped IRSA Trusts:</strong> Built reusable Terraform modules for application service accounts using OIDC federation, scoping trust policies strictly to cluster OIDC endpoint, namespace, and service account.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>KMS Separation of Duties:</strong> Split KMS policies into Key Administrators (rotation, tagging) and Key Users (encrypt/decrypt for designated roles), prohibiting admins from decrypting payloads.</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>04 // TECHNOLOGIES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="tag-badge">EKS Pod Identity</span>
                    <span className="tag-badge">AWS IRSA</span>
                    <span className="tag-badge">AWS KMS</span>
                    <span className="tag-badge">AWS CloudTrail</span>
                    <span className="tag-badge">Terraform Modules</span>
                  </div>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '10px' }}>05 // VERIFIED OUTCOME</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Node IAM roles decoupled from workload identity. Cryptographic separation of duties enforced across KMS keys with full CloudTrail audit attribution.
                  </p>
                </div>
              </div>
            </article>

            {/* Case Study 4 */}
            <article className="case-study-item" id="case-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArgoCdLogo size={26} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                      CASE STUDY 04 // GITOPS PLATFORM ENGINEERING
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>
                      Multi-Environment GitOps Platform Engineering
                    </h2>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag-badge" style={{ color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}>100% Declarative Delivery</span>
                  <span className="tag-badge">Multi-Cluster Parity</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '8px' }}>01 // CONTEXT</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Staging and production clusters were maintained across separate AWS accounts. Helm charts contained hardcoded node-group names and unmanaged secrets, resulting in deployments failing whenever pushed to secondary clusters.
                  </p>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-amber)', marginBottom: '8px' }}>02 // CHALLENGE</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Simultaneous node group terminations broke both the GitOps controller and Kyverno webhooks, preventing corrective deployments from applying due to admission webhook timeout loops.
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '14px' }}>03 // ENGINEERING APPROACH</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>ArgoCD App-of-Apps Pattern:</strong> Structured a hierarchical GitOps repository separating platform dependencies (Ingress, Cert-Manager, Kyverno, Alloy) from tenant workloads.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>External Secrets Operator (ESO):</strong> Interfaced AWS Secrets Manager with ESO, injecting runtime secrets into Kubernetes Secrets without storing plaintext in Git.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Webhook Failure Resilience:</strong> Tuned Kyverno webhook failure policies to Ignore for essential infrastructure namespaces during bootstrap, preventing circular deadlocks.</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>04 // TECHNOLOGIES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="tag-badge">ArgoCD</span>
                    <span className="tag-badge">Helm 3</span>
                    <span className="tag-badge">External Secrets Operator</span>
                    <span className="tag-badge">AWS Secrets Manager</span>
                    <span className="tag-badge">KEDA</span>
                  </div>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '10px' }}>05 // VERIFIED OUTCOME</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    The same declarative Helm charts deploy cleanly across primary and DR clusters. Cluster bootstrap reduced from days of manual setup to 35-minute automated GitOps reconciliation.
                  </p>
                </div>
              </div>
            </article>

            {/* Case Study 5 */}
            <article className="case-study-item" id="case-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GrafanaLogo size={26} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                      CASE STUDY 05 // OBSERVABILITY &amp; SRE
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '4px' }}>
                      Enterprise Observability &amp; Production Reliability
                    </h2>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag-badge" style={{ color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}>MTTR 45m → 8m (-82%)</span>
                  <span className="tag-badge">Unified LGTM Stack</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '8px' }}>01 // CONTEXT</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    A high-volume healthcare cloud platform required deep observability to diagnose microservice latency spikes and pod scheduling anomalies across disjointed tools without trace correlation.
                  </p>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-amber)', marginBottom: '8px' }}>02 // CHALLENGE</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Because the platform processed sensitive health data, query parameters risked leaking into log indices, creating HIPAA violations. Storage costs for raw logs were growing exponentially.
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '14px' }}>03 // ENGINEERING APPROACH</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Grafana Alloy Centralized Collector:</strong> Deployed Alloy as a cluster DaemonSet unifying log scraping, Prometheus metrics, and OpenTelemetry trace ingestion.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>In-Flight Redaction Pipelines:</strong> Configured regex masking in Alloy to strip PHI/PII tokens and scrubbed URL query strings at ingress via Istio Envoy filters.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Unified Trace-to-Log Correlation:</strong> Interlinked Tempo distributed spans with Loki log streams and Prometheus metrics via standardized OpenTelemetry context.</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>04 // TECHNOLOGIES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="tag-badge">Grafana</span>
                    <span className="tag-badge">Loki</span>
                    <span className="tag-badge">Tempo</span>
                    <span className="tag-badge">Mimir</span>
                    <span className="tag-badge">Grafana Alloy</span>
                    <span className="tag-badge">OpenTelemetry</span>
                  </div>
                </div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginBottom: '10px' }}>05 // VERIFIED OUTCOME</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Mean Time To Resolution (MTTR) dropped from 45 minutes to under 8 minutes (~82% improvement). 100% HIPAA-compliant redacted logging streams with full developer visibility.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
