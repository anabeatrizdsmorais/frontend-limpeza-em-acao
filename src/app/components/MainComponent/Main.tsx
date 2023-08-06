import React, {useState} from 'react';
import style from './Main.module.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Image from 'next/image';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  }
];

const Main = (args: any) => {

  // const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [animating, setAnimating] = useState<boolean>(false);

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = (newIndex: number) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  // const slides = items.map((item) => {
  //   return (
  //     <CarouselItem
  //       onExiting={() => setAnimating(true)}
  //       onExited={() => setAnimating(false)}
  //       key={item.src}
  //     >
  //       <Image src={item.src} alt={item.altText} />
  //       <CarouselCaption
  //         captionText={item.caption}
  //         captionHeader={item.caption}
  //       />
  //     </CarouselItem>
  //   );
  // });


  return (
    <div className={`container ${style.main}`}>
      TEste
      {/* <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
    </Carousel> */}
    </div>
  )
}

export default Main