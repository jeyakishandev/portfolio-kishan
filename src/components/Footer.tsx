"use client";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`border-t py-8 ${
      darkMode ? 'border-[#334155] bg-[#1e293b]' : 'border-[#e2e8f0] bg-[#f8fafc]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#64748b]">
        <p>© 2025 Jeya Kishan Karunanithy. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

