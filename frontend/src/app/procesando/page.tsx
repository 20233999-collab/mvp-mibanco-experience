"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loadingSteps = [
  { text: "Iniciando Clúster de IA...", icon: "memory", color: "text-primary" },
  { text: "Agente Legal validando normas Indecopi...", icon: "gavel", color: "text-error" },
  { text: "Agente de Claridad reestructurando párrafos...", icon: "format_paint", color: "text-info" },
  { text: "Agente de Tono inyectando actitud 'Tigre'...", icon: "campaign", color: "text-secondary-container" },
  { text: "Agente Final consolidando pieza...", icon: "task_alt", color: "text-primary-container" },
  { text: "¡Validación exitosa! Redirigiendo...", icon: "verified", color: "text-success" }
];

export default function ProcesandoPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Fondo animado
    const bunting = document.querySelector('.bunting-pattern') as HTMLElement;
    let posX = 0;
    let posY = 0;
    function animateBg() {
      posX += 0.05;
      posY += 0.05;
      if (bunting) {
        bunting.style.backgroundPosition = `${posX}px ${posY}px`;
      }
      requestAnimationFrame(animateBg);
    }
    const req = requestAnimationFrame(animateBg);

    // Lógica de simulación (Timer de 5 segundos en total)
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1200);

    return () => {
      cancelAnimationFrame(req);
      clearInterval(interval);
    };
  }, []);

  // Redirigir al dashboard cuando llegamos al último paso
  useEffect(() => {
    if (currentStep === loadingSteps.length - 1) {
      const timeout = setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, router]);

  return (
    <>
      {/* TopNavBar Minimalista */}
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-10 py-8 min-h-[80vh]">
        <div className="absolute inset-0 bunting-pattern pointer-events-none"></div>
        
        <div className="w-full max-w-lg z-10">
          <div className="bg-surface-container-lowest rounded-xl mibanco-shadow overflow-hidden flex flex-col p-12 items-center text-center relative">
            
            {/* Animación de Carga Circular */}
            <div className="relative mb-8">
              <div className="w-32 h-32 border-8 border-surface-container-high border-t-primary rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`material-symbols-outlined text-4xl transition-colors duration-300 ${loadingSteps[currentStep].color}`}>
                  {loadingSteps[currentStep].icon}
                </span>
              </div>
            </div>

            <h2 className="font-headline-xl text-3xl font-black text-on-surface mb-3">
              Procesando Pieza
            </h2>
            
            {/* Texto Dinámico */}
            <div className="h-8">
              <p className="font-body-lg text-on-surface-variant font-bold animate-pulse">
                {loadingSteps[currentStep].text}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-surface-container-high rounded-full h-2 mt-8 overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000 ease-in-out" 
                style={{ width: `${((currentStep + 1) / loadingSteps.length) * 100}%` }}
              ></div>
            </div>
            <p className="font-label-bold text-outline text-xs mt-3">
              Motor LLM (Mibanco Experience v1.0)
            </p>
          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
        <div className="w-full py-8 px-4 md:px-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <span className="font-label-bold text-sm text-primary font-bold">Hecho por el grupo 16: Los Tigres de la Ulima</span>
        </div>
      </footer>
    </>
  );
}
