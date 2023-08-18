import React from 'react'
import { useState, useEffect } from 'react'
import NovelCarousel from '../components/NovelCarousel'
import { fetchStorage } from '../utils/tzkt';
import { createOperation } from '../utils/operations';
import { getStory } from '../utils/firebase';

function Home() {

  useEffect(() => {
    (async () => {
        const res = await fetchStorage();
        await getStory();
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