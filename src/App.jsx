import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavData from "./routes/Routes";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? "ml-0" : "ml-[-280px]"}`} >
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <Routes>

            {NavData.map((item) =>
              <Route key={item.id} path={item.path} element={item.element} />
            )}

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
