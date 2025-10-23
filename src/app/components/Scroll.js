"use client";

import React, { useEffect, useRef, useLayoutEffect, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const useFeatureAnimations = (
  containerRef,
  scrollContainerRef,
  progressBarRef,
  cardRefs,
  maxScrollHeight
) => {
  useLayoutEffect(() => {
    if (
      !containerRef.current ||
      !scrollContainerRef.current ||
      cardRefs.current.length === 0
    )
      return;

    let ctx = gsap.context(() => {
      const scrollWidth = scrollContainerRef.current.scrollWidth || 0;
      const containerWidth = containerRef.current.offsetWidth || 0;
      const cardWidth = cardRefs.current[0].offsetWidth || 0;
      const viewportOffset = (containerWidth - cardWidth) / 2;

      const finalOffset = scrollWidth - containerWidth + viewportOffset;
      const scrollDistance = maxScrollHeight || finalOffset;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          scrollContainerRef.current,
          { x: viewportOffset },
          { x: -finalOffset + viewportOffset, ease: "none" }
        );

      gsap.to(progressBarRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [maxScrollHeight]);
};

const Scroll = forwardRef(({ features, className, maxScrollHeight }, ref) => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFeatureAnimations(
    containerRef,
    scrollContainerRef,
    progressBarRef,
    cardRefs,
    maxScrollHeight
  );

  const renderFeatureCards = (featureSet, refs) =>
    featureSet.map((feature, index) => (
      <div
        key={index}
        ref={(el) => {
          if (el) refs.current[index] = el;
        }}
        className="feature-card flex-shrink-0 w-full sm:w-[100vw] md:w-[55vw] lg:w-[80vw] h-[90vh] md:h-[100vh] z-10 gap-4 group relative transition-all duration-300 ease-in-out"
      >
        <div
          className={
            feature.image
              ? "bg-transparent"
              : "bg-black/80 dark:bg-white/10 text-white"
          }
        >
          {feature.image && (
            <img
              id="scroll-img"
              src={feature.image}
              alt={feature.title || "Feature image"}
              onError={(e) => {
                e.currentTarget.src = "assets/young-fitness-man-studio.jpg";
              }}
              className="absolute inset-0 w-full h-full object-cover z-[-1] rounded-3xl"
            />
          )}
          {(feature.title || feature.description || feature.link) && (
            <div
              id="text"
              className="absolute inset-0 z-20 flex flex-col justify-end w-full p-4"
            >
              <div
                className={`flex flex-col items-center justify-center h-full text-center
                 ${
                   !feature.image ? "text-white" : ""
                 }`}
              >
                <div
                  id="feature-content"
                  className="opacity-100 translate-y-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <h2 className="text mb-4 font-bold transition-all duration-300">
                    {feature.title}
                  </h2>
                  <p className="text mb-4 opacity-60">{feature.description}</p>
                  <Link className="fit" href="/class">
                    {feature.link || "Learn More"} {"->"}
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5 rounded-2xl group-hover:blur-md" />
        </div>
      </div>
    ));

  return (
    <section
      id="scroll"
      className={"bg-transparent text-foreground relative overflow-hidden " + (className || "")}
      ref={ref}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden h-screen py-10 flex flex-col gap-0 z-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_5%,_black_95%,transparent_100%)]"
      >
        <div
          ref={scrollContainerRef}
          className="flex flex-row gap-8 items-center h-full px-6 whitespace-nowrap"
        >
          {renderFeatureCards(features, cardRefs)}
        </div>
      </div>
      <style>{`
        .animated-water {
          background: repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.5) 25%,
            rgba(0, 0, 0, 0.7) 50%
          );
          background-size: 40px 40px;
          animation: waveMove 2s linear infinite;
        }
        :global(.dark) .animated-water {
          background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.6) 25%,
            rgba(255, 255, 255, 0.9) 50%
          );
        }
        @keyframes waveMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 40px 40px;
          }
        }
      `}</style>
    </section>
  );
});

Scroll.displayName = "ScrollCarousel";
export default Scroll;
