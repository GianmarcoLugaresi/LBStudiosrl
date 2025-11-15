import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    titolo: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Costruisco il corpo dell'email con tutti i dati
    const emailBody = `Nome: ${formData.nome}
Cognome: ${formData.cognome}
Email: ${formData.email}

${formData.messaggio}`;

    // Creo il link mailto con i dati precompilati
    const mailtoLink = `mailto:tecnico@lbstudiosrl.it?subject=${encodeURIComponent(formData.titolo)}&body=${encodeURIComponent(emailBody)}`;
    
    // Apro il client di posta
    window.location.href = mailtoLink;
    
    // Reset del form
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      titolo: "",
      messaggio: "",
    });
    
    // Chiudo il form dopo un breve delay
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Form Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          >
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}>
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 md:px-8 py-6 flex items-center justify-between rounded-t-3xl">
                <h2 className="text-3xl md:text-4xl font-black" style={{ fontWeight: 900 }}>
                  Contattaci
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 md:px-8 py-8 space-y-6">
                {/* Nome e Cognome */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm mb-2 font-bold"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#FFCC76] focus:outline-none transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cognome"
                      className="block text-sm mb-2 font-bold"
                    >
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="cognome"
                      name="cognome"
                      required
                      value={formData.cognome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#FFCC76] focus:outline-none transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 font-bold"
                  >
                    Indirizzo Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#FFCC76] focus:outline-none transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="tua@email.com"
                  />
                </div>

                {/* Titolo */}
                <div>
                  <label
                    htmlFor="titolo"
                    className="block text-sm mb-2 font-bold"
                  >
                    Oggetto *
                  </label>
                  <input
                    type="text"
                    id="titolo"
                    name="titolo"
                    required
                    value={formData.titolo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#FFCC76] focus:outline-none transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Oggetto della richiesta"
                  />
                </div>

                {/* Messaggio */}
                <div>
                  <label
                    htmlFor="messaggio"
                    className="block text-sm mb-2 font-bold"
                  >
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    required
                    value={formData.messaggio}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#FFCC76] focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#050505] text-white px-8 py-4 rounded-full text-lg hover:bg-[#FFCC76] hover:text-black transition-all duration-300 font-bold"
                  >
                    Invia
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="sm:flex-none bg-neutral-100 text-black px-8 py-4 rounded-full text-lg hover:bg-neutral-200 transition-colors font-bold"
                  >
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
