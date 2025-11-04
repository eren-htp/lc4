import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { APP_TITLE, COMPANY_INFO } from "@/const";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
    {
      name: "Peintures",
      href: "/peintures",
      submenu: [
        { name: "Peintures labellisées", href: "/peintures/peintures-labellisees" },
        { name: "Peintures intérieures", href: "/peintures/peintures-interieures" },
        { name: "Peintures laques tendues", href: "/peintures/peintures-laques-tendues" },
        { name: "Façades", href: "/peintures/facades" },
        { name: "Bois", href: "/peintures/bois" },
        { name: "Métal", href: "/peintures/metal" },
        { name: "Peintures sols", href: "/peintures/peintures-sols" },
        { name: "Toiture – Bardages", href: "/peintures/toiture-bardages" },
      ],
    },
    {
      name: "Revêtements de sols",
      href: "/revetements-sols",
      submenu: [
        { name: "Accessoires", href: "/revetements-sols/accessoires" },
        { name: "Parquets et bois", href: "/revetements-sols/parquets-et-bois" },
        { name: "Sols PVC", href: "/revetements-sols/sols-pvc" },
        { name: "Sols stratifiés", href: "/revetements-sols/sols-stratifies" },
        { name: "Sols textiles", href: "/revetements-sols/sols-textiles" },
        { name: "Solutions techniques", href: "/revetements-sols/solutions-techniques" },
      ],
    },
    {
      name: "Revêtements muraux",
      href: "/revetements-muraux",
      submenu: [
        { name: "Collection Passion 2026", href: "/revetements-muraux/collection-passion-2026" },
        { name: "Collection Les 4 Patent BEST", href: "/revetements-muraux/collection-les-4-patent-best" },
        { name: "Collection Habitat 2027", href: "/revetements-muraux/collection-habitat-2027" },
        { name: "Panel Box", href: "/revetements-muraux/panel-box" },
      ],
    },
    { name: "Matériel & outillage", href: "/materiel-outillage" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D1B3E] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="LC4 PEINTURE & DECORATION" 
              className="h-12 w-auto" />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={`text-white hover:bg-white/10 ${
                      location === item.href ? "bg-white/20" : ""
                    } ${item.submenu ? "pr-2" : ""}`}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Button>
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-64 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link key={subitem.name} href={subitem.href}>
                          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {subitem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button variant="default" className="bg-white text-[#0D1B3E] hover:bg-gray-100">
                {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link href={item.href}>
                    <div
                      className={`px-4 py-2 hover:bg-white/10 rounded cursor-pointer ${
                        location === item.href ? "bg-white/20" : ""
                      }`}
                      onClick={() => !item.submenu && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </div>
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link key={subitem.name} href={subitem.href}>
                          <div
                            className="px-4 py-2 text-sm hover:bg-white/10 rounded cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={`tel:${COMPANY_INFO.phone}`} className="px-4 py-2">
                <Button variant="default" className="w-full bg-white text-[#0D1B3E]">
                  {COMPANY_INFO.phone}
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

