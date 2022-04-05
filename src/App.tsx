import './App.css';
import { Responsive } from "./Responsive";

function App() {
  return (
    <div className="App">
      <Responsive displayIn={["Laptop"]}>
          <header className='App-header'>
          <h1>Plain's Paris big screen view</h1>
          <div>TODO: Prompt for downloading Plain's Paris mobile app</div>
          </header>
      </Responsive>
      <Responsive displayIn={["Mobile"]}>
        <>
        <header className="App-header">
          <p>
            Plain's Paris Mobile App
          </p>
        </header>
        </>
      </Responsive>
    </div>
  );
}

export default App;
