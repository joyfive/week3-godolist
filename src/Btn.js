import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Btn({ text }) {
    return <button className={styles.btn}>
      {text}
      </button>
  }

  Btn.propTypes = {
    text: PropTypes.string.isRequired,
  };

  export default Btn;


//   import { useEffect, useState } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState('');
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log('I run all the time.');
//   useEffect(() => {
//     console.log('I run only once');
//   }, []);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);
//   return (
//   <div>
//     <input 
//       value={keyword}
//       onChange={onChange}
//       type="text"
//       placeholer="Search here..."
//     />
//     <h1>{counter}</h1>
//     <button onClick={onClick}>click me</button>
//   </div>
//   );
// }

// export default App;
