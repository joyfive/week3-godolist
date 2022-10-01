
import './App.css';

function Btn({ text }) {
  return <button style={{
    backgroundColor: "tomato",
    color:"white",
    padding: "10px 20px",
    border: 0,
    borderRadius: 10,
  }}>
    {text}
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
