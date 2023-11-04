import { UseSpringProps, easings } from "@react-spring/web";

export const spring1: UseSpringProps = {
  from: {
    height: "100px",
    opacity: 0,
    scale: 0.2,
  },
  to: async (next) => {
    await next({
      height: "250px",
      opacity: 1,
      scale: 1,
    });
  },
  delay: 500,
  config: {
    tension: 200,
    mass: 10,
    friction: 50,
  },
};

export const spring2: UseSpringProps = {
  from: {
    opacity: 0,
    scale: 0.8,
    y: 200,
  },
  to: async (next) => {
    await next({
      opacity: 1,
      scale: 1,
      y: 0,
    });
  },
  config: {
    easing: easings.easeInOutBounce,
    tension: 200,
    mass: 10,
    friction: 50,
  },
};

export const spring3: UseSpringProps = {
  from: {
    opacity: 0,
    scale: 1,
  },
  to: async (next) => {
    await next({
      opacity: 1,
    });
  },
  delay: 2000,
  config: {
    easing: easings.easeInOutBounce,
    tension: 200,
    mass: 10,
    friction: 50,
  },
};
