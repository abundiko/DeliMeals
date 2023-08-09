import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const exit = {
  translateX: "70%",
  translateY: "110%",
  scale: 0.8,
  opacity: 0
};
const enter = {
  translateX: "70%",
  translateY: "-110%",
  scale: 0.9,
  opacity: 0
};
/**
 * Renders the Hero section of the website.
 * Displays a dynamic background color and a list of meals.
 */
const Hero = () => {
  /**
   * State variables
   */
  const [mealIndex, setMealIndex] = useState(0);
  const [mealColor, setMealColor] = useState(meals[0].color);
  /**
   * Effect hook to update the meal color when the meal index changes
   */
  useEffect(
    () => {
      setMealColor(meals[mealIndex].color);
    },
    [mealIndex]
  );

  return (
    <section className="h-screen overflow-hidden relative">
      <div className="w-full h-full overflow-hidden absolute">
        <div
          style={{ backgroundColor: mealColor }}
          className="rounded-full h-[max(50vw,300px)] aspect-[1.2/1] absolute top-[-200px] left-[-100px]"
        />
        <div
          style={{ backgroundColor: mealColor }}
          className="rounded-full h-[max(50vw,300px)] aspect-[1/1] absolute bottom-[-200px] left-[-100px]"
        />
        <div
          style={{ backgroundColor: mealColor }}
          className="rounded-full h-[90vh] aspect-[2/1] absolute top-[5vh] right-[-100vh]"
        />
      </div>
      <div
        style={{ backgroundColor: mealColor }}
        className="w-full h-full overflow-hidden absolute top-0 left-0 opacity-30"
      />
      <div className="w-full h-full overflow-hidden absolute top-0 left-0 backdrop-blur-3xl" />
      <div className="w-full h-full overflow-hidden relative flex flex-wrap-reverse content-between items-center justify-between text-light">
        <div className="sm:w-8/12 md:w-7/12 px-6 lg:px-20 text-center sm:text-left pb-[3vh] sm:pb-0">
          <h1 className="font-bold lg:leading-[70px] text-2xl sm:text-4xl lg:text-6xl ">
            Delight Your Senses with Delicious Delights
          </h1>
          <h2 className="lg:font-[500] text-lg sm:w-10/12 leading-[20px] my-5 opacity-90">
            At DeliMeals, we combine culinary mastery with exceptional
            hospitality to create a dining experience that will leave you
            craving for more
          </h2>
          <div className="w-full md:w-8/12 xl:w-7/12">
            <div className="flex">
              {meals.map(({ title }, i) =>
                <div
                  key={title}
                  onClick={() => setMealIndex(i)}
                  className="w-3/12 p-2 aspect-[1/1] text-center flex flex-col items-center justify-center cursor-pointer group"
                >
                  <img
                    src={`/img/${title}.png`}
                    className="aspect-[1/1] w-full group-hover:w-8/12"
                    alt={title}
                    key={title}
                  />
                  <p className="text-sm font-[500] group-hover:h-5 h-0 overflow-hidden">
                    {title}
                  </p>
                </div>
              )}
            </div>
            <div className="flex">
              <motion.div
                animate={{ translateX: `${mealIndex * 100}%` }}
                transition={{ type: "spring", damping: 10, stiffness: 400 }}
                className="h-1 w-3/12 px-4"
              >
                <div className=" rounded-lg bg-light h-full w-full" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-4/12 md:w-5/12 relative sm:h-full flex flex-col justify-center h-[50vh] scale-[0.65] sm:scale-100">
          <AnimatePresence mode="popLayout">
            {meals.map(
              ({ title }, i) =>
                i === mealIndex &&
                <motion.img
                  key={title}
                  src={`/img/${title}.png`}
                  alt={title}
                  initial={enter}
                  animate={{
                    translateX: "0%",
                    translateY: "0%",
                    scale: 1.2,
                    opacity: 1
                  }}
                  exit={exit}
                  transition={{
                    type: "spring",
                    damping: 5,
                    stiffness: 40
                  }}
                />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const meals = [
  {
    title: "chicken",
    color: "#81461B"
  },
  {
    title: "nuget",
    color: "#94360a"
  },
  {
    title: "cake",
    color: "#6a4928"
  },
  {
    title: "pizza",
    color: "#B9181D"
  }
];
