const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  document.getElementById("message").innerText = "Countdown started";

  const update = document.getElementById("countdown");
  let i = 10;

  const countdown = () => {
    if (i === 0) {
      update.innerText = "HAPPY INDEPENDENCE DAY";
      document.getElementById("message").innerText = "";
      startButton.disabled = false;
    } else {
      update.innerText = `Time remaining: ${i}`;
      i--;
      setTimeout(countdown, 1000);
    }
  };

  countdown();
});
