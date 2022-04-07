import DesktopView from './DesktopView';
import MobileView from './MobileView';
import { Responsive } from './Responsive';

function App() {
  return (
    <div className="App">
      <Responsive displayIn={["Laptop"]}>
        <DesktopView />
      </Responsive>
      <Responsive displayIn={["Mobile"]}>
        <MobileView />
      </Responsive>
    </div>
  );
}

export default App;
