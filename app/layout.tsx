import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Devistio | Cloud & DevOps Engineering',
  description: "We build, automate, secure and operate cloud infrastructure that doesn't fall apart in production. AWS, Kubernetes, Terraform, GitOps, and platform engineering.",
  keywords: [
    'DevOps',
    'Cloud Engineering',
    'AWS',
    'Kubernetes',
    'Terraform',
    'ArgoCD',
    'GitOps',
    'Platform Engineering',
    'SRE',
    'Devistio',
    'Talha Rehman'
  ],
  authors: [{ name: 'Talha Rehman', url: 'https://devistio.com' }],
  creator: 'Devistio',
  publisher: 'Devistio',
  formatDetection: {
    email: false,
    address: false,
  },
  metadataBase: new URL('https://devistio.com'),
  openGraph: {
    title: 'Devistio | Cloud & DevOps Engineering',
    description: "We build, automate, secure and operate cloud infrastructure that doesn't fall apart in production.",
    url: 'https://devistio.com',
    siteName: 'Devistio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devistio | Cloud & DevOps Engineering',
    description: "We build, automate, secure and operate cloud infrastructure that doesn't fall apart in production.",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080C14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('devistio-theme');
                  if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
