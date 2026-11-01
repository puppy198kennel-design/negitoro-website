
// =================================
// Negitoro Server - Copy Address
// =================================

const copyButton = document.getElementById("copyButton");
const serverAddress = document.getElementById("serverAddress");

if (copyButton && serverAddress) {
    copyButton.addEventListener("click", async () => {
        const address = serverAddress.textContent.trim();

        if (address === "準備中") {
            alert("サーバーアドレスはまだ設定されていません！");
            return;
        }

        try {
            await navigator.clipboard.writeText(address);
            copyButton.textContent = "コピーしました！";

            setTimeout(() => {
                copyButton.textContent = "コピー";
            }, 2000);
        } catch {
            alert("コピーできませんでした。");
        }
    });
}


// =================================
// Negitoro Server - Online Status
// =================================

const statusElements = {
    status: document.getElementById("onlineStatus"),
    online: document.getElementById("onlinePlayers"),
    max: document.getElementById("maxPlayers"),
    bar: document.getElementById("statusBarFill"),
    message: document.getElementById("statusMessage")
};

const API_URL =
    "https://api.mcstatus.io/v2/status/java/nicely-doses.tun.ply.gg?query=false";

async function updateServerStatus() {
    // HTMLに表示欄がなければ何もしない
    if (Object.values(statusElements).some(element => !element)) {
        return;
    }

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        if (data.online !== true) {
            statusElements.status.textContent = "● OFFLINE";
            statusElements.status.className = "status-offline";
            statusElements.online.textContent = "0";
            statusElements.max.textContent = "--";
            statusElements.bar.style.width = "0%";
            statusElements.message.textContent =
                "現在サーバーに接続できません。";
            return;
        }

        const online = Number(data.players?.online);
        const max = Number(data.players?.max);

        if (!Number.isFinite(online) || !Number.isFinite(max) || max <= 0) {
            throw new Error("Invalid player data");
        }

        const percentage = Math.min(100, Math.max(0, online / max * 100));

        statusElements.status.textContent = "● ONLINE";
        statusElements.status.className = "status-online";
        statusElements.online.textContent = online;
        statusElements.max.textContent = max;
        statusElements.bar.style.width = percentage + "%";
        statusElements.message.textContent =
            "Negitoro Network は正常に稼働中です！";

    } catch (error) {
        console.error("[Negitoro Status]", error);

        statusElements.status.textContent = "● UNKNOWN";
        statusElements.status.className = "status-unknown";
        statusElements.online.textContent = "--";
        statusElements.max.textContent = "--";
        statusElements.bar.style.width = "0%";
        statusElements.message.textContent =
            "サーバー情報を取得できませんでした。";
    }
}

// 初回取得
updateServerStatus();

// 60秒ごとに更新（APIのキャッシュ期間に合わせる）
setInterval(updateServerStatus, 60000);
