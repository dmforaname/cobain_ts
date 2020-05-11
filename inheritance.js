var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Manajer = /** @class */ (function (_super) {
    __extends(Manajer, _super);
    function Manajer(noPekerja, nama, gaji, noLaporan) {
        var _this = _super.call(this, noPekerja, nama, gaji) || this;
        _this.noLaporan = noLaporan;
        return _this;
    }
    Manajer.prototype.getDetail = function () {
        var detail = _super.prototype.getDetail.call(this);
        return detail + " Memiliki " + this.noLaporan + " laporan";
    };
    return Manajer;
}(Pekerja));
var emp = new Manajer("DM001", "Daffa Mahendra", 10000000, 10);
console.log(emp.getDetail());
console.log(emp.bonus);
