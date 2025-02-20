"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "./SponsorsCarousel.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Link from "next/link";

const SponsorsCarousel: React.FC = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      autoplay: 6000,
      breakpoints: {
        768: {
          perView: 1,
        },
      },
    });

    glide.mount();

    // Cleanup Glide instance
    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="glide carousel-container">
      {/* Track for slides */}
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <a
              href="https://sulbingcafe.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/sulbing.png" alt="Sponsor 1" />
                <p className="slide-caption font-roboto">Sulbing</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://japaneasy.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/japaneasy.png" alt="Sponsor 1" />
                <p className="slide-caption font-roboto">Japaneasy</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://chahaus.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/chahaus.png" alt="Sponsor 2" />
                <p className="slide-caption font-roboto">Cha Haus</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://anotherdatenight.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/freedatenight.png" alt="Sponsor 3" />
                <p className="slide-caption font-roboto">Another Date Night</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://kbox.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/kbox.png" alt="Sponsor 4" />
                <p className="slide-caption font-roboto">KBox Karaoke</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://hareruya.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/hareruya.png" alt="Sponsor 5" />
                <p className="slide-caption font-roboto">Hareruya Pantry</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://mij.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/madeinjapan.png" alt="Sponsor 6" />
                <p className="slide-caption font-roboto">Made in Japan</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://www.kori-icecream.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/koori.png" alt="Sponsor 7" />
                <p className="slide-caption font-roboto">K&#333;ri</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://itoen.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/itoen.png" alt="Sponsor 8" />
                <p className="slide-caption font-roboto">Ito En</p>
              </div>
            </a>
          </li>
          <li className="glide__slide">
            <a
              href="https://ediblecutlery.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide-content">
                <img src="/images/sponsors/ediblecutlery.png" alt="Sponsor 9" />
                <p className="slide-caption font-roboto">Edible Cutlery</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* Navigation Arrows */}
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left"
          data-glide-dir="<"
          aria-label="Previous"
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          className="glide__arrow glide__arrow--right"
          data-glide-dir=">"
          aria-label="Next"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div
        className="glide__bullets mb-8 mt-2 relative"
        data-glide-el="controls[nav]"
      >
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=3"></button>
        <button className="glide__bullet" data-glide-dir="=4"></button>
        <button className="glide__bullet" data-glide-dir="=5"></button>
        <button className="glide__bullet" data-glide-dir="=6"></button>
        <button className="glide__bullet" data-glide-dir="=7"></button>
        <button className="glide__bullet" data-glide-dir="=8"></button>
      </div>
    </div>
  );
};

export default SponsorsCarousel;
