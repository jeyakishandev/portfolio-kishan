"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Clock, Phone, Send, MessageCircle, Calendar, Download, ExternalLink, Copy, Check } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useState } from "react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      description: "Réponse sous 24h",
      action: `mailto:${personalInfo.email}`,
      color: "text-[#ea4335]",
      bg: "bg-[#ea4335]/10",
      hover: "hover:bg-[#ea4335]/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "jeya-kishan-karunanithy",
      description: "Réseau professionnel",
      action: personalInfo.linkedin,
      color: "text-[#0077b5]",
      bg: "bg-[#0077b5]/10",
      hover: "hover:bg-[#0077b5]/20"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "jeyakishandev",
      description: "Code source & projets",
      action: personalInfo.github,
      color: "text-[#333]",
      bg: "bg-[#333]/10",
      hover: "hover:bg-[#333]/20"
    }
  ];

  const availabilityInfo = [
    {
      icon: MapPin,
      title: "Localisation",
      value: personalInfo.location,
      description: "Télétravail ou présentiel"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: personalInfo.status,
      description: "CDI, CDD, Freelance"
    },
    {
      icon: Calendar,
      title: "Délai de réponse",
      value: "24-48h",
      description: "Email et LinkedIn"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Tentative d'envoi via API Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact depuis le portfolio",
          message: formData.message
        }),
      });

      if (response.ok) {
        // Succès API - réinitialiser le formulaire
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("✅ Message envoyé avec succès via Resend ! Je vous répondrai sous 24-48h.");
      } else {
        throw new Error('API Resend échouée');
      }
    } catch (error) {
      console.log('API Resend échouée, utilisation du fallback mailto');
      
      // FALLBACK: Utiliser mailto comme solution de secours
      const subject = encodeURIComponent(`[PORTFOLIO] ${formData.subject || "Contact depuis le portfolio"}`);
      const body = encodeURIComponent(
        `Bonjour Jeya Kishan,\n\n` +
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Sujet: ${formData.subject || "Contact depuis le portfolio"}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Cordialement,\n${formData.name}`
      );
      
      // Ouvrir le client email
      window.location.href = `mailto:k.jeyakishan@gmail.com?subject=${subject}&body=${body}`;
      
      // Réinitialiser le formulaire
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("📧 Votre client email s'ouvre avec le message pré-rempli. Cliquez sur 'Envoyer' pour me contacter !");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-xl mb-8 text-[#64748b] max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une opportunité à discuter ? 
            Je suis disponible pour collaborer sur des projets passionnants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
            
            {/* Méthodes de contact */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`group p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      darkMode 
                        ? `bg-[#1e293b] border-[#334155] ${method.hover}` 
                        : `bg-white border-[#e2e8f0] ${method.hover}`
                    }`}
                    onClick={() => {
                      if (method.title === "Email") {
                        copyEmail();
                      } else {
                        window.open(method.action, '_blank');
                      }
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${method.bg}`}>
                        <Icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{method.title}</h4>
                          {method.title === "Email" && (
                            <motion.div
                              animate={{ scale: copiedEmail ? [1, 1.2, 1] : 1 }}
                              className="text-[#10b981]"
                            >
                              {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </motion.div>
                          )}
                        </div>
                        <p className="text-[#64748b] text-sm mb-1">{method.value}</p>
                        <p className="text-xs text-[#94a3b8]">{method.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-[#3b82f6] transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Informations de disponibilité */}
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-[#1e293b] border border-[#334155]' : 'bg-[#f8fafc] border border-[#e2e8f0]'
            }`}>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#3b82f6]" />
                Disponibilité
              </h4>
              <div className="space-y-3">
                {availabilityInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Icon className="w-4 h-4 text-[#64748b]" />
                      <div>
                        <span className="font-medium">{info.title} :</span>
                        <span className="ml-2 text-[#3b82f6]">{info.value}</span>
                        <p className="text-xs text-[#64748b]">{info.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CV Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] hover:from-[#2563eb] hover:to-[#059669] text-white shadow-lg shadow-[#3b82f6]/30'
                    : 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] hover:from-[#2563eb] hover:to-[#059669] text-white shadow-lg shadow-[#3b82f6]/20'
                }`}
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className={`p-8 rounded-2xl flex-1 ${
              darkMode 
                ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155]' 
                : 'bg-gradient-to-br from-white to-[#f8fafc] border border-[#e2e8f0]'
            }`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-[#3b82f6]" />
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent ${
                        darkMode 
                          ? 'bg-[#0f172a] border-[#334155] text-[#e2e8f0] placeholder-[#64748b]' 
                          : 'bg-white border-[#e2e8f0] text-[#1e293b] placeholder-[#64748b]'
                      }`}
                      placeholder="Votre nom"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent ${
                        darkMode 
                          ? 'bg-[#0f172a] border-[#334155] text-[#e2e8f0] placeholder-[#64748b]' 
                          : 'bg-white border-[#e2e8f0] text-[#1e293b] placeholder-[#64748b]'
                      }`}
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent ${
                      darkMode 
                        ? 'bg-[#0f172a] border-[#334155] text-[#e2e8f0] placeholder-[#64748b]' 
                        : 'bg-white border-[#e2e8f0] text-[#1e293b] placeholder-[#64748b]'
                    }`}
                    placeholder="Sujet de votre message"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none ${
                      darkMode 
                        ? 'bg-[#0f172a] border-[#334155] text-[#e2e8f0] placeholder-[#64748b]' 
                        : 'bg-white border-[#e2e8f0] text-[#1e293b] placeholder-[#64748b]'
                    }`}
                    placeholder="Décrivez votre projet, vos besoins ou posez-moi vos questions..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-[#64748b] cursor-not-allowed'
                      : darkMode
                        ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-lg shadow-[#3b82f6]/30'
                        : 'bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-lg shadow-[#3b82f6]/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>

              <p className="text-xs text-[#64748b] mt-4 text-center">
                Votre client email s'ouvrira avec le message pré-rempli. Cliquez sur 'Envoyer' pour me contacter.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`mt-12 p-8 rounded-2xl text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-[#3b82f6]/10 via-[#8b5cf6]/10 to-[#10b981]/10 border border-[#3b82f6]/20'
              : 'bg-gradient-to-r from-[#3b82f6]/5 via-[#8b5cf6]/5 to-[#10b981]/5 border border-[#3b82f6]/20'
          }`}
        >
          <MessageCircle className="w-8 h-8 mx-auto mb-4 text-[#3b82f6]" />
          <h3 className="text-xl font-bold mb-4">Prêt à collaborer ?</h3>
          <p className="text-[#64748b] mb-6 max-w-2xl mx-auto">
            Que ce soit pour un projet web, une mission freelance ou une opportunité en CDI/CDD, 
            je suis ouvert aux discussions. Parlons de vos besoins !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                darkMode
                  ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                  : 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
              }`}
            >
              <Mail className="w-5 h-5" />
              Email direct
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border transition-colors ${
                darkMode
                  ? 'border-[#334155] hover:bg-[#1e293b] text-[#e2e8f0]'
                  : 'border-[#e2e8f0] hover:bg-[#f8fafc] text-[#1e293b]'
              }`}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}