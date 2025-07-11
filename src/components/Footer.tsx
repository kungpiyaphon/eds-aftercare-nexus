import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Line } from "recharts";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "News & Updates", href: "/news" },
  ];

  const serviceLinks = [
    { name: "Repair Services", href: "/repair" },
    { name: "Smart Home", href: "/smart-home" },
    { name: "Product Orders", href: "/products" },
    { name: "Online Booking", href: "/booking" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Service Centers", href: "/centers" },
    { name: "FAQs", href: "/faq" },
    { name: "Support", href: "/support" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white text-primary px-4 py-2 rounded-md font-bold text-6xl mb-6 inline-block">
              EDS
              <div className="text-blue-500 text-sm font-normal mt-1">
                Beyond Service Generation
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Leading after-service provider delivering excellence through innovation, 
              expertise, and customer-focused solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-blue-100 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-blue-100 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">info@eds.co.th</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">+66 2 721 4091-3</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-200 mt-1" />
                <span className="text-blue-100">
                  66 Soi Anamai, Srinakarin Road, <br />
                  Suanluang, Bangkok, Thailand 10250
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2024 EDS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;