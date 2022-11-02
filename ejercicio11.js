// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 y que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let num =parseInt(prompt("escribe un numero por favor:"))
let div=""
for (let i =1 ; i<8 ; i++) {
  if (num%i==0)
    if(i==2 || i==3 || i==5 || i==7){
      div= div + String(i); 
    }else{
      document.write(`${num} No es divisible por los números 2, 3 , 5 ni 7`)
    }
}
for(let i=0;i<div.length;i++){
  document.write(`es divisible por ${div[i]}<br>`)
}
