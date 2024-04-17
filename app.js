function randNumber() {
    return Math.floor(Math.random() * 5 + 1);
  }
  
  document.querySelector("#btn").addEventListener("click", function () {
    showNotification(`Message ${randNumber()}`);
  });
  
  function showNotification(message) {
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
  
    function randColor() {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
    }
  
    notification.style.color = randColor();
  
    document.body.append(notification);
  
    let notifications = document.querySelectorAll(".notification");
    notifications.forEach((msg, index) => {
      msg.style.bottom = `${parseInt(msg.style.bottom) + 50}px`;
    });
  
    notification.style.bottom = "20px";
  
    setTimeout(() => {
      notification.classList.add("show");
    }, 50);
  
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2500);
  }