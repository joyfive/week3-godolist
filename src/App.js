import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('I run all the time.');
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);
  return (
  <div>
    <input 
      value={keyword}
      onChange={onChange}
      type="text"
      placeholer="Search here..."
    />
    <h1>{counter}</h1>
    <button onChange={onClick}>click me</button>
  </div>
  );
}

export default App;
