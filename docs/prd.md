# 📄 Product Requirements Document (PRD)

**Producto:** Plataforma de Inteligencia Artificial Híbrida para Validación y Cobranza Predictiva  
**Organización:** Mibanco (Banco de la Microempresa S.A.)  
**Estado:** Propuesta de Prototipo (IAthon Ulima x Mibanco 2026)  

---

## 1. VISIÓN Y OBJETIVO DEL PRODUCTO
**Visión:** Crear un ecosistema impulsado por Inteligencia Artificial que elimine los cuellos de botella operativos en la creación de campañas institucionales (reduciendo el SLA de días a minutos) y ejecute una gestión de cobranza predictiva, empática y basada en el comportamiento, asegurando el cumplimiento legal ante Indecopi.

**Objetivos Estratégicos:**
*   **Reto 1:** Optimizar la revisión y aprobación de mensajes garantizando un lenguaje claro, simple y alineado a la voz de marca del "Tigre" de Mibanco, reduciendo la fricción entre las áreas legales y comerciales.
*   **Reto 2:** Mejorar la efectividad de recuperación de cartera en mora temprana (días 0 al 15) reduciendo contactos innecesarios mediante modelos predictivos y facilitando el pago sin fricciones.

---

## 2. PÚBLICO OBJETIVO (USER PERSONAS)
*   **Usuario Interno (Cara al Trabajador):** Analista de Experiencia del Cliente (CX), Comercial o Legal. Necesita agilidad para lanzar campañas, visibilidad del estado de los procesos y garantía de cero riesgo normativo.
*   **Usuario Externo (Cara al Cliente):** El "Emprendedor Tigre" (MYPE). Un microempresario peruano que valora la agilidad, teme al fraude bancario, sufre de estrés ante la cobranza tradicional (efecto avestruz) y utiliza WhatsApp como su canal principal de comunicación.

---

## 3. MÓDULO 1: FÁBRICA DE CONTENIDOS Y VALIDACIÓN (Cara al Trabajador)
Este módulo actúa como un orquestador centralizado que recibe, ordena, edita y valida las piezas de comunicación antes de enviarlas al cliente final.

### Feature 1.1: El Ingestor y Organizador Automatizado
*   **Descripción:** Herramienta que se conecta a las bandejas de solicitudes internas para extraer y ordenar el material desordenado de las campañas.
*   **Funcionalidad:** La IA analiza el correo, separa las distintas piezas (imágenes, textos para SMS, guiones) y crea carpetas individuales.
*   **Generación de ID Único:** El sistema asigna un Código de Pieza correlativo (ej. CMP1-SMS-001) a cada fragmento para garantizar su trazabilidad durante todo el ciclo de vida.

### Feature 1.2: Base de Conocimiento Segura (Arquitectura RAG)
*   **Descripción:** Un repositorio cerrado conectado exclusivamente a fuentes oficiales (manual de marca, tarifarios, normas de la SBS e Indecopi).
*   **Regla de Negocio:** La IA tiene prohibido buscar en internet abierto. Utiliza el modelo de Generación Recuperada por Búsqueda (RAG) para fundamentar sus correcciones y evitar "alucinaciones" (inventar tasas o condiciones falsas).

### Feature 1.3: Pipeline Multidisciplinario de Agentes
Una vez ensamblado el borrador, es procesado en milisegundos por una secuencia de agentes especializados:
*   **Agente de Claridad (Filtro ISO 24495):** Sustituye la jerga burocrática por lenguaje cotidiano (ej. cambia "incurra en mora" por "si no paga a tiempo") y elimina la voz pasiva.
*   **Agente de Tono (Voz de Marca):** Evalúa la calidez y adapta el texto al arquetipo del "Tigre" de Mibanco (asertivo, empático, sin condescendencia).
*   **Agente de Cumplimiento (Guardrail Legal):** Bloquea métodos abusivos de cobranza sancionados por Indecopi (amenazas, notificaciones con apariencia judicial o contacto fuera de horario).
*   **Agente de UX/CX y Análisis Demográfico:** Adapta la estructura visual para lectura en pantallas ("Patrón F") y ajusta los modismos si la campaña se dirige a una región específica (costa, sierra, selva).

### Feature 1.4: "Tracking Link" de Estado en Vivo (Visor Externo)
*   **Descripción:** Enlace compartible de "solo lectura" generado automáticamente por el Ingestor.
*   **Funcionalidad:** Permite a las áreas solicitantes visualizar una barra de progreso en tiempo real con la fase actual de la pieza y el encargado de la revisión, eliminando la fricción de tener que preguntar constantemente por el estado de su solicitud.

