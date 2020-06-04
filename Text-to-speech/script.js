const main = document.querySelector("main"),
   voicesSelect = document.getElementById("voices"),
   textarea = document.getElementById("text"),
   readBtn = document.getElementById("read"),
   toggleBtn = document.getElementById("toggle"),
   closeBtn = document.getElementById("close");

const data = [
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fdrink.jpg?v=1591184481196",
      text: "I'm Thirsty"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Ffood.jpg?v=1591184486222",
      text: "I'm Hungry"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Ftired.jpg?v=1591184502887",
      text: "I'm Tired"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fhurt.jpg?v=1591184492013",
      text: "I'm Hurt"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fhappy.jpg?v=1591184488180",
      text: "I'm Happy"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fangry.jpg?v=1591184846968",
      text: "I'm Angry"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fsad.jpg?v=1591184496357",
      text: "I'm Sad"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fscared.jpg?v=1591184498479",
      text: "I'm Scared"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Foutside.jpg?v=1591184493976",
      text: "I Want To Go Outside"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fhome.jpg?v=1591184490020",
      text: "I Want To Go Home"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fschool.jpg?v=1591184500934",
      text: "I Want To Go To School"
   },
   {
      image:
         "https://cdn.glitch.com/a69659cd-e334-4875-9ebc-bf4ccd6d23dc%2Fgrandma.jpg?v=1591184487437",
      text: "I Want To Go To Grandmas"
   }
];

data.forEach(createBox);

//Create Speech Boxes
function createBox(item) {
   //console.log(item);
   const box = document.createElement("div");
   const { image, text } = item;
   box.classList.add("box");
   box.innerHTML = `
   <img src="${image}" alt="${text}"/>
   <p class="info">${text}</p>
   `;

   box.addEventListener("click", () => {
      setTextMessage(text);
      speakText();
      //Adding an Active Effect
      box.classList.add("active");
      setTimeout(() => box.classList.remove("active"), 800);
   });
   main.appendChild(box);
}
//Init Speech Synthesis
const message = new SpeechSynthesisUtterance();

//Storing the Voices in an array
let voices = [];
function getVoices() {
   voices = speechSynthesis.getVoices();
   voices.forEach(voice => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.innerText = `${voice.name} ${voice.lang}`;

      voicesSelect.appendChild(option);
   });
}
//Set Text
setTextMessage = text => {
   message.text = text;
};
//Speak this text
speakText = () => {
   speechSynthesis.speak(message);
};

//Set a voice
setVoice = e => {
   message.voice = voices.find(voice => voice.name === e.target.value);
};

//Voice CHanged
speechSynthesis.addEventListener("voiceschanged", getVoices);

// Toggling the text Box
toggleBtn.addEventListener("click", () =>
   document.getElementById("text-box").classList.toggle("show")
);

//Close the text Box using the Close btn
closeBtn.addEventListener("click", () =>
   document.getElementById("text-box").classList.remove("show")
);

//Change Voice
voicesSelect.addEventListener("change", setVoice);

//Read text Button
readBtn.addEventListener("click", () => {
   setTextMessage(textarea.value);
   speakText();
});

getVoices();
