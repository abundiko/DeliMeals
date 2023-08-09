import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mealIndex, setMealIndex] = useState(0);
  const [mealColor, setMealColor] = useState(meals[0].color);
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
      <div className="w-full h-full overflow-hidden relative flex items-center justify-between text-light">
        <div className="md:w-7/12 px-20">
          <h1 className="font-bold leading-[70px] text-6xl ">
            Delight Your Senses with Delicious Delights
          </h1>
          <h2 className="font-[500] text-lg w-10/12 leading-[20px] my-5 opacity-70">
            At DeliMeals, we combine culinary mastery with exceptional
            hospitality to create a dining experience that will leave you
            craving for more
          </h2>
          <div className="w-6/12">
            <div className="flex">
              {meals.map(({ title }, i) =>
                <div
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
        <div className="md:w-5/12 relative h-full flex flex-col justify-center">
          <AnimatePresence mode="popLayout">
            {meals.map(
              ({ title }, i) =>
                i === mealIndex &&
                <motion.img
                  key={title}
                  src={`/img/${title}.png`}
                  alt={title}
                  className="w-[120%]"
                  initial={{
                    translateX: "70%",
                    translateY: "-110%",
                    scale: 0.9,
                    opacity: 0
                  }}
                  animate={{
                    translateX: "0%",
                    translateY: "0%",
                    scale: 1.2,
                    opacity: 1
                  }}
                  exit={{
                    translateX: "70%",
                    translateY: "110%",
                    scale: 0.8,
                    opacity: 0
                  }}
                  transition={{
                    type: "spring",
                    damping: 5,
                    stiffness: 40
                  }}
                />
            )}
            {/* <motion.img whileHover={{ translateX: "70%", translateY: "110%" }} src="/img/chicken.png" alt="" className="w-[120%]" /> */}
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
