// List of sound files (must exist in sounds folder)
const sounds = ["sound1", "sound2", "sound3", "sound4"];

const buttonsContainer = document.getElementById("buttons");

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopAllSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "STOP";

stopBtn.addEventListener("click", stopAllSounds);
buttonsContainer.appendChild(stopBtn);

// Stops all playing audio
function stopAllSounds() {
  // Create a copy to stop ALL audio globally
  const audios = document.getElementsByTagName("audio");
  for (let audio of audios) {
    audio.pause();
    audio.currentTime = 0;
  }
}