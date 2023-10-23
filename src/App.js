import Navbar from "./Component/Navbar";
import File from "./Component/File";
import Main from "./Component/Main";


function App() {
  return (
    <div className="h-screen overflow-y-hidden">
      <Navbar/>
      <div className="flex items-center justify-between">
        <File/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
