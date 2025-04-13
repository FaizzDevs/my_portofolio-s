"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold} from "react-icons/pi"

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper =  useSwiper();

    return (
        <div className={containerStyles}>
            <button className={`${btnStyles} cursor-pointer`} onClick={() => swiper.slidePrev()} >
                <PiCaretLeftBold  className={iconsStyles} />
            </button>
            <button className={`${btnStyles} cursor-pointer`} onClick={() => swiper.slideNext()}>
                <PiCaretLeftBold className={`${iconsStyles} rotate-180` } />
            </button>
        </div>
    )
}

export default WorkSliderBtns;