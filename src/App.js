import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import './App.css'

function App() {
  return (<>
    <Navbar />
    <div className="App">
    <Content 
    img ="https://cdn.bubilet.com.tr/files/Etkinlik/ajda-pekkan--48333.jpg"
    title="Ajda Pekkan"
    description="Congresium Ankara 22 Aralık Cuma - 21.00"
    />
      <Content 
    img ="https://cdn.bubilet.com.tr/files/Etkinlik/melike-sahin-konseri-27604.png"
    title="Melike Şahin"
    description="Congresium Ankara 19 Aralık Salı - 19.00"
    />
      <Content 
    img ="https://cdn.bubilet.com.tr/files/Etkinlik/mabel-matiz-konseri--96310.png"
    title="Mabel Matiz"
    description="Congresium Ankara 13 Aralık Çarşamba - 21.00"
    />
      </div>
  </>);
}

export default App;
