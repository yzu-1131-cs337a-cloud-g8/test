document.querySelectorAll('.grabBtn').forEach(button => {
    button.addEventListener('click', function () {
      const ticket = this.getAttribute('data-ticket');
      const success = Math.random() > 0.5; // 模擬搶票成功或失敗
      const message = document.getElementById('ticketMessage');
  
      if (success) {
        message.textContent = `恭喜您搶到 ${ticket} 的門票！🎉`;
        message.style.color = "green";
      } else {
        message.textContent = `很抱歉，${ticket} 的門票已售完！😭`;
        message.style.color = "red";
      }
    });
  });
  
  function logout() {
    alert("登出成功！");
    window.location.href = "login.html";
  }
  