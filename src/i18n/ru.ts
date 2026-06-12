// ─── Russian (ru) ───
import type { Messages } from './en';

export const ru: Partial<Messages> = {
  // ─── Document / social meta ───
  'meta.title': 'Sentinel — Создайте собственный децентрализованный VPN.',
  'meta.description':
    'Sentinel — это децентрализованная сеть пропускной способности уровня Layer-1. Используйте свой протокол, свой клиент, своё распространение — сеть берёт на себя всё остальное.',
  'meta.ogImageAlt': 'Sentinel — децентрализованная сеть пропускной способности Layer-1',

  // ─── Nav bar + footer column heads (shared four labels) ───
  'nav.explore': 'Обзор',
  'nav.dvpn': 'dVPN',
  'nav.build': 'Разработка',
  'nav.more': 'Ещё',
  'nav.buyP2P': 'Купить P2P',

  // ─── Nav: Explore dropdown ───
  'nav.explore.statsTitle': 'Статистика сети',
  'nav.explore.statsDesc': 'Мониторинг производительности и метрик сети в реальном времени.',
  'nav.explore.dashboardTitle': 'Панель управления узлами',
  'nav.explore.dashboardDesc': 'Управляйте и контролируйте работу своих узлов.',
  'nav.explore.explorerTitle': 'Обозреватель',
  'nav.explore.explorerDesc': 'Поиск и просмотр транзакций сети.',
  'nav.explore.ecosystemTitle': 'Экосистема',
  'nav.explore.ecosystemDesc': 'Откройте для себя приложения и сервисы нашей экосистемы.',

  // ─── Nav: dVPN dropdown ───
  'nav.dvpn.downloadTitle': 'Скачать приложения',
  'nav.dvpn.downloadDesc': 'Sentinel Shield, Norse, Valt, Meile и другие.',
  'nav.dvpn.coverageTitle': 'Покрытие',
  'nav.dvpn.coverageDesc': '110+ стран, 430+ городов.',
  'nav.dvpn.learnTitle': 'Обучение',
  'nav.dvpn.learnDesc': 'Руководства, документация и многое другое.',
  'nav.dvpn.runNodeTitle': 'Запустить узел',
  'nav.dvpn.runNodeDesc': 'Поддержите сеть и получайте вознаграждение.',
  'nav.dvpn.buildTitle': 'Разработка',
  'nav.dvpn.buildDesc': 'Создавайте собственные приложения на базе сети.',
  'nav.dvpn.earnTitle': 'Заработок',
  'nav.dvpn.earnDesc': 'Монетизируйте свою пропускную способность и не только.',

  // ─── Nav: Build dropdown ───
  'nav.build.planManagerTitle': 'Plan Manager',
  'nav.build.planManagerDesc': 'Превратите сырую пропускную способность в платные планы подписки.',
  'nav.build.sdkTitle': 'SDK',
  'nav.build.sdkDesc': 'Нативные привязки для iOS, Android, Web и десктопа.',
  'nav.build.paymentsTitle': 'Настройка платежей',
  'nav.build.paymentsDesc': 'Stripe, USDC, BTC, onramp-сервисы — подключите любой шлюз к каждому плану.',
  'nav.build.x402Title': 'Платежи x402',
  'nav.build.x402Desc': 'Поайтовые агентские платежи — без API-ключей и аккаунтов.',
  'nav.build.protocolsTitle': 'VPN-протоколы',
  'nav.build.protocolsDesc': 'WireGuard, V2Ray, OpenVPN — выберите то, что нужно вашим пользователям.',
  'nav.build.docsTitle': 'Документация для разработчиков',
  'nav.build.docsDesc': 'Справочник API, быстрый старт и архитектурные руководства.',

  // ─── Nav: More dropdown ───
  'nav.more.docsTitle': 'Документация dVPN',
  'nav.more.docsDesc': 'Клиенты, узлы, протоколы, FAQ.',
  'nav.more.contactTitle': 'Связаться с нами',
  'nav.more.contactDesc': 'Вопросы или поддержка — напишите нам.',

  // ─── Buy P2P dropdown ───
  'buy.mexcTag': 'P2P/USDT спот',
  'buy.osmosisTag': 'Своп на блокчейне',
  'buy.skipTag': 'Кросс-чейн своп',

  // ─── Header chrome ───
  'header.menu': 'Меню',
  'lang.label': 'Язык',

  // ─── Hero ───
  'hero.title': 'Создайте собственный децентрализованный VPN.',
  'hero.subtitle':
    'Самый устойчивый одноранговый сетевой протокол, разработанный для противодействия цензуре в любой точке мира.',
  'hero.readMore': 'Узнать больше',
  'hero.ctaUse': 'Использовать dVPN-приложение',
  'hero.ctaBuild': 'Создать dVPN-приложение',
  'hero.ctaHost': 'Запустить dVPN-узел',
  'hero.bullet1': 'Постоянный on-chain DHT — защищённый консенсусом, устойчивый к цензуре.',
  'hero.bullet2': 'Ни одного загрузочного узла, ни одного центрального сервера для захвата.',
  'hero.bullet3': 'Пропускная способность от независимых операторов в 70+ странах.',
  'hero.bullet4': 'Любой клиент может подключиться, имея лишь RPC-эндпоинт.',
  'hero.usersCounter': 'человек используют dVPN-приложения на базе Sentinel',

  // ─── Stats strip ───
  'stats.dapps': 'dApps на базе Sentinel',
  'stats.totalUsers': 'Всего пользователей',
  'stats.providers': 'P2P-провайдеры пропускной способности',
  'stats.data': 'Потреблённый трафик',
  'stats.viewNetworkStats': 'Посмотреть статистику сети',

  // ─── Builder-stack: section heading + connection pipeline ───
  'sdk.heading': 'Всё, что нужно разработчику dVPN. Готово к работе.',
  'builderStack.step1Title': 'Прямой опрос узла',
  'builderStack.step1Body':
    'HTTPS-запрос напрямую к удалённому адресу узла. Возвращает актуальный статус: тип протокола, количество пиров, местоположение, пропускная способность. Peer-to-peer, без ретрансляции.',
  'builderStack.step2Title': 'On-chain сессия',
  'builderStack.step2Body':
    'Подписанная транзакция создаёт неизменяемую запись сессии в блокчейне. ID сессии, адрес узла, адрес аккаунта — всё проверяется консенсусом.',
  'builderStack.step3Title': 'Верифицированное рукопожатие',
  'builderStack.step3Body':
    'Узел получает запрос и обращается к блокчейну для проверки соответствия сессии. Только после этого генерируются VPN-учётные данные. Авторизация — on-chain.',
  'builderStack.step4Title': 'Зашифрованный туннель',
  'builderStack.step4Body':
    'Туннель WireGuard (Curve25519) или V2Ray (VLess/VMess) устанавливается напрямую между клиентом и узлом. Сквозное шифрование. Никаких посредников.',
  'builderStack.closing1': 'Централизованный сервер не задействован ни на одном этапе.',
  'builderStack.closing2': 'Блокчейн — это и есть бэкенд.',
  'builderStack.sdkBody':
    'Вычисления, пропускная способность, платежи, безопасность — протокол Sentinel управляет всем white-label стеком под вашим брендом. Вы создаёте приложение. Сеть делает всё остальное.',

  // ─── Resilience cards ───
  'resilience.blockchainTitle': 'Блокчейн — это и есть бэкенд',
  'resilience.blockchainPoint1': 'Каждый узел, сессия и аккаунт живут on-chain.',
  'resilience.blockchainPoint2': 'Обнаружение — это запрос к блокчейну: ничего нельзя отключить.',
  'resilience.blockchainPoint3': 'Финальность, защита от Sybil-атак и управление — встроены.',
  'resilience.blockchainAction': 'Смотреть транзакции в реальном времени',
  'resilience.validatorsTitle': 'Валидаторы обеспечивают вычислительные мощности',
  'resilience.validatorsPoint1': 'Сессии, планы и выплаты верифицируются валидаторами Sentinel.',
  'resilience.validatorsPoint2': 'Этот консенсусный вычислительный ресурс — ваш бэкенд: серверы не нужны.',
  'resilience.validatorsPoint3': 'Каждое изменение состояния является окончательным и защищённым от подмены.',
  'resilience.validatorsAction': 'Посмотреть валидаторов',
  'resilience.bandwidthTitle': 'Платите за пропускную способность напрямую в P2P',
  'resilience.bandwidthPoint1': 'Кошельки платят операторам узлов напрямую on-chain — без счетов.',
  'resilience.bandwidthPoint2': 'Выбирайте узлы по стране, цене или протоколу.',
  'resilience.bandwidthPoint3': 'Платите в P2P за пропускную способность — это нативный токен Sentinel.',
  'resilience.serversTitle': '1500+ серверов, ноль серверных операций',
  'resilience.serversPoint1': 'Пропускная способность от 1500+ серверов под управлением независимых операторов.',
  'resilience.serversPoint2': '90+ стран на шести континентах.',
  'resilience.serversPoint3': 'Стойки, патчинг и масштабирование — полностью абстрагированы.',
  'resilience.serversAction': 'Посмотреть глобальную карту узлов',
  'resilience.wireguardSub': 'Быстрые зашифрованные туннели на уровне ядра',
  'resilience.v2raySub': 'VMess / VLESS · антицензурная защита',
  'resilience.moreCountries': '+ ещё 80',
  'resilience.moreCountriesTitle': '90+ стран на шести континентах',

  // ─── Open-source section ───
  'oss.closedSource': 'Закрытые VPN просят вас им доверять.',
  'oss.openStatement':
    'Sentinel — единственный открытый, децентрализованный фреймворк для создания VPN-приложений: полная прозрачность как на стороне клиента, так и на стороне сервера.',
  'oss.githubCta': 'Смотреть открытый код на GitHub',
  'oss.everyLayerHeading': 'Каждый слой Sentinel открыт',
  'oss.everyLayerSubhead': 'В стеке нет ничего закрытого — читайте, аудируйте и форкайте всё.',
  'oss.sdksLabel': 'SDKs',
  'oss.sdksDesc': 'Клиентские библиотеки на JavaScript, C#, Go и Swift',
  'oss.protocolLabel': 'Протокол',
  'oss.protocolDesc': 'Сессионный уровень WireGuard и V2Ray',
  'oss.chainLabel': 'Блокчейн',
  'oss.chainDesc': 'Sentinel Hub, построенный на Cosmos SDK',
  'oss.nodeLabel': 'Программное обеспечение узла',
  'oss.nodeDesc': 'dVPN-узел, который может запустить и проверить каждый',
  'oss.buildLanguageHeading': 'Разрабатывайте на языке, который вы уже используете',
  'oss.buildLanguageSubhead': 'Четыре официальных SDK — каждый из них с открытым кодом.',
  'oss.sdkLanguagesStat': 'языка SDK',
  'oss.linesOfCodeStat': 'строк открытого кода',

  // ─── Steps section ───
  'steps.heading': 'Три шага от нуля до рабочего dVPN.',
  'steps.step1Heading': 'Добавьте узлы в свой план подписки.',
  'steps.step1Body':
    'Оплачивайте dVPN-узлы и добавляйте их в план подписки. Фильтруйте по стране, протоколу шифрования и другим параметрам, чтобы найти узлы, отвечающие потребностям вашего приложения.',
  'steps.planManagerAlt': 'Добавление узлов в план подписки в Plan Manager',
  'steps.openPlanManager': 'Открыть Plan Manager',

  // ─── SDK / platforms section ───
  'sdk.buildPlatformHeading': 'Создайте dVPN для любой платформы',
  'sdk.buildPlatformBody':
    'Sentinel SDK работает на телефонах, десктопах, в браузерах, на телевизорах и серверах. Вы создаёте приложение и владеете брендом. Сеть берёт на себя пропускную способность, маршрутизацию и платежи.',
  'sdk.iosDesc': 'Выпустите клиент в App Store. Туннель Network Extension уже готов.',
  'sdk.androidDesc': 'Выпустите приложение в Play Store на основе VpnService. WireGuard и V2Ray включены.',
  'sdk.macosDesc': 'Создайте приложение в строке меню, которое туннелирует весь системный трафик.',
  'sdk.windowsDesc': 'Создайте десктопный клиент для самой популярной операционной системы.',
  'sdk.linuxDesc': 'Запускайте безголовые демоны на серверах, роутерах и домашних лабораториях.',
  'sdk.webDesc': 'Создавайте браузерные расширения и дашборды. Пользователи ничего не устанавливают.',
  'sdk.tvDesc': 'Создавайте TV-приложения, оптимизированные для пульта дистанционного управления.',
  'sdk.serverDesc': 'Маршрутизируйте трафик из кода. Боты, бэкенды и AI-агенты.',
  'sdk.docsButton': 'Документация SDK',
  'sdk.githubButton': 'Посмотреть на GitHub',

  // ─── Payments section ───
  'payments.heading': 'Интегрируйте любые платёжные решения',
  'payments.subhead':
    'Принимайте фиатные или криптовалютные платежи либо задайте любое условие для предоставления пользователям бесплатного доступа к VPN.',
  'payments.creditName': 'Кредитная / дебетовая карта',
  'payments.creditDesc':
    'Продавайте доступ к dVPN с Visa, Mastercard, Amex и другими картами — через любой выбранный вами платёжный процессор.',
  'payments.walletName': 'Apple Pay / Google Pay',
  'payments.walletDesc':
    'Принимайте оплату за dVPN в один тап через Apple Pay или Google Pay — в браузере или в вашем приложении.',
  'payments.stripeName': 'Stripe',
  'payments.stripeDesc':
    'Выставляйте счета через Stripe Checkout или Billing — платёж подтверждается вебхуком, доступ предоставляется в том же потоке.',
  'payments.cryptoName': 'Цифровые валюты',
  'payments.cryptoDesc':
    'Принимайте BTC, SOL, ZEC или любой другой блокчейн для доступа к dVPN — через выбранный вами процессор.',
  'payments.freeName': 'Бесплатный VPN',
  'payments.freeDesc':
    'Предоставляйте бесплатный доступ к dVPN на любых условиях: просмотр рекламы, выполнение офферов, реферальные программы.',
  'payments.cta': 'Интегрируйте любую платёжную систему в свой dVPN',

  // ─── Node hosting section ───
  'nodeHosting.heading': 'Запустите dVPN-узел. Зарабатывайте на пропускной способности.',
  'nodeHosting.lead':
    'Запустите Sentinel-узел за несколько минут, присоединитесь к 1500+ операторам по всему миру и отдайте свою пропускную способность на службу децентрализованной приватности.',
  'nodeHosting.installTab': 'Установка',
  'nodeHosting.cloudTab': 'Облако',
  'nodeHosting.card1Title': 'Запустите dVPN-узел на своём устройстве',
  'nodeHosting.card1Body':
    'Запустите WireGuard или V2Ray dVPN-узел на своём компьютере под управлением Windows, Mac или Linux и начните зарабатывать уже сегодня!',
  'nodeHosting.card2Title': 'Запустите dVPN-узлы в облаке',
  'nodeHosting.card2Body':
    'Подключитесь к любому облачному серверу по SSH и разворачивайте dVPN-узлы пакетами — запускайте, мониторьте и управляйте всем флотом из одного места.',
  'nodeHosting.ctaHeading': 'Запустите dVPN-узел сегодня!',
  'nodeHosting.liveTest': 'Смотреть тест узла в реальном времени',

  // ─── Agentic payments (x402) section ───
  'agentic.heading': 'Первая децентрализованная VPN-сеть для AI-агентов.',
  'agentic.lead':
    'Агенты самостоятельно получают приватность и обходят геоблокировки — без API-ключей, без аккаунтов, без участия человека. Полный день VPN стоит $0.033, оплата происходит автономно в USDC.',
  'agentic.payOnBase': 'Оплата через Base',
  'agentic.soon': 'СКОРО',
  'agentic.launchBtn': 'Открыть x402.sentinel.co',
  'agentic.step1Title': 'Запрос доступа',
  'agentic.step1Body': 'Ваш агент обращается к эндпоинту подключения — на 1, 7 или 30 дней.',
  'agentic.step2Title': 'Получение цены',
  'agentic.step2Body': 'Sentinel отвечает со стоимостью: $0.033 за полный день.',
  'agentic.step3Title': 'Автоматическая оплата',
  'agentic.step3Body': 'Агент самостоятельно подписывает платёж в USDC. Расчёт занимает ~2 секунды.',
  'agentic.step4Title': 'Туннель поднят',
  'agentic.step4Body': 'Зашифрованное соединение WireGuard. Без API-ключей, без аккаунтов, без человека.',
  'agentic.connectAgent': 'ПОДКЛЮЧИТЕ ВАШЕГО АГЕНТА',
  'agentic.claudeAgent': 'Claude Agent',
  'agentic.chatgptAgent': 'ChatGPT Agent',
  'agentic.geminiAgent': 'Gemini Agent',

  // ─── dVPN console ───
  'console.wireguardBadge': 'WIREGUARD · AES-256',
  'console.step01': '01 — ТОЧКА ВЫХОДА',
  'console.step02': '02 — ПЛАТФОРМА',
  'console.step03': '03 — ВЫБЕРИТЕ ПРИЛОЖЕНИЕ',
  'console.statusReady': '> готово к подключению',
  'console.statusConnecting': '> установка зашифрованного туннеля…',
  'console.connectBtn': 'Подключиться к dVPN',
  'console.connectingBtn': 'Подключение…',

  // ─── Sentinel dVPN apps section ───
  'sentinelDvpn.heading': 'Используйте открытые децентрализованные VPN-приложения, которым можно доверять.',
  'sentinelDvpn.lead':
    'Выберите локацию, платформу и приложение — и подключитесь. Каждое представленное приложение работает в сети Sentinel, поэтому ни один провайдер не контролирует пропускную способность, которую вы используете.',
  'apps.norseDesc':
    'Полноценный опыт децентрализованного VPN в удобных приложениях для каждой платформы.',
  'apps.shieldDesc': 'Флагманский открытый dVPN от Sentinel P2P — WireGuard и V2Ray.',
  'apps.rynDesc': 'Чистый, минималистичный приватный VPN, которому доверяют 10M+ человек.',
  'apps.independentDesc': 'Бесплатный децентрализованный VPN на Sentinel — WireGuard и V2Ray.',
  'apps.encryptsimDesc': 'Приватная глобальная eSIM — без KYC, без логов, шифрование уровня SOC2.',
  'apps.meileDesc': 'Десктопный dVPN на базе Sentinel для macOS, Linux и Windows.',
  'apps.valtDesc': 'Захватывайте и защищайте данные, которые вы создаёте каждый день.',

  // ─── Trust-compare (centralized vs Sentinel) section ───
  'centralized.heading': 'Централизованным VPN нельзя доверять.',
  'trustCompare.lead':
    'Централизованный VPN лишь переносит ваше доверие с интернет-провайдера на VPN-компанию — единую точку контроля, которая теперь видит весь ваш трафик, а не только его часть.',
  'trustCompare.centralizedHead': 'Централизованный VPN',
  'trustCompare.sentinelHead': 'Sentinel dVPN',
  'trustCompare.centralizedSub': 'Одна организация контролирует все серверы, все ключи, все логи.',
  'trustCompare.sentinelSub': 'Не существует единой структуры, способной скомпрометировать сеть.',
  'trustCompare.bad1': 'Весь пользовательский трафик проходит через инфраструктуру компании.',
  'trustCompare.good1': 'Трафик идёт напрямую к выбранному вами узлу — без промежуточного слоя.',
  'trustCompare.bad2': '«Без логов» — это юридическое обещание, а не техническая гарантия.',
  'trustCompare.good2': 'Не существует компании, которая могла бы вести логи вашего трафика.',
  'trustCompare.bad3': 'Серверное программное обеспечение является проприетарным и не поддаётся аудиту.',
  'trustCompare.good3': 'Весь код открыт — узел, клиент, протокол, SDK.',
  'trustCompare.bad4': 'Подчиняется судебным повесткам, запретительным ордерам, FISA, NSL.',
  'trustCompare.good4': 'Ни одна отдельная юрисдикция не управляет сетью.',
  'trustCompare.bad5': 'Может быть принуждена к скрытой установке логирования.',
  'trustCompare.good5': 'On-chain авторизация сессий — криптографическая, а не корпоративная.',
  'trustCompare.bad6': 'Автообновление — это доверенный путь выполнения кода.',
  'trustCompare.good6': 'Протокол управляется валидаторами, а не советом директоров.',
  'trustCompare.bad7': 'Корпоративное поглощение может изменить политику в одночасье.',
  'trustCompare.good7': 'WireGuard / V2Ray сквозное шифрование — ключи никогда не покидают ваше устройство.',

  // ─── Network-compare (vs leading P2P networks) section ───
  'compare.heading': 'Как архитектура Sentinel сравнивается с ведущими P2P-сетями.',
  'compare.lead':
    'Уберите основавшую организацию. Заблокируйте загрузочные серверы. Что продолжит работать?',
  'compare.sentinelCallout':
    'Обнаружение осуществляется on-chain, точки входа не требуют разрешений, а реестр живёт до тех пор, пока хоть один валидатор работает. Заблокируйте команду — сеть не пострадает.',
  'compare.viewLiveRpc': 'СМОТРЕТЬ АКТУАЛЬНЫЙ СПИСОК RPC',
  'compare.torSub': 'Луковый маршрутизатор',
  'compare.torFail': 'Центральный каталог',
  'compare.torCallout':
    '9 организаций контролируют каталог сети. Скомпрометируйте или заблокируйте их — и Tor упадёт.',
  'compare.otherTitle': 'Другие on-chain P2P-сети',
  'compare.otherSub': 'Кросс-протокольное сравнение',
  'compare.otherFail': 'Серверы компании',
  'compare.otherCallout':
    'Обнаружение и координация по-прежнему зависят от серверов под управлением компании. Не является по-настоящему децентрализованным на сетевом уровне.',
  'compare.ipfsSub': 'Децентрализованное хранилище',
  'compare.ipfsFail': 'Захардкоженные пиры',
  'compare.ipfsCallout':
    'Kubo поставляется с ~6 захардкоженными бутстрап-пирами Protocol Labs; заблокируйте их — и новые узлы не смогут войти в DHT.',
  'compare.btSub': 'Протокол обмена файлами',
  'compare.btFail': 'Захардкоженные хосты',
  'compare.btCallout':
    'Mainline DHT опирается на ~5 захардкоженных бутстрап-хостов; существующие клиенты могут хранить пиров, но блокировка этих хостов не позволит новым пользователям подключиться.',
  'compare.i2pSub': 'Invisible Internet Project',
  'compare.i2pFail': 'Reseed-серверы',
  'compare.i2pCallout':
    'Захардкоженные reseed URL. Заблокируйте ~8 доменов — и новые пользователи не смогут войти в сеть.',
  'compare.failureMode': 'Режим отказа',
  'compare.rowDiscovery': 'Обнаружение',
  'compare.rowBootstrap': 'Загрузка',
  'compare.rowEntry': 'Точки входа',
  'compare.rowSybil': 'Защита от Sybil',
  'compare.rowState': 'Согласованность состояния',
  'compare.rowGovernance': 'Управление',
  'compare.rowIfOrg': 'Если организация исчезнет',
  'compare.rowVerdict': 'Вердикт',
  'compare.rowRouting': 'Маршрутизация',
  'compare.rowCentralFail': 'Центральная точка отказа',
  'compare.rowRegistry': 'Реестр узлов',
  'compare.rowIfCompany': 'Если компания исчезнет',
  'compare.rowOpenSdk': 'Открытый клиентский SDK',
  'compare.rowSeeds': 'Сиды',
  'compare.rowIfBlocked': 'Если заблокировано',
  'compare.snDiscoveryVal': 'Блокчейн на Cosmos SDK',
  'compare.snBootstrapVal': 'Нет — любой RPC-эндпоинт',
  'compare.snEntryVal': '∞ без разрешений',
  'compare.snSybilVal': 'On-chain регистрационная TX',
  'compare.snStateVal': 'Финальность · блоки ~6s',
  'compare.snGovVal': 'On-chain голосование валидаторов',
  'compare.snOrgVal': 'Валидаторы продолжают работу',
  'compare.snVerdictVal': 'Нечего блокировать',
  'compare.torDiscoveryVal': '9 директорных авторитетов',
  'compare.torRoutingVal': '3-хоп цепочка (медленно)',
  'compare.torCentralFailVal': 'Директорные авторитеты',
  'compare.torOrgVal': 'Сеть деградирует',
  'compare.otherDiscoveryVal': 'Централизованные API-серверы',
  'compare.otherRegistryVal': 'Под управлением компании',
  'compare.otherOrgVal': 'Сеть умирает',
  'compare.otherSdkVal': 'Проприетарный или ограниченный',
  'compare.ipfsBootstrapVal': '~6 захардкоженных пиров',
  'compare.ipfsSybilVal': 'Слабая',
  'compare.btBootstrapVal': '~5 захардкоженных хостов',
  'compare.btSybilVal': 'Слабая (легко затопить)',
  'compare.i2pDiscoveryVal': 'Захардкоженные reseed URL',
  'compare.i2pBootstrapVal': '~8 reseed-серверов',
  'compare.i2pBlockedVal': 'Новые пользователи не могут подключиться',
  'compare.closing':
    'Большинство сетей полагаются на фиксированные точки входа, которые цензоры могут заблокировать. Sentinel использует RPC-эндпоинты без ограничений доступа — их может запустить каждый, где угодно. Пока хотя бы один эндпоинт доступен, сеть остаётся открытой.',

  // ─── Ecosystem grid section ───
  'ecosystem.heading':
    'Не доверяйте централизованному VPN — доверяйте децентрализованному VPN на базе Sentinel',
  'ecosystem.lead': 'dVPN-приложения на базе Sentinel используют 1.4M+ пользователей.',
  'ecosystem.downloadLabel': 'Скачать приложение:',
  'ecosystem.independentBody':
    'Бесплатный децентрализованный VPN на Sentinel — WireGuard и V2Ray; Android и iOS.',
  'ecosystem.rynBody':
    'Приватный VPN на базе Sentinel с чистым минималистичным интерфейсом и аудиторией свыше 10 миллионов человек.',
  'ecosystem.shieldBody':
    'Флагманский открытый dVPN от Sentinel P2P, WireGuard и V2Ray; Android и iOS.',
  'ecosystem.norseBody':
    'Опыт децентрализованного VPN в удобных приложениях для всех платформ.',
  'ecosystem.valtBody':
    'VALT — единственное приложение, позволяющее вам захватывать и защищать данные, которые вы создаёте каждый день.',
  'ecosystem.meileBody': 'Десктопный dVPN на базе Sentinel для macOS, Linux и Windows.',
  'ecosystem.ctaTitle': 'Создайте собственный dVPN',
  'ecosystem.ctaBody':
    'Используйте Sentinel SDK, чтобы выпустить собственный децентрализованный VPN — ваш бренд, ваш протокол, ваша дистрибуция.',
  'ecosystem.ctaStart': 'Начать разработку →',
  'ecosystem.counterBefore': 'Приложениями на базе Sentinel пользуются более',
  'ecosystem.counterAfter': 'человек — и число растёт',

  // ─── Community section ───
  'community.heading': 'Присоединяйтесь к сообществу',
  'community.subtitle': 'Сообщество Sentinel выходит далеко за пределы блокчейна.',
  'community.discordHandle': 'Sentinel Network',
  'community.more': 'Больше от сообщества',
  'community.growthDao': 'Growth DAO',
  'community.p2pNews': 'p2p News',

  // ─── Contact form ───
  'contact.heading': 'Давайте строить вместе',
  'contact.subtitle':
    'Разрабатываете dVPN, интегрируете SDK или подаёте заявку на грант? Расскажите, над чем вы работаете, и мы подберём для вас нужные инструменты, партнёров и специалистов.',
  'contact.fieldName': 'Имя',
  'contact.firstNamePlaceholder': 'Имя',
  'contact.lastNamePlaceholder': 'Фамилия',
  'contact.fieldEmail': 'Email',
  'contact.emailPlaceholder': 'you@yourproject.com',
  'contact.fieldProject': 'Проект',
  'contact.projectPlaceholder': 'Что вы создаёте? dVPN-приложение, флот узлов, интеграцию…',
  'contact.fieldMessage': 'Сообщение',
  'contact.messagePlaceholder':
    'Где вы сейчас — идея, прототип или готовый продукт — и в чём вам нужна помощь?',
  'contact.privacyAgree': 'Я соглашаюсь с',
  'contact.privacyLink': 'политикой конфиденциальности',
  'contact.submit': 'Отправить сообщение',

  // ─── Footer columns ───
  'footer.exploreStats': 'Статистика сети',
  'footer.exploreDashboard': 'Панель управления узлами',
  'footer.exploreNodeMap': 'Карта узлов',
  'footer.exploreExplorer': 'Обозреватель',
  'footer.dvpnShield': 'Sentinel Shield',
  'footer.dvpnIndependent': 'Independent VPN',
  'footer.dvpnNorse': 'DVPN by NORSE',
  'footer.dvpnValt': 'VALT',
  'footer.dvpnRyn': 'Ryn dVPN',
  'footer.dvpnMeile': 'Meile dVPN (beta)',
  'footer.buildPlanManager': 'Plan Manager',
  'footer.buildSdks': 'SDKs',
  'footer.buildPayments': 'Настройка платежей',
  'footer.buildRunNode': 'Запустить узел',
  'footer.buildEarn': 'Заработок на dVPN',
  'footer.buildLearn': 'Обучение',
  'footer.moreDocs': 'Документация dVPN',
  'footer.moreX402': 'Платежи x402',
  'footer.moreNodeTester': 'Sentinel Node Tester',
  'footer.moreContact': 'Связаться с нами',
  'footer.copyright': 'Sentinel © 2026',
  'footer.privacyPolicy': 'Политика конфиденциальности',
};
