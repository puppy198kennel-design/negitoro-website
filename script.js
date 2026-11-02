
// ========================================
// Negitoro Server - Multilingual Script
// ========================================


// ========================================
// 翻訳データ
// ========================================

const translations = {

    ja: {
        nav_servers: "サーバー紹介",
        nav_features: "特徴",
        nav_join: "参加方法",
        nav_news: "お知らせ",
        nav_guide: "ガイド",
        header_button: "JOIN US ↗",

        hero_title_1: "新しい冒険を、",
        hero_title_2: "ここから。",
        hero_description: "仲間と出会い、自分だけの物語を作ろう。",
        hero_button: "参加方法を見る →",

        refresh: "↻ 更新",
        refresh_loading: "更新中...",
        status_checking: "サーバー状況を確認しています...",
        status_online: "Negitoro Serverは現在オンラインです！",
        status_offline: "現在サーバーに接続できません。",
        status_error: "サーバー状況を取得できませんでした。",
        last_updated: "最終確認：",

        about_title: "遊び方は、あなた次第。",
        about_description: "Negitoro Serverは、さまざまな楽しみ方ができるMinecraft総合サーバーです。冒険、建築、交流。自分だけの楽しみ方を見つけよう。",

        about_adventure_title: "冒険する",
        about_adventure_text: "自分だけの冒険を楽しもう。",
        about_build_title: "建築する",
        about_build_text: "自由な発想で世界を作ろう。",
        about_social_title: "交流する",
        about_social_text: "仲間と一緒に楽しもう。",
        about_free_title: "自由に遊ぶ",
        about_free_text: "自分らしい遊び方を見つけよう。",

        features_title: "サーバーの特徴",
        feature_world_title: "多彩な世界",
        feature_world_text: "さまざまなコンテンツを楽しめます。",
        feature_friends_title: "みんなで遊べる",
        feature_friends_text: "仲間と一緒に冒険や建築を楽しもう。",
        feature_free_title: "自由な遊び方",
        feature_free_text: "自分に合った楽しみ方を見つけよう。",

        join_title: "サーバーに参加しよう",
        join_address: "サーバーアドレス",
        copy: "コピー",
        copied: "コピーしました！",
        copy_error: "コピーできませんでした。",
        address_not_ready: "サーバーアドレスはまだ設定されていません！",

        news_title: "お知らせ",
        news_first: "公式サイト制作開始！"
    },

    en: {
        nav_servers: "Servers",
        nav_features: "Features",
        nav_join: "How to Join",
        nav_news: "News",
        nav_guide: "Guide",
        header_button: "JOIN US ↗",

        hero_title_1: "A new adventure,",
        hero_title_2: "starts here.",
        hero_description: "Meet new friends and create your own story.",
        hero_button: "How to Join →",

        refresh: "↻ Refresh",
        refresh_loading: "Refreshing...",
        status_checking: "Checking server status...",
        status_online: "Negitoro Server is currently online!",
        status_offline: "The server is currently unavailable.",
        status_error: "Unable to retrieve server status.",
        last_updated: "Last checked: ",

        about_title: "Play Your Way.",
        about_description: "Negitoro Server is a Minecraft community server with many ways to enjoy the game. Adventure, building, and friendship. Find your own way to play.",

        about_adventure_title: "Adventure",
        about_adventure_text: "Enjoy your own adventures.",
        about_build_title: "Build",
        about_build_text: "Create a world with your imagination.",
        about_social_title: "Connect",
        about_social_text: "Have fun together with friends.",
        about_free_title: "Play Freely",
        about_free_text: "Find your own way to enjoy the game.",

        features_title: "Server Features",
        feature_world_title: "Various Worlds",
        feature_world_text: "Enjoy a variety of content.",
        feature_friends_title: "Play Together",
        feature_friends_text: "Explore and build with your friends.",
        feature_free_title: "Freedom to Play",
        feature_free_text: "Find the playstyle that suits you.",

        join_title: "Join the Server",
        join_address: "Server Address",
        copy: "Copy",
        copied: "Copied!",
        copy_error: "Failed to copy.",
        address_not_ready: "The server address has not been set yet!",

        news_title: "News",
        news_first: "Official website development has started!"
    },

    ko: {
        nav_servers: "서버 소개",
        nav_features: "특징",
        nav_join: "참가 방법",
        nav_news: "소식",
        nav_guide: "가이드",
        header_button: "JOIN US ↗",

        hero_title_1: "새로운 모험을,",
        hero_title_2: "여기서 시작하세요.",
        hero_description: "친구를 만나고 나만의 이야기를 만들어 보세요.",
        hero_button: "참가 방법 보기 →",

        refresh: "↻ 새로고침",
        refresh_loading: "새로고침 중...",
        status_checking: "서버 상태를 확인하고 있습니다...",
        status_online: "Negitoro Server가 현재 온라인입니다!",
        status_offline: "현재 서버에 접속할 수 없습니다.",
        status_error: "서버 상태를 가져올 수 없습니다.",
        last_updated: "마지막 확인: ",

        about_title: "플레이 방식은 당신의 자유!",
        about_description: "Negitoro Server는 다양한 방식으로 즐길 수 있는 Minecraft 종합 서버입니다. 모험, 건축, 교류. 나만의 즐거움을 찾아보세요.",

        about_adventure_title: "모험하기",
        about_adventure_text: "나만의 모험을 즐겨보세요.",
        about_build_title: "건축하기",
        about_build_text: "자유로운 상상력으로 세상을 만들어 보세요.",
        about_social_title: "교류하기",
        about_social_text: "친구들과 함께 즐겨보세요.",
        about_free_title: "자유롭게 플레이",
        about_free_text: "나만의 플레이 방식을 찾아보세요.",

        features_title: "서버 특징",
        feature_world_title: "다양한 세계",
        feature_world_text: "다양한 콘텐츠를 즐길 수 있습니다.",
        feature_friends_title: "함께 플레이",
        feature_friends_text: "친구들과 모험과 건축을 즐겨보세요.",
        feature_free_title: "자유로운 플레이",
        feature_free_text: "자신에게 맞는 즐거움을 찾아보세요.",

        join_title: "서버에 참가하세요",
        join_address: "서버 주소",
        copy: "복사",
        copied: "복사되었습니다!",
        copy_error: "복사할 수 없습니다.",
        address_not_ready: "서버 주소가 아직 설정되지 않았습니다!",

        news_title: "공지사항",
        news_first: "공식 사이트 제작 시작!"
    },

    "zh-CN": {
        nav_servers: "服务器介绍",
        nav_features: "特色",
        nav_join: "加入方法",
        nav_news: "公告",
        nav_guide: "指南",
        header_button: "加入我们 ↗",

        hero_title_1: "新的冒险，",
        hero_title_2: "从这里开始。",
        hero_description: "结识伙伴，创造属于自己的故事。",
        hero_button: "查看加入方法 →",

        refresh: "↻ 刷新",
        refresh_loading: "正在刷新...",
        status_checking: "正在检查服务器状态...",
        status_online: "Negitoro Server目前在线！",
        status_offline: "目前无法连接服务器。",
        status_error: "无法获取服务器状态。",
        last_updated: "最后检查：",

        about_title: "玩法由你决定。",
        about_description: "Negitoro Server是一个提供多种玩法的Minecraft综合服务器。冒险、建筑、交流，寻找属于自己的乐趣。",

        about_adventure_title: "冒险",
        about_adventure_text: "享受属于自己的冒险。",
        about_build_title: "建筑",
        about_build_text: "用自由的想象力创造世界。",
        about_social_title: "交流",
        about_social_text: "和伙伴们一起享受游戏。",
        about_free_title: "自由游玩",
        about_free_text: "寻找属于自己的游戏方式。",

        features_title: "服务器特色",
        feature_world_title: "丰富的世界",
        feature_world_text: "享受各种各样的内容。",
        feature_friends_title: "一起游玩",
        feature_friends_text: "和伙伴一起冒险和建筑。",
        feature_free_title: "自由玩法",
        feature_free_text: "找到适合自己的玩法。",

        join_title: "加入服务器",
        join_address: "服务器地址",
        copy: "复制",
        copied: "已复制！",
        copy_error: "复制失败。",
        address_not_ready: "服务器地址尚未设置！",

        news_title: "公告",
        news_first: "官方网站开始制作！"
    },

    "zh-TW": {
        nav_servers: "伺服器介紹",
        nav_features: "特色",
        nav_join: "加入方法",
        nav_news: "公告",
        nav_guide: "指南",
        header_button: "加入我們 ↗",

        hero_title_1: "新的冒險，",
        hero_title_2: "從這裡開始。",
        hero_description: "認識夥伴，創造屬於自己的故事。",
        hero_button: "查看加入方法 →",

        refresh: "↻ 重新整理",
        refresh_loading: "更新中...",
        status_checking: "正在確認伺服器狀態...",
        status_online: "Negitoro Server目前在線上！",
        status_offline: "目前無法連線至伺服器。",
        status_error: "無法取得伺服器狀態。",
        last_updated: "最後確認：",

        about_title: "玩法由你決定。",
        about_description: "Negitoro Server是一個提供多種玩法的Minecraft綜合伺服器。冒險、建築、交流，尋找屬於自己的樂趣。",

        about_adventure_title: "冒險",
        about_adventure_text: "享受屬於自己的冒險。",
        about_build_title: "建築",
        about_build_text: "用自由的想像力創造世界。",
        about_social_title: "交流",
        about_social_text: "和夥伴們一起享受遊戲。",
        about_free_title: "自由遊玩",
        about_free_text: "尋找屬於自己的遊戲方式。",

        features_title: "伺服器特色",
        feature_world_title: "豐富的世界",
        feature_world_text: "享受各種各樣的內容。",
        feature_friends_title: "一起遊玩",
        feature_friends_text: "和夥伴一起冒險和建築。",
        feature_free_title: "自由玩法",
        feature_free_text: "找到適合自己的玩法。",

        join_title: "加入伺服器",
        join_address: "伺服器位址",
        copy: "複製",
        copied: "已複製！",
        copy_error: "複製失敗。",
        address_not_ready: "伺服器位址尚未設定！",

        news_title: "公告",
        news_first: "官方網站開始製作！"
    },

    de: {
        nav_servers: "Server",
        nav_features: "Funktionen",
        nav_join: "Beitreten",
        nav_news: "Neuigkeiten",
        nav_guide: "Anleitung",
        header_button: "JETZT BEITRETEN ↗",

        hero_title_1: "Ein neues Abenteuer,",
        hero_title_2: "beginnt hier.",
        hero_description: "Lerne neue Freunde kennen und erschaffe deine eigene Geschichte.",
        hero_button: "So trittst du bei →",

        refresh: "↻ Aktualisieren",
        refresh_loading: "Wird aktualisiert...",
        status_checking: "Serverstatus wird überprüft...",
        status_online: "Negitoro Server ist derzeit online!",
        status_offline: "Der Server ist derzeit nicht erreichbar.",
        status_error: "Serverstatus konnte nicht abgerufen werden.",
        last_updated: "Zuletzt geprüft: ",

        about_title: "Spiele auf deine Weise.",
        about_description: "Negitoro Server ist ein vielseitiger Minecraft-Server mit vielen Möglichkeiten. Abenteuer, Bauen und Gemeinschaft. Finde deinen eigenen Spielstil.",

        about_adventure_title: "Abenteuer",
        about_adventure_text: "Erlebe deine eigenen Abenteuer.",
        about_build_title: "Bauen",
        about_build_text: "Erschaffe eine Welt mit deiner Fantasie.",
        about_social_title: "Gemeinschaft",
        about_social_text: "Hab gemeinsam mit Freunden Spaß.",
        about_free_title: "Frei spielen",
        about_free_text: "Finde deinen eigenen Spielstil.",

        features_title: "Server-Features",
        feature_world_title: "Vielfältige Welten",
        feature_world_text: "Entdecke viele verschiedene Inhalte.",
        feature_friends_title: "Gemeinsam spielen",
        feature_friends_text: "Erkunde und baue gemeinsam mit Freunden.",
        feature_free_title: "Freies Spielen",
        feature_free_text: "Finde die passende Spielweise für dich.",

        join_title: "Tritt dem Server bei",
        join_address: "Serveradresse",
        copy: "Kopieren",
        copied: "Kopiert!",
        copy_error: "Kopieren fehlgeschlagen.",
        address_not_ready: "Die Serveradresse wurde noch nicht festgelegt!",

        news_title: "Neuigkeiten",
        news_first: "Die Entwicklung der offiziellen Website hat begonnen!"
    },

    fr: {
        nav_servers: "Serveurs",
        nav_features: "Fonctionnalités",
        nav_join: "Nous rejoindre",
        nav_news: "Actualités",
        nav_guide: "Guide",
        header_button: "NOUS REJOINDRE ↗",

        hero_title_1: "Une nouvelle aventure,",
        hero_title_2: "commence ici.",
        hero_description: "Rencontrez de nouveaux amis et créez votre propre histoire.",
        hero_button: "Comment rejoindre →",

        refresh: "↻ Actualiser",
        refresh_loading: "Actualisation...",
        status_checking: "Vérification du serveur...",
        status_online: "Negitoro Server est actuellement en ligne !",
        status_offline: "Le serveur est actuellement inaccessible.",
        status_error: "Impossible de récupérer le statut du serveur.",
        last_updated: "Dernière vérification : ",

        about_title: "Jouez à votre façon.",
        about_description: "Negitoro Server est un serveur Minecraft polyvalent offrant de nombreuses possibilités. Aventure, construction et rencontres. Trouvez votre propre façon de jouer.",

        about_adventure_title: "Aventure",
        about_adventure_text: "Profitez de vos propres aventures.",
        about_build_title: "Construction",
        about_build_text: "Créez un monde selon votre imagination.",
        about_social_title: "Rencontres",
        about_social_text: "Amusez-vous avec vos amis.",
        about_free_title: "Jouer librement",
        about_free_text: "Trouvez votre propre façon de jouer.",

        features_title: "Fonctionnalités du serveur",
        feature_world_title: "Des mondes variés",
        feature_world_text: "Profitez de nombreux contenus.",
        feature_friends_title: "Jouer ensemble",
        feature_friends_text: "Explorez et construisez avec vos amis.",
        feature_free_title: "Liberté de jeu",
        feature_free_text: "Trouvez le style qui vous convient.",

        join_title: "Rejoindre le serveur",
        join_address: "Adresse du serveur",
        copy: "Copier",
        copied: "Copié !",
        copy_error: "Échec de la copie.",
        address_not_ready: "L'adresse du serveur n'a pas encore été définie !",

        news_title: "Actualités",
        news_first: "La création du site officiel a commencé !"
    }

};


