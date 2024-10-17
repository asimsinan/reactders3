import React from "react";
function Arama(props) {
  const [aramaMetni,setAramaMetni]=React.useState("");
  function handleChange(event){
    //console.log(event);
    //console.log(event.target.value);
    props.onSearch(event);
    setAramaMetni(event.target.value);
  }
  return (
    <div>
      <label htmlFor="arama"> Arama:</label>
      <input id="arama" type="text" onChange={handleChange} value={props.aramaMetni}/>
      <p><strong>{aramaMetni}</strong> aranıyor...</p>
    </div>
  );
}
export default Arama;
