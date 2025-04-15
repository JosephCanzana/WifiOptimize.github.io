document.getElementById("optimizeBtn").addEventListener("click", () => {
  const statusDiv = document.getElementById("status");
  const progressBar = document.getElementById("progressBar");
  const fakeMsg = document.getElementById("fakeMessage");
  const rickrollDiv = document.getElementById("rickroll");

  document.getElementById("optimizeBtn").disabled = true;
  statusDiv.style.display = "block";

  let progress = 0;

  const messages = [
    "Establishing secure handshake with DNS servers...",
    "Scanning nearby WiFi frequencies...",
    "Applying adaptive QoS filters...",
    "Optimizing TCP window size...",
    "Encrypting data streams with 4096-bit keys...",
    "Patching bandwidth leaks...",
    "Synchronizing with orbital satellites...",
    "Finalizing SmartStream protocol...",
    "Applying burst buffers...",
    "Finishing touches...",
  ];

  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    progressBar.innerText = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", progress);

    if (progress % 10 === 0 && messages.length > 0) {
      fakeMsg.innerText = messages.shift();
    }

    if (progress >= 100) {
      clearInterval(interval);
      statusDiv.style.display = "none";
      rickrollDiv.style.display = "block";

      const video = document.getElementById("rickVideo");
      video.muted = false;
      video.play();

      showBibleVerse();
    }
  }, 100);
});

function showBibleVerse() {
    const verses = [
      "Philippians 4:13 – I can do all things through Christ who strengthens me.",
      "Jeremiah 29:11 – For I know the plans I have for you, declares the Lord...",
      "Psalm 23:1 – The Lord is my shepherd, I lack nothing.",
      "Romans 8:28 – All things work together for good to those who love God.",
      "Proverbs 3:5 – Trust in the Lord with all your heart and lean not on your own understanding.",
      "Isaiah 41:10 – So do not fear, for I am with you; do not be dismayed, for I am your God.",
      "Matthew 11:28 – Come to me, all you who are weary and burdened, and I will give you rest.",
      "John 3:16 – For God so loved the world that he gave his one and only Son...",
      "2 Corinthians 5:7 – For we live by faith, not by sight.",
      "Psalm 46:1 – God is our refuge and strength, an ever-present help in trouble."
    ];
  
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    const container = document.getElementById("bibleVerses");
  
    const p = document.createElement("p");
    p.className = "mt-4 fs-6 text-secondary";
    p.innerHTML = `<em>“${randomVerse}”</em>`;
    container.appendChild(p);
  }
  
