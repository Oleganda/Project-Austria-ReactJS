import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';
import "../Styles/banner.css";



const backgroundFirst = "https://images.unsplash.com/photo-1635255057039-0eb77e4440c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const backgroundSecond = "https://images.unsplash.com/photo-1606400141827-32b8b522ff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const backgroundThird = "https://www.theviennablog.com/wp-content/uploads/2017/06/KunsthistorischesMuseumViennaWien-1024x1280.jpg";

const BannerMain = () => {

    return (
        <div className="banner.size">
            <HeroSlider
                slidingAnimatio="left-to-right"
                orientation="horizontal"
                initialSlide={1}
                onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
                onChange={nextSlide => console.log("onChange", nextSlide)}
                onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
                width="100%"
                height="500px"


                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.33)",
                    marginTop: "50px"

                }}

                settings={{
                    slidingDuration: 250,
                    slidingDelay: 100,
                    schouldAutoplay: true,
                    schouldDisplayButtons: true,
                    aotoplayDuration: 3000,
                    height: "400px",

                }}
            >

                <Slide
                    background={{
                        backgroundImageSrc: backgroundFirst,
                        backgroundAttachment: "fixed"

                    }}
                />

                <Slide
                    background={{
                        backgroundImageSrc: backgroundSecond,
                        backgroundAttachment: "fixed"
                    }}
                />
                < Slide
                    background={{
                        backgroundImageSrc: backgroundThird,
                        backgroundAttachment: "fixed"
                    }}
                />

            </HeroSlider >
        </div>
    );
}
export default BannerMain;
