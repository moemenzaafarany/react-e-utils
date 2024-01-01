/* eslint-disable sort-keys */
import { useCallback, useEffect } from "react";
import eCreateContext from "./eCreateContext";
import eUseState from "./eUseState";
import eDom from "../js/eDom";

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

export const eBreakpointsContext = eCreateContext(() => {
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

  const currentSize = eUseState(getCurrentSize());
  const currentDevice = eUseState(getCurrentDevice());

  useEffect(() => {
    var cont = eDom.listenEvent(
      window,
      "resize",
      () => {
        let cs = getCurrentSize();
        if (cs !== currentSize.value) currentSize.value = cs;
        let cd = getCurrentDevice();
        if (cd !== currentDevice.value) currentDevice.value = cd;
      },
      { capture: true }
    );
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
    [currentSize.value]
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
    [currentDevice.value]
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
    get forSize() {
      return forSize;
    },
    get forDevice() {
      return forDevice;
    },
  };
});
export const eInitBreakpoints = ({
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
export const eBreakpointsProvider = eBreakpointsContext.Provider;
export const eBreakpointsConsumer = eBreakpointsContext.Consumer;
const eUseBreakpoints = eBreakpointsContext.Use;
export default eUseBreakpoints;
