import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-50/90 to-teal-50/90 backdrop-blur-md border-b border-teal-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">INTERNSTA</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                For Companies
              </a>
              <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                For Candidates
              </a>
              <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                Contact
              </a>
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-700 hover:text-teal-600 hover:bg-teal-100">Login</Button>
            <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg">Signup</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                For Companies
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                For Candidates
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">Login</Button>
                <Button className="justify-start">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}