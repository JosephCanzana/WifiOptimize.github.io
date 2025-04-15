document.getElementById("optimizeBtn").addEventListener("click", () => {
    const statusDiv = document.getElementById("status");
    const progressBar = document.getElementById("progressBar");
    const fakeMsg = document.getElementById("fakeMessage");
    const rickrollDiv = document.getElementById("rickroll");
  
    document.getElementById("optimizeBtn").disabled = true;
    statusDiv.style.display = "block";
  
    let progress = 0;
  
    const messages = [
      "Initializing optimization engine...",
      "Pinging nearby access points...",
      "Syncing with cloud-based neural AI...",
      "Maximizing signal throughput...",
      "Removing bandwidth bottlenecks...",
      "Tuning antenna frequencies...",
      "Calibrating dynamic signal filters...",
      "Finalizing optimization sequence...",
      "Securing optimal data flow...",
      "Boosting performance..."
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
      "Proverbs 3:5 – Trust in the Lord with all your heart...",
      "Isaiah 41:10 – So do not fear, for I am with you.",
      "Matthew 11:28 – Come to me, all you who are weary, and I will give you rest.",
      "John 3:16 – For God so loved the world...",
      "2 Corinthians 5:7 – For we live by faith, not by sight.",
      "Psalm 46:1 – God is our refuge and strength."
    ];
  
    const verse = verses[Math.floor(Math.random() * verses.length)];
    const container = document.getElementById("bibleVerses");
  
    const p = document.createElement("p");
    p.className = "fs-6 text-secondary";
    p.innerHTML = `<em>“${verse}”</em>`;
    container.appendChild(p);
  }
  