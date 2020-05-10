class Pekerja{
    bonus : number;

    constructor(private noPekerja: string, private nama:string , private gaji:number ){

        this.bonus = this.gaji * 0.1;
        
    }   

    getDetail(){

        return "Nomor pekerja " + this.noPekerja + " dengan nama " + this.nama;
    }
        
}

let emp = new Pekerja("TA2310","Diaz Mahendra", 10000000);

console.log(emp.getDetail());
console.log("Mendapat Bonus : " +emp.bonus);