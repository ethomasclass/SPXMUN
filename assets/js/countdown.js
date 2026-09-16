(function () {
  var target = new Date("2026-11-14T08:00:00-05:00").getTime();
  var els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    minutes: document.getElementById("cd-minutes"),
    seconds: document.getElementById("cd-seconds"),
  };
  var container = document.getElementById("countdown");
  if (!container) return;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    var diff = target - Date.now();

    if (diff <= 0) {
      container.innerHTML = '<div class="countdown-item"><span class="countdown-label">SPX MUN II is underway or has concluded</span></div>';
      clearInterval(timer);
      return;
    }

    var seconds = Math.floor(diff / 1000);
    var days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    els.days.textContent = pad(days);
    els.hours.textContent = pad(hours);
    els.minutes.textContent = pad(minutes);
    els.seconds.textContent = pad(seconds);
  }

  tick();
  var timer = setInterval(tick, 1000);
})();
