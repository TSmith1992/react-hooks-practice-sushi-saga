import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ serverInfo, onlyFour, nextFourSushi,  }) {

  //let onlyFourMappedServerInfo; //= mappedServerInfo.slice(sliceA,sliceB)


  if (serverInfo===[]) {
    return <div>Whippin' up the Sushi for ya!</div>;
  } else {
    return (
      <div className="belt">
        {onlyFour}
        <MoreButton nextFourSushi={nextFourSushi} onlyFour={onlyFour}/>
      </div>
    );
  }
}

export default SushiContainer;
