import Content from "./components/content/Content";
import './App.css'

function App() {

  const divStyle = {
    backgroundImage: 'url("https://r.resimlink.com/UL8p1qi.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (<>
    <div style={divStyle}>
      <Content />
    </div>
  </>);
}

export default App;
