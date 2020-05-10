function greeter(person:string){
    
    return "Hello, " + person;
}

function testing(tis:String){

    return 'testing, ' + tis;
}

var user = "Diaz Mahendra";

var tes = 'TA';

document.getElementById("coba1").innerHTML = testing(tes) + '<br>' + greeter(user);

console.log(greeter(user));
console.log(testing(tes));

function tambah(angka1:number, angka2:number){

    return angka1 + angka2;
}

var ang1 = 10;
var ang2 = 20;

var hasil = tambah(ang1,ang2);

document.getElementById("coba2").innerHTML = 'Hasil Dari : ' +ang1+ ' + ' +ang2+  ' = ' + hasil ;

console.log(+ang1+ ' + ' +ang2+  ' = ' + hasil);