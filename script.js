function validatelogin() {
  let user = document.forms['login']['username'].value;
  let pass = document.getElementById('password').value;

  if (user === "admin" && pass === "123") {
    alert("Welcome");
    return true;   // form boleh lanjut
  } else {
    alert("Username atau password salah");
    return false;  // form berhenti
  }
}