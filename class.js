var Pekerja = /** @class */ (function () {
    function Pekerja(noPekerja, nama, gaji) {
        this.noPekerja = noPekerja;
        this.nama = nama;
        this.gaji = gaji;
        this.bonus = this.gaji * 0.1;
    }
    Pekerja.prototype.getDetail = function () {
        return "Nomor pekerja " + this.noPekerja + " dengan nama " + this.nama;
    };
    return Pekerja;
}());
var emp = new Pekerja("TA2310", "Diaz Mahendra", 10000000);
console.log(emp.getDetail());
console.log("Mendapat Bonus : " + emp.bonus);
