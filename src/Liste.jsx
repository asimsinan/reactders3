function Liste() {
    const yaziListesi=[
        {
          "baslik":"React Öğreniyorum",
          "yazar":"Sinan",
          "yorumSayisi":3,
          "puan":5,
          "id":0
        },
        {
          "baslik":"Web Öğreniyorum",
          "yazar":"Ahmet",
          "yorumSayisi":1,
          "puan":3,
          "id":1
        }
      ];
      
  return (
    <>
      <ul>
        {yaziListesi.map(function (yazi) {
          return (
            <li key={yazi.id}>
              {yazi.baslik + "," + yazi.yazar + "," + yazi.puan}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Liste;
