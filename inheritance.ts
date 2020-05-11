class Pekerja{
    bonus : number;

    constructor(private noPekerja:string , private nama: string, private gaji:number){
        this.bonus = this.gaji * 0.1 ;
    }

    getDetail(){
        return "Nomor pekerja " + this.noPekerja + " dengan nama " + this.nama;
    }
}

class Manajer extends Pekerja {

    constructor (noPekerja:string, nama:string,gaji : number, private noLaporan:number){
        super(noPekerja,nama,gaji);
    }

    getDetail(){
        let detail = super.getDetail();
        return detail + " Memiliki " + this.noLaporan + " laporan";
    }

}

var emp = new Manajer("DM001" , "Daffa Mahendra", 10000000, 10);
console.log(emp.getDetail());
console.log(emp.bonus);