// ========================================
// 言語設定
// ========================================

const languageSelect = document.getElementById("languageSelect");

const supportedLanguages = Object.keys(translations);

function getInitialLanguage() {

    const savedLanguage = localStorage.getItem("negitoro-language");

    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
        return savedLanguage;
    }

    const browserLanguages = navigator.languages || [navigator.language];

    for (const browserLanguage of browserLanguages) {

        const normalized = browserLanguage.toLowerCase();

        if (normalized.startsWith("zh-tw") ||
            normalized.startsWith("zh-hk")) {
            return "zh-TW";
        }

        if (normalized.startsWith("zh")) {
            return "zh-CN";
        }

        const match = supportedLanguages.find(language =>
            language !== "zh-CN" &&
            language !== "zh-TW" &&
            normalized.startsWith(language.toLowerCase())
        );

        if (match) {
            return match;
        }
    }

    return "ja";
}

let currentLanguage = getInitialLanguage();

function t(key) {

    return translations[currentLanguage]?.[key]
        ?? translations.ja[key]
        ?? key;

}


// ========================================
// ページ翻訳
// ========================================

function applyLanguage(language) {

    if (!supportedLanguages.includes(language)) {
        language = "ja";
    }

    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        element.textContent = t(key);

    });

    // About description
    const aboutDescription = document.querySelector(
        '[data-i18n="about_description"]'
    );

    if (aboutDescription) {
        aboutDescription.textContent = t("about_description");
    }

    // 言語選択欄
    if (languageSelect) {
        languageSelect.value = language;
    }

    // ページタイトル
    const titles = {
        ja: "Negitoro Server - 公式サイト",
        en: "Negitoro Server - Official Website",
        ko: "Negitoro Server - 공식 웹사이트",
        "zh-CN": "Negitoro Server - 官方网站",
        "zh-TW": "Negitoro Server - 官方網站",
        de: "Negitoro Server - Offizielle Website",
        fr: "Negitoro Server - Site officiel"
    };

    document.title = titles[language];

    localStorage.setItem("negitoro-language", language);

    // 動的表示も選択言語に合わせる
    updateDynamicTranslations();
}


