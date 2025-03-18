
import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

// Isomorphic layout effect hook
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Media query hook
type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

// Animation constants
const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

// Carousel component
const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void;
    controls: any;
    cards: { image: string; title: string; category: string }[];
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const faceCount = cards.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((project, i) => (
            <motion.div
              key={`key-${project.image}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(project.image, i)}
            >
              <motion.div className="relative w-full rounded-xl overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  layoutId={`img-${project.image}`}
                  className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

// Main component
export function ThreeDPhotoCarousel({ projects }: { projects: Array<{ title: string; category: string; description: string; image: string }> }) {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();

  const handleClick = (imgUrl: string, index: number) => {
    setActiveImg(imgUrl);
    setActiveIndex(index);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setActiveIndex(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 p-4 md:p-8"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div className="max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              <motion.img
                layoutId={`img-${activeImg}`}
                src={activeImg}
                alt={projects[activeIndex].title}
                className="w-full object-cover h-64 md:h-96"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  willChange: "transform",
                }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{projects[activeIndex].title}</h2>
                <p className="text-sm font-medium text-accent mb-4">{projects[activeIndex].category}</p>
                <p className="text-gray-700 dark:text-gray-300">{projects[activeIndex].description}</p>
                <button 
                  className="mt-6 bg-accent hover:bg-accent/90 text-black font-bold py-2 px-4 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Project details button action would go here
                  }}
                >
                  View Project Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={projects}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}
