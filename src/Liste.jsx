import Yazi from "./Yazi";
function Liste(props) {
  return (
    <>
      <ul>
        {props.yazilar.map(function (yazi) {
          return (
            <Yazi key={yazi.id} {...yazi}/>
          );
        })}
      </ul>
    </>
  );
}
export default Liste;