### Feature 1.5: Central de Trazabilidad e Historial (Visor Interno)
*   **Descripción:** Buscador y bitácora de auditoría para los equipos validadores (CX y Legal).
*   **Funcionalidad:** Al ingresar el Código Único de la pieza, el sistema despliega el historial completo de decisiones: qué cambió cada agente de IA, qué feedback humano se dejó y cuál fue la versión final aprobada. Vital para auditorías de cumplimiento.

### Feature 1.6: Extensión "Grammarly CX" para Mibanco
*   **Descripción:** Asistente en tiempo real (extensión de navegador) para asesores.
*   **Funcionalidad:** Analiza y sugiere correcciones legales, de tono y de claridad mientras el trabajador redacta correos o mensajes por WhatsApp Web directamente al cliente, actuando como un supervisor en la sombra.

### Feature 1.7: Interfaz de Aprobación "Human-in-the-Loop"
*   **Descripción:** Dashboard final donde el especialista de CX revisa el resultado de los agentes de IA.
*   **Mecánica:** Muestra el borrador original vs. la versión optimizada y un semáforo de riesgo legal. El trabajador tiene el control final y aprueba la pieza con un solo clic.

---

## 4. MÓDULO 2: MOTOR DE COBRANZA Y CONTACTABILIDAD INTELIGENTE (Cara al Cliente)
Las campañas validadas en el Módulo 1 viajan vía API a este motor, el cual decide estratégicamente el "quién, cuándo y por dónde" de la distribución.

### Feature 2.1: Modelo Predictivo de Propensión a Pago
*   **Descripción:** Algoritmos de Machine Learning (como Regresión Logística o Redes Neuronales) que calculan la probabilidad de que un cliente pague basándose en su historial y comportamiento.
*   **Timing Inteligente:** La IA detecta los "anclajes de liquidez" del microempresario (quincenas, días de mayor venta, campañas comerciales) para enviar el mensaje en la fecha y hora exacta en la que el cliente dispone de dinero.

### Feature 2.2: Limitador de Frecuencia (Frequency Capping)
*   **Descripción:** Mecanismo contra la fatiga de contacto (Ad Fatigue) y el "efecto avestruz".
*   **Regla de Negocio:** Si el cliente ignora repetidamente los mensajes de WhatsApp o SMS, el sistema detiene los envíos automatizados y activa un periodo de "enfriamiento" (ej. 7 días) para evitar el acoso y el bloqueo al banco.

### Feature 2.3: Cobranza por WhatsApp con "Nudges" y Pagos Integrados
*   **Descripción:** Ejecución de la cobranza a través del canal preferido por los microempresarios (WhatsApp).
*   **Nudges Conductuales:** Uso de mensajes con opciones predeterminadas (defaults) enfocados en la "aversión a la pérdida positiva" (proteger su buen historial en lugar de amenazar con Infocorp).
*   **Fricción Cero:** Inclusión de botones de pago con el monto exacto calculados, integrados con billeteras digitales como Yape, Plin o PagoEfectivo para cierre inmediato desde el chat.

### Feature 2.4: Detección Automática de Vulnerabilidad
*   **Descripción:** Uso de LLM (Modelos de Lenguaje Grande) para leer e interpretar las respuestas del deudor en el canal de chat.
*   **Acción de Emergencia:** Si la IA detecta crisis severas (ej. quiebra de negocio, enfermedad grave, siniestro), pausa la cobranza automatizada instantáneamente y transfiere el caso a un equipo humano especializado para proponer reestructuraciones y soporte empático.

---

## 5. MÉTRICAS DE ÉXITO (KPIs)
Para validar el impacto del prototipo se medirán los siguientes indicadores:
*   **Tiempos Operativos (Reto 1):** Reducción del ciclo de validación de piezas de comunicación (SLA de días a minutos).
*   **Precisión Normativa:** Reducción a 0 del número de incidencias o multas impuestas por Indecopi por métodos de cobranza abusivos.
*   **Tasa de Recupero (Reto 2):** Incremento del porcentaje de recuperación en mora temprana (días 0 al 15) mediante el modelo predictivo.
*   **Satisfacción del Cliente (CX):** Aumento del Net Promoter Score (NPS) transaccional asociado a los canales de atención y cobranza.