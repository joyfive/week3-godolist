
import './App.css';

function Btn(props) {
  return <button style={{
    backgroundColor: "tomato",
    color:"white",
    padding: "10px 20px",
    border: 0,
    borderRadius: 10,
  }}>
    {props.text}
    </button>
}
function App() {
  return (<div>
    <Btn text="Save Changes" />
    <Btn text="Countinue" />
  </div>
  );
}

export default App;
