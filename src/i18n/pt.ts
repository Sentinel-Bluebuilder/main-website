// ─── Brazilian Portuguese (pt-BR) ───
import type { Messages } from './en';

export const pt: Partial<Messages> = {
  'meta.title': 'Sentinel — Crie sua própria VPN descentralizada.',
  'meta.description':
    'Sentinel é uma rede de banda larga descentralizada de Camada 1. Traga seu protocolo, seu cliente, sua distribuição — nós cuidamos da rede.',
  'meta.ogImageAlt': 'Sentinel — rede de banda larga descentralizada de Camada 1',

  // ─── Nav bar + footer column heads (shared four labels) ───
  'nav.explore': 'Explorar',
  'nav.dvpn': 'dVPN',
  'nav.build': 'Desenvolver',
  'nav.more': 'Mais',
  'nav.buyP2P': 'Comprar P2P',

  // ─── Nav: Explore dropdown ───
  'nav.explore.statsTitle': 'Estatísticas da Rede',
  'nav.explore.statsDesc': 'Monitore o desempenho e as métricas da rede em tempo real.',
  'nav.explore.dashboardTitle': 'Painel de Nós',
  'nav.explore.dashboardDesc': 'Gerencie e monitore as operações do seu nó.',
  'nav.explore.explorerTitle': 'Explorador',
  'nav.explore.explorerDesc': 'Pesquise e explore transações na rede.',
  'nav.explore.ecosystemTitle': 'Ecossistema',
  'nav.explore.ecosystemDesc': 'Descubra aplicativos e serviços no nosso ecossistema.',

  // ─── Nav: dVPN dropdown ───
  'nav.dvpn.downloadTitle': 'Baixar Aplicativos',
  'nav.dvpn.downloadDesc': 'Sentinel Shield, Norse, Valt, Meile e muito mais.',
  'nav.dvpn.coverageTitle': 'Cobertura',
  'nav.dvpn.coverageDesc': '110+ Países, 430+ Cidades.',
  'nav.dvpn.learnTitle': 'Aprender',
  'nav.dvpn.learnDesc': 'Explore guias, documentação e muito mais.',
  'nav.dvpn.runNodeTitle': 'Executar um Nó',
  'nav.dvpn.runNodeDesc': 'Apoie a rede e ganhe recompensas.',
  'nav.dvpn.buildTitle': 'Desenvolver',
  'nav.dvpn.buildDesc': 'Crie seus próprios aplicativos na rede.',
  'nav.dvpn.earnTitle': 'Ganhar',
  'nav.dvpn.earnDesc': 'Monetize sua banda larga e muito mais.',

  // ─── Nav: Build dropdown ───
  'nav.build.planManagerTitle': 'Plan Manager',
  'nav.build.planManagerDesc': 'Transforme banda larga bruta em planos de assinatura com preço definido.',
  'nav.build.sdkTitle': 'SDK',
  'nav.build.sdkDesc': 'Bindings nativos para iOS, Android, Web e desktop.',
  'nav.build.paymentsTitle': 'Configurar Pagamentos',
  'nav.build.paymentsDesc': 'Stripe, USDC, BTC, on-ramps — conecte qualquer gateway por plano.',
  'nav.build.x402Title': 'Pagamentos x402',
  'nav.build.x402Desc': 'Pagamentos agênticos por byte — sem chaves de API, sem contas.',
  'nav.build.protocolsTitle': 'Protocolos VPN',
  'nav.build.protocolsDesc': 'WireGuard, V2Ray, OpenVPN — escolha o que seus usuários precisam.',
  'nav.build.docsTitle': 'Docs para Desenvolvedores',
  'nav.build.docsDesc': 'Referência de API, quickstarts e guias de arquitetura.',

  // ─── Nav: More dropdown ───
  'nav.more.docsTitle': 'Docs de dVPN',
  'nav.more.docsDesc': 'Clientes, nós, protocolos, FAQs.',
  'nav.more.contactTitle': 'Fale Conosco',
  'nav.more.contactDesc': 'Dúvidas ou suporte — entre em contato.',

  // ─── Buy P2P dropdown ───
  'buy.mexcTag': 'Spot P2P/USDT',
  'buy.osmosisTag': 'Swap on-chain',
  'buy.skipTag': 'Swap entre cadeias',

  // ─── Header chrome ───
  'header.menu': 'Menu',
  'lang.label': 'Idioma',

  // ─── Hero ───
  'hero.title': 'Crie sua própria VPN descentralizada.',
  'hero.subtitle':
    'O protocolo de rede peer-to-peer mais resiliente, projetado para resistir à censura em qualquer parte do mundo.',
  'hero.readMore': 'Saiba mais',
  'hero.ctaUse': 'Usar um App dVPN',
  'hero.ctaBuild': 'Desenvolver um App dVPN',
  'hero.ctaHost': 'Hospedar um Nó dVPN',
  'hero.bullet1': 'Um DHT perpétuo on-chain — protegido por consenso e resistente à censura.',
  'hero.bullet2': 'Zero nós de bootstrap, zero servidores centrais a serem confiscados.',
  'hero.bullet3': 'Banda larga fornecida por operadores independentes em mais de 70 países.',
  'hero.bullet4': 'Qualquer cliente pode ingressar com apenas um endpoint RPC.',
  'hero.usersCounter': 'pessoas usam apps dVPN desenvolvidos no Sentinel',

  // ─── Stats strip ───
  'stats.dapps': 'dApps desenvolvidos no Sentinel',
  'stats.totalUsers': 'Total de Usuários',
  'stats.providers': 'Provedores de Banda Larga P2P',
  'stats.data': 'Dados Consumidos',
  'stats.viewNetworkStats': 'Ver Estatísticas da Rede',

  // ─── Builder-stack: section heading + connection pipeline ───
  'sdk.heading': 'Tudo que um desenvolvedor de dVPN precisa. Resolvido.',
  'builderStack.step1Title': 'Sondagem Direta de Nó',
  'builderStack.step1Body':
    'Requisição HTTPS diretamente ao endereço remoto do nó. Retorna status em tempo real: tipo de protocolo, contagem de peers, localização, banda larga. Peer-to-peer, sem relay.',
  'builderStack.step2Title': 'Sessão On-Chain',
  'builderStack.step2Body':
    'Transação assinada cria um registro de sessão imutável na blockchain. ID da sessão, endereço do nó, endereço da conta — tudo validado por consenso.',
  'builderStack.step3Title': 'Handshake Verificado',
  'builderStack.step3Body':
    'O nó recebe a requisição e consulta a cadeia para verificar se a sessão confere. Somente então gera as credenciais VPN. A autorização é on-chain.',
  'builderStack.step4Title': 'Túnel Criptografado',
  'builderStack.step4Body':
    'Túnel WireGuard (Curve25519) ou V2Ray (VLess/VMess) estabelecido diretamente entre cliente e nó. Criptografia de ponta a ponta. Zero intermediários.',
  'builderStack.closing1': 'Nenhum servidor centralizado está envolvido em nenhuma etapa.',
  'builderStack.closing2': 'A blockchain é o backend.',
  'builderStack.sdkBody':
    'Computação, banda larga, pagamentos, segurança — o protocolo Sentinel executa toda a stack white-label sob a sua marca. Você desenvolve o app. A rede faz o resto.',

  // ─── Resilience cards ───
  'resilience.blockchainTitle': 'A blockchain É o backend',
  'resilience.blockchainPoint1': 'Cada nó, sessão e conta vive on-chain.',
  'resilience.blockchainPoint2': 'A descoberta é uma consulta na cadeia — nada a derrubar.',
  'resilience.blockchainPoint3': 'Finalidade, resistência Sybil e governança integradas.',
  'resilience.blockchainAction': 'Ver Transações em Tempo Real',
  'resilience.validatorsTitle': 'Validadores fornecem a computação',
  'resilience.validatorsPoint1': 'Sessões, planos e pagamentos verificados pelos validadores do Sentinel.',
  'resilience.validatorsPoint2': 'Essa computação de consenso é o seu backend: sem servidores para rodar.',
  'resilience.validatorsPoint3': 'Cada mudança de estado é final e à prova de adulteração.',
  'resilience.validatorsAction': 'Ver Validadores',
  'resilience.bandwidthTitle': 'Pague por banda larga diretamente em P2P',
  'resilience.bandwidthPoint1': 'Carteiras pagam operadores de nós diretamente on-chain — sem faturas.',
  'resilience.bandwidthPoint2': 'Escolha nós por país, preço ou protocolo.',
  'resilience.bandwidthPoint3': 'Pague em P2P por banda larga, o token nativo do Sentinel.',
  'resilience.serversTitle': '1500+ servidores, zero operação de servidores',
  'resilience.serversPoint1': 'Banda larga de 1500+ servidores operados por operadores independentes.',
  'resilience.serversPoint2': '90+ países em seis continentes.',
  'resilience.serversPoint3': 'Racks, patches e escalabilidade — completamente abstraídos.',
  'resilience.serversAction': 'Ver Mapa Global de Nós',
  'resilience.wireguardSub': 'Túneis criptografados com velocidade de kernel',
  'resilience.v2raySub': 'VMess / VLESS · anticensura',
  'resilience.moreCountries': '+ 80 mais',
  'resilience.moreCountriesTitle': '90+ países em seis continentes',

  // ─── Open-source section ───
  'oss.closedSource': 'VPNs de código fechado pedem sua confiança.',
  'oss.openStatement':
    'Sentinel é o único framework open-source e descentralizado para desenvolver um aplicativo VPN — com total transparência tanto no código do lado do cliente quanto no código do lado do servidor.',
  'oss.githubCta': 'Ver código open-source no GitHub',
  'oss.everyLayerHeading': 'Cada camada do Sentinel é open source',
  'oss.everyLayerSubhead': 'Nada na stack é fechado — leia, audite e faça fork de tudo.',
  'oss.sdksLabel': 'SDKs',
  'oss.sdksDesc': 'Bibliotecas de cliente em JavaScript, C#, Go e Swift',
  'oss.protocolLabel': 'Protocolo',
  'oss.protocolDesc': 'Camada de sessão WireGuard e V2Ray',
  'oss.chainLabel': 'Cadeia',
  'oss.chainDesc': 'Sentinel Hub, desenvolvido no Cosmos SDK',
  'oss.nodeLabel': 'Software de nó',
  'oss.nodeDesc': 'O nó dVPN que qualquer pessoa pode rodar e inspecionar',
  'oss.buildLanguageHeading': 'Desenvolva na linguagem que você já usa',
  'oss.buildLanguageSubhead': 'Quatro SDKs oficiais — todos open source.',
  'oss.sdkLanguagesStat': 'linguagens de SDK',
  'oss.linesOfCodeStat': 'linhas de código aberto',

  // ─── Steps section ───
  'steps.heading': 'Três passos do zero a uma dVPN em produção.',
  'steps.step1Heading': 'Adicione nós ao seu plano de assinatura.',
  'steps.step1Body':
    'Pague nós dVPN e adicione-os ao seu plano de assinatura. Filtre por país, protocolo de criptografia e mais para encontrar nós que atendam às necessidades de capacidade do seu aplicativo.',
  'steps.planManagerAlt': 'Adicionando nós a um plano de assinatura no Plan Manager',
  'steps.openPlanManager': 'Abrir Plan Manager',

  // ─── SDK / platforms section ───
  'sdk.buildPlatformHeading': 'Desenvolva uma dVPN para Qualquer Plataforma',
  'sdk.buildPlatformBody':
    'O Sentinel SDK roda em celulares, desktops, navegadores, TVs e servidores. Você desenvolve o app e detém a marca. A rede cuida da banda larga, do roteamento e dos pagamentos.',
  'sdk.iosDesc': 'Lance um cliente na App Store. O túnel Network Extension já está pronto.',
  'sdk.androidDesc': 'Lance um app na Play Store com VpnService. WireGuard e V2Ray incluídos.',
  'sdk.macosDesc': 'Desenvolva um app na barra de menu que tunela todo o tráfego do sistema.',
  'sdk.windowsDesc': 'Desenvolva um cliente desktop para o sistema operacional mais usado.',
  'sdk.linuxDesc': 'Execute daemons headless em servidores, roteadores e homelabs.',
  'sdk.webDesc': 'Desenvolva extensões de navegador e dashboards. Os usuários não instalam nada.',
  'sdk.tvDesc': 'Desenvolva apps para TV projetados para o controle remoto.',
  'sdk.serverDesc': 'Roteie tráfego via código. Bots, backends e agentes de IA.',
  'sdk.docsButton': 'Docs do SDK',
  'sdk.githubButton': 'Ver no GitHub',

  // ─── Payments section ───
  'payments.heading': 'Integre Qualquer Infraestrutura de Pagamento',
  'payments.subhead':
    'Aceite pagamentos em moeda fiduciária, criptomoedas ou defina qualquer gatilho condicional para autorizar um usuário a serviços VPN gratuitos.',
  'payments.creditName': 'Cartão de Crédito / Débito',
  'payments.creditDesc':
    'Venda acesso dVPN com Visa, Mastercard, Amex e mais — por meio do processador de pagamento de sua escolha.',
  'payments.walletName': 'Apple Pay / Google Pay',
  'payments.walletDesc':
    'Cobre pelo seu dVPN com checkout em um toque via Apple Pay ou Google Pay, na web ou no seu app.',
  'payments.stripeName': 'Stripe',
  'payments.stripeDesc':
    'Fature seu dVPN pelo Stripe Checkout ou Billing — pagamento confirmado por webhook, acesso concedido no mesmo fluxo.',
  'payments.cryptoName': 'Moedas Digitais',
  'payments.cryptoDesc':
    'Aceite BTC, SOL, ZEC ou qualquer outra rede para acesso dVPN, pelo processador de sua escolha.',
  'payments.freeName': 'VPN Gratuita',
  'payments.freeDesc':
    'Conceda acesso dVPN gratuito com qualquer condição que você definir — anúncios assistidos, ofertas concluídas, indicações realizadas.',
  'payments.cta': 'Integre Qualquer Infraestrutura de Pagamento ao seu dVPN',

  // ─── Node hosting section ───
  'nodeHosting.heading': 'Hospede um Nó dVPN. Ganhe Recompensas por Banda Larga.',
  'nodeHosting.lead':
    'Execute um Sentinel Node em minutos e junte-se a mais de 1500 operadores ao redor do mundo fornecendo sua banda larga para o futuro da privacidade descentralizada.',
  'nodeHosting.installTab': 'Instalar',
  'nodeHosting.cloudTab': 'Nuvem',
  'nodeHosting.card1Title': 'Hospede um Nó dVPN no Seu Dispositivo',
  'nodeHosting.card1Body':
    'Execute um Nó dVPN Wireguard ou V2Ray no seu Windows, Mac ou Linux e comece a ganhar hoje!',
  'nodeHosting.card2Title': 'Hospede Nós dVPN na Nuvem',
  'nodeHosting.card2Body':
      'Acesse via SSH qualquer servidor na nuvem e implante nós dVPN em lotes — inicialize, monitore e gerencie toda a sua frota em um único lugar.',
  'nodeHosting.ctaHeading': 'Hospede um Nó dVPN Hoje!',
  'nodeHosting.liveTest': 'Ver Teste de Nó ao Vivo',

  // ─── Agentic payments (x402) section ───
  'agentic.heading': 'A primeira rede VPN descentralizada para agentes de IA.',
  'agentic.lead':
    'Agentes obtêm privacidade e contornam restrições geográficas por conta própria — sem chaves de API, sem contas, sem intervenção humana. Um dia inteiro de VPN custa $0.033, pago de forma autônoma em USDC.',
  'agentic.payOnBase': 'Pagar na Base',
  'agentic.soon': 'EM BREVE',
  'agentic.launchBtn': 'Acessar x402.sentinel.co',
  'agentic.step1Title': 'Solicitar acesso',
  'agentic.step1Body': 'Seu agente chama o endpoint de conexão — 1, 7 ou 30 dias.',
  'agentic.step2Title': 'Obter o preço',
  'agentic.step2Body': 'O Sentinel responde com o custo: $0.033 por um dia completo.',
  'agentic.step3Title': 'Pagar automaticamente',
  'agentic.step3Body': 'O agente assina o pagamento em USDC por conta própria. Liquidado em ~2 seconds.',
  'agentic.step4Title': 'Túnel ativado',
  'agentic.step4Body': 'Conexão WireGuard criptografada. Sem chaves de API, sem contas, sem intervenção humana.',
  'agentic.connectAgent': 'CONECTE SEU AGENTE',
  'agentic.claudeAgent': 'Claude Agent',
  'agentic.chatgptAgent': 'ChatGPT Agent',
  'agentic.geminiAgent': 'Gemini Agent',

  // ─── dVPN console ───
  'console.wireguardBadge': 'WIREGUARD · AES-256',
  'console.step01': '01 — LOCAL DE SAÍDA',
  'console.step02': '02 — PLATAFORMA',
  'console.step03': '03 — ESCOLHER APP',
  'console.statusReady': '> pronto para conectar',
  'console.statusConnecting': '> estabelecendo túnel criptografado…',
  'console.connectBtn': 'Conectar ao dVPN',
  'console.connectingBtn': 'Conectando…',

  // ─── Sentinel dVPN apps section ───
  'sentinelDvpn.heading': 'Use apps de VPN descentralizada open-source em que você pode confiar.',
  'sentinelDvpn.lead':
    'Escolha um local, sua plataforma e um app — depois conecte. Todos os apps aqui funcionam na rede Sentinel, então nenhum provedor único controla a banda larga que você utiliza.',
  'apps.norseDesc':
    'Uma experiência completa de VPN descentralizada em apps fáceis de usar para todas as plataformas.',
  'apps.shieldDesc': 'dVPN open-source principal pela Sentinel P2P — WireGuard e V2Ray.',
  'apps.rynDesc': 'Uma VPN de privacidade limpa e minimalista confiada por mais de 10M+ pessoas.',
  'apps.independentDesc': 'VPN descentralizada gratuita no Sentinel — WireGuard e V2Ray.',
  'apps.encryptsimDesc': 'eSIM global com privacidade em primeiro lugar — sem KYC, sem logs, criptografia padrão SOC2.',
  'apps.meileDesc': 'dVPN desktop com tecnologia Sentinel para macOS, Linux e Windows.',
  'apps.valtDesc': 'Capture e proteja os dados que você cria todos os dias.',

  // ─── Trust-compare (centralized vs Sentinel) section ───
  'centralized.heading': 'VPNs centralizadas não são confiáveis.',
  'trustCompare.lead':
    'Uma VPN centralizada apenas transfere sua confiança do seu provedor de internet para uma empresa de VPN — um único ponto de controle que agora vê todo o seu tráfego, e não apenas parte dele.',
  'trustCompare.centralizedHead': 'VPN Centralizada',
  'trustCompare.sentinelHead': 'Sentinel dVPN',
  'trustCompare.centralizedSub': 'Uma entidade controla todos os servidores, todas as chaves, todos os logs.',
  'trustCompare.sentinelSub': 'Não existe uma entidade única capaz de comprometer a rede.',
  'trustCompare.bad1': 'Todo o tráfego do usuário passa pela infraestrutura da empresa.',
  'trustCompare.good1': 'O tráfego é roteado diretamente para o nó escolhido — sem camada de relay.',
  'trustCompare.bad2': '"Sem logs" é uma promessa legal, não uma garantia técnica.',
  'trustCompare.good2': 'Nenhuma empresa existe que possa registrar seu tráfego.',
  'trustCompare.bad3': 'O software do servidor é proprietário e impossível de auditar.',
  'trustCompare.good3': 'Todo o código é open source — nó, cliente, protocolo, SDK.',
  'trustCompare.bad4': 'Sujeito a intimações judiciais, ordens de silêncio, FISA, NSLs.',
  'trustCompare.good4': 'Nenhuma jurisdição única governa a rede.',
  'trustCompare.bad5': 'Pode ser obrigada a instalar logs silenciosamente.',
  'trustCompare.good5': 'Autorização de sessão on-chain — criptográfica, não corporativa.',
  'trustCompare.bad6': 'Atualização automática é um caminho de execução de código confiado.',
  'trustCompare.good6': 'Protocolo governado por validadores, não por um conselho.',
  'trustCompare.bad7': 'Aquisição corporativa pode mudar políticas da noite para o dia.',
  'trustCompare.good7': 'WireGuard / V2Ray de ponta a ponta — as chaves nunca saem do seu dispositivo.',

  // ─── Network-compare (vs leading P2P networks) section ───
  'compare.heading': 'Como a arquitetura do Sentinel se compara às principais redes P2P.',
  'compare.lead':
    'Remova a organização fundadora. Bloqueie os servidores de bootstrap. O que continua funcionando?',
  'compare.sentinelCallout':
    'A descoberta é on-chain, os pontos de entrada são sem permissão e o registro vive enquanto alguém rodar um validador. Bloqueie a equipe e a rede não é afetada.',
  'compare.viewLiveRpc': 'VER LISTA DE RPC AO VIVO',
  'compare.torSub': 'The Onion Router',
  'compare.torFail': 'Diretório central',
  'compare.torCallout':
    '9 organizações controlam o diretório da rede. Comprometa ou bloqueie-as e o Tor cai.',
  'compare.otherTitle': 'Outras redes P2P on-chain',
  'compare.otherSub': 'Comparação entre protocolos',
  'compare.otherFail': 'Servidores da empresa',
  'compare.otherCallout':
    'A descoberta e a coordenação ainda dependem de servidores operados pela empresa. Não são verdadeiramente descentralizadas na camada de rede.',
  'compare.ipfsSub': 'Armazenamento descentralizado',
  'compare.ipfsFail': 'Peers fixos em código',
  'compare.ipfsCallout':
      'O Kubo vem com ~6 peers de bootstrap fixos em código do Protocol Labs; bloqueie-os e nós novos não conseguem ingressar no DHT.',
  'compare.btSub': 'Protocolo de compartilhamento de arquivos',
  'compare.btFail': 'Hosts fixos em código',
  'compare.btCallout':
    'O Mainline DHT depende de ~5 hosts de bootstrap fixos em código; clientes existentes podem persistir peers, mas bloquear esses hosts impede novos usuários de ingressar.',
  'compare.i2pSub': 'Invisible Internet Project',
  'compare.i2pFail': 'Servidores de reseed',
  'compare.i2pCallout':
    'URLs de reseed fixas em código. Bloqueie ~8 domínios e novos usuários não conseguem ingressar na rede.',
  'compare.failureMode': 'Modo de falha',
  'compare.rowDiscovery': 'Descoberta',
  'compare.rowBootstrap': 'Bootstrap',
  'compare.rowEntry': 'Pontos de entrada',
  'compare.rowSybil': 'Resistência Sybil',
  'compare.rowState': 'Consistência de estado',
  'compare.rowGovernance': 'Governança',
  'compare.rowIfOrg': 'Se a org desaparecer',
  'compare.rowVerdict': 'Veredicto',
  'compare.rowRouting': 'Roteamento',
  'compare.rowCentralFail': 'Falha central',
  'compare.rowRegistry': 'Registro de nós',
  'compare.rowIfCompany': 'Se a empresa desaparecer',
  'compare.rowOpenSdk': 'SDK de cliente aberto',
  'compare.rowSeeds': 'Seeds',
  'compare.rowIfBlocked': 'Se bloqueado',
  'compare.snDiscoveryVal': 'Blockchain Cosmos SDK',
  'compare.snBootstrapVal': 'Nenhum — qualquer endpoint RPC',
  'compare.snEntryVal': '∞ sem permissão',
  'compare.snSybilVal': 'TX de registro on-chain',
  'compare.snStateVal': 'Finalidade · blocos de ~6s',
  'compare.snGovVal': 'Votos de validadores on-chain',
  'compare.snOrgVal': 'Validadores continuam',
  'compare.snVerdictVal': 'Nada a bloquear',
  'compare.torDiscoveryVal': '9 Autoridades de Diretório',
  'compare.torRoutingVal': 'Circuito de 3 saltos (lento)',
  'compare.torCentralFailVal': 'Autoridades de Diretório',
  'compare.torOrgVal': 'Rede se degrada',
  'compare.otherDiscoveryVal': 'Servidores de API centralizados',
  'compare.otherRegistryVal': 'Operado pela empresa',
  'compare.otherOrgVal': 'Rede morre',
  'compare.otherSdkVal': 'Proprietário ou limitado',
  'compare.ipfsBootstrapVal': '~6 peers fixos em código',
  'compare.ipfsSybilVal': 'Fraca',
  'compare.btBootstrapVal': '~5 hosts fixos em código',
  'compare.btSybilVal': 'Fraca (livre para inundar)',
  'compare.i2pDiscoveryVal': 'URLs de reseed fixas em código',
  'compare.i2pBootstrapVal': '~8 servidores de reseed',
  'compare.i2pBlockedVal': 'Novos usuários não conseguem ingressar',
  'compare.closing':
    'A maioria das redes depende de pontos de entrada fixos que os censores podem bloquear. O Sentinel usa endpoints RPC sem permissão — qualquer pessoa pode rodar um, em qualquer lugar. Enquanto um endpoint estiver acessível, a rede permanece disponível.',

  // ─── Ecosystem grid section ───
  'ecosystem.heading':
    'Não confie em uma VPN centralizada, confie em uma VPN descentralizada desenvolvida no Sentinel',
  'ecosystem.lead': 'Aplicativos dVPN desenvolvidos no Sentinel são usados por mais de 1.4M+ usuários.',
  'ecosystem.downloadLabel': 'Baixar App:',
  'ecosystem.independentBody':
    'VPN Descentralizada Gratuita no Sentinel — WireGuard e V2Ray; Android e iOS.',
  'ecosystem.rynBody':
    'VPN de privacidade com tecnologia Sentinel, interface limpa e minimalista, com base de usuários superior a 10 milhões de pessoas.',
  'ecosystem.shieldBody':
    'dVPN open-source principal pela Sentinel P2P, WireGuard e V2Ray; Android e iOS.',
  'ecosystem.norseBody':
    'Experiência de VPN descentralizada em apps fáceis de usar para todas as plataformas.',
  'ecosystem.valtBody':
    'VALT é o único app disponível que permite capturar e proteger os dados que você cria todos os dias.',
  'ecosystem.meileBody': 'dVPN desktop com tecnologia Sentinel para macOS, Linux e Windows.',
  'ecosystem.ctaTitle': 'Crie seu próprio dVPN',
  'ecosystem.ctaBody':
    'Use o Sentinel SDK para lançar sua própria VPN descentralizada — sua marca, seu protocolo, sua distribuição.',
  'ecosystem.ctaStart': 'Comece a desenvolver →',
  'ecosystem.counterBefore': 'Apps desenvolvidos no Sentinel foram usados por mais de',
  'ecosystem.counterAfter': 'pessoas — e crescendo',

  // ─── Community section ───
  'community.heading': 'Junte-se à Comunidade',
  'community.subtitle': 'A comunidade Sentinel vai além da cadeia.',
  'community.discordHandle': 'Sentinel Network',
  'community.more': 'Mais da comunidade',
  'community.growthDao': 'Growth DAO',
  'community.p2pNews': 'p2p News',

  // ─── Contact form ───
  'contact.heading': 'Vamos Desenvolver Juntos',
  'contact.subtitle':
    'Está lançando um dVPN, integrando um SDK ou candidatando-se a uma grant? Conte-nos o que você está construindo e vamos conectá-lo com as ferramentas, parceiros e pessoas certas.',
  'contact.fieldName': 'Nome',
  'contact.firstNamePlaceholder': 'Primeiro nome',
  'contact.lastNamePlaceholder': 'Sobrenome',
  'contact.fieldEmail': 'E-mail',
  'contact.emailPlaceholder': 'you@yourproject.com',
  'contact.fieldProject': 'Projeto',
  'contact.projectPlaceholder': 'O que você está desenvolvendo? Um app dVPN, frota de nós, integração…',
  'contact.fieldMessage': 'Mensagem',
  'contact.messagePlaceholder':
    'Onde você está hoje — ideia, protótipo ou produto em produção — e onde poderia usar uma ajuda?',
  'contact.privacyAgree': 'Concordo com a',
  'contact.privacyLink': 'política de privacidade',
  'contact.submit': 'Enviar Mensagem',

  // ─── Footer columns ───
  'footer.exploreStats': 'Estatísticas da Rede',
  'footer.exploreDashboard': 'Painel de Nós',
  'footer.exploreNodeMap': 'Mapa de Nós',
  'footer.exploreExplorer': 'Explorador',
  'footer.dvpnShield': 'Sentinel Shield',
  'footer.dvpnIndependent': 'VPN Independent',
  'footer.dvpnNorse': 'DVPN by NORSE',
  'footer.dvpnValt': 'VALT',
  'footer.dvpnRyn': 'Ryn dVPN',
  'footer.dvpnMeile': 'Meile dVPN (beta)',
  'footer.buildPlanManager': 'Plan Manager',
  'footer.buildSdks': 'SDKs',
  'footer.buildPayments': 'Configurar Pagamento',
  'footer.buildRunNode': 'Executar um Nó',
  'footer.buildEarn': 'Ganhar com dVPN',
  'footer.buildLearn': 'Aprender',
  'footer.moreDocs': 'Docs de dVPN',
  'footer.moreX402': 'Pagamentos x402',
  'footer.moreNodeTester': 'Sentinel Node Tester',
  'footer.moreContact': 'Fale Conosco',
  'footer.copyright': 'Sentinel © 2026',
  'footer.privacyPolicy': 'Política de Privacidade',
};
