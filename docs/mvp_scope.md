# Documento de Alcance del MVP (MoSCoW Matrix)

**Proyecto:** Plataforma de Inteligencia Artificial Híbrida para Validación (Módulo 1)
**Enfoque:** Prototipo Funcional de Demostración (Simulado)

---

## 🎯 Naturaleza del Prototipo
Este MVP está diseñado exclusivamente como un **Prototipo Funcional de Demostración** para el IAthon Ulima x Mibanco 2026. 
**No se desplegará en la infraestructura real de Mibanco** ni se conectará a sus bases de datos productivas. Su propósito es tangibilizar la experiencia de usuario (UX) y demostrar la viabilidad de la Inteligencia Artificial mediante una simulación en tiempo real, permitiendo a los *stakeholders* tener una visión aterrizada de la idea.

---

## 🚀 Despliegue y Fiabilidad (Infraestructura de Demo)
Dado que el prototipo será utilizado en vivo por jurados y expositores, se aplicarán las siguientes directrices de arquitectura para garantizar la máxima estabilidad:
*   **Hosting en Vercel:** El front-end será desplegado en Vercel para asegurar tiempos de carga casi instantáneos y alta disponibilidad (Edge Network).
*   **Protección de API Keys:** Se utilizarán las Serverless Functions / API Routes de Next.js (o backend equivalente en Vercel) para hacer las llamadas al LLM, ocultando por completo las claves privadas al cliente.
*   **Plan de Mitigación de Fallos (Fallback):** En caso de caídas de red, cuellos de botella en la API de IA (timeouts) o errores 500 durante la presentación, el sistema incorporará un mecanismo que devolverá un *Mock Data* estructurado visualmente perfecto. Esto garantiza que la demostración del flujo de usuario nunca se rompa en vivo.

---

## 🛠️ Alcance Funcional (Módulo 1: Fábrica de Contenidos)

### 1. Interfaz de Ingesta (Simulada)
*   **Drag & Drop Interactivo:** Se implementará una interfaz visual donde el usuario podrá arrastrar y soltar un archivo (simulando un correo, documento o guion de campaña).
*   **Botón "Analizar Email":** Al hacer clic, se activará una **animación de transición atractiva** (simulando el procesamiento de los agentes) que llevará directamente a la pantalla de resultados del Dashboard.
*   *Nota técnica:* No habrá conexión real a servidores de correo (Exchange/IMAP).

### 2. Motor de Inteligencia Artificial (Tiempo Real)
*   **Simulación de los 5 Agentes:** Aunque conceptualmente el sistema se compone de 5 agentes (Claridad, Tono, Legal, UX/CX, Demográfico), a nivel de código del MVP **se utilizará una única llamada a un LLM** (ej. Gemini o la API que se decida usar).
*   **Análisis en Vivo:** Este único prompt instruirá al modelo para que devuelva un análisis estructurado evaluando las 5 métricas de forma simultánea, permitiendo procesar cualquier texto (*input* libre) en tiempo real para la demostración.

### 3. Base de Conocimiento Segura (RAG Simulado)
*   **Notebook LM como Backend RAG:** Para el MVP, el contexto de Mibanco (manuales, tarifas, reglas de Indecopi) no vivirá en una base de datos vectorial compleja ni en servidores on-premise. 
*   **Funcionamiento:** Se utilizará un cuaderno de **NotebookLM** como el repositorio oficial de conocimiento. El LLM se apoyará en la información cargada en dicho cuaderno para validar la respuesta y evitar alucinaciones.

### 4. Dashboard de Resultados (Human-in-the-Loop)
*   Pantalla final que mostrará el resultado del análisis de la IA:
    *   Texto original vs. Texto Optimizado.
    *   Desglose del análisis de los agentes (ej. semáforo de riesgo legal, mejoras de tono).
    *   Botón final de "Aprobar y Enviar" (que culminará la demostración).

---

## 🚫 Fuera del Alcance del MVP (Out of Scope)
*   **Módulo 2 Completo:** No se desarrollará el Motor de Cobranza Predictiva (propensión a pago, limitadores de frecuencia, nudges en WhatsApp). Solo se mencionará conceptualmente.
*   **Extensión "Grammarly CX":** No se programará la extensión web real para navegadores.
*   **Integración de APIs Reales de Mibanco:** No habrá conexión con sistemas de mensajería reales para envío de SMS o WhatsApp.
*   **Seguridad y Arquitectura On-Premise:** No se aplicarán las estrictas restricciones técnicas de seguridad bancaria, ya que la plataforma correrá en un entorno de demostración aislado.
