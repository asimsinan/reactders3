import "./App.css"
import Liste from "./Liste";
import Arama from "./Arama";
function App(){  
const karsilama={
  "selamlama":"Merhaba",
  "baslik":"Ali"
};
function selamla(karsilama,baslik){
  return karsilama+" ,"+baslik;
}
return(
  <div>
    <h1>{karsilama.selamlama+","+karsilama.baslik}</h1>
    <p>{selamla("Selam","Ayşe")}</p>
    <Arama/>
    <hr/>
    <Liste/>


   
  </div>
)
}
export default App;
