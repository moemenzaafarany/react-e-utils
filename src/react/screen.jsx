import { useEffect } from "react";
import { State } from "./state";
//==============================< State
// export const eBreakpoints = () => {
//   const

//   const theme = useTheme();

//   const useMediaQueryUp = (key) => {
//     return useMediaQuery(theme.breakpoints.up(key));
//   };
//   const useMediaQueryDown = (key) => {
//     return useMediaQuery(theme.breakpoints.down(key));
//   };
//   const useMediaQueryOnly = (key) => {
//     return useMediaQuery(theme.breakpoints.only(key));
//   };
//   const useMediaQueryNot = (key) => {
//     return useMediaQuery(theme.breakpoints.not(key));
//   };
//   const useMediaQueryBetween = (startKey, endKey) => {
//     return useMediaQuery(theme.breakpoints.between(startKey, endKey));
//   };

//   return {
//     up: useMediaQueryUp,
//     down: useMediaQueryDown,
//     only: useMediaQueryOnly,
//     not: useMediaQueryNot,
//     between: useMediaQueryBetween,
//   };
// };
// //
// export const ScreenWidth = () => {
//   const screenWidth = State(window.screenWidth);
//   const bp = {

//   }
//   const mq = State({
//     xs: useMediaQuery(theme.breakpoints.up("xs")),
//     sm: useMediaQuery(theme.breakpoints.up("sm")),
//     md: useMediaQuery(theme.breakpoints.up("md")),
//     lg: useMediaQuery(theme.breakpoints.up("lg")),
//     xl: useMediaQuery(theme.breakpoints.up("xl")),
//     mobile: useMediaQuery(theme.breakpoints.up("mobile")),
//     tablet: useMediaQuery(theme.breakpoints.up("tablet")),
//     laptop: useMediaQuery(theme.breakpoints.up("laptop")),
//     desktop: useMediaQuery(theme.breakpoints.up("desktop")),
//   });

//     useEffect(()=>{

//     },[]);

//   const forSize = (xs, sm, md, lg, xl) => {
//     let s = null;
//     if (mq.xs) s = xs ?? null;
//     if (mq.sm) s = sm ?? xs ?? null;
//     if (mq.md) s = md ?? sm ?? xs ?? null;
//     if (mq.lg) s = lg ?? md ?? sm ?? xs ?? null;
//     if (mq.xl) s = xl ?? lg ?? md ?? sm ?? xs ?? null;
//     return s;
//   };
//   const forDevice = (mobile, tablet, laptop, desktop) => {
//     let s = null;
//     if (mq.mobile) s = mobile ?? null;
//     if (mq.tablet) s = tablet ?? mobile ?? null;
//     if (mq.laptop) s = laptop ?? tablet ?? mobile ?? null;
//     if (mq.desktop) s = desktop ?? laptop ?? tablet ?? mobile ?? null;
//     return s;
//   };

//   return { forSize, forDevice };
// };
