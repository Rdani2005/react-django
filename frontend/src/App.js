// Libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom"
// CSS Files
import './App.css';
// My own files
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';


function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header></Header>
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>


    </Router>
  );
}

export default App;
