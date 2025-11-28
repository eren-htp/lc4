import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { COMPANY_INFO, AGENCIES, OPENING_HOURS } from '@shared/const';
import { Phone, Mail, MapPin, Star, Clock, Map, Check, Lightbulb, Car, Accessibility } from 'lucide-react';
import ModalRappel from '../components/ModalRappel';

// Définir les options pour le dropdown "Solution souhaitée"
const serviceOptions = [
  "Sélectionnez un service",
  "Peinture intérieure",
  "Peinture extérieure",
  "Revêtement de sol",
  "Décoration",
  "Rénovation",
  "Autre",
];

// Composant pour les cartes d'information (style inspiré de LED Alsace)
const ContactCard: React.FC<{ icon: React.ReactNode, title: string, content: React.ReactNode, color: string }> = ({ icon, title, content, color }) => (
  <div className={`p-6 rounded-lg shadow-xl flex flex-col items-center text-center justify-center h-full ${color} border border-gray-200 card-animate hover-lift transition-all`}>
    <div className="text-4xl mb-4 p-3 rounded-full bg-white shadow-md text-blue-600">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="text-gray-600">{content}</div>
  </div>
);

// Composant pour les cartes d'information cliquables
const ClickableContactCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  content: React.ReactNode, 
  color: string, 
  href: string 
}> = ({ icon, title, content, color, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block relative transition-all duration-300 hover:shadow-2xl h-full hover-lift card-animate"
  >
    <ContactCard icon={icon} title={title} content={content} color={color} />
  </a>
);

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire (à implémenter)
    console.log('Form submitted:', formData);
    alert("Formulaire soumis (la soumission réelle n'est pas encore implémentée).");
  };

  // Informations LC4
  const mainAgency = AGENCIES.find(agency => agency.id === 1);
  const otherZones = AGENCIES.filter(agency => agency.id !== 1).map(agency => agency.name);

  // Utiliser l'adresse de l'agence principale pour la carte
  const mapAddress = mainAgency ? `${mainAgency.address}` : COMPANY_INFO.address;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Bannière d'introduction (style similaire à LED Alsace) */}
        <div className="bg-gray-800 text-white py-20 px-4 text-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero-contact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets de peinture et décoration.
          </p>
        </div>

	        <div className="max-w-7xl mx-auto px-4 py-12">
	          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
		            <ClickableContactCard
	              icon={<Phone className="w-6 h-6" />}
	              title="Téléphone"
	              content={<>LC4 du lundi au vendredi<br /><span className="text-2xl font-bold text-blue-600">{COMPANY_INFO.phone}</span></>}
	              color="bg-blue-50"
	              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
	            />
	            <ClickableContactCard
	              icon={<Mail className="w-6 h-6" />}
	              title="Email"
	              content={<>Écrivez-nous à tout moment<br /><span className="text-blue-600">{COMPANY_INFO.email}</span></>}
	              color="bg-blue-50"
	              href={`mailto:${COMPANY_INFO.email}`}
	            />
	            <ClickableContactCard
	              icon={<MapPin className="w-6 h-6" />}
	              title="Adresse"
	              content={<>Visitez notre agence principale<br />{COMPANY_INFO.address.split(',').map((line, index) => <span key={index} className="block">{line.trim()}</span>)}</>}
	              color="bg-blue-50"
	              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`}
	            />
	            <ClickableContactCard
	              icon={<Star className="w-6 h-6" />}
	              title="Avis Google"
	              content={<>Note moyenne sur {COMPANY_INFO.googleReviews.count} avis<br /><span className="text-2xl font-bold text-green-600">{COMPANY_INFO.googleReviews.rating} / 5</span></>}
	              color="bg-blue-50"
	              href="https://www.google.com/search?q=LC4+PEINTURE+%26+DECORATION+Avis"
	            />
	          </div>       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulaire de demande de devis */}
            <div className="lg:col-span-2 p-8 border rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Demandez votre devis gratuit</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom *</label>
                    <input type="text" name="firstName" id="firstName" required
                      placeholder="Votre prénom"
                      value={formData.firstName} onChange={handleChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom *</label>
                    <input type="text" name="lastName" id="lastName" required
                      placeholder="Votre nom"
                      value={formData.lastName} onChange={handleChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" name="email" id="email" required
                    placeholder="votre.email@exemple.com"
                    value={formData.email} onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone *</label>
                  <input type="tel" name="phone" id="phone" required
                    placeholder="03 88 04 71 96"
                    value={formData.phone} onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service souhaité</label>
                  <select name="service" id="service"
                    value={formData.service} onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre message *</label>
                  <textarea name="message" id="message" rows={4} required
                    placeholder="Décrivez-nous votre projet..."
                    value={formData.message} onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button type="submit"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Mail className="w-5 h-5 mr-2" /> Envoyer ma demande
                  </button>
                  <button type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0D1B3E] hover:bg-[#1a2744] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Phone className="w-5 h-5 mr-2" /> Être rappelé
                  </button>
                </div>
              </form>
            </div>

            {/* Informations complémentaires */}
            <div className="space-y-8">
              {/* Horaires d'ouverture */}
              <div className="p-6 border rounded-lg shadow-md bg-blue-50">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-[#0D1B3E]" /> Horaires d'ouverture
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold">{OPENING_HOURS.lundi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold">{OPENING_HOURS.samedi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-semibold">{OPENING_HOURS.dimanche}</span>
                  </div>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="p-6 border rounded-lg shadow-md bg-blue-50">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Map className="w-6 h-6 mr-2 text-[#0D1B3E]" /> Service de livraison express
                </h3>
                <p className="mb-3">Nous livrons dans les communes suivantes :</p>
                <ul className="space-y-1">
                  {["Mundolsheim", "Strasbourg", "Souffelweyersheim", "Haguenau", "Schweighouse", "Molsheim", "Sélestat", "Colmar", "Schirmeck", "Saverne"].map((city, index) => (
                    <li key={index} className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" />{city}</li>
                  ))}
                </ul>
              </div>

              {/* Pourquoi nous contacter ? */}
              <div className="p-6 border rounded-lg shadow-md bg-blue-50">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-[#0D1B3E]" /> Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" />Devis gratuit et sans engagement</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" />Conseils personnalisés par nos experts</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" />Réponse rapide</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" />Visite sur site possible</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" />Plus de 10 ans d'expérience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comment nous trouver ? */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-2">Comment nous trouver ?</h2>
            <p className="text-center text-xl mb-8">Notre agence principale est située à Mundolsheim, près de Strasbourg</p>

            {/* Carte Google Maps (Embed sans API Key) */}
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-xl mb-8 flex items-center justify-center overflow-hidden">
              <iframe
                title="Google Maps LC4 PEINTURE & DECORATION"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                loading="lazy"
                allowFullScreen
                // Utilisation de l'embed standard qui ne nécessite pas d'API Key pour l'affichage de base
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>

            {/* Accès et commodités */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-6 border rounded-lg shadow-md">
                <Car className="w-8 h-8 mx-auto mb-2 text-[#0D1B3E]" />
                <h4 className="font-semibold">Parking gratuit</h4>
                <p className="text-gray-600">Stationnement facile sur place</p>
              </div>
              <div className="p-6 border rounded-lg shadow-md">
                <Accessibility className="w-8 h-8 mx-auto mb-2 text-[#0D1B3E]" />
                <h4 className="font-semibold">Accès PMR</h4>
                <p className="text-gray-600">Locaux accessibles à tous</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ModalRappel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Contact;
