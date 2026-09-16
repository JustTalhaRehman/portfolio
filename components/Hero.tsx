'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { AwsLogo, KubernetesLogo, TerraformLogo, ArgoCdLogo, DockerLogo, IstioLogo } from './logos';

export const Hero = () => {
  return (
    <section className="hero bg-grid" id="home">
      {/* Blended Ambient Background Glow */}
      <div className="ambient-glow" style={{ top: '-120px', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-block', marginBottom: '16px' }}>
          <span className="section-tag">DevOps &amp; Cloud Reliability</span>
        </div>

        <h1 className="hero-headline">
          DevOps &amp; Cloud<br />
          <span className="text-gradient">Engineering</span>
        </h1>

        <p className="hero-subheadline">
          We build, automate, secure and operate cloud infrastructure that doesn&apos;t fall apart in production.
        </p>

        {/* Technology Strip with Official Real Logos (NO DOTS / NO BALLS) */}
        <div className="hero-tech-strip">
          <div className="tech-strip-item">
            <AwsLogo size={18} />
            <span>AWS</span>
          </div>
          <div className="tech-strip-item">
            <KubernetesLogo size={18} />
            <span>Kubernetes</span>
          </div>
          <div className="tech-strip-item">
            <TerraformLogo size={18} />
            <span>Terraform</span>
          </div>
          <div className="tech-strip-item">
            <ArgoCdLogo size={18} />
            <span>ArgoCD</span>
          </div>
          <div className="tech-strip-item">
            <DockerLogo size={18} />
            <span>Docker</span>
          </div>
          <div className="tech-strip-item">
            <IstioLogo size={18} />
            <span>Istio</span>
          </div>
        </div>

        <div className="hero-ctas">
          <Link href="/engineering/" className="btn btn-primary">
            <span>Explore Engineering</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/#contact" className="btn btn-secondary">
            <MessageSquare size={16} />
            <span>Talk to Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
