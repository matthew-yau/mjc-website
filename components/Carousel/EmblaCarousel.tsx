import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./embla.module.css"; // Scoped CSS module

type PropType = {
  slides: { id: number; image: string; title: string; description: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide) => (
            <div key={slide.id} className={`${styles.embla__slide} p-4`}>
              {/* Slide Box */}
              <div className="flex flex-col items-center bg-[#f8fafc] shadow-xl rounded-lg p-6 max-w-xs mx-auto">
                <div className="w-full h-40 mb-4">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {slide.title}
                </h3>
                <p className="text-base text-gray-600 text-center">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} ${
                index === selectedIndex ? styles.embla__dot__selected : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
