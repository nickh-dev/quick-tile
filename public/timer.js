document.addEventListener("DOMContentLoaded", () => {
  const timerBlock = [...document.querySelectorAll(".grid div")].find(
    (block) => block.querySelector("h3")?.textContent.trim() === "Timer"
  );

  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");

  timerBlock.addEventListener("click", () => {
    modalContent.innerHTML = `
      <span class="modal-close">&times;</span>
      <h2>Set Timer</h2>
      <div class="flex space-x-2">
        <input type="number" id="hoursInput" placeholder="HH" class="border p-2 rounded w-1/3 text-center text-2xl" min="0" max="99">
        <span class="text-2xl">:</span>
        <input type="number" id="minutesInput" placeholder="MM" class="border p-2 rounded w-1/3 text-center text-2xl" min="0" max="60">
        <span class="text-2xl">:</span>
        <input type="number" id="secondsInput" placeholder="SS" class="border p-2 rounded w-1/3 text-center text-2xl" min="0" max="60">
      </div>
      <button id="startTimer" class="bg-blue-500 text-white py-2 px-4 rounded mt-4">Start</button>
      <h2 id="timerDisplay" class="text-4xl font-bold mt-4">00:00:00</h2>
      <div id="alarmIcon" class="hidden text-red-500 text-6xl mt-4 cursor-pointer animate-blink">
        <i class="fa-regular fa-clock"></i>
      </div>
    `;

    modal.classList.add("active");

    const hoursInput = document.getElementById("hoursInput");
    const minutesInput = document.getElementById("minutesInput");
    const secondsInput = document.getElementById("secondsInput");
    const startTimer = document.getElementById("startTimer");
    const timerDisplay = document.getElementById("timerDisplay");
    const alarmIcon = document.getElementById("alarmIcon");
    const modalClose = document.querySelector(".modal-close");

    let countdown;

    // Ограничение ввода (максимум 60 минут и секунд)
    [minutesInput, secondsInput].forEach((input) => {
      input.addEventListener("input", () => {
        if (parseInt(input.value) > 60) {
          input.value = 60;
        }
      });
    });

    startTimer.addEventListener("click", () => {
      clearInterval(countdown);

      let hours = parseInt(hoursInput.value) || 0;
      let minutes = parseInt(minutesInput.value) || 0;
      let seconds = parseInt(secondsInput.value) || 0;

      // Проверяем, что введённые данные не превышают 60
      if (minutes > 60 || seconds > 60) {
        timerDisplay.textContent = "Max 60 minutes & 60 seconds!";
        return;
      }

      let totalSeconds = hours * 3600 + minutes * 60 + seconds;
      if (totalSeconds <= 0) {
        timerDisplay.textContent = "Enter valid time!";
        return;
      }

      alarmIcon.classList.add("hidden"); // Скрываем иконку при новом запуске

      countdown = setInterval(() => {
        if (totalSeconds > 0) {
          let h = Math.floor(totalSeconds / 3600);
          let m = Math.floor((totalSeconds % 3600) / 60);
          let s = totalSeconds % 60;

          timerDisplay.textContent = `${String(h).padStart(2, "0")}:${String(
            m
          ).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

          totalSeconds--;
        } else {
          clearInterval(countdown);
          timerDisplay.textContent = "Time's up!";
          alarmIcon.classList.remove("hidden"); // Показываем мигающую иконку
        }
      }, 1000);
    });

    // Удаление мигающей иконки при клике
    alarmIcon.addEventListener("click", () => {
      alarmIcon.classList.add("hidden");
    });

    // Закрытие модального окна
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
      clearInterval(countdown);
    });
  });
});
