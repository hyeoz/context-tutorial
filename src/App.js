import Colorbox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import ColorContext, { ColorProvider } from "./context/color";

function App() {
  return (
    <ColorProvider value={{ color: "red" }}>
      <div>
        <SelectColors />
        <Colorbox />
      </div>
    </ColorProvider>
  );
}

export default App;
