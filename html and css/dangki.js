var taikhoan = document.getElementById("tài khoản");
var password = document.getElementById("passwword");
var  data = document.getElementById('data')
var button = document.getElementById('nút ấn')
button.addEventListener("click",function(){

const name = taikhoan.value;
if(name){
  data.textContent = "chào ,${name}!";
}else {
  data.textContent = "sai mật khẩu"
}
});
