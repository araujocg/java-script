function multiplicar01(a,b){ // jeito q se fazia no passado
    b = typeof b !== "undefined" ? b:1;
    return a*b;
}

//

function multiplicar02(a = 2,b = 5){ // jeito q se fazia no passado
    console.log(a*b);
}
multiplicar02(1);
multiplicar02();
multiplicar02(undefined,6);

//

function multiplicador03(num = 1){
    console.log(typeof num);
}
multiplicador03(); // Number // Apenas esses 2 ele entende q o valor e vazio por isso eles são descritos como "Number"
multiplicador03(undefined); // Number
multiplicador03(""); // String   
multiplicador03(null); // Object 

//

function concatenador01(value, array = []){
    array.push(value);
    return console.log(array);
}
concatenador01(1);
concatenador01(2);
concatenador01(3);

function concatenador02(array = [], ...value) {
    for ( v of value ){
      array.push(v);
    }
    return console.log(array);
  }
concatenador02(undefined, 1);
concatenador02(undefined, 3, 7, 8, 9, 10);
concatenador02(undefined, 3);

//

function chamaAlgumaCoisa(thing = algumaCoisa()){
    return thing;
}

function algumaCoisa(){
    return "sth";
}

console.log(chamaAlgumaCoisa());

//

function somaArraysObjectos([x,y] = [1,2], {obj:z} = {obj:3}){
    return x + y + z
  }
console.log(somaArraysObjectos())
console.log(somaArraysObjectos([10,20],{obj:30}))
