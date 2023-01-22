import { useState } from 'react';
import { ColorBox } from './ColorBox';
const INITIAL_COLOR_LIST=["red","Blue","Green","Orange"]

export function AddColor() {
  // const color="crimson";
  const [color, setColor] = useState("skyblue");

  // const colorList=["red","Blue","Green","Orange"]
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);
  const style = {
    backgroundColor: color,
    fontSize: "30px",
  };
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={style} type="text"
          // placeholder='Enter a color' 
          value={color} />
        {/* copy the colorlist and also add new color to it */}
        <button onClick={() => setColorList([...colorList, color])}
        >Add Color </button>

      </div>
      {colorList.map((clr) => <ColorBox color={clr} />
      )}

      {/* <ColorBox/>
            <ColorBox/> */}
    </div>
  );
}
