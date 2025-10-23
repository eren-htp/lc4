import { Link } from "wouter";
import { APP_TITLE, COMPANY_INFO } from "@/const";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">{APP_TITLE}</h3>
            <p className="text-gray-300 text-sm mb-4">{COMPANY_INFO.slogan}</p>
            <p className="text-gray-300 text-sm">{COMPANY_INFO.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/qui-sommes-nous">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Qui sommes-nous ?</span>
                </Link>
              </li>
              <li>
                <Link href="/peintures">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Peintures</span>
                </Link>
              </li>
              <li>
                <Link href="/revetements-sols">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Revêtements de sols</span>
                </Link>
              </li>
              <li>
                <Link href="/revetements-muraux">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Revêtements muraux</span>
                </Link>
              </li>
              <li>
                <Link href="/nos-agences">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Nos agences</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Nos agences */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos agences</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Strasbourg</li>
              <li>Souffelweyersheim</li>
              <li>Haguenau</li>
              <li>Schweighouse-sur-Moder</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-300 hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} {APP_TITLE}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

