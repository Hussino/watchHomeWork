function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var time = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);

    document.getElementById('clock').textContent = time;
  }

  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

  setInterval(updateClock, 1000);