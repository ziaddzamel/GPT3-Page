// chakra-theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        scrollBehavior: "smooth",
      },
      body: {
        background: "var(--color-bg)",
      },
      a: {
        color: "unset",
        textDecoration: "none",
      },
      ".gradient__bg": {
        background:
          "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",
      },
      ".Sec__bg": {
        backgroundColor:"radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)"
      },
      ".gradient__text": {
        background: "var(--gradient-text)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      ".section__padding": {
        padding: "4rem 6rem",
      },
      ".section__margin": {
        margin: "4rem 6rem",
      },
      ".scale-up-center": {
        WebkitAnimation:
          "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        animation:
          "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      "@-webkit-keyframes scale-up-center": {
        "0%": {
          WebkitTransform: "scale(0.5)",
          transform: "scale(0.5)",
        },
        "100%": {
          WebkitTransform: "scale(1)",
          transform: "scale(1)",
        },
      },
      "@keyframes scale-up-center": {
        "0%": {
          WebkitTransform: "scale(0.5)",
          transform: "scale(0.5)",
        },
        "100%": {
          WebkitTransform: "scale(1)",
          transform: "scale(1)",
        },
      },
      "@media screen and (max-width: 700px)": {
        ".section__padding": {
          padding: "4rem",
        },
        ".section__margin": {
          margin: "4rem",
        },
      },
      "@media screen and (max-width: 550px)": {
        ".section__padding": {
          padding: "4rem 2rem",
        },
        ".section__margin": {
          margin: "4rem 2rem",
        },
      },
    },
  },
  breakpoints: {
    base: "300px",
    sm: "330px", // Small screens (custom breakpoint, assuming 1em = 16px)
    md: "550px", // Medium screens (default)
    lg: "700px", // Large screens (default)
    xl: "909px", // Extra-large screens (default)
  },
});

export default theme;
