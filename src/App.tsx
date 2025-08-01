import Inventory from "./components/Inventory";
import Modal from "./components/Modal";
import RoomScene from "./components/RoomScene";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <RoomScene />
      <Inventory />
      <Modal />
    </div>
  );
}

export default App;