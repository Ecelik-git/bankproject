import React, { useState } from 'react';
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import {Carousel, CarouselItem,CarouselControl} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
    {
        src:banner1,
        key:1,
    },{
        src:banner2,
        key:2,
    },{
        src:banner3,
        key:3,
    }
];
const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex =activeIndex === items.length-1 ? 0 : activeIndex+1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const previousIndex = activeIndex === 0 ? items.length-1 : activeIndex -1;
        setActiveIndex(previousIndex);
    };
    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.key}
            >
                <img src={item.src} alt="" />
            </CarouselItem>
        )
    });
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {slides}
            <CarouselControl 
                direction="prev" 
                direcitonText="Previous" 
                onClickHandler={previous}
             />
            <CarouselControl 
                direction="next" 
                direcitonText="Next" 
                onClickHandler={next}
            />
        </Carousel>
    )
}
export default Banner;