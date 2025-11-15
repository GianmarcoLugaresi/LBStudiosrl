"use client";

import svgPaths from "./svg-9eplto5hw8";
import imgImage4 from "figma:asset/9e6e4f93c3f12688beaeac70bf1d773bd7526644.png";
import imgImage3 from "figma:asset/6b1a14307768b1575df528060ba59b65a7bfc467.png";
import { imgRectangle15 } from "./svg-36mlh";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function Items() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] h-[48px] items-end justify-center leading-[0] not-italic relative shrink-0 text-[16px] w-[187px]" data-name="Items">
      <div className="flex flex-col h-[15px] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">Proprietari</p>
      </div>
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Lugaresi Gianluca</p>
      </div>
      <div className="flex flex-col h-[15px] justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Bandini Emanuela</p>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] h-[34px] items-end justify-center leading-[0] not-italic relative shrink-0 text-[16px] w-[187px]" data-name="Items">
      <div className="flex flex-col h-[12px] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">Software Developer</p>
      </div>
      <div className="flex flex-col h-[13px] justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Lugaresi Gianmarco</p>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] h-[20px] items-end justify-center leading-[0] not-italic relative shrink-0 text-[16px] w-[187px]" data-name="Items">
      <div className="flex flex-col h-[12px] justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">UI/UX Designer</p>
      </div>
      <div className="flex flex-col h-[11px] justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Lugaresi Gianmarco</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p132b8500} fill="var(--fill-0, #828282)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsIcon() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f140b00} fill="var(--fill-0, #828282)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsIcon1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
      <Icon1 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Social Icons">
      <ButtonsIcon />
      <ButtonsIcon1 />
    </div>
  );
}

function NavigationFooter() {
  return (
    <div className="absolute bg-[#e9e9e9] h-[206px] left-0 right-0 top-[7616px]" data-name="Navigation / Footer">
      <div className="box-border content-center flex flex-wrap gap-[96px] items-center justify-center overflow-clip px-[80px] py-px relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[165px]">
          <p className="leading-[1.5]">©LB Studio srl</p>
        </div>
        <Items />
        <Items1 />
        <Items2 />
        <SocialIcons />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-50px_50px_0px_inset_rgba(0,0,0,0.15)]" />
      <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-neutral-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1394px] top-[33px]">
      <div className="absolute bg-[#050505] h-[73px] left-[1394px] rounded-[47.5px] top-[33px] w-[247px]" />
      <div className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] h-[73px] justify-center leading-[0] left-[1517.5px] not-italic text-[25px] text-center text-white top-[69.5px] translate-x-[-50%] translate-y-[-50%] w-[247px]">
        <p className="leading-[normal]">Contattaci</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961946606636047)))] left-[670.4px] top-[162.12px] w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961946606636047)))]">
      <motion.div
        initial={{ rotate: 355, scale: 0 }}
        whileInView={{ rotate: 355, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961946606636047)))] items-center justify-center left-[835.26px] top-[184.95px] w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961946606636047)))]"
        style={{ "--transform-inner-width": "312.515625", "--transform-inner-height": "234.078125" } as React.CSSProperties}
      >
        <div className="flex-none rotate-[355deg]">
          <div className="h-[234.085px] relative rounded-[9px] w-[312.518px]" data-name="image 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9px]">
              <img alt="" className="absolute h-full left-[-4.12%] max-w-none top-0 w-[112.14%]" src={imgImage4} />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ rotate: 355, scale: 0 }}
        whileInView={{ rotate: 355, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961946606636047)))] items-center justify-center left-[670.4px] top-[179.35px] w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961946606636047)))]"
        style={{ "--transform-inner-width": "278.375", "--transform-inner-height": "234.140625" } as React.CSSProperties}
      >
        <div className="flex-none rotate-[355deg]">
          <div className="h-[234.152px] relative rounded-[9px] w-[278.376px]" data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage3} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative size-[32px]" data-name="Arrow down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Arrow down">
          <path d={svgPaths.p368c400} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed left-[78px] bottom-[50px] z-50 flex items-center gap-[20px]"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown />
      </motion.div>
      <div className="flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] justify-center leading-[0] not-italic text-[30px] text-black">
        <p className="leading-[normal]">scorri per</p>
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed right-[100px] bottom-[50px] z-50 flex items-center gap-[20px]"
    >
      <div className="flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] justify-center leading-[0] not-italic text-[30px] text-black text-center">
        <p className="leading-[normal]">leggere</p>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex items-center justify-center size-[32px]"
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ArrowDown />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-8px] top-[2728px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.06975647807121277)+(var(--transform-inner-height)*0.9975640773773193)))] items-center justify-center left-[-38px] top-[2949px] w-[calc(1px*((var(--transform-inner-height)*0.06975647807121277)+(var(--transform-inner-width)*0.9975640773773193)))]" style={{ "--transform-inner-width": "1761.796875", "--transform-inner-height": "680" } as React.CSSProperties}>
        <div className="flex-none rotate-[356deg]">
          <div className="bg-[rgba(255,204,118,0.9)] h-[680px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[103.461px_-95.401px] mask-size-[1171.12px_223.5px] w-[1761.81px]" style={{ maskImage: `url('${imgRectangle15}')` }} />
        </div>
      </div>
    </div>
  );
}

