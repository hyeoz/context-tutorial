import { createContext, useState } from "react";

// 새 컨텍스트 만들기
// 파라미터에 해당 컨텍스트의 기본 상태를 지정
// const ColorContext = createContext({ color: "black" });

// 파라미터에 함수 넘기기
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const { Consumer: ColorConsumer } = ColorContext;
const ColorConsumer = ColorContext.Consumer;

export { ColorProvider, ColorConsumer };

export default ColorContext;
