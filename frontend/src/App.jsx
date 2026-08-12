import "./App.css";
import { Routes, Route } from 'react-router';

// Pages
import Home from './pages/Home'
import CalendarSheet from "./pages/CalendarSheet";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="calendar" element={<CalendarSheet />} />
            </Routes>
        </>
    );
}

export default App;
