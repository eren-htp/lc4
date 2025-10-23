import { AGENCIES } from "@/const";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NosAgences() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=Nos+Agences')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nos agences en Alsace</h1>
            <p className="text-xl md:text-2xl">4 agences pour vous servir au plus près de chez vous</p>
          </div>
        </section>

        {/* Carte interactive placeholder */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#0D1B3E]">Trouvez l'agence la plus proche</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <img 
                  src="https://placehold.co/1200x600/E5E7EB/6B7280?text=Carte+interactive+des+agences" 
                  alt="Carte des agences"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Liste des agences */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos 4 agences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {AGENCIES.map((agency) => (
                <Card key={agency.id} className="hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-[#0D1B3E] text-white">
                    <CardTitle className="text-2xl flex items-center space-x-2">
                      <MapPin className="h-6 w-6" />
                      <span>{agency.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-[#0D1B3E] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Adresse</p>
                        <p className="text-gray-600">{agency.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-[#0D1B3E] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Téléphone</p>
                        <a href={`tel:${agency.phone}`} className="text-[#0D1B3E] hover:underline">
                          {agency.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-[#0D1B3E] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href={`mailto:${agency.email}`} className="text-[#0D1B3E] hover:underline">
                          {agency.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-[#0D1B3E] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Horaires</p>
                        <p className="text-gray-600">Lundi - Vendredi : 8h00 - 18h00</p>
                        <p className="text-gray-600">Samedi : 9h00 - 12h00</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex space-x-3">
                      <a href={`tel:${agency.phone}`} className="flex-1">
                        <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                          Appeler
                        </Button>
                      </a>
                      <a href={`mailto:${agency.email}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Email
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info supplémentaire */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#0D1B3E]">Une présence locale pour un service optimal</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nos 4 agences en Alsace vous garantissent une proximité et une réactivité sans faille. 
                Chaque agence dispose d'un showroom où vous pouvez découvrir nos produits, toucher les matières, 
                visualiser les couleurs et bénéficier des conseils de nos experts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Que vous soyez professionnel ou particulier, n'hésitez pas à nous rendre visite. 
                Nos équipes se feront un plaisir de vous accueillir et de vous accompagner dans votre projet.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

