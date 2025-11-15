"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ContactForm } from "./components/ContactForm";
import imgBuilding1 from "figma:asset/da3784ab38edcde9f16e1dd95a27603654af8546.png";
import imgBuilding2 from "figma:asset/7f2248ab7ab67fbad86b1d62728f5e25097f5914.png";

function ScrollIndicatorLeft() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="hidden md:flex fixed left-4 md:left-[78px] bottom-[30px] md:bottom-[50px] z-50 items-center gap-3 md:gap-[20px]"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
      </motion.div>
      <div style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }} className="text-xl md:text-[30px] font-bold text-center">
        <p>scorri per</p>
      </div>
    </motion.div>
  );
}

function ScrollIndicatorRight() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="hidden md:flex fixed right-4 md:right-[100px] bottom-[30px] md:bottom-[50px] z-50 items-center gap-3 md:gap-[20px]"
    >
      <div style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }} className="text-xl md:text-[30px] text-center font-bold">
        <p>leggere</p>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8"
      >
        <div className="rotate-180 scale-y-[-100%]">
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const yellowLineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="relative bg-white min-h-screen" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}>
      <ScrollIndicatorLeft />
      <ScrollIndicatorRight />

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />

      {/* Decorative yellow line */}
      <motion.div
        className="fixed left-2 md:left-8 top-0 w-0.5 md:w-1 bg-[#FFCC76] z-40"
        style={{ height: yellowLineHeight }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        {/* White rotated background layer - Hidden on mobile */}
        <div className="hidden lg:block absolute inset-0">
          <div
            className="absolute left-[-41px] top-[624px] flex items-center justify-center"
            style={{
              width: 'calc(1px * ((var(--transform-inner-height) * 0.03489949554204941) + (var(--transform-inner-width) * 0.9993908405303955)))',
              height: 'calc(1px * ((var(--transform-inner-width) * 0.03489949554204941) + (var(--transform-inner-height) * 0.9993908405303955)))',
              '--transform-inner-width': '1761.796875',
              '--transform-inner-height': '680'
            } as React.CSSProperties}
          >
            <div className="flex-none rotate-[2deg]">
              <div className="bg-[rgba(255,255,255,0.9)] h-[680px] w-[1761.81px]" />
            </div>
          </div>
        </div>

        {/* Top service labels - Desktop only */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 px-8 z-10">
          <div className="flex justify-start gap-16 max-w-7xl mx-auto pl-[94px] items-center">
            <button 
              onClick={() => document.querySelector('#servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[25px] text-black hover:text-[#FFCC76] transition-colors cursor-pointer py-5 font-bold"
            >
              <p>amministrazioni condominiali</p>
            </button>
            <button 
              onClick={() => document.querySelector('#servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[25px] text-[#7b7878] hover:text-[#FFCC76] transition-colors cursor-pointer py-5 font-bold"
            >
              <p>consulenza immobiliare</p>
            </button>
            <button 
              onClick={() => document.querySelector('#servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[25px] text-black hover:text-[#FFCC76] transition-colors cursor-pointer py-5 font-bold"
            >
              <p>progettazione</p>
            </button>
          </div>
        </div>

        {/* Contact button - Desktop only */}
        <div className="hidden lg:block absolute top-8 right-20 z-10">
          <button 
            onClick={() => setIsContactFormOpen(true)}
            className="bg-[#050505] px-12 py-5 rounded-full text-[25px] text-white hover:bg-[#FFCC76] hover:text-black transition-all duration-300 font-bold"
          >
            Contattaci
          </button>
        </div>

        {/* MOBILE/TABLET LAYOUT */}
        <div className="lg:hidden flex flex-col min-h-screen px-6 py-8">
          {/* Top services - Mobile minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-between gap-2 text-xs mb-auto pt-4"
          >
            <button 
              onClick={() => document.querySelector('#servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-black hover:text-[#FFCC76] transition-colors cursor-pointer font-bold"
            >
              amministrazioni
            </button>
            <button 
              onClick={() => document.querySelector('#servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#7b7878] hover:text-[#FFCC76] transition-colors cursor-pointer font-bold"
            >
              consulenza
            </button>
            <button 
              onClick={() => document.querySelector('#servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-black hover:text-[#FFCC76] transition-colors cursor-pointer font-bold"
            >
              progettazione
            </button>
          </motion.div>

          {/* Main content centered */}
          <div className="flex flex-col items-center justify-center flex-1">
            {/* Main title - Mobile simple */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] leading-none text-black mb-4 font-bold">
                LB STUDIO<br />SRL
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-black font-black" style={{ fontWeight: 900 }}>
                GEOM. LUGARESI GIANLUCA
              </p>
            </motion.div>
          </div>

          {/* Contact button bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center mb-8"
          >
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-[#050505] px-12 py-4 rounded-full text-sm text-white hover:bg-[#FFCC76] hover:text-black transition-all duration-300 font-bold"
            >
              Contattaci
            </button>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block">
          {/* Rotated images - Desktop */}
          <div className="absolute left-[670.4px] top-[162.12px]">
            <motion.div
              initial={{ rotate: 355, scale: 0 }}
              animate={{ rotate: 355, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-[164.86px] top-[22.83px] flex items-center justify-center"
            >
              <div className="flex-none rotate-[355deg]">
                <div className="h-[234.085px] w-[312.518px] rounded-[70px] overflow-hidden">
                  <img
                    src={imgBuilding2}
                    alt="Building 2"
                    className="absolute h-full left-[-4.12%] max-w-none top-0 w-[112.14%]"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ rotate: 355, scale: 0 }}
              animate={{ rotate: 355, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute left-0 top-[17.23px] flex items-center justify-center"
            >
              <div className="flex-none rotate-[355deg]">
                <div className="h-[234.152px] w-[278.376px] rounded-[70px] overflow-hidden">
                  <img
                    src={imgBuilding1}
                    alt="Building 1"
                    className="absolute inset-0 max-w-none object-center object-cover size-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main title - Desktop */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-[864px] top-[624.5px] -translate-x-1/2 -translate-y-1/2 text-[220px] text-black text-center w-[1728px] font-bold"
          >
            <p>LB STUDIO SRL</p>
          </motion.div>

          {/* Subtitle - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-[362.5px] top-[748px] -translate-x-1/2 -translate-y-1/2 text-[40px] text-black text-center whitespace-nowrap font-black"
            style={{ fontWeight: 900 }}
          >
            <p>GEOM. LUGARESI GIANLUCA</p>
          </motion.div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl lg:text-[12rem] mb-12 md:mb-16 lg:mb-20 font-black"
            style={{ fontWeight: 900 }}
          >
            <span className="text-black">CHI</span>{" "}
            <span className="text-neutral-200">SIAMO</span>
            <span className="text-black">?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl font-black"
            style={{ fontWeight: 900, fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
          >
            <p className="mb-8 md:mb-10 lg:mb-12 text-[32px]">
              <span className="text-neutral-200">LB Studio</span> è uno studio
              professionale specializzato nella gestione condominiale, consulenza
              immobiliare e progettazione edilizia.
            </p>
            <p className="mb-8 md:mb-10 lg:mb-12">
              Con <span className="text-[#FFCC76]">trent'anni di esperienza</span>, 
              offriamo servizi professionali con trasparenza e competenza nel settore
              immobiliare e delle <span className="text-neutral-200">costruzioni</span>.
            </p>
            <p>
              Il nostro team garantisce <span className="text-[#FFCC76]">professionalità</span> e
              attenzione ai dettagli in ogni progetto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20" id="servizi">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl lg:text-[12rem] mb-16 md:mb-24 lg:mb-32 font-black"
            style={{ fontWeight: 900 }}
          >
            <span className="text-neutral-200">I NOSTRI</span>{" "}
            <span className="text-black">SERVIZI</span>
          </motion.h2>

          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {/* Servizio 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-end"
            >
              <div>
                <h3 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-4 md:mb-6 lg:mb-8 text-[#FFCC76] font-black" style={{ fontWeight: 900 }}>
                  01
                </h3>
                <h4 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-5 lg:mb-6 font-black" style={{ fontWeight: 900 }}>
                  Amministrazioni Condominiali
                </h4>
              </div>
              <div>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-600 font-bold">
                  Gestione completa di condomini con trasparenza e professionalità. 
                  Assemblee, rendiconti, manutenzioni ordinarie e straordinarie.
                </p>
              </div>
            </motion.div>

            {/* Servizio 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-end"
            >
              <div>
                <h3 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-4 md:mb-6 lg:mb-8 text-black font-black" style={{ fontWeight: 900 }}>
                  02
                </h3>
                <h4 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-5 lg:mb-6 font-black" style={{ fontWeight: 900 }}>
                  Consulenza Immobiliare
                </h4>
              </div>
              <div>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-600 font-bold">
                  Supporto professionale per compravendite, locazioni, perizie e 
                  valutazioni immobiliari con esperienza trentennale.
                </p>
              </div>
            </motion.div>

            {/* Servizio 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-end"
            >
              <div>
                <h3 className="text-6xl md:text-7xl lg:text-8xl leading-none mb-4 md:mb-6 lg:mb-8 text-[#FFCC76] font-black" style={{ fontWeight: 900 }}>
                  03
                </h3>
                <h4 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-5 lg:mb-6 font-black" style={{ fontWeight: 900 }}>
                  Progettazione
                </h4>
              </div>
              <div>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-600 font-bold">
                  Progetti edilizi, ristrutturazioni, pratiche catastali e urbanistiche 
                  con attenzione ai dettagli.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ORARIO */}
      <section className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl lg:text-[14rem] mb-12 md:mb-16 lg:mb-24 font-black"
            style={{ fontWeight: 900 }}
          >
            ORARIO
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl space-y-4 md:space-y-6 lg:space-y-8 font-black"
            style={{ fontWeight: 900 }}
          >
            <div className="flex justify-between items-center pb-2 md:pb-3 lg:pb-4">
              <span className="text-[#FFCC76]">Lunedì</span>
              <span className="text-sm md:text-2xl lg:text-4xl xl:text-5xl">8:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center pb-2 md:pb-3 lg:pb-4">
              <span>Martedì</span>
              <span className="text-sm md:text-2xl lg:text-4xl xl:text-5xl">8:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center pb-2 md:pb-3 lg:pb-4">
              <span className="text-[#FFCC76]">Mercoledì</span>
              <span className="text-sm md:text-2xl lg:text-4xl xl:text-5xl">8:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center pb-2 md:pb-3 lg:pb-4">
              <span>Giovedì</span>
              <span className="text-sm md:text-2xl lg:text-4xl xl:text-5xl">8:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center pb-2 md:pb-3 lg:pb-4">
              <span className="text-[#FFCC76]">Venerdì</span>
              <span className="text-sm md:text-2xl lg:text-4xl xl:text-5xl">8:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center pb-2 md:pb-3 lg:pb-4">
              <span>Sabato</span>
              <span className="text-neutral-400 text-sm md:text-2xl lg:text-4xl xl:text-5xl">Chiusi</span>
            </div>
            <div className="flex justify-between items-center pb-2 md:pb-3 lg:pb-4">
              <span className="text-[#FFCC76]">Domenica</span>
              <span className="text-neutral-400 text-sm md:text-2xl lg:text-4xl xl:text-5xl">Chiusi</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-black text-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-10 md:mb-12 lg:mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-5 lg:mb-6 font-black" style={{ fontWeight: 900 }}>
                LB STUDIO
              </h3>
              <p className="text-base md:text-lg text-neutral-400 font-bold">
                Amministrazioni condominiali,<br />
                consulenza immobiliare<br />
                e progettazione
              </p>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#FFCC76] font-black" style={{ fontWeight: 900 }}>
                Proprietari
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-base md:text-lg text-neutral-300 font-medium">
                Lugaresi Gianluca
              </p>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#FFCC76] font-black" style={{ fontWeight: 900 }}>
                Team
              </h4>
              <div style={{ fontFamily: "'Inter', sans-serif" }} className="text-base md:text-lg text-neutral-300 space-y-3 md:space-y-4 font-medium">
                <div>
                  <p className="text-white">Software Developer</p>
                  <p>Lugaresi Gianmarco</p>
                </div>
                <div>
                  <p className="text-white">UI/UX Designer</p>
                  <p>Lugaresi Gianmarco</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-neutral-700">
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm md:text-base text-neutral-400 text-center">
              © {new Date().getFullYear()} LB Studio SRL - Tutti i diritti riservati
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}