import React from 'react'
import './App.css';
import PageContainer from './components/stateful/PageContainer';
import Header from './components/stateless/Header';
import Footer from './components/stateless/Footer';


function App() {
  return (
    <>
      <Header />
      <PageContainer />
      <Footer />
    </>
  );
}

export default App;
