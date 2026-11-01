// ========================================
// Negitoro Server - Script
// ========================================

// サーバーアドレスコピー機能
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

            statusMessage.textContent =
                "Negitoro Serverは現在オンラインです！";

            const percentage = max > 0
                ? Math.min((online / max) * 100, 100)
                : 0;

            statusBarFill.style.width = percentage + "%";

        } else {

            statusLabel.textContent = "OFFLINE";
            statusLabel.className = "status-label offline";

            playerCount.textContent = "0";
            playerMax.textContent = "100";

            statusMessage.textContent =
                "現在サーバーに接続できません。";

            statusBarFill.style.width = "0%";
        }

        if (statusLastUpdated) {
            statusLastUpdated.textContent =
                "最終確認：" + new Date().toLocaleTimeString("ja-JP");
        }

    } catch (error) {

        statusLabel.textContent = "UNKNOWN";
        statusLabel.className = "status-label unknown";

        statusMessage.textContent =
            "サーバー状況を取得できませんでした。";

        statusBarFill.style.width = "0%";

        console.error("Server Status Error:", error);
    }
}


// ページ読み込み時に取得
updateServerStatus();

// 60秒ごとに更新
setInterval(updateServerStatus, 60000);
