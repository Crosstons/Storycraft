import React from 'react'
import { useState, useEffect } from 'react'
import NovelCarousel from '../components/NovelCarousel'
import { fetchStorage } from '../utils/tzkt';
import { createOperation } from '../utils/operations';
import { connectWallet } from '../utils/wallet';

function Home() {

  useEffect(() => {
    (async () => {
        await connectWallet();
        const res = await fetchStorage();
        console.log(res);              
    })();    
  }, []); 

  return (
    <div>
        <NovelCarousel />
    </div>
  )
}

export default Home