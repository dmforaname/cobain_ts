interface BangunDatar{
    luas() : number;
    getSisi() : number;
}

class Persegi implements BangunDatar{

    constructor(private sisi: number){}

    getSisi(){
        return this.sisi;
    }

    luas(){
        return this.sisi * this.sisi;
    }
}

let persegi : BangunDatar = new Persegi(10);
//console.log(persegi.luas());
console.log(persegi.getSisi());