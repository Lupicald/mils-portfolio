import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Globe } from 'lucide-react'

const LAST_UPDATED = 'March 14, 2026'
const EFFECTIVE_DATE = 'March 14, 2026'
const CONTACT_EMAIL = 'derekyiory2@gmail.com'
const APP_NAME = 'BacklogFlow'
const DEVELOPER = 'MILS'

/* ─────────────────────────────────────────────────────────────────────
   ENGLISH CONTENT
───────────────────────────────────────────────────────────────────── */
const EN = {
  lang: 'EN',
  otherLang: 'ES',
  title: 'Privacy Policy',
  subtitle: `${APP_NAME} — Last updated: ${LAST_UPDATED}`,
  effectiveNote: `Effective date: ${EFFECTIVE_DATE} · Version 1.0`,
  toc: 'Table of Contents',
  sections: [
    {
      id: '1',
      title: '1. Introduction',
      content: `${APP_NAME} ("we", "our", or "us") is a mobile application developed by ${DEVELOPER}. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application on Android or iOS devices.

Please read this policy carefully. By downloading, installing, or using ${APP_NAME}, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the terms described here, please do not use the application.

This policy applies to all versions of ${APP_NAME} distributed through Google Play Store and the Apple App Store.`,
    },
    {
      id: '2',
      title: '2. Data Controller',
      content: `The data controller responsible for your information is:

Developer: ${DEVELOPER}
Application: ${APP_NAME}
Contact Email: ${CONTACT_EMAIL}

For any questions, requests, or concerns regarding your personal data, please contact us at the email address above.`,
    },
    {
      id: '3',
      title: '3. Information We Collect',
      subsections: [
        {
          title: '3.1 Information You Provide Directly',
          content: `When using ${APP_NAME}, you may provide:

• Steam Profile ID or Profile URL: Used exclusively to import your public game library via the Steam Web API. We do not collect or store your Steam password or authentication credentials at any point.
• Steam API Key (optional): If provided for advanced import features, this key is stored only locally on your device and is never transmitted to our servers.
• Game notes and personal ratings: Text you write inside the app. Stored locally on your device.
• App preferences and settings: Stored locally on your device.`,
        },
        {
          title: '3.2 Information Collected Automatically',
          content: `When you use ${APP_NAME}, the following data may be collected automatically:

• Device identifiers: Anonymous device ID used by RevenueCat solely for subscription management.
• Purchase history: Transaction records for in-app purchases or subscriptions, processed through Apple App Store or Google Play and managed by RevenueCat.
• App usage analytics: Only if you have explicitly opted in. No analytics are collected by default.
• Crash reports: Anonymized technical crash data to improve app stability. No personally identifiable information is included.`,
        },
        {
          title: '3.3 Information from Third-Party Services',
          content: `${APP_NAME} integrates with external services to provide core features. The data fetched from these services is:

• From Steam API (Valve Corporation): Game titles, game IDs, cover images, total playtime, and achievement counts from your public Steam profile. This is publicly available data on Steam.
• From HowLongToBeat: Estimated completion times for games. Only game title queries are sent; no personal data is transmitted.
• From Supabase (if cloud sync is enabled): User-created data such as game statuses, priorities, and notes may be synchronized to Supabase cloud infrastructure if you explicitly enable this optional feature.`,
        },
      ],
    },
    {
      id: '4',
      title: '4. How We Use Your Information',
      content: `We use the information described above for the following purposes:

• To provide core app functionality: Importing your Steam library, displaying game data, managing statuses and priorities.
• To generate AI-powered recommendations: Processed entirely on-device using your local library data. No personal data is sent to external AI servers.
• To manage subscriptions: Processing and validating in-app purchases through RevenueCat.
• To provide optional cloud sync: Backing up and synchronizing your game data across devices when you opt in.
• To improve app performance: Analyzing anonymized crash reports to fix bugs and improve stability.
• To comply with legal obligations: Meeting applicable laws, regulations, and legal processes.

We do not use your data for advertising, behavioral profiling, or sale to third parties.`,
    },
    {
      id: '5',
      title: '5. Third-Party Services',
      subsections: [
        {
          title: '5.1 Steam API — Valve Corporation',
          content: `We use the Steam Web API to import your public game library.

Data sent: Your Steam Profile ID or public profile URL.
Data received: Public game library data (titles, IDs, playtime, cover art).
Requirement: Your Steam profile and game details must be set to Public in Steam privacy settings.
Valve's Privacy Policy: https://store.steampowered.com/privacy_agreement/

${APP_NAME} is not affiliated with, endorsed by, or sponsored by Valve Corporation.`,
        },
        {
          title: '5.2 HowLongToBeat',
          content: `We query HowLongToBeat to retrieve estimated game completion times.

Data sent: Game title search queries only.
Data received: Estimated play times (main story, completionist, etc.).
No personal data is transmitted to HowLongToBeat.
HowLongToBeat Terms: https://howlongtobeat.com/

${APP_NAME} is not affiliated with HowLongToBeat.`,
        },
        {
          title: '5.3 Supabase (Optional Cloud Sync)',
          content: `Supabase is an optional cloud backend for synchronizing your backlog data across devices. This feature is disabled by default.

If you choose to enable cloud sync:
• Your game statuses, priorities, and notes are uploaded to Supabase servers.
• Data is encrypted in transit using TLS and at rest.
• You may delete your cloud data at any time through the app settings.
• Disabling cloud sync removes your data from Supabase servers.

Supabase Privacy Policy: https://supabase.com/privacy
Supabase processes data within the European Union and United States.`,
        },
        {
          title: '5.4 RevenueCat (Subscription Management)',
          content: `We use RevenueCat to process and manage in-app subscriptions.

Data collected by RevenueCat: Anonymous device identifiers, purchase transaction IDs from the App Store or Play Store, subscription status.
RevenueCat does not collect your name, email, or payment card details. Those remain with Apple or Google.
RevenueCat Privacy Policy: https://www.revenuecat.com/privacy/

All payment transactions are processed exclusively by Apple (App Store) or Google (Play Store). ${APP_NAME} does not have access to your payment information.`,
        },
      ],
    },
    {
      id: '6',
      title: '6. Data Storage and Security',
      content: `Primary storage: All your game data, statuses, priorities, and notes are stored locally on your device in a SQLite database. The app functions fully offline; internet access is only required for initial library import and optional cloud sync.

Security measures: We implement industry-standard technical and organizational security measures including:
• Local data encrypted by the operating system's secure storage layer.
• All network communications use TLS 1.2 or higher encryption.
• No plaintext transmission of personal data.
• Steam API keys, if provided, are stored only in local device storage and never transmitted.

While we strive to protect your data, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security.`,
    },
    {
      id: '7',
      title: '7. Data Sharing and Disclosure',
      content: `We do not sell, trade, rent, or otherwise transfer your personal information to third parties for their marketing purposes.

We may share information only in the following limited circumstances:

• With third-party service providers: As described in Section 5 (Steam API, HowLongToBeat, Supabase, RevenueCat), solely to provide in-app features.
• Legal requirements: If required by law, regulation, court order, or governmental authority.
• Protection of rights: To protect the rights, property, or safety of ${APP_NAME}, its users, or the public.
• Business transfers: In the event of a merger, acquisition, or sale of all or substantially all assets, users will be notified before any transfer of personal data.

We do not share data for advertising, analytics profiling, or any commercial purpose not described in this policy.`,
    },
    {
      id: '8',
      title: '8. Data Retention',
      content: `Local data: Remains on your device until you uninstall the application or use the "Clear All Data" option in settings.

Cloud sync data (if enabled): Retained as long as your account is active. You may delete it at any time through Settings → Cloud Sync → Delete Cloud Data.

Purchase and subscription records: Retained by Apple and Google per their respective policies. RevenueCat retains anonymized purchase identifiers for up to 3 years for fraud prevention.

Crash reports: Retained for up to 12 months in anonymized, aggregated form.

Upon app uninstallation, all locally stored data is removed from your device.`,
    },
    {
      id: '9',
      title: '9. Your Rights',
      subsections: [
        {
          title: '9.1 General Rights (All Users)',
          content: `Regardless of your location, you have the right to:

• Access: Request a description of the personal data we hold about you.
• Deletion: Request deletion of your personal data. For local data, use Settings → Clear All Data. For cloud data, use Settings → Cloud Sync → Delete Cloud Data, or contact us at ${CONTACT_EMAIL}.
• Correction: Request correction of inaccurate data.
• Withdrawal of consent: Withdraw consent for optional data processing (e.g., cloud sync) at any time.
• Lodge a complaint: File a complaint with your local data protection authority.`,
        },
        {
          title: '9.2 European Union / EEA Users (GDPR)',
          content: `If you are located in the European Union or European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR):

• Legal basis for processing: We process your data based on (a) contractual necessity to provide the service, (b) legitimate interests (security, fraud prevention), and (c) your explicit consent for optional features.
• Right to portability: Request your data in a structured, machine-readable format.
• Right to object: Object to processing based on legitimate interests.
• Right to restriction: Request restriction of processing in certain circumstances.
• Right not to be subject to automated decision-making.

To exercise these rights, contact us at ${CONTACT_EMAIL}. We will respond within 30 days.`,
        },
        {
          title: '9.3 California Users (CCPA)',
          content: `If you are a California resident, under the California Consumer Privacy Act (CCPA) you have the right to:

• Know what personal information is collected, used, shared, or sold.
• Delete personal information we have collected.
• Opt-out of the sale of personal information. Note: ${APP_NAME} does not sell personal information.
• Non-discrimination for exercising your rights.

To submit a CCPA request, contact us at ${CONTACT_EMAIL} with the subject line "CCPA Privacy Request".`,
        },
      ],
    },
    {
      id: '10',
      title: '10. Children\'s Privacy',
      content: `Age Rating: ${APP_NAME} is rated 12+ on Google Play Store and 12+ on the Apple App Store due to the nature of game content that may be referenced from users' Steam libraries (including titles rated for teens).

${APP_NAME} is NOT directed at children under the age of 13 (or under 16 in the European Union under GDPR-K).

We do not knowingly collect personal information from children under 13. The app requires users to have a Steam account, which itself requires users to be at least 13 years of age per Valve's Terms of Service.

If we become aware that a child under 13 has provided personal information, we will promptly delete that information. If you are a parent or guardian and believe your child has provided personal data to ${APP_NAME}, please contact us immediately at ${CONTACT_EMAIL}.

Parental guidance: If a minor between 13 and 17 uses the app, a parent or guardian should review this Privacy Policy with them.`,
    },
    {
      id: '11',
      title: '11. International Data Transfers',
      content: `${APP_NAME} is operated from [Country]. If you are located outside of this country, your data may be transferred to, stored, and processed in countries where our third-party services operate (including the United States and the European Union).

For users in the European Union:
• Transfers to Supabase may occur to servers in the EU or US. Supabase maintains Standard Contractual Clauses (SCCs) for cross-border transfers.
• RevenueCat processes data in the United States under SCCs and Privacy Shield successor frameworks.

By using ${APP_NAME}, you consent to the transfer of your information to these locations, subject to the security measures described in this policy.`,
    },
    {
      id: '12',
      title: '12. Platform-Specific Disclosures',
      subsections: [
        {
          title: '12.1 Apple App Store',
          content: `For users downloading ${APP_NAME} from the Apple App Store:

• In-App Purchases are processed by Apple. Apple's Privacy Policy applies to all payment transactions.
• ${APP_NAME} requests the following device permissions: Internet access (for Steam import and cloud sync).
• No camera, microphone, contacts, or location access is requested.
• Apple's App Tracking Transparency (ATT): ${APP_NAME} does not use cross-app tracking. No ATT prompt is shown.

Apple's Privacy Policy: https://www.apple.com/privacy/`,
        },
        {
          title: '12.2 Google Play Store',
          content: `For users downloading ${APP_NAME} from the Google Play Store:

• In-App Purchases are processed by Google. Google's Privacy Policy applies to all payment transactions.
• ${APP_NAME} declares the following Data Safety disclosures: (a) Data collected: Device identifiers (for subscriptions only). (b) Data shared: With RevenueCat for subscription management. (c) Data encrypted in transit: Yes. (d) Users can request deletion: Yes.
• No ACCESS_FINE_LOCATION, READ_CONTACTS, CAMERA, or RECORD_AUDIO permissions are requested.

Google's Privacy Policy: https://policies.google.com/privacy`,
        },
      ],
    },
    {
      id: '13',
      title: '13. Changes to This Privacy Policy',
      content: `We reserve the right to update this Privacy Policy at any time. When we make material changes, we will:

• Update the "Last Updated" date at the top of this policy.
• Notify users via an in-app notification on first launch after the update.
• Post the updated policy at the URL linked from both app stores.

Your continued use of ${APP_NAME} after any changes constitutes acceptance of the updated policy. If you disagree with the revised policy, you should discontinue use of the app and may request deletion of your data as described in Section 8.

Previous versions of this policy are archived and available upon request.`,
    },
    {
      id: '14',
      title: '14. Contact Us',
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:

Email: ${CONTACT_EMAIL}
Subject line: "BacklogFlow Privacy" for faster routing.

We are committed to resolving privacy concerns and will respond to all inquiries within 30 days. For urgent GDPR-related requests, we will acknowledge receipt within 72 hours.

For unresolved complaints, you may also contact the data protection authority in your jurisdiction.`,
    },
  ],
}

/* ─────────────────────────────────────────────────────────────────────
   SPANISH CONTENT
───────────────────────────────────────────────────────────────────── */
const ES = {
  lang: 'ES',
  otherLang: 'EN',
  title: 'Política de Privacidad',
  subtitle: `${APP_NAME} — Última actualización: 14 de marzo de 2026`,
  effectiveNote: `Fecha de vigencia: 14 de marzo de 2026 · Versión 1.0`,
  toc: 'Índice de Contenidos',
  sections: [
    {
      id: '1',
      title: '1. Introducción',
      content: `${APP_NAME} ("nosotros", "nuestro" o "nos") es una aplicación móvil desarrollada por ${DEVELOPER}. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando utilizas nuestra aplicación en dispositivos Android o iOS.

Por favor, lee esta política con detenimiento. Al descargar, instalar o usar ${APP_NAME}, reconoces que has leído y entendido esta Política de Privacidad. Si no estás de acuerdo con los términos aquí descritos, no utilices la aplicación.

Esta política aplica a todas las versiones de ${APP_NAME} distribuidas a través de Google Play Store y Apple App Store.`,
    },
    {
      id: '2',
      title: '2. Responsable del Tratamiento de Datos',
      content: `El responsable del tratamiento de tus datos personales es:

Desarrollador: ${DEVELOPER}
Aplicación: ${APP_NAME}
Correo de contacto: ${CONTACT_EMAIL}

Para cualquier pregunta, solicitud o inquietud sobre tus datos personales, comunícate con nosotros a la dirección de correo indicada.`,
    },
    {
      id: '3',
      title: '3. Información que Recopilamos',
      subsections: [
        {
          title: '3.1 Información que Proporcionas Directamente',
          content: `Al usar ${APP_NAME}, puedes proporcionar:

• ID de Perfil de Steam o URL de perfil: Se utiliza exclusivamente para importar tu biblioteca de juegos pública mediante la API de Steam. En ningún momento recopilamos ni almacenamos tu contraseña de Steam.
• Clave API de Steam (opcional): Si la proporcionas para funciones avanzadas de importación, se almacena únicamente de forma local en tu dispositivo y nunca se transmite a nuestros servidores.
• Notas personales y valoraciones de juegos: Texto que escribes dentro de la app. Se almacena localmente en tu dispositivo.
• Preferencias y configuraciones de la app: Almacenadas localmente en tu dispositivo.`,
        },
        {
          title: '3.2 Información Recopilada Automáticamente',
          content: `Al usar ${APP_NAME}, puede recopilarse automáticamente la siguiente información:

• Identificadores de dispositivo: ID anónimo de dispositivo utilizado por RevenueCat únicamente para la gestión de suscripciones.
• Historial de compras: Registros de transacciones de compras dentro de la app o suscripciones, procesados por Apple App Store o Google Play y gestionados por RevenueCat.
• Análisis de uso de la app: Solo si has dado tu consentimiento explícito. Por defecto, no se recopilan datos de análisis.
• Reportes de errores: Datos técnicos anónimos de fallos para mejorar la estabilidad de la app. No se incluye información de identificación personal.`,
        },
        {
          title: '3.3 Información de Servicios de Terceros',
          content: `${APP_NAME} se integra con servicios externos para proporcionar funciones principales. Los datos obtenidos de estos servicios son:

• De la API de Steam (Valve Corporation): Títulos de juegos, IDs, imágenes de portada, tiempo total de juego y recuento de logros de tu perfil público de Steam. Se trata de datos públicamente disponibles en Steam.
• De HowLongToBeat: Tiempos estimados de finalización de juegos. Solo se envían consultas por título del juego; no se transmiten datos personales.
• De Supabase (si la sincronización en nube está activada): Datos creados por el usuario, como estados de juego, prioridades y notas, pueden sincronizarse en la infraestructura de Supabase si activas esta función opcional de forma explícita.`,
        },
      ],
    },
    {
      id: '4',
      title: '4. Cómo Utilizamos tu Información',
      content: `Utilizamos la información descrita anteriormente para los siguientes fines:

• Para proporcionar la funcionalidad principal de la app: Importar tu biblioteca de Steam, mostrar datos de juegos y gestionar estados y prioridades.
• Para generar recomendaciones con IA: Procesadas íntegramente en el dispositivo usando tus datos de biblioteca local. No se envían datos personales a servidores externos de IA.
• Para gestionar suscripciones: Procesar y validar compras dentro de la app mediante RevenueCat.
• Para proporcionar sincronización en nube opcional: Respaldar y sincronizar tus datos de juego entre dispositivos cuando lo activas.
• Para mejorar el rendimiento de la app: Analizar reportes anónimos de errores para corregir fallos.
• Para cumplir con obligaciones legales: Cumplir con las leyes, regulaciones y procesos legales aplicables.

No utilizamos tus datos para publicidad, creación de perfiles de comportamiento ni venta a terceros.`,
    },
    {
      id: '5',
      title: '5. Servicios de Terceros',
      subsections: [
        {
          title: '5.1 API de Steam — Valve Corporation',
          content: `Utilizamos la API Web de Steam para importar tu biblioteca de juegos pública.

Datos enviados: Tu ID de Perfil de Steam o URL pública de perfil.
Datos recibidos: Datos públicos de tu biblioteca (títulos, IDs, tiempo de juego, portadas).
Requisito: Tu perfil de Steam y los detalles de tus juegos deben estar configurados como Público en la configuración de privacidad de Steam.
Política de Privacidad de Valve: https://store.steampowered.com/privacy_agreement/

${APP_NAME} no tiene afiliación con Valve Corporation ni está respaldado ni patrocinado por ellos.`,
        },
        {
          title: '5.2 HowLongToBeat',
          content: `Consultamos HowLongToBeat para obtener tiempos estimados de finalización de juegos.

Datos enviados: Solo consultas de búsqueda por título de juego.
Datos recibidos: Tiempos estimados de juego (historia principal, completista, etc.).
No se transmiten datos personales a HowLongToBeat.
Términos de HowLongToBeat: https://howlongtobeat.com/

${APP_NAME} no tiene afiliación con HowLongToBeat.`,
        },
        {
          title: '5.3 Supabase (Sincronización en Nube Opcional)',
          content: `Supabase es un backend en nube opcional para sincronizar tus datos de backlog entre dispositivos. Esta función está desactivada por defecto.

Si decides activar la sincronización en nube:
• Los estados, prioridades y notas de tus juegos se cargan a los servidores de Supabase.
• Los datos se cifran en tránsito mediante TLS y en reposo.
• Puedes eliminar tus datos en la nube en cualquier momento desde la configuración de la app.
• Al desactivar la sincronización, tus datos se eliminan de los servidores de Supabase.

Política de Privacidad de Supabase: https://supabase.com/privacy
Supabase procesa datos en la Unión Europea y los Estados Unidos.`,
        },
        {
          title: '5.4 RevenueCat (Gestión de Suscripciones)',
          content: `Utilizamos RevenueCat para procesar y gestionar suscripciones dentro de la app.

Datos recopilados por RevenueCat: Identificadores anónimos de dispositivo, IDs de transacciones de compra del App Store o Play Store, estado de suscripción.
RevenueCat no recopila tu nombre, correo electrónico ni datos de tarjeta de pago. Esos datos permanecen con Apple o Google.
Política de Privacidad de RevenueCat: https://www.revenuecat.com/privacy/

Todas las transacciones de pago son procesadas exclusivamente por Apple (App Store) o Google (Play Store). ${APP_NAME} no tiene acceso a tu información de pago.`,
        },
      ],
    },
    {
      id: '6',
      title: '6. Almacenamiento y Seguridad de Datos',
      content: `Almacenamiento principal: Todos tus datos de juegos, estados, prioridades y notas se almacenan localmente en tu dispositivo en una base de datos SQLite. La app funciona completamente sin conexión; el acceso a internet solo es necesario para la importación inicial de la biblioteca y la sincronización en nube opcional.

Medidas de seguridad: Implementamos medidas de seguridad técnicas y organizativas estándar de la industria, incluyendo:
• Datos locales cifrados por la capa de almacenamiento seguro del sistema operativo.
• Todas las comunicaciones de red utilizan cifrado TLS 1.2 o superior.
• No se transmiten datos personales en texto claro.
• Las claves API de Steam, si se proporcionan, se almacenan solo en el almacenamiento local del dispositivo y nunca se transmiten.

Si bien nos esforzamos por proteger tus datos, ningún método de almacenamiento o transmisión electrónica es 100% seguro. No podemos garantizar seguridad absoluta.`,
    },
    {
      id: '7',
      title: '7. Compartición y Divulgación de Datos',
      content: `No vendemos, intercambiamos, arrendamos ni transferimos tu información personal a terceros para sus fines de marketing.

Solo podemos compartir información en las siguientes circunstancias limitadas:

• Con proveedores de servicios externos: Como se describe en la Sección 5 (API de Steam, HowLongToBeat, Supabase, RevenueCat), únicamente para proporcionar funciones dentro de la app.
• Requisitos legales: Si así lo exige la ley, reglamento, orden judicial o autoridad gubernamental.
• Protección de derechos: Para proteger los derechos, la propiedad o la seguridad de ${APP_NAME}, sus usuarios o el público.
• Transferencias comerciales: En caso de fusión, adquisición o venta de activos, los usuarios serán notificados antes de cualquier transferencia de datos personales.

No compartimos datos para publicidad, creación de perfiles ni ningún fin comercial no descrito en esta política.`,
    },
    {
      id: '8',
      title: '8. Retención de Datos',
      content: `Datos locales: Permanecen en tu dispositivo hasta que desinstales la aplicación o uses la opción "Borrar todos los datos" en la configuración.

Datos de sincronización en nube (si está activada): Se conservan mientras tu cuenta esté activa. Puedes eliminarlos en cualquier momento desde Configuración → Sincronización en nube → Eliminar datos en nube.

Registros de compras y suscripciones: Conservados por Apple y Google según sus respectivas políticas. RevenueCat retiene identificadores de compra anonimizados hasta 3 años para prevención de fraudes.

Reportes de errores: Conservados hasta 12 meses en forma anonimizada y agregada.

Al desinstalar la app, todos los datos almacenados localmente se eliminan de tu dispositivo.`,
    },
    {
      id: '9',
      title: '9. Tus Derechos',
      subsections: [
        {
          title: '9.1 Derechos Generales (Todos los Usuarios)',
          content: `Independientemente de tu ubicación, tienes derecho a:

• Acceso: Solicitar una descripción de los datos personales que tenemos sobre ti.
• Eliminación: Solicitar la eliminación de tus datos personales. Para datos locales, usa Configuración → Borrar todos los datos. Para datos en nube, usa Configuración → Sincronización en nube → Eliminar datos en nube, o contáctanos en ${CONTACT_EMAIL}.
• Corrección: Solicitar la corrección de datos inexactos.
• Retirada del consentimiento: Retirar el consentimiento para el tratamiento de datos opcional (por ejemplo, sincronización en nube) en cualquier momento.
• Presentar una reclamación: Presentar una queja ante la autoridad de protección de datos de tu jurisdicción.`,
        },
        {
          title: '9.2 Usuarios de la Unión Europea / EEE (RGPD)',
          content: `Si te encuentras en la Unión Europea o el Espacio Económico Europeo, tienes derechos adicionales bajo el Reglamento General de Protección de Datos (RGPD):

• Base legal del tratamiento: Tratamos tus datos en base a (a) necesidad contractual para prestar el servicio, (b) intereses legítimos (seguridad, prevención de fraudes), y (c) tu consentimiento explícito para funciones opcionales.
• Derecho a la portabilidad: Solicitar tus datos en un formato estructurado y legible por máquina.
• Derecho de oposición: Oponerte al tratamiento basado en intereses legítimos.
• Derecho a la limitación: Solicitar la restricción del tratamiento en determinadas circunstancias.
• Derecho a no ser objeto de decisiones automatizadas.

Para ejercer estos derechos, contáctanos en ${CONTACT_EMAIL}. Responderemos en un plazo de 30 días.`,
        },
        {
          title: '9.3 Usuarios de California (CCPA)',
          content: `Si eres residente de California, bajo la Ley de Privacidad del Consumidor de California (CCPA) tienes derecho a:

• Saber qué información personal se recopila, usa, comparte o vende.
• Eliminar la información personal que hemos recopilado.
• Oponerte a la venta de información personal. Nota: ${APP_NAME} no vende información personal.
• No ser discriminado por ejercer tus derechos.

Para enviar una solicitud bajo la CCPA, contáctanos en ${CONTACT_EMAIL} con el asunto "CCPA Privacy Request".`,
        },
      ],
    },
    {
      id: '10',
      title: '10. Privacidad de Menores',
      content: `Clasificación de edad: ${APP_NAME} tiene una clasificación de 12+ en Google Play Store y 12+ en Apple App Store, debido a la naturaleza del contenido de juegos que puede referenciarse desde las bibliotecas de Steam de los usuarios (incluyendo títulos clasificados para adolescentes).

${APP_NAME} NO está dirigido a menores de 13 años (ni menores de 16 años en la Unión Europea bajo el RGPD-K).

No recopilamos conscientemente información personal de menores de 13 años. La app requiere que los usuarios tengan una cuenta de Steam, la cual exige que los usuarios tengan al menos 13 años según los Términos de Servicio de Valve.

Si tenemos conocimiento de que un menor de 13 años ha proporcionado información personal, procederemos a eliminar dicha información de inmediato. Si eres padre, madre o tutor y crees que tu hijo/a ha proporcionado datos personales a ${APP_NAME}, contáctanos de inmediato en ${CONTACT_EMAIL}.

Orientación para padres: Si un menor de entre 13 y 17 años utiliza la app, un padre, madre o tutor debe revisar esta Política de Privacidad junto con él/ella.`,
    },
    {
      id: '11',
      title: '11. Transferencias Internacionales de Datos',
      content: `${APP_NAME} es operada desde [País]. Si te encuentras fuera de este país, tus datos pueden transferirse, almacenarse y procesarse en países donde operan nuestros servicios de terceros (incluyendo los Estados Unidos y la Unión Europea).

Para usuarios de la Unión Europea:
• Las transferencias a Supabase pueden ocurrir hacia servidores en la UE o en EE. UU. Supabase mantiene Cláusulas Contractuales Estándar (CCS) para transferencias transfronterizas.
• RevenueCat procesa datos en los Estados Unidos bajo CCS y marcos sucesores del Privacy Shield.

Al usar ${APP_NAME}, consientes la transferencia de tu información a estas ubicaciones, sujeto a las medidas de seguridad descritas en esta política.`,
    },
    {
      id: '12',
      title: '12. Divulgaciones Específicas por Plataforma',
      subsections: [
        {
          title: '12.1 Apple App Store',
          content: `Para usuarios que descargan ${APP_NAME} desde Apple App Store:

• Las compras dentro de la app son procesadas por Apple. La Política de Privacidad de Apple aplica a todas las transacciones de pago.
• ${APP_NAME} solicita los siguientes permisos del dispositivo: Acceso a internet (para importación de Steam y sincronización en nube).
• No se solicita acceso a cámara, micrófono, contactos ni ubicación.
• Transparencia en el Seguimiento de Apps de Apple (ATT): ${APP_NAME} no utiliza seguimiento entre apps. No se muestra ningún aviso de ATT.

Política de Privacidad de Apple: https://www.apple.com/privacy/`,
        },
        {
          title: '12.2 Google Play Store',
          content: `Para usuarios que descargan ${APP_NAME} desde Google Play Store:

• Las compras dentro de la app son procesadas por Google. La Política de Privacidad de Google aplica a todas las transacciones de pago.
• ${APP_NAME} declara los siguientes datos en la sección de Seguridad de datos: (a) Datos recopilados: Identificadores de dispositivo (solo para suscripciones). (b) Datos compartidos: Con RevenueCat para gestión de suscripciones. (c) Datos cifrados en tránsito: Sí. (d) Los usuarios pueden solicitar la eliminación: Sí.
• No se solicitan permisos de ACCESS_FINE_LOCATION, READ_CONTACTS, CAMERA ni RECORD_AUDIO.

Política de Privacidad de Google: https://policies.google.com/privacy`,
        },
      ],
    },
    {
      id: '13',
      title: '13. Cambios en esta Política de Privacidad',
      content: `Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cuando realicemos cambios materiales:

• Actualizaremos la fecha de "Última actualización" al inicio de esta política.
• Notificaremos a los usuarios mediante una notificación dentro de la app al primer inicio después de la actualización.
• Publicaremos la política actualizada en la URL vinculada desde ambas tiendas de aplicaciones.

El uso continuado de ${APP_NAME} tras cualquier cambio constituye la aceptación de la política actualizada. Si no estás de acuerdo con la política revisada, debes dejar de usar la app y puedes solicitar la eliminación de tus datos como se describe en la Sección 8.

Las versiones anteriores de esta política están archivadas y disponibles bajo solicitud.`,
    },
    {
      id: '14',
      title: '14. Contáctanos',
      content: `Si tienes preguntas, inquietudes o solicitudes sobre esta Política de Privacidad o tus datos personales, contáctanos:

Correo electrónico: ${CONTACT_EMAIL}
Asunto recomendado: "BacklogFlow Privacidad" para una respuesta más rápida.

Estamos comprometidos a resolver inquietudes sobre privacidad y responderemos a todas las consultas en un plazo de 30 días. Para solicitudes urgentes relacionadas con el RGPD, acusaremos recibo en un plazo de 72 horas.

Para quejas no resueltas, también puedes contactar a la autoridad de protección de datos de tu jurisdicción.`,
    },
  ],
}