// ========================================
// 動的表示の翻訳
// ========================================

function updateDynamicTranslations() {

    if (statusMessage) {

        if (statusLabel?.classList.contains("online")) {
            statusMessage.textContent = t("status_online");

        } else if (statusLabel?.classList.contains("offline")) {
            statusMessage.textContent = t("status_offline");

        } else if (statusLabel?.classList.contains("unknown")) {
            statusMessage.textContent = t("status_error");
        }
    }

    if (refreshStatusButton && !isUpdatingStatus) {
        refreshStatusButton.textContent = t("refresh");
    }
}


// 言語変更イベント
if (languageSelect) {

    languageSelect.addEventListener("change", () => {
        applyLanguage(languageSelect.value);
    });

}


// ========================================
// サーバーアドレスコピー機能
// ========================================

const copyButton = document.getElementById("copyButton");
const serverAddress = document.getElementById("serverAddress");

if (copyButton && serverAddress) {

    copyButton.addEventListener("click", async () => {

        const address = serverAddress.textContent.trim();

        if (address === "準備中") {
            alert(t("address_not_ready"));
            return;
        }

        try {

            await navigator.clipboard.writeText(address);

            copyButton.textContent = t("copied");

            setTimeout(() => {
                copyButton.textContent = t("copy");
            }, 2000);

        } catch {

            alert(t("copy_error"));

        }

    });

}


