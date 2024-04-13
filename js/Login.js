
const Login = async () => {
  document.getElementById("email").style.border = "";
  document.getElementById("password").style.border = "";
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const passwordID = document.getElementById("err-log-pass");
  const mailID = document.getElementById("err-log-email");
  mailID.style.display = "none";

  const response= await  fetch(' https://recruitment-api.pyt1.stg.jmr.pl/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          login: email,
          password: pass,
          })
    });
const data= await response.json();
const mess = data.message;
const status = data.status;

if (status == 'error'){
  mailID.innerHTML= "Sai emmail hoac password. Hay thu lai!";
  mailID.style.display = "block";
  document.getElementById("email").style.border = "1px solid red";
  document.getElementById("password").style.border = "1px solid red";
} else {
  window.location.href =
      "https://nguyenvantien080174.github.io/Landing-page/endOfIntern/login-sucess.html";
}
   
};

const deleted = () =>{
  document.getElementById("email").style.border="";
  document.getElementById("password").style.border="";
}



