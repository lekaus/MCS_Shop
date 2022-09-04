import React from "react";
import { render } from "react-dom";
import Shop from "../components//Shop.js";


// function App() {
//   return <Shop />;
// }

// render(<App />, document.querySelector("#root"));

const App = () => {
    return (
    <>
      <Shop />
    </>
    );
}
 
export default App;

// export async function getServerSideProps(context) {
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }


