
const copyButton = document.getElementById("copyButton");
const serverAddress = document.getElementById("serverAddress");

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
