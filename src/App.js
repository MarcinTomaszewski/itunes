import { Button, Input, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import './App.css';



function App() {
  const [inputTxt, setInputTxt] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const handleBtnClick = async () => {
      const result = await fetch(`https:itunes.apple.com/search?term=${encodeURIComponent(inputTxt)}&entity=musicVideo`);
      const data = await result.json();
      setResult(data.results);
    };
    handleBtnClick();
  }, [inputTxt])

  const handleInputTxt = e => setInputTxt(e.target.value);

  const handleBtnClick = async () => {
    const result = await fetch(`https:itunes.apple.com/search?term=${encodeURIComponent(inputTxt)}&entity=musicVideo`);
    const data = await result.json();
    setResult(data.results);
    console.log(data.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Stack direction={"row"}>
          <Input
            value={inputTxt}
            onChange={handleInputTxt} />
          <Button
            colorScheme="blue"
            onClick={handleBtnClick}>
            Search
            </Button>
        </Stack>
      </header>
      <Stack direction={"column"}>
        {result.map(item => <p key={item.trackId}>{item.artistName}</p>)}
      </Stack>
    </div>
  );
}

export default App;
