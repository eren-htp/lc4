import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

interface ModalRappelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalRappel: React.FC<ModalRappelProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nomComplet: '',
    telephone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire (à implémenter)
    console.log('Formulaire de rappel soumis:', formData);
    alert("Demande de rappel envoyée (la soumission réelle n'est pas encore implémentée).");
    onClose(); // Fermer la modale après soumission (simulée)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Être rappelé</h2>
          <p className="text-gray-600 mb-6">
            Laissez-nous vos coordonnées, nous vous rappelons rapidement
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nomComplet" className="block text-sm font-semibold text-gray-700 mb-1">
              Nom complet *
            </label>
            <input
              type="text"
              name="nomComplet"
              id="nomComplet"
              required
              placeholder="Votre nom"
              value={formData.nomComplet}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              required
              placeholder="06 12 34 56 78"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Envoyer
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Vos données sont utilisées uniquement pour vous recontacter
        </p>
      </div>
    </div>
  );
};

export default ModalRappel;
