// ─── Spanish (es) ───
import type { Messages } from './en';

export const es: Partial<Messages> = {
  'meta.title': 'Sentinel — Construye tu propia VPN descentralizada.',
  'meta.description':
    'Sentinel es una red de ancho de banda descentralizada de Capa 1. Trae tu protocolo, tu cliente, tu distribución — nosotros gestionamos la red.',
  'meta.ogImageAlt': 'Sentinel — red de ancho de banda descentralizada de Capa 1',

  // ─── Nav bar + footer column heads ───
  'nav.explore': 'Explorar',
  'nav.dvpn': 'dVPN',
  'nav.build': 'Construir',
  'nav.more': 'Más',
  'nav.buyP2P': 'Comprar P2P',

  // ─── Nav: Explore dropdown ───
  'nav.explore.statsTitle': 'Estadísticas de la Red',
  'nav.explore.statsDesc': 'Monitorea el rendimiento y las métricas de la red en tiempo real.',
  'nav.explore.dashboardTitle': 'Panel de Nodos',
  'nav.explore.dashboardDesc': 'Gestiona y monitorea las operaciones de tu nodo.',
  'nav.explore.explorerTitle': 'Explorador',
  'nav.explore.explorerDesc': 'Busca y explora transacciones en la red.',
  'nav.explore.ecosystemTitle': 'Ecosistema',
  'nav.explore.ecosystemDesc': 'Descubre aplicaciones y servicios en nuestro ecosistema.',

  // ─── Nav: dVPN dropdown ───
  'nav.dvpn.downloadTitle': 'Descargar Apps',
  'nav.dvpn.downloadDesc': 'Sentinel Shield, Norse, Valt, Meile y más.',
  'nav.dvpn.coverageTitle': 'Cobertura',
  'nav.dvpn.coverageDesc': '110+ países, 430+ ciudades.',
  'nav.dvpn.learnTitle': 'Aprender',
  'nav.dvpn.learnDesc': 'Explora guías, documentación y más.',
  'nav.dvpn.runNodeTitle': 'Ejecutar un Nodo',
  'nav.dvpn.runNodeDesc': 'Apoya la red y gana recompensas.',
  'nav.dvpn.buildTitle': 'Construir',
  'nav.dvpn.buildDesc': 'Crea tus propias aplicaciones en la red.',
  'nav.dvpn.earnTitle': 'Ganar',
  'nav.dvpn.earnDesc': 'Monetiza tu ancho de banda y más.',

  // ─── Nav: Build dropdown ───
  'nav.build.planManagerTitle': 'Plan Manager',
  'nav.build.planManagerDesc': 'Convierte ancho de banda bruto en planes de suscripción con precio.',
  'nav.build.sdkTitle': 'SDK',
  'nav.build.sdkDesc': 'Enlazadores nativos para iOS, Android, web y escritorio.',
  'nav.build.paymentsTitle': 'Configurar Pagos',
  'nav.build.paymentsDesc': 'Stripe, USDC, BTC, rampas de entrada — conecta cualquier pasarela por plan.',
  'nav.build.x402Title': 'Pagos x402',
  'nav.build.x402Desc': 'Pagos agénticos por byte — sin claves API, sin cuentas.',
  'nav.build.protocolsTitle': 'Protocolos VPN',
  'nav.build.protocolsDesc': 'WireGuard, V2Ray, OpenVPN — elige lo que tus usuarios necesitan.',
  'nav.build.docsTitle': 'Documentación para Desarrolladores',
  'nav.build.docsDesc': 'Referencia de API, inicio rápido y guías de arquitectura.',

  // ─── Nav: More dropdown ───
  'nav.more.docsTitle': 'Documentación dVPN',
  'nav.more.docsDesc': 'Clientes, nodos, protocolos, preguntas frecuentes.',
  'nav.more.contactTitle': 'Contáctanos',
  'nav.more.contactDesc': 'Preguntas o soporte — ponte en contacto.',

  // ─── Buy P2P dropdown ───
  'buy.mexcTag': 'P2P/USDT spot',
  'buy.osmosisTag': 'Swap en cadena',
  'buy.skipTag': 'Swap entre cadenas',

  // ─── Header chrome ───
  'header.menu': 'Menú',
  'lang.label': 'Idioma',

  // ─── Hero ───
  'hero.title': 'Construye tu propia VPN descentralizada.',
  'hero.subtitle':
    'El protocolo de red entre pares más resistente, diseñado para ser inmune a la censura en cualquier geografía.',
  'hero.readMore': 'Leer más',
  'hero.ctaUse': 'Usar una App dVPN',
  'hero.ctaBuild': 'Crear una App dVPN',
  'hero.ctaHost': 'Alojar un Nodo dVPN',
  'hero.bullet1': 'Un DHT perpetuo en cadena — protegido por consenso, resistente a la censura.',
  'hero.bullet2': 'Cero nodos de arranque, cero servidores centrales que puedan ser incautados.',
  'hero.bullet3': 'Ancho de banda aportado por operadores independientes en 70+ países.',
  'hero.bullet4': 'Cualquier cliente puede unirse con nada más que un endpoint RPC.',
  'hero.usersCounter': 'personas usan apps dVPN construidas sobre Sentinel',

  // ─── Stats strip ───
  'stats.dapps': 'dApps construidas sobre Sentinel',
  'stats.totalUsers': 'Usuarios Totales',
  'stats.providers': 'Proveedores de Ancho de Banda P2P',
  'stats.data': 'Datos Consumidos',
  'stats.viewNetworkStats': 'Ver Estadísticas de la Red',

  // ─── Builder-stack: section heading + connection pipeline ───
  'sdk.heading': 'Todo lo que un constructor de dVPN necesita. Resuelto.',
  'builderStack.step1Title': 'Sondeo Directo al Nodo',
  'builderStack.step1Body':
    'Solicitud HTTPS directamente a la dirección remota del nodo. Devuelve estado en vivo: tipo de protocolo, recuento de pares, ubicación, ancho de banda. Peer-to-peer, sin relay.',
  'builderStack.step2Title': 'Sesión en Cadena',
  'builderStack.step2Body':
    'Una transacción firmada crea un registro de sesión inmutable en la blockchain. ID de sesión, dirección del nodo, dirección de cuenta — todo validado por consenso.',
  'builderStack.step3Title': 'Handshake Verificado',
  'builderStack.step3Body':
    'El nodo recibe la solicitud y consulta la cadena para verificar que la sesión coincide. Solo entonces genera las credenciales VPN. La autorización está en cadena.',
  'builderStack.step4Title': 'Túnel Cifrado',
  'builderStack.step4Body':
    'Túnel WireGuard (Curve25519) o V2Ray (VLess/VMess) establecido directamente entre el cliente y el nodo. Cifrado de extremo a extremo. Cero intermediarios.',
  'builderStack.closing1': 'Ningún servidor centralizado interviene en ningún paso.',
  'builderStack.closing2': 'La blockchain es el backend.',
  'builderStack.sdkBody':
    'Cómputo, ancho de banda, pagos, seguridad — el protocolo Sentinel ejecuta toda la pila de marca blanca bajo tu marca. Tú construyes la app. La red hace el resto.',

  // ─── Resilience cards ───
  'resilience.blockchainTitle': 'La blockchain ES el backend',
  'resilience.blockchainPoint1': 'Cada nodo, sesión y cuenta vive en cadena.',
  'resilience.blockchainPoint2': 'El descubrimiento es una consulta en cadena — nada que derribar.',
  'resilience.blockchainPoint3': 'Finalidad, resistencia Sybil y gobernanza integradas.',
  'resilience.blockchainAction': 'Ver Transacciones en Tiempo Real',
  'resilience.validatorsTitle': 'Los validadores proveen el cómputo',
  'resilience.validatorsPoint1': 'Sesiones, planes y pagos verificados por los validadores de Sentinel.',
  'resilience.validatorsPoint2': 'Ese cómputo de consenso es tu backend: sin servidores que gestionar.',
  'resilience.validatorsPoint3': 'Cada cambio de estado es definitivo e inalterable.',
  'resilience.validatorsAction': 'Ver Validadores',
  'resilience.bandwidthTitle': 'Paga el ancho de banda directamente en P2P',
  'resilience.bandwidthPoint1': 'Las billeteras pagan a los operadores de nodos directamente en cadena — sin facturas.',
  'resilience.bandwidthPoint2': 'Elige nodos por país, precio o protocolo.',
  'resilience.bandwidthPoint3': 'Paga en P2P por ancho de banda, el token nativo de Sentinel.',
  'resilience.serversTitle': '1500+ servidores, cero operaciones de servidor',
  'resilience.serversPoint1': 'Ancho de banda de 1500+ servidores gestionados por operadores independientes.',
  'resilience.serversPoint2': '90+ países en seis continentes.',
  'resilience.serversPoint3': 'Instalación en rack, parches y escalado — completamente abstraídos.',
  'resilience.serversAction': 'Ver Mapa Global de Nodos',
  'resilience.wireguardSub': 'Túneles cifrados a velocidad de kernel',
  'resilience.v2raySub': 'VMess / VLESS · anticensura',
  'resilience.moreCountries': '+ 80 más',
  'resilience.moreCountriesTitle': '90+ países en seis continentes',

  // ─── Open-source section ───
  'oss.closedSource': 'Las VPN de código cerrado piden tu confianza ciega.',
  'oss.openStatement':
    'Sentinel es el único framework de código abierto y descentralizado para construir una aplicación VPN — con transparencia total tanto en el código del lado del cliente como del lado del servidor.',
  'oss.githubCta': 'Ver código abierto en GitHub',
  'oss.everyLayerHeading': 'Cada capa de Sentinel es de código abierto',
  'oss.everyLayerSubhead': 'Nada en la pila es cerrado — lee, audita y bifurca todo.',
  'oss.sdksLabel': 'SDKs',
  'oss.sdksDesc': 'Bibliotecas cliente en JavaScript, C#, Go y Swift',
  'oss.protocolLabel': 'Protocolo',
  'oss.protocolDesc': 'Capa de sesión WireGuard y V2Ray',
  'oss.chainLabel': 'Cadena',
  'oss.chainDesc': 'Sentinel Hub, construido sobre el Cosmos SDK',
  'oss.nodeLabel': 'Software de nodo',
  'oss.nodeDesc': 'El nodo dVPN que cualquiera puede ejecutar e inspeccionar',
  'oss.buildLanguageHeading': 'Construye en el lenguaje que ya usas',
  'oss.buildLanguageSubhead': 'Cuatro SDKs oficiales — todos de código abierto.',
  'oss.sdkLanguagesStat': 'lenguajes de SDK',
  'oss.linesOfCodeStat': 'líneas de código abierto',

  // ─── Steps section ───
  'steps.heading': 'Tres pasos del cero a una dVPN en producción.',
  'steps.step1Heading': 'Agrega nodos a tu plan de suscripción.',
  'steps.step1Body':
    'Paga nodos dVPN y agrégalos a tu plan de suscripción. Filtra por país, protocolo de cifrado y más para encontrar nodos que satisfagan las necesidades de capacidad de tu aplicación.',
  'steps.planManagerAlt': 'Agregando nodos a un plan de suscripción en el Plan Manager',
  'steps.openPlanManager': 'Abrir Plan Manager',

  // ─── SDK / platforms section ───
  'sdk.buildPlatformHeading': 'Construye una dVPN para cualquier plataforma',
  'sdk.buildPlatformBody':
    'El Sentinel SDK funciona en teléfonos, escritorios, navegadores, televisores y servidores. Tú construyes la app y eres dueño de la marca. La red gestiona el ancho de banda, el enrutamiento y los pagos.',
  'sdk.iosDesc': 'Publica un cliente en la App Store. El túnel Network Extension ya está construido.',
  'sdk.androidDesc': 'Publica una app en Play Store con VpnService. WireGuard y V2Ray incluidos.',
  'sdk.macosDesc': 'Construye una app de barra de menú que tuneliza todo el tráfico del sistema.',
  'sdk.windowsDesc': 'Construye un cliente de escritorio para el SO más utilizado.',
  'sdk.linuxDesc': 'Ejecuta daemons headless en servidores, routers y homelab.',
  'sdk.webDesc': 'Construye extensiones de navegador y paneles de control. Los usuarios no instalan nada.',
  'sdk.tvDesc': 'Construye apps para TV diseñadas para el control remoto.',
  'sdk.serverDesc': 'Enruta tráfico desde código. Bots, backends y agentes de IA.',
  'sdk.docsButton': 'Documentación SDK',
  'sdk.githubButton': 'Ver en GitHub',

  // ─── Payments section ───
  'payments.heading': 'Integra cualquier infraestructura de pagos',
  'payments.subhead':
    'Acepta pagos en fiat, pagos en cripto, o establece cualquier disparador condicional para autorizar a un usuario a servicios VPN gratuitos.',
  'payments.creditName': 'Tarjeta de Crédito / Débito',
  'payments.creditDesc':
    'Vende acceso dVPN con Visa, Mastercard, Amex y más — a través del procesador de pagos que elijas.',
  'payments.walletName': 'Apple Pay / Google Pay',
  'payments.walletDesc':
    'Cobra por tu dVPN con un toque mediante Apple Pay o Google Pay, en la web o en tu app.',
  'payments.stripeName': 'Stripe',
  'payments.stripeDesc':
    'Factura tu dVPN a través de Stripe Checkout o Billing — pago confirmado por webhook, acceso concedido en el mismo flujo.',
  'payments.cryptoName': 'Monedas Digitales',
  'payments.cryptoDesc':
    'Acepta BTC, SOL, ZEC o cualquier otra cadena para acceso dVPN, a través del procesador de tu elección.',
  'payments.freeName': 'VPN Gratuita',
  'payments.freeDesc':
    'Otorga acceso dVPN gratuito bajo cualquier condición que establezcas — anuncios vistos, ofertas completadas, referidos realizados.',
  'payments.cta': 'Integra cualquier infraestructura de pagos en tu dVPN',

  // ─── Node hosting section ───
  'nodeHosting.heading': 'Aloja un Nodo dVPN. Gana recompensas de ancho de banda.',
  'nodeHosting.lead':
    'Ejecuta un Nodo Sentinel en minutos y únete a 1500+ operadores en todo el mundo para aportar tu ancho de banda al futuro de la privacidad descentralizada.',
  'nodeHosting.installTab': 'Instalar',
  'nodeHosting.cloudTab': 'Nube',
  'nodeHosting.card1Title': 'Aloja un Nodo dVPN en tu Dispositivo',
  'nodeHosting.card1Body':
    'Ejecuta un nodo dVPN Wireguard o V2Ray en tu equipo Windows, Mac o Linux y comienza a ganar hoy mismo.',
  'nodeHosting.card2Title': 'Aloja Nodos dVPN en la Nube',
  'nodeHosting.card2Body':
    'Accede por SSH a cualquier servidor en la nube e implementa nodos dVPN en lotes — despliega, monitorea y gestiona toda tu flota desde un solo lugar.',
  'nodeHosting.ctaHeading': '¡Aloja un Nodo dVPN hoy!',
  'nodeHosting.liveTest': 'Ver Prueba de Nodo en Vivo',

  // ─── Agentic payments (x402) section ───
  'agentic.heading': 'La primera red dVPN descentralizada para agentes de IA.',
  'agentic.lead':
    'Los agentes obtienen privacidad y eluden las restricciones geográficas por sí solos — sin claves API, sin cuentas, sin intervención humana. Un día completo de VPN cuesta $0.033, pagado de forma autónoma en USDC.',
  'agentic.payOnBase': 'Pagar en Base',
  'agentic.soon': 'PRÓXIMAMENTE',
  'agentic.launchBtn': 'Lanzar x402.sentinel.co',
  'agentic.step1Title': 'Solicitar acceso',
  'agentic.step1Body': 'Tu agente llama al endpoint de conexión — 1, 7 o 30 días.',
  'agentic.step2Title': 'Obtener el precio',
  'agentic.step2Body': 'Sentinel responde con el costo: $0.033 por un día completo.',
  'agentic.step3Title': 'Pagar automáticamente',
  'agentic.step3Body': 'El agente firma el pago en USDC por sí mismo. Se liquida en ~2 seconds.',
  'agentic.step4Title': 'Túnel activo',
  'agentic.step4Body': 'Conexión WireGuard cifrada. Sin claves API, sin cuentas, sin intervención humana.',
  'agentic.connectAgent': 'CONECTA TU AGENTE',
  'agentic.claudeAgent': 'Claude Agent',
  'agentic.chatgptAgent': 'ChatGPT Agent',
  'agentic.geminiAgent': 'Gemini Agent',

  // ─── dVPN console ───
  'console.wireguardBadge': 'WIREGUARD · AES-256',
  'console.step01': '01 — UBICACIÓN DE SALIDA',
  'console.step02': '02 — PLATAFORMA',
  'console.step03': '03 — SELECCIONAR APP',
  'console.statusReady': '> listo para conectar',
  'console.statusConnecting': '> estableciendo túnel cifrado…',
  'console.connectBtn': 'Conectar a dVPN',
  'console.connectingBtn': 'Conectando…',

  // ─── Sentinel dVPN apps section ───
  'sentinelDvpn.heading': 'Usa apps dVPN descentralizadas de código abierto en las que puedes confiar.',
  'sentinelDvpn.lead':
    'Elige una ubicación, tu plataforma y una app — luego conéctate. Todas las apps aquí funcionan sobre la red Sentinel, por lo que ningún proveedor único controla el ancho de banda que utilizas.',
  'apps.norseDesc':
    'Una experiencia completa de VPN descentralizada envuelta en apps amigables para todas las plataformas.',
  'apps.shieldDesc': 'La dVPN de código abierto insignia de Sentinel P2P — WireGuard y V2Ray.',
  'apps.rynDesc': 'Una VPN de privacidad limpia y minimalista en la que confían más de 10M+ personas.',
  'apps.independentDesc': 'VPN descentralizada gratuita en Sentinel — WireGuard y V2Ray.',
  'apps.encryptsimDesc': 'eSIM global con privacidad primero — sin KYC, sin registros, cifrado de nivel SOC2.',
  'apps.meileDesc': 'dVPN de escritorio para macOS, Linux y Windows impulsada por Sentinel.',
  'apps.valtDesc': 'Captura y protege los datos que generas cada día.',

  // ─── Trust-compare (centralized vs Sentinel) section ───
  'centralized.heading': 'No puedes confiar en las VPN centralizadas.',
  'trustCompare.lead':
    'Una VPN centralizada solo traslada tu confianza de tu ISP a una empresa VPN — un único punto de control que ahora ve todo tu tráfico, no solo parte de él.',
  'trustCompare.centralizedHead': 'VPN Centralizada',
  'trustCompare.sentinelHead': 'Sentinel dVPN',
  'trustCompare.centralizedSub': 'Una entidad controla cada servidor, cada clave, cada registro.',
  'trustCompare.sentinelSub': 'No existe ninguna entidad única que pueda comprometer la red.',
  'trustCompare.bad1': 'Todo el tráfico del usuario pasa por la infraestructura de la empresa.',
  'trustCompare.good1': 'El tráfico va directamente al nodo elegido — sin capa de relay.',
  'trustCompare.bad2': '"Sin registros" es una promesa legal, no una garantía técnica.',
  'trustCompare.good2': 'No existe ninguna empresa que pueda registrar tu tráfico.',
  'trustCompare.bad3': 'El software del servidor es propietario e inauditable.',
  'trustCompare.good3': 'Todo el código es abierto — nodo, cliente, protocolo, SDK.',
  'trustCompare.bad4': 'Sujeto a citaciones judiciales, órdenes de silencio, FISA, NSLs.',
  'trustCompare.good4': 'Ninguna jurisdicción única gobierna la red.',
  'trustCompare.bad5': 'Puede ser obligada a instalar registros de forma silenciosa.',
  'trustCompare.good5': 'Autorización de sesión en cadena — criptográfica, no corporativa.',
  'trustCompare.bad6': 'La actualización automática es una ruta de ejecución de código confiable.',
  'trustCompare.good6': 'El protocolo es gobernado por validadores, no por una junta directiva.',
  'trustCompare.bad7': 'Una adquisición corporativa puede cambiar las políticas de la noche a la mañana.',
  'trustCompare.good7': 'WireGuard / V2Ray de extremo a extremo — las claves nunca abandonan tu dispositivo.',

  // ─── Network-compare (vs leading P2P networks) section ───
  'compare.heading': 'Cómo se compara la arquitectura de Sentinel con las principales redes P2P.',
  'compare.lead':
    '¿Qué queda si eliminas la organización fundadora y bloqueas los servidores de arranque? ¿Qué sigue funcionando?',
  'compare.sentinelCallout':
    'El descubrimiento está en cadena, los puntos de entrada son sin permisos y el registro vive mientras alguien ejecute un validador. Bloquea al equipo y la red no se ve afectada.',
  'compare.viewLiveRpc': 'VER LISTA RPC EN VIVO',
  'compare.torSub': 'El Router de Cebolla',
  'compare.torFail': 'Directorio central',
  'compare.torCallout':
    '9 organizaciones controlan el directorio de la red. Compromételas o bloquéalas y Tor cae.',
  'compare.otherTitle': 'Otras redes P2P en cadena',
  'compare.otherSub': 'Comparación entre protocolos',
  'compare.otherFail': 'Servidores de la empresa',
  'compare.otherCallout':
    'El descubrimiento y la coordinación aún dependen de servidores operados por la empresa. No son verdaderamente descentralizados en la capa de red.',
  'compare.ipfsSub': 'Almacenamiento descentralizado',
  'compare.ipfsFail': 'Pares codificados',
  'compare.ipfsCallout':
    'Kubo viene con ~6 pares de arranque codificados de Protocol Labs; bloquéalos y los nodos nuevos no pueden unirse al DHT.',
  'compare.btSub': 'Protocolo de intercambio de archivos',
  'compare.btFail': 'Hosts codificados',
  'compare.btCallout':
    'Mainline DHT depende de ~5 hosts de arranque codificados; los clientes existentes pueden persistir pares, pero bloquear esos hosts impide que nuevos usuarios se unan.',
  'compare.i2pSub': 'Proyecto Internet Invisible',
  'compare.i2pFail': 'Servidores de reseed',
  'compare.i2pCallout':
    'URLs de reseed codificadas. Bloquea ~8 dominios y los nuevos usuarios no pueden arrancar en la red.',
  'compare.failureMode': 'Modo de fallo',
  'compare.rowDiscovery': 'Descubrimiento',
  'compare.rowBootstrap': 'Arranque',
  'compare.rowEntry': 'Puntos de entrada',
  'compare.rowSybil': 'Resistencia Sybil',
  'compare.rowState': 'Consistencia de estado',
  'compare.rowGovernance': 'Gobernanza',
  'compare.rowIfOrg': 'Si la org desaparece',
  'compare.rowVerdict': 'Veredicto',
  'compare.rowRouting': 'Enrutamiento',
  'compare.rowCentralFail': 'Fallo central',
  'compare.rowRegistry': 'Registro de nodos',
  'compare.rowIfCompany': 'Si la empresa desaparece',
  'compare.rowOpenSdk': 'SDK de cliente abierto',
  'compare.rowSeeds': 'Seeds',
  'compare.rowIfBlocked': 'Si es bloqueado',
  'compare.snDiscoveryVal': 'Blockchain Cosmos-SDK',
  'compare.snBootstrapVal': 'Ninguno — cualquier endpoint RPC',
  'compare.snEntryVal': '∞ sin permisos',
  'compare.snSybilVal': 'TX de registro en cadena',
  'compare.snStateVal': 'Finalidad · bloques ~6s',
  'compare.snGovVal': 'Votos de validadores en cadena',
  'compare.snOrgVal': 'Los validadores continúan',
  'compare.snVerdictVal': 'Nada que bloquear',
  'compare.torDiscoveryVal': '9 Autoridades de Directorio',
  'compare.torRoutingVal': 'Circuito de 3 saltos (lento)',
  'compare.torCentralFailVal': 'Autoridades de Directorio',
  'compare.torOrgVal': 'La red se degrada',
  'compare.otherDiscoveryVal': 'Servidores API centralizados',
  'compare.otherRegistryVal': 'Operado por la empresa',
  'compare.otherOrgVal': 'La red muere',
  'compare.otherSdkVal': 'Propietario o limitado',
  'compare.ipfsBootstrapVal': '~6 pares codificados',
  'compare.ipfsSybilVal': 'Débil',
  'compare.btBootstrapVal': '~5 hosts codificados',
  'compare.btSybilVal': 'Débil (libre de inundar)',
  'compare.i2pDiscoveryVal': 'URLs de reseed codificadas',
  'compare.i2pBootstrapVal': '~8 servidores de reseed',
  'compare.i2pBlockedVal': 'Los nuevos usuarios no pueden unirse',
  'compare.closing':
    'La mayoría de las redes dependen de puntos de entrada fijos que los censores pueden bloquear. Sentinel usa endpoints RPC sin permisos — cualquiera puede ejecutar uno, en cualquier lugar. Mientras un endpoint sea accesible, la red permanece disponible.',

  // ─── Ecosystem grid section ───
  'ecosystem.heading':
    'No confíes en una VPN centralizada, confía en una VPN descentralizada construida sobre Sentinel',
  'ecosystem.lead': 'Las aplicaciones dVPN construidas sobre Sentinel son usadas por 1.4M+ usuarios.',
  'ecosystem.downloadLabel': 'Descargar App:',
  'ecosystem.independentBody':
    'VPN Descentralizada gratuita en Sentinel — WireGuard y V2Ray; Android e iOS.',
  'ecosystem.rynBody':
    'VPN de privacidad impulsada por Sentinel con una interfaz limpia y minimalista y una base de usuarios de más de 10 million personas.',
  'ecosystem.shieldBody':
    'La dVPN de código abierto insignia de Sentinel P2P, WireGuard y V2Ray; Android e iOS.',
  'ecosystem.norseBody':
    'Experiencia de VPN descentralizada envuelta en apps amigables para todas las plataformas.',
  'ecosystem.valtBody':
    'VALT es la única app disponible que te permite capturar y proteger los datos que creas cada día.',
  'ecosystem.meileBody': 'dVPN de escritorio para macOS, Linux y Windows impulsada por Sentinel.',
  'ecosystem.ctaTitle': 'Crea tu propia dVPN',
  'ecosystem.ctaBody':
    'Usa el Sentinel SDK para publicar tu propia VPN descentralizada — tu marca, tu protocolo, tu distribución.',
  'ecosystem.ctaStart': 'Empezar a construir →',
  'ecosystem.counterBefore': 'Las apps construidas sobre Sentinel han sido usadas por más de',
  'ecosystem.counterAfter': 'personas — y contando',

  // ─── Community section ───
  'community.heading': 'Únete a la Comunidad',
  'community.subtitle': 'La comunidad Sentinel va más allá de la cadena.',
  'community.discordHandle': 'Sentinel Network',
  'community.more': 'Más de la comunidad',
  'community.growthDao': 'Growth DAO',
  'community.p2pNews': 'p2p News',

  // ─── Contact form ───
  'contact.heading': 'Construyamos juntos',
  'contact.subtitle':
    '¿Lanzando una dVPN, integrando un SDK o solicitando una beca? Cuéntanos en qué estás trabajando y te conectaremos con las herramientas, socios y personas adecuadas.',
  'contact.fieldName': 'Nombre',
  'contact.firstNamePlaceholder': 'Nombre',
  'contact.lastNamePlaceholder': 'Apellido',
  'contact.fieldEmail': 'Correo electrónico',
  'contact.emailPlaceholder': 'you@yourproject.com',
  'contact.fieldProject': 'Proyecto',
  'contact.projectPlaceholder': '¿Qué estás construyendo? ¿Una app dVPN, flota de nodos, integración…?',
  'contact.fieldMessage': 'Mensaje',
  'contact.messagePlaceholder':
    '¿Dónde estás hoy — idea, prototipo o producto en vivo — y en qué podrías usar ayuda?',
  'contact.privacyAgree': 'Acepto la',
  'contact.privacyLink': 'política de privacidad',
  'contact.submit': 'Enviar Mensaje',

  // ─── Footer columns ───
  'footer.exploreStats': 'Estadísticas de la Red',
  'footer.exploreDashboard': 'Panel de Nodos',
  'footer.exploreNodeMap': 'Mapa de Nodos',
  'footer.exploreExplorer': 'Explorador',
  'footer.dvpnShield': 'Sentinel Shield',
  'footer.dvpnIndependent': 'Independent VPN',
  'footer.dvpnNorse': 'DVPN by NORSE',
  'footer.dvpnValt': 'VALT',
  'footer.dvpnRyn': 'Ryn dVPN',
  'footer.dvpnMeile': 'Meile dVPN (beta)',
  'footer.buildPlanManager': 'Plan Manager',
  'footer.buildSdks': 'SDKs',
  'footer.buildPayments': 'Configurar Pago',
  'footer.buildRunNode': 'Ejecutar un Nodo',
  'footer.buildEarn': 'Ganar con dVPN',
  'footer.buildLearn': 'Aprender',
  'footer.moreDocs': 'Documentación dVPN',
  'footer.moreX402': 'Pagos x402',
  'footer.moreNodeTester': 'Sentinel Node Tester',
  'footer.moreContact': 'Contáctanos',
  'footer.copyright': 'Sentinel © 2026',
  'footer.privacyPolicy': 'Política de Privacidad',
};
