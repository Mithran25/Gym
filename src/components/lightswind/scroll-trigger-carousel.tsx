"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  forwardRef,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

// Assuming these are external, import them
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

// --- Component Props and Types ---
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  link:String;
}

export interface ScrollCarouselProps {
  features: FeatureItem[];
  className?: string;
  maxScrollHeight?: number;
}

// --- Custom Hook for Animations (Simplified) ---
const useFeatureAnimations = (
  containerRef: React.RefObject<HTMLDivElement>,
  scrollContainerRef: React.RefObject<HTMLDivElement>,
  progressBarRef: React.RefObject<HTMLDivElement>,
  cardRefs: React.MutableRefObject<HTMLDivElement[]>,
  isDesktop: boolean,
  maxScrollHeight?: number
) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (isDesktop) {
        // --- DESKTOP SINGLE-LAYER LOGIC ---
        const scrollWidth = scrollContainerRef.current?.scrollWidth || 0;
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
        const viewportOffset = (containerWidth - cardWidth) / 2;

        // The total distance the content has to travel
        const finalOffset = scrollWidth - containerWidth + viewportOffset;

        // Use the provided maxScrollHeight or the calculated offset as the scroll distance
        const scrollDistance = maxScrollHeight || finalOffset;

        // Timeline for the horizontal movement
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              // Define the total height the user must scroll vertically
              end: () => `+=${scrollDistance}`, 
              scrub: 1,
              pin: true, // Pins the entire container while scrolling horizontally
            },
          })
          .fromTo(
            scrollContainerRef.current,
            { x: viewportOffset }, // Start position (centered first card)
            { x: -finalOffset + viewportOffset, ease: "none" } // End position
          );

        // Progress Bar Animation
        gsap.to(progressBarRef.current, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: true,
          },
        });
      } else {
        // --- MOBILE VERTICAL SCROLL LOGIC (Simplified) ---
        cardRefs.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                x: index % 2 === 0 ? -200 : 200,
              },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  toggleActions: "play none none none",
                  once: true,
                },
              }
            );
          }
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isDesktop, maxScrollHeight]);
};

// --- Component Definition ---
export const ScrollCarousel = forwardRef<HTMLDivElement, ScrollCarouselProps>(
  ({ features, className, maxScrollHeight }, ref) => {
    // --- REMOVED: scrollContainerRef2 and cardRefs2 ---
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const [isDesktop, setIsDesktop] = useState(false);

    // Dynamic sorting for the second row of cards (REMOVED)
    // const features2 = [...features].sort(() => Math.random() - 0.5); 

    useEffect(() => {
      const checkDesktop = () => {
        setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
      };
      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    useFeatureAnimations(
      containerRef,
      scrollContainerRef,
      progressBarRef,
      cardRefs,
      isDesktop,
      maxScrollHeight
      // --- REMOVED: scrollContainerRef2 and cardRefs2 from hook call ---
    );

    const renderFeatureCards = (
      featureSet: FeatureItem[],
      refs: React.MutableRefObject<HTMLDivElement[]>
    ) =>
      featureSet.map((feature, index) => (
        // ... (Feature Card JSX remains the same) ...
        <div
          key={index}
          ref={(el: HTMLDivElement | null) => {
            if (el) refs.current[index] = el;
          }}
          className="feature-card flex-shrink-0 w-full md:w-full h-full
          z-10 gap-4 group relative transition-all duration-300 ease-in-out"
        >
          {/* Card Content */}
          <div
            className={cn(
              // ... (class names) ...
             
              !feature.image && 'bg-black/80 dark:bg-white/10 text-white', // Dark background if NO image
          feature.image && 'bg-transparent'
            )}
          >
            {feature.image && (
          <img
            id="scroll-img"
            src={feature.image}
            alt={feature.title || "Feature image"}
            className="absolute inset-0 w-full h-full 
            object-cover z-[-1] rounded-3xl"
          />
        )}
            
            {(feature.title || feature.description || feature.link) && (
          <div id="text" className="absolute inset-0 z-20 flex flex-col justify-end w-full p-4">
            <div
              className={cn(
                // Use flex-col and text-center for centering text
                `flex flex-col items-center justify-center h-full text-center`, 
                
                // Add conditional text color if no image
                !feature.image && 'text-white'
              )}
            >
                {/* Apply opacity and translation here to enable hover effect */}
                <div className="opacity-100 translate-y-0 transition-all duration-300 ease-out 
                                group-hover:opacity-100 group-hover:translate-y-0">
                    <h2 className="text mb-4 font-bold transition-all duration-300">
                      {feature.title}
                    </h2>
                    <p className="text mb-4 opacity-60">
                      {feature.description}
                    </p>
                    <Link className="fit" href="/class" >
                      {feature.link || "Learn More"} {`->`}
                    </Link>
                </div>
            </div>
          </div>
        )}
        
        {/* Hover/Overlay Effect */}
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5 rounded-2xl group-hover:blur-md" />
      </div>
    </div>
  ));

    return (
      <section
        className={cn(
          "bg-transparent text-foreground relative overflow-hidden",
          className
        )}
        ref={ref}
      >
        <div
          ref={containerRef}
          className="relative overflow-hidden md:h-screen md:py-20 
          flex flex-col gap-0 z-10 
          lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_5%,_black_95%,transparent_100%)]"
        >
          {/* --- RENDER ONLY THE FIRST ROW --- */}
          <div
            ref={scrollContainerRef}
            // Ensure this container allows horizontal layout (e.g., add whitespace-nowrap in CSS)
            className="flex flex-col md:flex-row gap-8 
            items-center h-full px-6 md:px-0"
          >
            {renderFeatureCards(features, cardRefs)}
          </div>

          {/* --- REMOVED THE SECOND ROW DIV --- */}

          {isDesktop && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-2 bg-black/30 dark:bg-white/30 z-50 overflow-hidden rounded-full">
              <div
                ref={progressBarRef}
                className="h-full rounded-full relative overflow-hidden transition-all duration-100"
                style={{ width: "0%" }}
              >
                {/* Ensure the CSS for animated-water is loaded externally */}
                <div className="absolute inset-0 animated-water" /> 
              </div>
            </div>
          )}
        </div>
        <style  >{`
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
  }
);

ScrollCarousel.displayName = "ScrollCarousel";

// Ensure this is your only export if you import it as default
export default ScrollCarousel;
// If you want named export: export { ScrollCarousel };


