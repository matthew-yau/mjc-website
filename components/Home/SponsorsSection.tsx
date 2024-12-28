"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "./SponsorsCarousel.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

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
            <div className="slide-content">
              <img src="/images/sponsors/chaju.png" alt="Sponsor 1" />
              <p className="slide-caption font-roboto">Chaju</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img src="/images/sponsors/hakubaku.png" alt="Sponsor 2" />
              <p className="slide-caption font-roboto">Hakubaku</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img src="/images/sponsors/yoosh.png" alt="Sponsor 3" />
              <p className="slide-caption font-roboto">Yoosh</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img src="/images/sponsors/savour.png" alt="Sponsor 4" />
              <p className="slide-caption font-roboto">Savour</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img
                src="/images/sponsors/orientalmerchant.png"
                alt="Sponsor 5"
              />
              <p className="slide-caption font-roboto">Oriental Merchant</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img src="/images/sponsors/obento.png" alt="Sponsor 6" />
              <p className="slide-caption font-roboto">Obento</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img src="/images/sponsors/koori.png" alt="Sponsor 7" />
              <p className="slide-caption font-roboto">Koori</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img src="/images/sponsors/kewpie.png" alt="Sponsor 8" />
              <p className="slide-caption font-roboto">Kewpie</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide-content">
              <img src="/images/sponsors/julies.png" alt="Sponsor 9" />
              <p className="slide-caption font-roboto">Julie&apos;s</p>
            </div>
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
      <div className="glide__bullets mb-8" data-glide-el="controls[nav]">
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

      <div className="button-container mt-4 flex justify-center space-x-4">
        <Link href="/sponsors">
          <button className="btn btn-layered-3d btn-layered-3d--red px-3 py-1 text-sm whitespace-nowrap">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SponsorsCarousel;
