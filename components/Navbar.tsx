'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav id="navbar" role="navigation" aria-label="Main Navigation" style={{ borderBottomColor: scrolled ? 'var(--border-light)' : 'var(--border)' }}>
        <div className="nav-container">
          <Link href="/" className="brand-logo" aria-label="Devistio Home">
            <div className="brand-mark">D</div>
            <span>DEVISTIO</span>
          </Link>

          <div className="nav-menu">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/engineering/" className={`nav-link ${pathname.startsWith('/engineering') || pathname.startsWith('/work') ? 'active' : ''}`}>
              Engineering
            </Link>
            <Link href="/#contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <Link href="/#contact" className="btn btn-sm btn-primary">
              <span>Talk to Us</span>
              <ArrowRight size={14} />
            </Link>
            <button
              className="nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '20px 32px',
              background: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/engineering/"
              onClick={() => setMobileMenuOpen(false)}
              className={`nav-link ${pathname.startsWith('/engineering') || pathname.startsWith('/work') ? 'active' : ''}`}
            >
              Engineering Case Studies
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
