function changeStatus() {
    const statusText = document.getElementById('status');
    if (statusText.innerText === "Online") {
        statusText.innerText = "Offline";
        statusText.style.color = "red";
    } else {
        statusText.innerText = "Online";
        statusText.style.color = "#00ff41";
    }
}
