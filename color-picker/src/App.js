import { SketchPicker } from 'react-color';
import { useState } from 'react';

const getColorInRgbaFormat = (color) => `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`

function App() {
  const [background, setBackground] = useState({r: 255, g: 255, b: 255, a:30})

  const style = {
    height: '100%',
    width:'100%',
    position: 'absolute',
    top: 0,
    left:0,
    backgroundColor: getColorInRgbaFormat(background)
  }

  return (
      <div className="App" style={style}>
        <SketchPicker
          color={ background } 
          onChangeComplete={(color) =>  setBackground(color.rgb)}
         />
      </div>
  )
}

export default App;
