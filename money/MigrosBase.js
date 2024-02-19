class MigrosBase {
    indirimOrani = 50; //! yapılmasını istedigimiz indirim oranı

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0
        if (this.urunleriKontrolEt(this.urunler)) {  //! urun varmı diye kontol eden fonksiyonu koşul olarak baslatıyoruz
            //Sepetim dolu
            if(this.kartVarmi){ //! constructordan gelen deger -> sonuc true ise
                // kartsa indirimli alınacak tutar
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100) //! indirim oranı kaçsa ona göre işlem
                })
            }else{  //! constructordan gelen kartVarmi  degeri false ise
                // kart yoksa normal fiyattan alinacak tutar
                this.urunler.forEach((urun) => { //! ürünleri tek tek döner ve urun degıskenınde tutar
                    odenecekTutar += urun.fiyat //! urun içesindeki fiyatları topluyoruz ve odenecekTutarda tutuyoruz
                })
            }
            
        } else {
            alert("En az bir tane ürün satın almalisiniz") //! urun yoksa uyarı
        }
        return odenecekTutar; //! odenecekTutar return edilir ve hesapla() fonksiyonunda tutulur
    }

    urunleriKontrolEt(urunler) {

        if (urunler != null && urunler.length > 0) { //! urun kontrol eden fonksiyon
            return true
        }
        return false //! else olarak false döner
    }
}