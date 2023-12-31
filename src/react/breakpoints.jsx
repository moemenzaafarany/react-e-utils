import { useCallback, useLayoutEffect } from "react";
import { State } from "./state";
import { eDom } from "../js/dom";
import { Context } from "./context";
//==============================< State
const breakpoints = {
  sizes: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xx: 1440,
  },
  devices: {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1440,
  },
};
export const BreakpointsContext = Context(() => {
  const getCurrentSize = () => {
    let size = window.innerWidth;

    if (size >= breakpoints.sizes.xx) return "xx";
    if (size >= breakpoints.sizes.xl) return "xl";
    if (size >= breakpoints.sizes.lg) return "lg";
    if (size >= breakpoints.sizes.md) return "md";
    if (size >= breakpoints.sizes.sm) return "sm";
    return "xs";
  };
  const getCurrentDevice = () => {
    let size = window.innerWidth;

    if (size >= breakpoints.devices.desktop) return "desktop";
    if (size >= breakpoints.devices.laptop) return "laptop";
    if (size >= breakpoints.devices.tablet) return "tablet";
    return "mobile";
  };

  const currentSize = State(getCurrentSize());
  const currentDevice = State(getCurrentDevice());

  useLayoutEffect(() => {
    var cont = eDom.listenEvent(window, "resize", (evt) => {
      currentSize.value = getCurrentSize();
      currentDevice.value = getCurrentDevice();
    });
    return () => {
      cont.abort();
    };
  }, []);

  const forSize = useCallback(
    (xs, sm, md, lg, xl, xx) => {
      switch (currentSize.value) {
        case "xx":
          return xx ?? xl ?? lg ?? md ?? sm ?? xs ?? null;
        case "xl":
          return xl ?? lg ?? md ?? sm ?? xs ?? null;
        case "lg":
          return lg ?? md ?? sm ?? xs ?? null;
        case "md":
          return md ?? sm ?? xs ?? null;
        case "sm":
          return sm ?? xs ?? null;
        default:
          return xs ?? null;
      }
    },
    [currentSize]
  );
  const forDevice = useCallback(
    (mobile, tablet, laptop, desktop) => {
      switch (currentDevice.value) {
        case "desktop":
          return desktop ?? laptop ?? tablet ?? mobile ?? null;
        case "laptop":
          return laptop ?? tablet ?? mobile ?? null;
        case "tablet":
          return tablet ?? mobile ?? null;
        default:
          return mobile ?? null;
      }
    },
    [currentDevice]
  );

  return {
    get sizeBreakpoints() {
      return breakpoints.sizes;
    },
    get deviceBreakpoints() {
      return breakpoints.devices;
    },
    get size() {
      return currentSize.value;
    },
    get device() {
      return currentDevice.value;
    },
    forSize,
    forDevice,
  };
});
export const initBreakpoints = ({
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xx = 1440,

  mobile = 0,
  tablet = 640,
  laptop = 1024,
  desktop = 1440,
} = {}) => {
  breakpoints.sizes = { xs, sm, md, lg, xl, xx };
  breakpoints.devices = { mobile, tablet, laptop, desktop };
};
export const useBreakpoints = BreakpointsContext.Use;
export const BreakpointsProvider = BreakpointsContext.Provider;
export const BreakpointsConsumer = BreakpointsContext.Consumer;
