var Persegi = /** @class */ (function () {
    function Persegi(sisi) {
        this.sisi = sisi;
    }
    Persegi.prototype.getSisi = function () {
        return this.sisi;
    };
    Persegi.prototype.luas = function () {
        return this.sisi * this.sisi;
    };
    return Persegi;
}());
var persegi = new Persegi(10);
//console.log(persegi.luas());
console.log(persegi.getSisi());
