import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=Contactez-nous')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </section>

        {/* Informations de contact */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#0D1B3E] rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Téléphone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg text-[#0D1B3E] hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Du lundi au vendredi</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#0D1B3E] rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg text-[#0D1B3E] hover:underline break-all">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Réponse sous 24h</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#0D1B3E] rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Horaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-700">Lun - Ven : 8h - 18h</p>
                  <p className="text-base text-gray-700">Sam : 9h - 12h</p>
                  <p className="text-sm text-gray-600 mt-2">Fermé le dimanche</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulaire de contact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0D1B3E] mb-4">Envoyez-nous un message</h2>
              <p className="text-lg text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1B3E] focus:border-transparent outline-none transition"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1B3E] focus:border-transparent outline-none transition"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1B3E] focus:border-transparent outline-none transition"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1B3E] focus:border-transparent outline-none transition"
                        placeholder="+33 6 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="sujet"
                      name="sujet"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1B3E] focus:border-transparent outline-none transition"
                      placeholder="Objet de votre demande"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D1B3E] focus:border-transparent outline-none transition resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-[#0D1B3E] hover:bg-[#1a2744] px-12 py-6 text-lg"
                    >
                      Envoyer le message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Zone de livraison */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-[#0D1B3E] mb-6">Zone de livraison</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nous livrons dans toute l'Alsace et les environs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-[#0D1B3E] font-semibold">Strasbourg</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-[#0D1B3E] font-semibold">Souffelweyersheim</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-[#0D1B3E] font-semibold">Haguenau</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-[#0D1B3E] font-semibold">Schweighouse</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

