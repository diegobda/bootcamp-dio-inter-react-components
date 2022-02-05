import Item from "./components/Item";
import Card from "./components/Card";

export default function App (){
  return(
    <>
      <h1>Primary application with React</h1>
      <ul>
      <Item >
        Item 1
      </Item>
      <Item >
        Item 2
      </Item>
      <Item >
        Item 3
      </Item>
      </ul>
      <Card/>
    </>
  )
}

/*const App1 = () => {
  return(
    <h2>hellam</h2>
  )
}

export default App1;

*/