document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
  
    const message = document.getElementById('registerMessage');
  
    if (localStorage.getItem(username)) {
      message.textContent = "帳號已存在！";
      message.style.color = "red";
    } else {
      localStorage.setItem(username, password);
      message.textContent = "註冊成功！請前往登入。";
      message.style.color = "green";
    }
  });
  