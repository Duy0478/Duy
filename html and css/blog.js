/*(xoa)



// khai báo biến là 9
var tuoi =  9;
// tạo biến rồi thực hiện phép toán trong tuoi 
//tuoi ++ = 9 còn --tuoi= 10-1 =9 
//là vì tuoi++ dc copy lại sau đó gán sang --tuoi thêm 1 số/
var ketqua = tuoi++ + --tuoi ;
console.log("kết quả",ketqua);


//vd 2
//tạo biến tuổi bằng 6
var tuoi = 6;
//tạo kết quả trong kết quả có phép toán ++tuoi tức là thêm 1 số lượng - đi cho tuoi-- tức là vẫn dữ nguyên là bằng 6 bởi vì tuoi-- nó đang thực thi lệnh coppy 
var ketqua = ++tuoi - tuoi--;
console.log("kết quả",ketqua);
// tổng kết lại vd : ++A tức là tăng thêm 1 còn A-- tức là phần coppy lại 

/////////////////////////////
var a = 3
Math.pow(--a)
console.log(a);
//phép toán
/*  +=    phép cộng
    -=    phép trừ
    *=    phép nhân
    %=    phép chia lấy dư
    /=    phép chia lấy nguyên
    **=   phép nhân luỹ thừa
    math.pow() kiểu dữ liệu
*/
/* -----------
var ten =  " Duy";
var tendem = " Ngọc";
var ho     = " Đào";
var ten = ho+tendem+ten;
console.log("họ và tên bạn:",ten);
//////''''''
/**  toán tử so sánh
toán tử
==   --> bằng
!=   --> không bằng
>    --> lớn
<    --> bé
>=   --> lớn hơn hoặc bằng
<=   --> bé hơn hoặc bằng
*/
//parseInt (toán tử lấy nguyên) 
//prompt   (nhập)

/*-----------(xoa)

var a = parseInt(prompt("nhập tuổi"));
if(a>=18){
//tạo bảng hiển thị bên ngoài  
  alert("bạn đủ tuổi nhập học")
}else{
    alert("bạn chưa đủ tuổi nhập học")

}
//console.log() hiển thị kết quả bên trong console
console.log("tuổi của bạn tuổi",a);

var a = parseInt(prompt("nhập a"))
var b = parseInt(prompt("nhập b"))
//tạo biến đúng hoặc sai nhập giống như if 
var trueOfflase = a>b ;
console.log( "đáp án là",trueOfflase);
/*8888888888888888888888888888888888888888*/

/*-----------(xoa)

var myArry= [
  "Duy",
  "Ngoc",
  "Dao"
];
console.log(myArry)
