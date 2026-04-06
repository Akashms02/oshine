import { HeartPulse, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const socialIcons = [
    {
      name: "Facebook",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-2 rounded-xl">
              <HeartPulse className="text-white size-6" />
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-tight">
              Oshine<span className="text-brand-primary underline decoration-brand-accent decoration-2 underline-offset-4">Healthcare</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Revolutionizing healthcare with compassion and technology. Our mission is to provide premium medical services accessible to everyone, ensuring a healthier tomorrow.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((item, idx) => (
              <a key={idx} href="#" className="hover:text-brand-accent transition-colors p-2 bg-slate-800 rounded-lg" aria-label={item.name}>
                {item.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm">
            {["Services", "About Us", "Contact", "Doctors", "FAQ"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-brand-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
          <ul className="flex flex-col gap-4 text-sm">
            {["Primary Care", "Cardiology", "Diagnostics", "Specialized Surgery", "Telehealth"].map((service) => (
              <li key={service}>
                <a href="#services" className="hover:text-brand-primary transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-primary shrink-0" />
              <span>123 Medical Excellence Ave, Wellness City, WC 54321</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-brand-primary shrink-0" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-brand-primary shrink-0" />
              <span>support@oshinehealthcare.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>© {new Date().getFullYear()} Oshine Healthcare. All rights reserved. Designed with ❤️ for a healthier world.</p>
      </div>
    </footer>
  );
};
