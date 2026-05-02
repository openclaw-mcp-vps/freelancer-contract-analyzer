import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ContractScan — Scan contracts for payment and liability risks',
  description: 'AI-powered contract analysis for freelancers. Flag risky payment terms, liability clauses, and missing protections before you sign.',
  keywords: 'contract analysis, freelancer tools, payment terms, liability clauses, AI contract review',
  openGraph: {
    title: 'ContractScan — Scan contracts for payment and liability risks',
    description: 'AI-powered contract analysis for freelancers. Flag risky payment terms, liability clauses, and missing protections before you sign.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="338070fa-b909-4115-a423-458579401ac8"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
