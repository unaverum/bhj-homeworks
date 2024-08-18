document.addEventListener("DOMContentLoaded", () => {
    const adsRotator = document.querySelectorAll(".card");
  
    adsRotator.forEach((rotator) => {
      const classCases = Array.from(rotator.querySelectorAll(".rotator__case"));
      let currentIndex = 0;
  
      function rotateAds() {
        classCases[currentIndex].classList.remove("rotator__case_active");
        currentIndex = (currentIndex + 1) % classCases.length;
        classCases[currentIndex].classList.add("rotator__case_active");
      }
      setInterval(rotateAds, 1000);
    });
  });
//вопрос: не могли бы вы, пожалуйста, подсказать иной способ, как выполнить эту задачу без использования domcontentloaded? не смогла понять:(