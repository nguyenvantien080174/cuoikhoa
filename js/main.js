const checkmail = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const passwordID = document.getElementById("err-log-pass");
  const mailID = document.getElementById("err-log-email");

  // Lấy danh sách các tài khoản từ LocalStorage
  var storedAccounts = localStorage.getItem("accounts");
  var accounts = storedAccounts ? JSON.parse(storedAccounts) : {};

  // Email và mật khẩu cần kiểm tra
  var inputEmail = email;
  var inputPassword = pass;
  console.log(accounts.hasOwnProperty(inputEmail));
  // Kiểm tra xem email đã tồn tại trong danh sách tài khoản hay không
  if (accounts.hasOwnProperty(inputEmail)) {
    mailID.style.display = "none";
    // Kiểm tra xem mật khẩu nhập vào có khớp với mật khẩu của email đó hay không
    if (accounts[inputEmail] === inputPassword) {
      passwordID.style.display = "none";
      mailID.style.display = "none";
      return 1;
    } else {
     
      passwordID.style.display = "block";
      return 0;
    }
  } else {
    mailID.style.display = "block";
    passwordID.style.display = "none";
    return 0;
  }
};

const Login = () => {
  if (checkmail() == 1) {
    window.location.href =
      "https://nguyenvantien080174.github.io/Landing-page/endOfIntern/login-sucess.html";
  }
};
