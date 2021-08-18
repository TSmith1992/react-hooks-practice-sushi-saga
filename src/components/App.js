import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Sushi from "./Sushi";

const API = "http://localhost:3001/sushis";

function App() {
  const [serverInfo, setServerInfo] = useState([])
  const [sliceA, setSliceA]=useState(0)
  const [sliceB, setSliceB]=useState(4)
  const [sushiEat, setSushiEat] = useState(false)
  const [plates, setPlates]=useState([])


  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => setServerInfo(data));
  }, []);

  let mappedServerInfo = serverInfo.map((sushi) => (
    <Sushi sushi={sushi} sushiEaten={sushiEaten}/>
  ))

  const [onlyFour, setOnlyFour]=useState(mappedServerInfo.slice(0, 6))
  
  function nextFourSushi(e){

    setSliceA(sliceA=>sliceA+5);
    setSliceB(sliceB=>sliceB+5)
    setOnlyFour(mappedServerInfo.slice(sliceA,sliceB))
  }

  function sushiEaten(e){
    //console.log(e)
    setSushiEat(!sushiEat)
    const newPlates = [...plates, "test"]
    //newPlates.push("test")
    console.log(newPlates)
    setPlates(newPlates)
  }
  
  return (
    <div className="app">
      <SushiContainer serverInfo={serverInfo} sushiEaten={sushiEaten} onlyFour={onlyFour} nextFourSushi={nextFourSushi}/>
      <Table plates={plates}/>
    </div>
  );
}

export default App;
