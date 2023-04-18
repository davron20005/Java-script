// var a = prompt("kvadrat tomonini toping")
// console .log(a*4;5a rad)


// var num = Math. sqrt(120)
// console .log (num)


// yaxlitlash

// var num = Math .round(4.6)
// console .log (num)

// console .log(Math.floor(number))
// consele .log()
// 1-misol

// var a = prompt("tortburchak tomonini kiriting a")
// var b = prompt ("tortburchak tomonini kiriting b")
// var S = a*b
// var P = 2*(a+b)
// console .log(S , P)


// 2-misol

// var a =prompt ("kvadratning yon tomoni berilgan")
// var S = a**2
// console .log(S)

// // 3-misol

// var a = prompt("tort tomini tominini a")
// var b = prompt("tomonini belgish b")
//  var S = a*b
//  var P = 2*(a+b)
//  console .log(S , P)

// //  4-misol
// var d = prompt("aylananig diametri d berilgan")
// var S = Math.PI= 3.14
// var L =Math.PI *d
// console .log(Math.PI ,L)
//  5-MISOL

// var a = prompt("kubning yon tomoni berilgan")
// var v = a**3
// var s = 6*a**2
// console .log(V , S)
// 6-misol

// var a =prompt ("tomonlari a")
// var b =prompt ("tomonlar b")
// var c =prompt ("tomonlari c")
// var V = a*b*c
// var S = 2*(a*b*c + b*c )
// console .log{V , S}

//  7-misol

// var R =prompt("doira radiusini kiriting")
// var L = 2*Math.Pi * R
// var S = Math.PI * R ** 2
// console.log(L,S)

// //  8misolo

// var a =prompt("sson berilgan a")
// var b =prompt("son berilgan b")
// var A = (a+b)/2
// console .log(A)

// // 9misol

// var a =prompt("birinchi manfiy bolgan son a")
// var b = prompt("ikkinchin manfiy bolgan son b")
// var G =Math.sqrt(a+b)
// console .log (G)

//  10misol

// var a = +prompt("nolga teng bolmagan son a")
// var b = +prompt("nolga teng bolmagan son b")
// var S = a + b
// var A = a * b
// var B = a ** 2
// var c = b ** 2
// console.log(S, A, B, c);

// var a = false
// var c = false
// console.log(a && c);
// var results = (1 && 2 || true) || (3 && false || true) && (1 || 1)
// console.log(results);

// 1-misol

// var a = prompt ("a sonini kirting")
// console.log(a > 0);

// 2-misol

// var a =9
// console.log(a % 2 ==  0);

// 3-misol

// var a = 8
// console.log(a % 2 == 0);

// 4-misol

// var a =2
// var b =3
// console.log(a>2 && b<=3);

// 5-misol

// var a =0
// var b =-2

// 6-misol

// var a=2
// var b=3
// var c=4
// console.log(a<=b<=c);

// 7-misol

// var a = 2
// var b = 3
// var c = 4
// console.log(a<b<c);

// 8-misol

// var a=2
// var b =4
// console.log(a % 2 != 0, a % 4 != 0);

// 9-misol

// var a =2
// var b=3
// console.log(a % 2== 0, b%2==0);

// 10-missol

// var a = 2
// var b = 3 
// console.log((a % 2 == 0 && b % 2 !=0)||(a % 2 !=0  && b % 2 ==0));

// 11-misol

// var a =2
// var b =3
// console.log((a % 2 == 0 || b % 2 !=0)&&(a % 2 ==0 || b % 2 !=0));

// 12misol

// var a= 2
// var b =3
// var c=4
// console.log(a>0,b>0,c>0);

// 13-misol

// var a= 2
// var b=3
// var c=5
// console.log(a % 2 == 0, b % 2 != 0, c % 2 == 0 );

// 14-misol

// var a =2
// var c =3
// var b =4
//  console.log(a % 2 ==0 , c % 2 == 0, b % 2 == 0);

// 15-misol

// var a = 2
// var b = 3
// var c = 4

// console.log( a % 2 == 0 , b % 2 == 0, c % 2 != 0);

// 11-misol

// 1 -misol

// var n = 2

// if ( n > 0){console.log(n+1);}
// else if (n < 0){console.log(n = 0);}

// var countElement = document.getElementById("count")
// var incrementElement = document.getElementById("increment")

// incrementElement.addEventListener("click",()=>{countElement.textContent = +countElement.textContent +1})

// var formElement = document.getElementById("form")
// var namaEl = document.getElementById("name")
// var password = document.getElementById("password")
// var passwordError= document.getElementById("passwordError")

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault()
//     if (password.value.length < 7) {
//         passwordError.textContent = "parol kamida 8ta harfdan iborat"
//         passwordError.style.color = "red"
//         password.focus()
//     }

// })

// var inputElement = document.getElementById("input")
// var selectElement = document.getElementById("select")
// var btnElement = document.getElementById("btn")
// var numberElement = document.getElementById("number")
// btnElement.addEventListener("click",()=>{
//     var a = inputElement.value
//     var b = selectElement.value
//     var c = a * b
//     console.log(c);
//     numberElement.textContent = c 
//     inputElement.value = ""
// })

// var inputElement = document.getElementById("input")
// var selectElement = document.getElementById("select")
// var btnElement = document.getElementById("btn")
// var numberElement = document.getElementById("number")

// btnElement.addEventListener("click",()=>{
// var a = inputElement.value
// var b = selectElement.value
// var c = a * b
// numberElement.textContent = c
// inputElement.value =""
// })

var inputElement = document.getElementById("input")
var selectElement = document.getElementById("select")
var btnElement = document.getElementById("btn")
var  numberElement = document.getElementById("number")

btnElement.addEventListener("click",()=>{
    var a = inputElement.value
var b = selectElement.value
var c = a * b
numberElement.textContent = c
inputElement.value = ""
})