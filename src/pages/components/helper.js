import { polyfill } from "seamless-scroll-polyfill";

export const handleLocation = (locat) => {
    polyfill();
    return document.querySelector(locat).scrollIntoView({ block: "start", inline: "start", behavior: "smooth" });

};