
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        document.getElementById("webcam").srcObject = stream;
    })
    .catch(error => console.log("Webcam access denied:", error));


let viewers = 702;
function increaseViewers() {
    viewers++;
    document.getElementById("viewerCount").innerText = viewers;
}
function decreaseViewers() {
    if (viewers > 1) {
        viewers--;
        document.getElementById("viewerCount").innerText = viewers;
    }
}


const floatingContainer = document.getElementById("floatingContainer");

function sendMessage() {
    const input = document.getElementById("chatInput");
    if (input.value.trim() === "") return;

    const message = document.createElement("div");
    message.classList.add("floating-message");
    message.innerText = input.value;

    positionFloatingElement(message);
    floatingContainer.appendChild(message);

    setTimeout(() => message.remove(), 4000);
    input.value = "";
}

function sendReaction(emoji) {
    const reaction = document.createElement("div");
    reaction.classList.add("floating-reaction");
    reaction.innerText = emoji;

    positionFloatingElement(reaction);
    floatingContainer.appendChild(reaction);

    setTimeout(() => reaction.remove(), 4000);
}


function positionFloatingElement(element) {
    const containerWidth = floatingContainer.offsetWidth;
    element.style.left = Math.random() * (containerWidth - 50) + "px";
}


function uploadVideo() {
    const fileInput = document.getElementById("videoUpload");
    const videoPlayer = document.getElementById("videoPlayer");

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const objectURL = URL.createObjectURL(file);
        videoPlayer.src = objectURL;
        videoPlayer.play();
    }
}
