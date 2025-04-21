import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Pages = React.forwardRef(({ imageSrc, number }, ref) => {
  return (
    <div ref={ref} className="demoPage w-full h-full overflow-hidden">
      <img src={imageSrc} alt={`Page ${number}`} className="w-full h-full object-cover" />
    </div>
  );
});

Pages.displayName = 'Pages';

function FlipPhoto() {
     const [currentPage, setCurrentPage] = useState(0);
  const imagePages = [
    '/p1.jpeg',
    '/p2.jpeg',
    '/p3.jpeg',
    '/p4.jpeg',
    '/p5.jpeg',
    '/p6.jpeg',
    '/p7.jpeg',
    '/p8.jpeg',
  ];

  return (
    <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden'>
      <h1 className='text-3xl text-white text-center font-bold'>FlipPhoto</h1>
   
      <HTMLFlipBook width={400} height={570} className={`cursor-pointer`} showCover={true}   onFlip={(e) => setCurrentPage(e.data)} >
        {imagePages.map((src, idx) => (
          <Pages key={idx} imageSrc={src} number={idx + 1}/>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default FlipPhoto;
