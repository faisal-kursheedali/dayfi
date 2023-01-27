import React from 'react'
import "./partners.css"
import { pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8 } from "../../img/index"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partners = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed:3000,
        autoplaySpeed: 3000,
        pauseOnHover:true,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide:true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    infinite:true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite:true,
                }
          }
        ]
      };


    
    return (
        <div className="ptr-container">
            <Slider {...settings}>
                
                <div>
                <div className='ptr-list-item ptr-list-item1'>
                
                    <a href="https://www.breederdao.io/" rel="external" className='ptr-list-item-link'>
                        <img src={pt1} alt="" className="ptr-img" />
                    </a></div></div>
                <div>
                <div className='ptr-list-item ptr-list-item2'>
                
                    <a href="https://www.mooncase.io/" rel="external" className='ptr-list-item-link'>

                        <img src={pt2} alt="" className="ptr-img" />
                    </a></div></div>
                <div>
                <div className='ptr-list-item ptr-list-item3'>
                
                    <a href="https://polygon.technology/" rel="external" className='ptr-list-item-link'>

                        <img src={pt3} alt="" className="ptr-img" />
                    </a></div></div>
                <div>
                <div className='ptr-list-item ptr-list-item4'>
                
                    <a href="https://regrob.com/" rel="external" className='ptr-list-item-link'>

                        <img src={pt4} alt="" className="ptr-img" />
                    </a></div></div>
                <div>
                <div className='ptr-list-item ptr-list-item5'>
                
                    <a href="https://supraoracles.com/" rel="external" className='ptr-list-item-link'>

                        <img src={pt5} alt="" className="ptr-img" />
                    </a></div></div>
                <div>
                <div className='ptr-list-item ptr-list-item6'>
                
                    <a href="https://web3.timespro.com/" rel="external" className='ptr-list-item-link'>

                        <img src={pt6} alt="" className="ptr-img" />
                    </a></div></div>
                <div>
                <div className='ptr-list-item ptr-list-item7'>
                
                    <a href="https://polygonstudios.com/" rel="external" className='ptr-list-item-link'>

                        <img src={pt7} alt="" className="ptr-img" />
                    </a></div></div>
                <div>
                <div className='ptr-list-item ptr-list-item8'>
                
                    <a href="https://oneverse.one/" rel="external" className='ptr-list-item-link'>

                        <img src={pt8} alt="" className="ptr-img" />
                    </a></div></div>
            </Slider>
        </div>

    )
}

export default Partners