/* ─────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────── */
function renderText(text) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
    if (line.startsWith('• ')) {
      return (
        <li key={i} className="ml-4 mb-1.5" style={{ listStyleType: 'none' }}>
          <span style={{ color: '#7B61FF', marginRight: 8 }}>▸</span>
          {line.slice(2)}
        </li>
      )
    }
    return <p key={i} className="mb-2 leading-relaxed">{line}</p>
  })
}

function Section({ section }) {
  return (
    <div id={`s${section.id}`} className="mb-12 scroll-mt-24">
      <h2
        className="font-sans font-black text-xl md:text-2xl mb-5 pb-3"
        style={{ color: '#F0EFF4', borderBottom: '1px solid rgba(123,97,255,0.2)' }}
      >
        {section.title}
      </h2>
      {section.content && (
        <div className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(240,239,244,0.6)' }}>
          {renderText(section.content)}
        </div>
      )}
      {section.subsections?.map(sub => (
        <div key={sub.title} className="mt-6 ml-0 md:ml-4">
          <h3 className="font-sans font-semibold text-base mb-3" style={{ color: '#9D8BFF' }}>
            {sub.title}
          </h3>
          <div className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(240,239,244,0.6)' }}>
            {renderText(sub.content)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Privacy() {
  const [lang, setLang] = useState('EN')
  const content = lang === 'EN' ? EN : ES

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `BacklogFlow — Privacy Policy`
    return () => { document.title = 'MILS — Software Engineer' }
  }, [])

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0A0A14' }}>

      {/* ── Top Bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{
          background: 'rgba(10,10,20,0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(123,97,255,0.15)',
        }}
      >
        <div className="flex items-center gap-4">
          <Link
            to="/backlogflow"
            className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors"
            style={{ color: 'rgba(240,239,244,0.4)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F0EFF4')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,239,244,0.4)')}
          >
            <ArrowLeft size={11} /> BacklogFlow
          </Link>
          <span style={{ color: 'rgba(123,97,255,0.3)', fontSize: 10 }}>›</span>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#9D8BFF' }}>
            Privacy Policy
          </span>
        </div>

        {/* Language toggle */}
        <button
          onClick={() => setLang(l => l === 'EN' ? 'ES' : 'EN')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all"
          style={{
            background: 'rgba(123,97,255,0.12)',
            border: '1px solid rgba(123,97,255,0.25)',
            color: '#9D8BFF',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(123,97,255,0.22)'; e.currentTarget.style.color = '#F0EFF4' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(123,97,255,0.12)'; e.currentTarget.style.color = '#9D8BFF' }}
        >
          <Globe size={11} />
          {lang === 'EN' ? 'Ver en Español' : 'View in English'}
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-24">

        {/* ── Header ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: '#7B61FF', boxShadow: '0 0 8px #7B61FF' }}
            />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(123,97,255,0.7)' }}>
              {APP_NAME}
            </span>
          </div>
          <h1
            className="font-sans font-black text-4xl md:text-5xl tracking-[-0.03em] mb-3"
            style={{ color: '#F0EFF4' }}
          >
            {content.title}
          </h1>
          <p className="font-mono text-sm" style={{ color: 'rgba(240,239,244,0.35)' }}>
            {content.subtitle}
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: 'rgba(240,239,244,0.25)' }}>
            {content.effectiveNote}
          </p>
        </div>

        {/* ── Table of Contents ── */}
        <div
          className="mb-14 p-6 rounded-3xl"
          style={{ background: '#111120', border: '1px solid rgba(123,97,255,0.15)' }}
        >
          <p className="font-sans font-bold text-sm mb-4" style={{ color: '#9D8BFF' }}>
            {content.toc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {content.sections.map(s => (
              <a
                key={s.id}
                href={`#s${s.id}`}
                className="font-sans text-xs py-1.5 px-2 rounded-lg transition-colors hover:bg-purple-500/10"
                style={{ color: 'rgba(240,239,244,0.45)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#9D8BFF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,239,244,0.45)')}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* ── Sections ── */}
        {content.sections.map(section => (
          <Section key={section.id} section={section} />
        ))}

        {/* ── Bottom nav ── */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(123,97,255,0.15)' }}
        >
          <Link
            to="/backlogflow"
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
            style={{ color: 'rgba(240,239,244,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#9D8BFF')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,239,244,0.35)')}
          >
            <ArrowLeft size={12} /> {lang === 'EN' ? 'Back to BacklogFlow' : 'Volver a BacklogFlow'}
          </Link>
          <span className="font-mono text-[10px] tracking-widest" style={{ color: 'rgba(240,239,244,0.2)' }}>
            © 2026 {APP_NAME} · Built by{' '}
            <Link to="/" style={{ color: 'rgba(240,239,244,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#9D8BFF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,239,244,0.3)')}
            >
              MILS
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
