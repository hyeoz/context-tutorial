// ColorContext 안에 들어있는 색상 보여주기
import { useContext } from "react";
import ColorContext, { ColorConsumer } from "../context/color";

// const ColorBox = () => {
//   return (
//     // Consumer 사이에 중괄호로 함수를 넣어줌. Function as a child OR Render Props 라고 함
//     <ColorConsumer>
//       {(value) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: value.state.color, // 객체 비구조화 할당으로 작성할 수 있음
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: value.state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

// reack Hook 사용하기
const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div style={{ width: "64px", height: "64px", background: state.color }} />
      <div
        style={{ width: "32px", height: "32px", background: state.subcolor }}
      />
    </>
  );
};

export default ColorBox;
