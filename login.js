document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // 驗證帳號是否存在於 localStorage
    const storedPassword = localStorage.getItem(username);
    const message = document.getElementById('loginMessage');
  
    if (storedPassword && storedPassword === password) {
      message.textContent = "登入成功！";
      message.style.color = "green";
      setTimeout(() => {
        window.location.href = "tickets.html"; // 跳轉到搶票頁面
      }, 1000);
    } else {
      message.textContent = "帳號或密碼錯誤！";
      message.style.color = "red";
    }
  });
  