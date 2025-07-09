import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Services", href: "#services" },
    { name: "Smart Home", href: "#smart-home" },
    { name: "Career", href: "#career" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-md font-bold text-xl">
            EDS
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <Button variant="outline" className="hidden md:flex items-center gap-2">
          <LogIn className="h-4 w-4" />
          Login
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;