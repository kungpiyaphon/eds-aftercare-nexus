import { Button } from "@/components/ui/button";
import { LogIn, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Smart Home", href: "/smart-home" },
    { name: "Career", href: "/career" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="EDS Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group"
            >
              {item.name}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Login */}
        <Button variant="outline" className="hidden md:flex items-center gap-2">
          <LogIn className="h-4 w-4" />
          Login
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-background z-50 shadow-lg transform transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <div className="font-bold text-xl">Menu</div>
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 bg-white rounded-b-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="outline" className="mt-4 w-full">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;