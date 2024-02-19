

let mesaj =
    `
Migros'a hosgeldiniz
Money Kartınız varmı ?
1-Evet
2-Hayır
`


const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 100
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 180
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 220
    }
]
//! true veya false döner
let sonuc = confirm(mesaj)
let odenecekTutar;
if (sonuc) {
    // money kart varsa
    let isim = prompt("Ismınizi girini")
    let soyisim = prompt("Soyisminizi giriniz")
    const musteri = new Musteri(isim, soyisim, sonuc, urunler) //! sonuc -> kartVarmi olarak constructor'a gidiyor
    odenecekTutar = musteri.hesapla() //! odenecekTutar müşteri classındaki hesapla fonksiyonuna gider ve ordan da migrosBase classına return edilir
    alert(
        `Musteri Bilgileri ${isim} ${soyisim} //! kişi bilgileri
        İşlem Tutarı : ${odenecekTutar} //! odenecekTutar bilgisi
        `)
} else {
    // money kart yoksa
    const musteri = new Musteri(null, null, sonuc, urunler)  //! eger kart yoksa isim soyisim gözükmeyecek şekilde nesne olusturulur. 
    odenecekTutar = musteri.hesapla()   //! odenecekTutar migrosBase Class icinde hesaplanir.
    alert(`Odenecek Tutar ${odenecekTutar}`) //! odeme tutarı gösterilir
}



