import HomePage from "./component/Homepage";
import ApiPage from "./component/ApiPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  
  return (
    <ThemeProvider>
      <div className="max-w-full min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/api" element={<ApiPage />} />
          </Routes>
        </Router>
      
      </div>
    </ThemeProvider>
  )
}

export default App
