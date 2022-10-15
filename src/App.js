import './App.css';
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import ContactForm from './Components/ContactForm/ContactForm';
import ArticlesSection from './Components/ArticlesSection/ArticlesSection';
import Article from './Components/Article/Article';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop>
      <Header />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/articles' element={<ArticlesSection />} />
        <Route path='/article/:article_name' element={<Article />} />
        <Route path='*' element={<Navigate to={'/home'} />} />
      </Routes>
      <Footer />
      </ScrollToTop>
      </Router>
  );
}

export default App;
