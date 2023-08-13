import React from 'react'
import ChapterDisplay from '../components/ChaptersDisplay';
const chaptersData = [
    {
      title: "Chapter 1: The Beginning",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, incidunt deleniti! Est ipsam eos eum beatae facilis iure, blanditiis iusto harum ducimus voluptatum rem debitis non tempora nulla mollitia culpa.v"
    },
    {
      title: "Chapter 2: The Adventure",
      content: "This is the content of chapter 2..."
    },
    // ... more chapters
  ];
function Novel() {
  return (
    <div>
        <ChapterDisplay chapters={chaptersData} />;
    </div>
  )
}

export default Novel