// ========================================
// サーバーオンライン状況取得機能
// ========================================

const STATUS_API_URL =
    "https://api.mcstatus.io/v2/status/java/nicely-doses.tun.ply.gg";

const statusLabel = document.getElementById("serverStatus");
const playerCount = document.getElementById("playerCount");
const playerMax = document.getElementById("playerMax");
const statusMessage = document.getElementById("statusMessage");
const statusBarFill = document.getElementById("statusBarFill");
const statusLastUpdated = document.getElementById("statusLastUpdated");

const refreshStatusButton = document.getElementById("refreshStatusButton");

let isUpdatingStatus = false;


// ========================================
// サーバー状況更新
// ========================================

async function updateServerStatus() {

    if (
        !statusLabel ||
        !playerCount ||
        !playerMax ||
        !statusMessage ||
        !statusBarFill
    ) {
        return;
    }

    if (isUpdatingStatus) {
        return;
    }

    isUpdatingStatus = true;

    if (refreshStatusButton) {
        refreshStatusButton.disabled = true;
        refreshStatusButton.textContent = t("refresh_loading");
    }

    try {

        const response = await fetch(STATUS_API_URL, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("API connection failed");
        }

        const data = await response.json();

        if (data.online) {

            const online = data.players.online;
            const max = data.players.max;

            statusLabel.textContent = "ONLINE";
            statusLabel.className = "status-label online";

            playerCount.textContent = online;
            playerMax.textContent = max;

            statusMessage.textContent = t("status_online");

            const percentage = max > 0
                ? Math.min((online / max) * 100, 100)
                : 0;

            statusBarFill.style.width = percentage + "%";

        } else {

            statusLabel.textContent = "OFFLINE";
            statusLabel.className = "status-label offline";

            playerCount.textContent = "0";
            playerMax.textContent = "100";

            statusMessage.textContent = t("status_offline");

            statusBarFill.style.width = "0%";

        }

        if (statusLastUpdated) {

            statusLastUpdated.innerHTML =
                `<span>${t("last_updated")}</span>` +
                new Date().toLocaleTimeString(
                    currentLanguage === "zh-CN" ? "zh-CN" : currentLanguage
                );

        }

    } catch (error) {

        statusLabel.textContent = "UNKNOWN";
        statusLabel.className = "status-label unknown";

        statusMessage.textContent = t("status_error");

        statusBarFill.style.width = "0%";

        console.error("Server Status Error:", error);

    } finally {

        isUpdatingStatus = false;

        if (refreshStatusButton) {
            refreshStatusButton.disabled = false;
            refreshStatusButton.textContent = t("refresh");
        }

    }

}


// ========================================
// 手動更新ボタン
// ========================================

if (refreshStatusButton) {

    refreshStatusButton.addEventListener("click", () => {
        updateServerStatus();
    });

}


// ========================================
// 初期化
// ========================================

// 最初の言語を適用
applyLanguage(currentLanguage);

// ページ読み込み時にサーバー状況を取得
updateServerStatus();

// 60秒ごとに自動更新
setInterval(updateServerStatus, 60000);
