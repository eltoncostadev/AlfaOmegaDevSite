import { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/logo-topo_1755810518193.png";

const navigationItems = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#missao", label: "Missão e Visão" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Fale Conosco" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-sm border-b border-cyan-300/30 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Menu (Left) - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-cyan-200 hover:text-cyan-100 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-cyan-200 hover:text-cyan-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-slate-900 border-cyan-300/30">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-cyan-200 hover:text-cyan-100 transition-colors duration-200 font-medium py-2 px-4 rounded-md hover:bg-slate-800"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo (Right) */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Alfa e Omega Dev Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
