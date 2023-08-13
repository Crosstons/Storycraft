import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChapterDisplay from './components/ChaptersDisplay';
import Navbar from './components/Navbar';
import NovelCarousel from './components/NovelCarousel';
import logo from './logo.svg';
import Home from './pages/Home';
import Novel from './pages/Novel';

function App() {
  return (
      <div className="">
        <BrowserRouter>
          <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/novel" elemnet={<Novel />} />
            </Routes>
            </main>
        </BrowserRouter>
      </div>
      
  );
}

export default App;