function AnimatedYellowLine() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);

  return (
    <div className="absolute h-[2016px] left-[-61px] top-[2626px] w-[1865px] pointer-events-none">
      <div className="absolute inset-[-0.24%_-0.27%_-0.16%_-0.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1875 2025">
          <motion.path
            d={svgPaths.pb50c800}
            id="Vector 1"
            stroke="#FFCC76"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength }}
            initial={{ pathLength: 0 }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative w-full" data-name="MacBook Pro 16' - 2">
      <ScrollIndicator />
      <ScrollIndicatorRight />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] justify-center leading-[0] left-[362.5px] not-italic text-[40px] text-black text-center text-nowrap top-[748px] translate-x-[-50%] translate-y-[-50%]"
      >
        <p className="leading-[normal] whitespace-pre">GEOM. LUGARESI GIANLUCA</p>
      </motion.div>
      
      <NavigationFooter />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] h-[347px] justify-center leading-[0] left-[864px] not-italic text-[220px] text-black text-center top-[624.5px] translate-x-[-50%] translate-y-[-50%] w-[1728px]"
      >
        <p className="leading-[normal]">LB STUDIO SRL</p>
      </motion.div>
      
      <div className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] h-[73px] justify-end leading-[0] left-[94px] not-italic text-[25px] text-black top-[80px] translate-y-[-100%] w-[376px]">
        <p className="leading-[normal]">amministrazioni condominiali</p>
      </div>
      <div className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] h-[80px] justify-end leading-[0] left-[611px] not-italic text-[#7b7878] text-[25px] text-center top-[80px] translate-x-[-50%] translate-y-[-100%] w-[376px]">
        <p className="leading-[normal]">consulenza immobiliare</p>
      </div>
      <div className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] h-[80px] justify-end leading-[0] left-[799px] not-italic text-[25px] text-black top-[80px] translate-y-[-100%] w-[376px]">
        <p className="leading-[normal]">progettazione</p>
      </div>
      
      <Group />
      <Group3 />
      
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.03489949554204941)+(var(--transform-inner-height)*0.9993908405303955)))] items-center justify-center left-[-41px] top-[624px] w-[calc(1px*((var(--transform-inner-height)*0.03489949554204941)+(var(--transform-inner-width)*0.9993908405303955)))]" style={{ "--transform-inner-width": "1761.796875", "--transform-inner-height": "680" } as React.CSSProperties}>
        <div className="flex-none rotate-[2deg]">
          <div className="bg-[rgba(255,255,255,0.9)] h-[680px] w-[1761.81px]" />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[193px] justify-end leading-[0] left-[554px] not-italic text-[0px] text-center text-neutral-200 top-[1598px] translate-x-[-50%] translate-y-[-100%] w-[920px]"
      >
        <p className="leading-[normal] text-[150px]">
          <span className="text-black">CHI</span>
          <span>{` SIAMO `}</span>
          <span className="text-black">?</span>
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[758px] leading-[normal] left-[102px] not-italic text-[50px] text-black top-[1698px] w-[1116px]"
      >
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-neutral-200">Lorem</span>
          <span>{` ipsum dolor sit amet,                     consectetur      adipiscing elit.                     `}</span>
          <span className="text-neutral-200">Sed</span>
          <span>{` neque justo, dictum sollicitudin facilisis sit amet,                ullamcorper in dolor.              Nullam vel libero `}</span>
          <span className="text-neutral-200">gravida</span>
          <span>{`,            interdum urna id,               porttitor ipsum.    Curabitur dapibus `}</span>
          <span className="text-neutral-200">consectetur</span>
          <span>{` nunc ut ornare. In condimentum aliquet tortor, vel convallis est cursus a.                      Duis nec `}</span>
          <span className="text-neutral-200">vehicula</span>
          <span>{` leo,                          eu eleifend lorem. Maecenas in pretium enim,         ac `}</span>
          <span className="text-neutral-200">sollicitudin</span>
          <span>{` mi.                      Donec euismod sagittis arcu,                             sed `}</span>
          <span className="text-neutral-200">sagittis</span>
          <span>{` orci venenatis gravida.              Quisque at urna maximus, consectetur nisi non,                                     blandit neque. `}</span>
        </p>
        <p>&nbsp;</p>
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bg-black h-[741px] left-[1320px] rounded-[23px] top-[1715px] w-[381px]"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[429px] justify-end leading-[0] left-[651px] not-italic text-[300px] text-black text-center top-[3157px] translate-x-[-50%] translate-y-[-100%] w-[1318px]"
      >
        <p className="leading-[normal]">ORARIO</p>
      </motion.div>
      
      <Group4 />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[839px] leading-[normal] left-[856px] not-italic text-[0px] text-[60px] text-black text-center top-[3177px] translate-x-[-50%] w-[1218px]"
      >
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">lunedì</span>
          <span>{`                        8:00 - 18:00`}</span>
        </p>
        <p className="mb-0 whitespace-pre-wrap">{`martedì                   8:00 - 18:00`}</p>
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">mercoledì</span>
          <span className="text-neutral-200"> </span>
          <span>{`           8:00 - 18:00`}</span>
        </p>
        <p className="mb-0 whitespace-pre-wrap">{`giovedì                     8:00 - 18:00`}</p>
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">venerdì</span>
          <span>{`                    8:00 - 18:00`}</span>
        </p>
        <p className="mb-0 whitespace-pre-wrap">{`sabato                       8:00 - 18:00`}</p>
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">domenica</span>
          <span>{`                     chiusi          `}</span>
        </p>
        <p>&nbsp;</p>
      </motion.div>
      
      <AnimatedYellowLine />

      {/* NUOVA SEZIONE - SERVIZI (usando stesso pattern di CHI SIAMO) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[193px] justify-end leading-[0] left-[554px] not-italic text-[0px] text-center text-neutral-200 top-[5098px] translate-x-[-50%] translate-y-[-100%] w-[920px]"
      >
        <p className="leading-[normal] text-[150px]">
          <span className="text-neutral-200">I NOSTRI </span>
          <span className="text-black">SERVIZI</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[758px] leading-[normal] left-[102px] not-italic text-[50px] text-black top-[5198px] w-[1116px]"
      >
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">Amministrazioni</span>
          <span>{` Condominiali
Gestione completa di `}</span>
          <span className="text-neutral-200">condomini</span>
          <span>{` con trasparenza e professionalità.                     Assemblee, rendiconti,                manutenzioni ordinarie e       straordinarie.

`}</span>
          <span className="text-[#ffcc76]">Consulenza</span>
          <span>{` Immobiliare
Supporto per `}</span>
          <span className="text-neutral-200">compravendite</span>
          <span>{`,              locazioni, perizie      e valutazioni          immobiliari con esperienza                     trentennale.

`}</span>
          <span className="text-[#ffcc76]">Progettazione</span>
          <span>{`
Progetti `}</span>
          <span className="text-neutral-200">edilizi</span>
          <span>{`,            ristrutturazioni,             pratiche catastali     e urbanistiche.`}</span>
        </p>
        <p>&nbsp;</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bg-black h-[741px] left-[1320px] rounded-[23px] top-[5215px] w-[381px]"
      />

      {/* NUOVA SEZIONE - PROGETTI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[429px] justify-end leading-[0] left-[651px] not-italic text-[300px] text-black text-center top-[6657px] translate-x-[-50%] translate-y-[-100%] w-[1318px]"
      >
        <p className="leading-[normal]">PROGETTI</p>
      </motion.div>

      <div className="absolute contents left-[-8px] top-[6228px]">
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.06975647807121277)+(var(--transform-inner-height)*0.9975640773773193)))] items-center justify-center left-[-38px] top-[2949px] w-[calc(1px*((var(--transform-inner-height)*0.06975647807121277)+(var(--transform-inner-width)*0.9975640773773193)))]" style={{ "--transform-inner-width": "1761.796875", "--transform-inner-height": "680" } as React.CSSProperties}>
          <div className="flex-none rotate-[356deg]">
            <div className="bg-[rgba(255,204,118,0.9)] h-[680px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[103.461px_-95.401px] mask-size-[1171.12px_223.5px] w-[1761.81px]" style={{ maskImage: `url('${imgRectangle15}')` }} />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] h-[839px] leading-[normal] left-[856px] not-italic text-[0px] text-[60px] text-black text-center top-[6677px] translate-x-[-50%] w-[1218px]"
      >
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">Residenza Moderna</span>
          <span>{`         `}</span>
          <span className="text-neutral-200">2024</span>
        </p>
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">Villa Centro</span>
          <span>{`                      `}</span>
          <span className="text-neutral-200">2023</span>
        </p>
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">Complesso Residenziale</span>
          <span className="text-neutral-200"> 2023</span>
        </p>
        <p className="mb-0 whitespace-pre-wrap">
          <span className="text-[#ffcc76]">Ristrutturazione</span>
          <span>{`             `}</span>
          <span className="text-neutral-200">2022</span>
        </p>
        <p>&nbsp;</p>
      </motion.div>

    </div>
  );
}
