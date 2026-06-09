//! DEVELOPED AND DESIGNED BY : HTTPS://GITHUB.COM/YOUNGHOSEIN

//---------import statics-----------
import React, { useState, useMemo, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  FiSearch,
  FiPhone,
  FiInstagram,
  FiMessageCircle,
} from "react-icons/fi";
import { lightTheme, darkTheme } from "./Assets/theme";
import breakfast1 from "./icons/breakfast1.svg";
import breakfast1d from "./icons/breakfast1d.svg";
import croissant from "./icons/croissant.svg";
import croissantd from "./icons/croissantd.svg";
import h_coffee from "./icons/h-coffee.svg";
import h_coffeed from "./icons/h-coffeed.svg";
import iced_coffee from "./icons/iced_coffee.svg";
import iced_coffeed from "./icons/iced_coffeed.svg";
import tea from "./icons/tea.svg";
import tead from "./icons/tead.svg";
import matcha from "./icons/matcha.svg";
import matchad from "./icons/matchad.svg";
import brewing from "./icons/brewing.svg";
import brewingd from "./icons/brewingd.svg";
import cocktail from "./icons/cocktail.svg";
import cocktaild from "./icons/cocktaild.svg";
import icy from "./icons/icy.svg";
import icyd from "./icons/icyd.svg";
import hot_drink from "./icons/hot-drink.svg";
import hot_drinkd from "./icons/hot-drinkd.svg";
import openSVG from "./icons/open.svg";
import closeSVG from "./icons/close.svg";
import logo1 from "./icons/logo1.svg";
import logo1d from "./icons/logo1d.svg";
import lmeal from "./icons/l-meal.svg";
import lmeald from "./icons/l-meald.svg";
import meal from "./icons/meal.svg";
import meald from "./icons/meald.svg";
import pizza from "./icons/pizza.svg";
import pizzad from "./icons/pizzad.svg";
import upl from "./icons/uplight.svg";
import upd from "./icons/updark.svg";

//---------global styles-----------
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@100..900&family=Lalezar:wght@100..900&family=Vazirmatn:wght@100..900&display=swap');
  * {
    box-sizing: border-box;
    transition: background 0.25s ease, color 0.25s ease;
  }

  body {
    font-family: "Vazirmatn", sans-serif;
    margin: 0;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    direction: rtl;
  }

  input, button {
    font-family: inherit;
  }
`;
//---ne
const BackToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${({ theme }) => theme.Up.bg};
  color: ${({ theme }) => theme.Up.color};
  border: ${({ theme }) => theme.Up.border};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transform: ${({ visible }) => (visible ? "scale(1)" : "scale(0.5)")};

  &:hover {
    background: ${({ theme }) => theme.Up.hoverbg};
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 20px;
  }

  .uplogo {
    opacity: 0.7;
  }
`;

const SplashOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: ${({ theme }) => theme.Splash.bg};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .card {
    width: 90%;
    background-color: ${({ theme }) => theme.Splash.card.bg};
    text-align: center;
    border: ${({ theme }) => theme.Splash.card.border};
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.Splash.card.shadow};
    transition: 0.5s;
  }

  .icon0 {
    color: ${({ theme }) => theme.Splash.icon0.color};
    width: 100px;
    background-color: ${({ theme }) => theme.Splash.icon0.bg};
    margin: 15px auto;
    padding: 3px;
    border-radius: 10%;
    box-shadow: ${({ theme }) => theme.Splash.icon0.shadow};
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 5px;
    font-size: 10px;
  }

  .icon0 h3 {
    text-shadow: ${({ theme }) => theme.Splash.icon0.h3};
  }

  .content {
    color: ${({ theme }) => theme.Splash.content.color};
    background-color: ${({ theme }) => theme.Splash.content.bg};
    padding: 7px 10px 15px 10px;
    margin: 5px 15px 15px 15px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.Splash.content.shadow};
    transition: all 0.5s;
  }

  .content h3 {
    text-shadow: ${({ theme }) => theme.Splash.content.h3};
    font-size: 13px;
    font-weight: 900;
  }
  .content p {
    text-shadow: ${({ theme }) => theme.Splash.content.shadowp};
    font-size: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.Splash.content.colorp};
    margin-bottom: -5px;
  }
  .content span {
    text-shadow: ${({ theme }) => theme.Splash.content.shadows};
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.Splash.content.colors};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 70px;
  left: 13px;
  outline: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border: 2px solid transparent;
  outline: none;

  .theme-switch {
    --toggle-size: 11px;
    /* the size is adjusted using font-size,
    this is not transform scale,
     so you can choose any size */
    --container-width: 5.625em;
    --container-height: 2.5em;
    --container-radius: 1.5em;
    /* radius 0 - minecraft mode :) */
    --container-light-bg: #7998c0;
    --container-night-bg: #1e1e20;
    --circle-container-diameter: 3.375em;
    --sun-moon-diameter: 2.125em;
    --sun-bg: #ecca2f;
    --moon-bg: #c4c9d1;
    --spot-color: #959db1;
    --circle-container-offset: calc(
      (var(--circle-container-diameter) - var(--container-height)) / 2 * -1
    );
    --stars-color: #fff;
    --clouds-color: #f3fdff;
    --back-clouds-color: #aacadf;
    --transition: 0.6s cubic-bezier(0, -0.02, 0.4, 1.25);
    --circle-transition: 0.2s cubic-bezier(0, -0.02, 0.35, 1.17);
  }

  .theme-switch,
  .theme-switch *,
  .theme-switch *::before,
  .theme-switch *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: var(--toggle-size);
  }

  .theme-switch__container {
    width: var(--container-width);
    height: var(--container-height);
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    outline: none;
    -webkit-box-shadow:
      0em -0.01em 0.01em rgb(0, 0, 0),
      0em 0.1em 0.2em rgb(92, 92, 92);
    box-shadow:
      0em -0.062em 0.062em rgba(0, 0, 0, 0.45),
      0em 0.1em 0.2em rgb(190, 190, 190);
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__container::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    -webkit-box-shadow:
      0em 0.05em 0.187em rgb(0, 0, 0) inset,
      0em 0.05em 0.187em rgb(141, 141, 141) inset;
    box-shadow:
      0em 0.3em 0.4em rgb(37, 37, 37) inset,
      0em 0.1em 0.2em rgb(161, 161, 161) inset;
    border-radius: var(--container-radius);
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: var(--circle-container-offset);
    top: var(--circle-container-offset);
    border-radius: var(--container-radius);
    -webkit-box-shadow:
      inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
      inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
      0 0 0 0.625em rgba(255, 255, 255, 0.1),
      0 0 0 1.25em rgba(255, 255, 255, 0.1);
    box-shadow:
      inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
      inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
      0 0 0 0.625em rgba(255, 255, 255, 0.1),
      0 0 0 1.25em rgba(255, 255, 255, 0.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: var(--circle-transition);
    -o-transition: var(--circle-transition);
    transition: var(--circle-transition);
    pointer-events: none;
  }

  .theme-switch__sun-moon-container {
    pointer-events: auto;
    position: relative;
    z-index: 2;
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    margin: auto;
    border-radius: var(--container-radius);
    background-color: var(--sun-bg);
    -webkit-box-shadow:
      0.062em 0.062em 0.062em 0em rgba(0, 0, 0, 0.61) inset,
      0em -0.062em 0.062em 0em #a1872a inset;
    box-shadow:
      0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
      0em -0.062em 0.062em 0em #a1872a inset;
    -webkit-filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25))
      drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25))
      drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    overflow: hidden;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  .theme-switch__moon {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    background-color: var(--moon-bg);
    border-radius: inherit;
    -webkit-box-shadow:
      0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
      0em -0.062em 0.062em 0em #969696 inset;
    box-shadow:
      0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
      0em -0.062em 0.062em 0em #969696 inset;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__spot {
    position: absolute;
    top: 0.75em;
    left: 0.312em;
    width: 0.75em;
    height: 0.75em;
    border-radius: var(--container-radius);
    background-color: var(--spot-color);
    -webkit-box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
    box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
  }

  .theme-switch__spot:nth-of-type(2) {
    width: 0.375em;
    height: 0.375em;
    top: 0.937em;
    left: 1.375em;
  }

  .theme-switch__spot:nth-last-of-type(3) {
    width: 0.25em;
    height: 0.25em;
    top: 0.312em;
    left: 0.812em;
  }

  .theme-switch__clouds {
    width: 1.25em;
    height: 1.25em;
    background-color: var(--clouds-color);
    border-radius: var(--container-radius);
    position: absolute;
    bottom: -0.625em;
    left: 0.312em;
    -webkit-box-shadow:
      0.937em 0.312em var(--clouds-color),
      -0.312em -0.312em var(--back-clouds-color),
      1.437em 0.375em var(--clouds-color),
      0.5em -0.125em var(--back-clouds-color),
      2.187em 0 var(--clouds-color),
      1.25em -0.062em var(--back-clouds-color),
      2.937em 0.312em var(--clouds-color),
      2em -0.312em var(--back-clouds-color),
      3.625em -0.062em var(--clouds-color),
      2.625em 0em var(--back-clouds-color),
      4.5em -0.312em var(--clouds-color),
      3.375em -0.437em var(--back-clouds-color),
      4.625em -1.75em 0 0.437em var(--clouds-color),
      4em -0.625em var(--back-clouds-color),
      4.125em -2.125em 0 0.437em var(--back-clouds-color);
    box-shadow:
      0.937em 0.312em var(--clouds-color),
      -0.312em -0.312em var(--back-clouds-color),
      1.437em 0.375em var(--clouds-color),
      0.5em -0.125em var(--back-clouds-color),
      2.187em 0 var(--clouds-color),
      1.25em -0.062em var(--back-clouds-color),
      2.937em 0.312em var(--clouds-color),
      2em -0.312em var(--back-clouds-color),
      3.625em -0.062em var(--clouds-color),
      2.625em 0em var(--back-clouds-color),
      4.5em -0.312em var(--clouds-color),
      3.375em -0.437em var(--back-clouds-color),
      4.625em -1.75em 0 0.437em var(--clouds-color),
      4em -0.625em var(--back-clouds-color),
      4.125em -2.125em 0 0.437em var(--back-clouds-color);
    -webkit-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    -o-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
  }

  .theme-switch__stars-container {
    position: absolute;
    color: var(--stars-color);
    top: -100%;
    left: 0.312em;
    width: 2.75em;
    height: auto;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  /* actions */

  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__circle-container {
    left: calc(
      100% - var(--circle-container-offset) - var(--circle-container-diameter)
    );
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__circle-container:hover {
    left: calc(
      100% - var(--circle-container-offset) - var(--circle-container-diameter) -
        0.187em
    );
  }

  .theme-switch__circle-container:hover {
    left: calc(var(--circle-container-offset) + 0.187em);
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__moon {
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__clouds {
    bottom: -4.062em;
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__stars-container {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

//---------category dictionaries-----------

const categoriesData = [
  {
    id: "breakfast",
    title: "صبحانه و میان وعده",
    icon: (isDark) =>
      isDark ? (
        <img src={breakfast1d} alt="breakfast icon" width={40} />
      ) : (
        <img src={breakfast1} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "pastry",
    title: "شیرینی ها",
    icon: (isDark) =>
      isDark ? (
        <img src={croissantd} alt="breakfast icon" width={40} />
      ) : (
        <img src={croissant} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "hot-espresso",
    title: "نوشیدنی گرم بر پایه اسپرسو",
    icon: (isDark) =>
      isDark ? (
        <img src={h_coffeed} alt="breakfast icon" width={40} />
      ) : (
        <img src={h_coffee} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "iced-espresso",
    title: "نوشیدنی سرد بر پایه اسپرسو",
    icon: (isDark) =>
      isDark ? (
        <img src={iced_coffeed} alt="breakfast icon" width={40} />
      ) : (
        <img src={iced_coffee} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "tea",
    title: "چای و دمنوش",
    icon: (isDark) =>
      isDark ? (
        <img src={tead} alt="breakfast icon" width={40} />
      ) : (
        <img src={tea} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "drip-coffee",
    title: "قهوه های دمی",
    icon: (isDark) =>
      isDark ? (
        <img src={brewingd} alt="breakfast icon" width={40} />
      ) : (
        <img src={brewing} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "iced-matcha",
    title: "آیس ماچا",
    icon: (isDark) =>
      isDark ? (
        <img src={matchad} alt="breakfast icon" width={40} />
      ) : (
        <img src={matcha} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "hot-drinks",
    title: "نوشیدنی گرم",
    icon: (isDark) =>
      isDark ? (
        <img src={hot_drinkd} alt="breakfast icon" width={40} />
      ) : (
        <img src={hot_drink} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "cold-drinks",
    title: "نوشیدنی سرد",
    icon: (isDark) =>
      isDark ? (
        <img src={cocktaild} alt="breakfast icon" width={40} />
      ) : (
        <img src={cocktail} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "icy",
    title: "شیک و اسموتی",
    icon: (isDark) =>
      isDark ? (
        <img src={icyd} alt="breakfast icon" width={40} />
      ) : (
        <img src={icy} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "l-meal",
    title: "پیش غذا",
    icon: (isDark) =>
      isDark ? (
        <img src={lmeald} alt="breakfast icon" width={40} />
      ) : (
        <img src={lmeal} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "meal",
    title: "غذای اصلی",
    icon: (isDark) =>
      isDark ? (
        <img src={meald} alt="breakfast icon" width={40} />
      ) : (
        <img src={meal} alt="breakfast icon" width={40} />
      ),
  },
  {
    id: "pizza",
    title: "پیتزا",
    icon: (isDark) =>
      isDark ? (
        <img src={pizzad} alt="breakfast icon" width={40} />
      ) : (
        <img src={pizza} alt="breakfast icon" width={40} />
      ),
  },
];

//---------products dictionary-----------
const productsData = {
  breakfast: [
    {
      id: 2,
      title: "تست اسکرمبل",
      desc: " نان خمیر ترش، فراورده تخم مرغ و شیر ",
      price: "۲۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 3,
      title: "اِگ کروسان بیکن",
      desc: "نان کروسان، تخم مرغ، بیکن",
      price: "۳۴۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 5,
      title: "فرنچ تست",
      desc: "نان خمیر ترش، سس بری، ،نوتلا، خامه",
      price: "۲۸۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 6,
      title: "املت ایرانی",
      desc: "",
      price: "۲۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 7,
      title: "بشقاب انگلیسی",
      desc: "تخم مرغ، لوبیا، هات داگ، بیکن، سیب زمینی، قارچ",
      price: "۳۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 8,
      title: "بشقاب رژیمی",
      desc: "تخم مرغ آب پز ، سالاد ، دورچین",
      price: "۳۵۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 9,
      title: "سوسیس تخم مرغ",
      desc: "",
      price: "۳۵۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
  ],
  pastry: [
    {
      id: 1,
      title: "کروسان کره ای",
      desc: "",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 2,
      title: "کروسان موز و نوتلا",
      desc: "",
      price: "۲۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 3,
      title: "کروسان کره بادام زمینی",
      desc: "",
      price: "۲۷۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 4,
      title: "کیک روز",
      desc: "",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 5,
      title: "سن سباستین",
      desc: "",
      price: "۲۸۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 5,
      title: "چیزکیک نیویورکی",
      desc: "",
      price: "۲۸۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 6,
      title: "کیک بستنی",
      desc: "",
      price: "۲۷۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 7,
      title: "کوکی",
      desc: "",
      price: "۱۶۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 8,
      title: "وافل نوتلا",
      desc: "وافل ساده همراه با نوتلا، میوه و بستنی",
      price: "۴۰۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 9,
      title: "وافل کره بادام زمینی",
      desc: "وافل ساده همراه با کره بادام زمینی میوه و عسل",
      price: "۳۶۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 10,
      title: "وافل لوتوس",
      desc: "وافل ساده همراه با کرم لوتوس و بستنی",
      price: "۳۶۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
  ],
  "hot-espresso": [
    {
      id: 1,
      title: "اسپرسو ۱۰۰ عربیکا",
      desc: "",
      price: "۲۰۰,۰۰۰ تومان",
      img: " ",
    },
    {
      id: 2,
      title: "اسپرسو ترکیب ۵۰/۵۰ ",
      desc: "",
      price: "۱۷۵,۰۰۰ تومان",
      img: " ",
    },
    {
      id: 3,
      title: "آمریکانو ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با آب داغ",
      price: "۲۰۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 4,
      title: "آمریکانو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با آب داغ",
      price: "۱۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 5,
      title: "کورتادو ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با ۶۰ سی سی شیر گرم شده",
      price: "۲۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 6,
      title: "کورتادو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۶۰ سی سی شیر گرم شده",
      price: "۲۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 7,
      title: "کاپوچینو ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با ۱۵۰ سی سی شیر گرم شده",
      price: "۲۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 8,
      title: "کاپوچینو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۱۵۰ سی سی شیر گرم شده",
      price: "۲۳۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 9,
      title: "لاته ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده",
      price: "۲۸۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 10,
      title: "لاته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده",
      price: "۲۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 11,
      title: "موکا ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ شکلات",
      price: "۳۰۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 12,
      title: "موکا ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ شکلات",
      price: "۲۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 13,
      title: "لاته کارامل ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ کارامل",
      price: "۳۰۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 14,
      title: "لاته کارامل ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ کارامل",
      price: "۲۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 15,
      title: "لاته لوتوس ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم لوتوس",
      price: "۳۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 16,
      title: "لاته لوتوس ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم لوتوس",
      price: "۳۰۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 17,
      title: "لاته پسته ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم پسته",
      price: "۳۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 18,
      title: "لاته پسته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم پسته",
      price: "۳۰۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 19,
      title: "آیتم سیروپ اضافه",
      desc: "شیر عسلی، فندوق، نارگیل، عسل، وانیل",
      price: "۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
  ],
  "iced-espresso": [
    {
      id: 1,
      title: "آیس اسپرسو ۱۰۰ عربیکا",
      desc: "",
      price: "۲۲۰,۰۰۰ تومان",
      img: " ",
    },
    {
      id: 2,
      title: "آیس اسپرسو ترکیب ۵۰/۵۰ ",
      desc: "",
      price: "۱۹۵,۰۰۰ تومان",
      img: " ",
    },
    {
      id: 3,
      title: "آیس آمریکانو ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با آب سرد و یخ",
      price: "۲۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 4,
      title: "آیس آمریکانو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با آب سرد و یخ",
      price: "۲۰۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 5,
      title: "آفوگاتو ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با بستنی وانیل",
      price: "۲۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 6,
      title: "آفوگاتو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با بستنی وانیل",
      price: "۲۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 7,
      title: "آفوگاتو پسته ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با بستنی وانیل و کرم پسته",
      price: "۲۷۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 8,
      title: "آفوگاتو پسته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با بستنی وانیل و کرم پسته",
      price: "۲۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 9,
      title: "آفوگاتو نوتلا ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با بستنی وانیل و نوتلا",
      price: "۲۷۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 10,
      title: "آفوگاتو نوتلا ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با بستنی وانیل و نوتلا",
      price: "۲۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },

    {
      id: 11,
      title: "آیس لاته ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با شیر سرد و یخ",
      price: "۳۰۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 12,
      title: "آیس لاته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و یخ",
      price: "۲۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 13,
      title: " آیس موکا ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با شیر سرد و سیروپ شکلات",
      price: "۳۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 14,
      title: "آیس موکا ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و سیروپ شکلات",
      price: "۳۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 15,
      title: "آیس لاته کارامل ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با شیر سرد و سیروپ کارامل",
      price: "۳۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 16,
      title: "آیس لاته کارامل ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و سیروپ کارامل",
      price: "۳۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 15,
      title: "آیس لاته لوتوس ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با شیر سرد و کرم لوتوس",
      price: "۳۳۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 16,
      title: "آیس لاته لوتوس ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و کرم لوتوس",
      price: "۳۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 17,
      title: "آیس لاته پسته ۱۰۰ عربیکا",
      desc: "اسپرسو همراه با شیر سرد و کرم پسته",
      price: "۳۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 18,
      title: "آیس لاته پسته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و کرم پسته",
      price: "۳۳۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 19,
      title: "آیتم سیروپ اضافه",
      desc: "شیر عسلی، فندوق، نارگیل، عسل، وانیل",
      price: "۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
  ],
  tea: [
    {
      id: 1,
      title: "چای سیاه گیلان",
      desc: "چای معطر لاهیجان",
      price: "۱۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "چای زعفران",
      desc: "چای معطر لاهیجان همراه با زعفران سرد دم",
      price: "۲۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "چای هل و دارچین",
      desc: "",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "چای انگلیسی",
      desc: "چای معطر لاهیجان همراه با عسل و شیر گرم شده",
      price: "۲۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "چای سبز",
      desc: "",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "چای ترش",
      desc: "",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "چای لیمو عسل",
      desc: "چای معطر لاهیجان همراه با عسل و لیمو",
      price: "۲۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 8,
      title: "دمنوش آرامش",
      desc: "آب داغ همراه با گل گاوزبان و لیمو و عسل",
      price: "۲۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 9,
      title: "دمنوش توت وحشی",
      desc: "چای ترش همراه با توت فرنگی و توت وحشی",
      price: "۲۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 10,
      title: "دمنوش بهار",
      desc: "آب داغ همراه با بهار نارنج و گل محمدی",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "drip-coffee": [
    {
      id: 1,
      title: "قهوه ترک",
      desc: "",
      price: "۲۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "وی ۶۰",
      desc: "بیبی گیشا",
      price: "",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "وی ۶۰",
      desc: "کلمبیا هویلا",
      price: "",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "کلدبرو",
      desc: "",
      price: "بزودی",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "iced-matcha": [
    {
      id: 1,
      title: "آیس ماچا لاته",
      desc: "ماچا همراه با شیر سرد و یخ",
      price: "۳۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "آیس بری ماچا لاته",
      desc: "آیس ماچا لاته همراه با توت فرنگی و شاتوت مادل شده",
      price: "۳۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "آیس کوکو ماچا لاته",
      desc: "آیس ماچا لاته همراه با شیر نارگیل",
      price: "۳۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "hot-drinks": [
    {
      id: 1,
      title: "هات چاکلت",
      desc: "",
      price: "۲۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "ماچا لاته",
      desc: "",
      price: "۲۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "شیر کاکائو",
      desc: "",
      price: "۲۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "ماسالا",
      desc: "",
      price: "۲۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "شیر نسکافه",
      desc: "",
      price: "۲۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "شیر عسل دارچین",
      desc: "",
      price: "۲۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "هات نوتلا",
      desc: "",
      price: "۲۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 8,
      title: "هات لوتوس",
      desc: "",
      price: "۲۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "cold-drinks": [
    {
      id: 1,
      title: "لیموناد",
      desc: "عصاره لیمو همراه با سیروپ شکر و سودا",
      price: "۲۴۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 2,
      title: "لیموناد بری",
      desc: "عصاره لیمو همراه با سیروپ شکر، توت فرنگی و سودا",
      price: "۲۷۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 3,
      title: "موهیتو",
      desc: "عصاره لیمو همراه با سیروپ شکر، نعنا و سودا",
      price: "۲۵۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 4,
      title: "شربت بهار",
      desc: "",
      price: "۲۳۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 5,
      title: "آیس تی",
      desc: "چای سرد دم همراه با عصاره دست ساز آن دم",
      price: "۲۳۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 6,
      title: "دالگونا",
      desc: "مخفیه :)",
      price: "۲۶۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
        {
      id: 7,
      title: "رد موهیتو",
      desc: "عصاره لیمو همراه با سیروپ شکر، نعنا، توتفرنگی و بری، سودا",
      price: "۲۶۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
  ],
  icy: [
    {
      id: 4,
      title: "شیک وانیل",
      desc: "",
      price: "۲۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "شیک شکلات",
      desc: "",
      price: "۲۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "شیک نوتلا",
      desc: "",
      price: "۳۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "شیک لوتوس",
      desc: "",
      price: "۳۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 8,
      title: "شیک کوکی",
      desc: "",
      price: "۳۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 9,
      title: "شیک نسکافه",
      desc: "",
      price: "۳۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 10,
      title: "شیک اسپرسو",
      desc: "",
      price: "۳۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 11,
      title: "شیک پسته",
      desc: "",
      price: "۳۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 12,
      title: "شیک توت فرنگی",
      desc: "",
      price: "۲۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 13,
      title: "شیک بادام زمینی",
      desc: "",
      price: "۲۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 14,
      title: "هزل نات",
      desc: "بستنی وانیل همراه با شکلات و فندق",
      price: "۳۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "l-meal": [
    {
      id: 1,
      title: "فرایز",
      desc: "",
      price: "۳۴۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "بیکن فرایز",
      desc: "",
      price: "۴۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "فشن فرایز",
      desc: "",
      price: "۴۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "نان سیر",
      desc: "",
      price: "۴۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "سزار گریل",
      desc: "سالاد سزار همراه با مرغ گریل",
      price: "۵۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "سزار سوخاری",
      desc: "سالاد سزار همراه با مرغ سوخاری",
      price: "۶۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "آیتم سس اضافه",
      desc: "چیلی، قارچ، چدار، پستو، زرشک",
      price: "۱۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  meal: [
    {
      id: 1,
      title: "بشقاب فیله",
      desc: "مرغ گریل شده، قارچ، سالاد",
      price: "۴۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 1,
      title: "پنینی مرغ و پستو",
      desc: "",
      price: "۴۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "پنینی بیکن",
      desc: "",
      price: "۴۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "زینگر",
      desc: "",
      price: "۵۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "بشقاب فیله استریپس",
      desc: "",
      price: "۶۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "پنینی هات داگ",
      desc: "",
      price: "۴۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "برگر کلاسیک",
      desc: "",
      price: "۵۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "فشن برگر",
      desc: "",
      price: "۵۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "برث برگر",
      desc: "",
      price: "۶۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 8,
      title: "پاستا چیکن آلفردو",
      desc: "",
      price: "۵۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 9,
      title: "پاستا آلفردو سوخاری",
      desc: "",
      price: "۶۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 10,
      title: "پاستا پستو",
      desc: "",
      price: "۵۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 11,
      title: "آیتم سس اضافه",
      desc: "چیلی، قارچ، چدار، پستو، زرشک",
      price: "۱۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  pizza: [
    {
      id: 1,
      title: "پپرونی",
      desc: "",
      price: "۵۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "قارچ و گوشت",
      desc: "",
      price: "۶۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "چیکن پستو",
      desc: "",
      price: "۶۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },

    {
      id: 4,
      title: "بیکن",
      desc: "",
      price: "۶۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
};

//---------component styles-----------
const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

//---------header styles-----------
const Header = styled.header`
  .card {
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 5px 5px 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.Header.card.color};
    padding: 35px 25px;
    position: relative;
    color: ${({ theme }) => theme.Header.card.color1};
    transition: 0.5s;
    background: ${({ theme }) => theme.Header.card.bg};
    box-shadow: ${({ theme }) => theme.Header.card.shadow};
    z-index: 0;
    overflow: hidden;
  }

  .card__content {
    background: ${({ theme }) => theme.Header.card__content.bg};
    z-index: -1;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: absolute;
    width: 100%;
    box-shadow: ${({ theme }) => theme.Header.card__content.shadow};
    transition: 0.5s;
  }

  .blob {
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    filter: blur(15px);
    opacity: 0.6;
  }

  .blob-1 {
    left: -65px;
    top: -45px;
    background: ${({ theme }) => theme.Header.blob1.bg};
    background: ${({ theme }) => theme.Header.blob1.bg1};
    background: ${({ theme }) => theme.Header.blob1.bg2};
    transform: rotate(12deg);
  }

  .blob-2 {
    left: -30px;
    top: 120px;
    background: ${({ theme }) => theme.Header.blob2.bg};
    background: ${({ theme }) => theme.Header.blob2.bg1};
    background: ${({ theme }) => theme.Header.blob2.bg2};
    transform: rotate(20deg);
  }

  .blob-3 {
    right: -60px;
    bottom: -10px;
    background: ${({ theme }) => theme.Header.blob3.bg};
    background: ${({ theme }) => theme.Header.blob3.bg1};
    background: ${({ theme }) => theme.Header.blob3.bg2};
    transform: rotate(-10deg);
  }

  .blob-4 {
    right: -70px;
    top: 20px;
    background: ${({ theme }) => theme.Header.blob4.bg};
    background: ${({ theme }) => theme.Header.blob3.bg1};
    background: ${({ theme }) => theme.Header.blob3.bg2};
    transform: rotate(-25deg);
  }

  .del {
    position: relative;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .del div {
    display: flex;
    z-index: 1;
    padding-bottom: 20px;
    padding-right: 20px;
  }

  .status {
    margin-right: -100%;
    margin-top: -50%;
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.Header.status.color};
  }
  .logo1 {
    margin-top: -535px;
    margin-bottom: -530px;
    margin-left: 50%;
    opacity: ${({ theme }) => theme.Header.logo1.opacity};
    transition: ${({ theme }) => theme.Header.logo1.transition};
  }
  .search {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.Header.search.bg};
    border-radius: 30px;
    padding: 15px 25px;
    svg {
      margin-right: 10px;
    }
  }
  .search input {
    width: 100%;
    padding: 0 20px;
    border: none;
    outline: none;
    font-size: 14px;
    color: #404040;
  }

  @media (max-width: 768px) {
    padding: 10px 5px;
    .status {
      font-size: 12px;
    }
    .del div {
      padding-bottom: 20px;
      padding-right: 20px;
    }
    img.logo {
      width: 90px;
      height: 30px;
    }
    .logo1 {
      margin-top: -35px;
      margin-bottom: -30px;
      margin-left: 125px;
    }
  }
`;

const SearchBar = styled.div`
  margin: 15px 0 30px 0;
  max-width: 1200px;
  position: relative;
  display: flex;
  border-radius: 1rem;
  border: 2px solid transparent;

  input {
    width: 100%;
    border-radius: 14px;
    font-size: 12px;
    font-family: "Vazir", Tahoma, sans-serif;
    border: 1px solid transparent;
    outline: none;
    padding: 1em;
    background: ${({ theme }) => theme.SearchBar.input.background};
    color: ${({ theme }) => theme.SearchBar.input.color};
    box-shadow: ${({ theme }) => theme.SearchBar.input.shadow};
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;

    &:focus {
      background-color: ${({ theme }) =>
        theme.SearchBar.input.focus.background};
      transform: scale(1.015);
      color: ${({ theme }) => theme.SearchBar.input.focus.color};
      font-weight: 300px;
      border: 2px solid transparent;
      outline: none;
      box-shadow: ${({ theme }) => theme.SearchBar.input.focus.shadow};
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #a7a7a7ff;
    font-size: 20px;
    transition: 300ms ease-in-out;
  }
`;

const CategoryScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 10px;

  /* Hide scrollbar 
  scrollbar-width: none;
  -ms-overflow-style: none;*/

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryItem = styled.button`
  justify-content: center;
  align-items: center;
  background: ${({ theme, selected }) =>
    selected ? theme.Category.backgroundN : theme.Category.backgroundS};
  color: ${({ theme, selected }) =>
    selected ? theme.Category.colorN : theme.Category.colorS};
  border-radius: 100% 100% 100% 100%;
  padding: 0px 12px 14px 10px;
  margin-right: 9px;
  margin-left: -8px;
  margin-bottom: 5px;
  min-width: 78px;
  min-height: 120px;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  border: ${({ theme, selected }) =>
    selected ? theme.Category.borderN : theme.Category.borderS};
  box-shadow: ${({ theme, selected }) =>
    selected ? theme.Category.shadowN : theme.Category.shadowS};
  transition: 400ms ease-in-out;

  &:hover {
    transform: scale(1.06);
    svg {
      color: ${({ theme, selected }) =>
        selected
          ? theme.Category.hover.svg.colorN
          : theme.Category.hover.svg.colorS};
    }
  }
  img {
    opacity: ${({ theme }) => theme.Category.img.opacity};
    transition: ${({ theme }) => theme.Category.img.transition};
  }
  
  svg {
    font-size: 24px;
    color: ${({ theme, selected }) =>
      selected ? theme.Category.svg.colorN : theme.Category.svg.colorS};

  @media (max-width: 768px) {
    min-width: 75px;
    padding: 14px 14px 12px 10px;

    font-size: 11.5px;
    svg {
      font-size: 26px;
      margin-bottom: 8px;
    }
  }
`;

const CategoryTitle = styled.h2`
  font-weight: 900;
  margin: 32px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 15px;

  svg {
    color: rgb(44, 44, 44);
  }

  img {
    opacity: ${({ theme }) => theme.Category.img.opacity};
    transition: ${({ theme }) => theme.Category.img.transition};
  }
`;

const ProductListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.article`
  --bg: ${({ theme }) => theme.ProductCard.bg}
    --contrast: ${({ theme }) => theme.ProductCard.contrast};
  --grey: ${({ theme }) => theme.ProductCard.grey};
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.ProductCard.shadow};
  display: grid;
  gap: 36px;
  align-items: center;
  position: relative;
  padding: 9px;
  background-color: ${({ theme }) => theme.ProductCard.bg};
  border-radius: 35px;

  .card-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 25px;
    background: repeating-conic-gradient(
        ${({ theme }) => theme.ProductCard.bg} 0.0000001%,
        ${({ theme }) => theme.ProductCard.grey} 0.000104%
      )
      60% 60%/600% 600%;
    filter: opacity(10%) contrast(105%);
  }

  .card-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: ${({ theme }) => theme.ProductCard.contrast};
    border-radius: 30px;
    direction: rtl;
  }

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 24px;
    user-select: none;
    margin: 10px;
    padding: 0px;
    background-color: ${({ theme }) => theme.ProductCard.img.bg};
    text-align: center;
    box-shadow: ${({ theme }) => theme.ProductCard.img.shadow};
    transition: 0.5s;
    outline: ${({ theme }) => theme.ProductCard.img.outline};
    outline-offset: -1px;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-right: 16px;
    margin-top: 16px;

    h3 {
      margin-top: 2;
      font-weight: 700;
      font-size: 16px;
      color: ${({ theme }) => theme.ProductCard.content.h3.color};
      line-height: 1.1;
    }
    p.desc {
      margin-bottom: 2;
      color: ${({ theme }) => theme.ProductCard.content.p_desc.color};
      font-size: 12px;
      line-height: 1.8;
      min-height: auto;
      overflow-wrap: break-word;

      a {
        text-decoration: none;
        font-weight: bold;
        color: ${({ theme }) => theme.ProductCard.content.p_desc.a.color};
      }
    }
    p.price {
      margin-top: 10px;
      font-weight: 700;
      color: ${({ theme }) => theme.ProductCard.content.p_desc.color};
      font-size: 16px;
      align-self: flex-start;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 130px;
      height: 130px;
      border-radius: 20px;
    }

    .content p.desc {
      min-height: auto;
    }

    .content {
      margin-left: 10px;
    }
  }
`;

const FooterWrapper = styled.footer`
  .card {
    position: relative;
    border-radius: 20px 110px 0 0;
    overflow: hidden;
  }

  .card__content {
    background: ${({ theme }) => theme.Footer.card__content.background};
    z-index: 3; !important
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    filter: blur(15px);
    opacity: 0.5;
  }

  .blob-1 {
    left: -65px;
    top: -45px;
    background: ${({ theme }) => theme.Footer.blob1.bg};
    background: ${({ theme }) => theme.Footer.blob1.bg1};
    background: ${({ theme }) => theme.Footer.blob1.bg2};
    transform: rotate(12deg);
  }

  .blob-2 {
    left: -30px;
    top: 120px;
    background: ${({ theme }) => theme.Footer.blob2.bg};
    background: ${({ theme }) => theme.Footer.blob2.bg1};
    background: ${({ theme }) => theme.Footer.blob2.bg2};
    transform: rotate(20deg);
  }

  .blob-3 {
    right: -60px;
    bottom: -10px;
    background: ${({ theme }) => theme.Footer.blob3.bg};
    background: ${({ theme }) => theme.Footer.blob3.bg1};
    background: ${({ theme }) => theme.Footer.blob3.bg2};
    transform: rotate(-10deg);
  }

  .blob-4 {
    right: -70px;
    top: 20px;
    background: ${({ theme }) => theme.Footer.blob4.bg};
    background: ${({ theme }) => theme.Footer.blob4.bg1};
    background: ${({ theme }) => theme.Footer.blob4.bg2};
    transform: rotate(-25deg);
  }

  .footer{
    background: ${({ theme }) => theme.Footer.footer.bg};
    border-radius: 30px 0 0 30px;
    padding: 40px 30px 30px 30px;
    color: ${({ theme }) => theme.Footer.footer.color};
    direction: rtl;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    @media (max-width: 768px) {
      flex-direction: column;
      border-radius: 20px 90px 0 0;
      padding: 20px 20px 24px 20px;
  
      .info-left {
        max-width: 100%;
        margin-bottom: 35px;
        text-align: center;
  
        .address {
          justify-content: center;
        }
      }
  
      .info-right {
        justify-content: center;
      }
    }
  }

  .info-left {
    max-width: 380px;
    z-index:3;


    .logo2 {
      margin-top:-10px;
      margin-bottom:-30px;
      opacity: ${({ theme }) => theme.Footer.infoleft.logo2.opacity};
      transition:  ${({ theme }) => theme.Footer.infoleft.logo2.transition};
    }

    h2 {
      color: ${({ theme }) => theme.Footer.infoleft.h2.color};
      font-weight: 700;
      margin-bottom: 4px;
    }

    .address {
      opacity: 0.9;
      margin: 8px 0 30px 0;
      font-size: 11px;
      display: flex;
      gap: 5px;
      align-items: center;
      color: ${({ theme }) => theme.Footer.infoleft.address.color};

      svg {
        margin-left: 4px;
        min-width: 12px;
        min-height: 12px;
        stroke: currentColor;
      }
    }

    .rights {
      margin: 0;
      font-size: 12px;
      opacity: 0.5;
      user-select: none;
      color: ${({ theme }) => theme.Footer.infoleft.rights.color};
      font-weight:400;
    
        a {
          color: ${({ theme }) => theme.Footer.infoleft.rights.a.color};
          text-decoration: none;
        }
      }
    
  }

  .info-right {
    display: flex;
    gap: 25px;
    align-items: center;
    z-index:3;

    .phone-box {
      background: ${({ theme }) => theme.Footer.inforight.phonebox.background};
      border-radius: 18px;
      color: ${({ theme }) => theme.Footer.inforight.phonebox.color};
      padding: 15px;
      margin-bottom: 15px;
      cursor: default;
      font-weight: 700;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      user-select: text;
      transition: 300ms ease-in-out;
      text-decoration: none;


      svg {
        font-size: 22px;
      }

      &:hover {
        transform: scale(1.1);
        background: ${({ theme }) => theme.Footer.inforight.phonebox.hover.background};
        color: ${({ theme }) => theme.Footer.inforight.phonebox.hover.color};
      }
      
    }

    nav.social {
      display: flex;
      gap: 24px;
      z-index:3;


      a {
        color: ${({ theme }) => theme.Footer.inforight.navsocial.a.color};
        font-size: 28px;
        transition: 200ms ease-in-out;
      }

      a:hover {
        transform: scale(1.3);
      }
      
      .insta:hover {
        color: #ff2277ff;
      }

      .whatsup:hover {
        color: #44ff1fff;
      }
    }
  }
`;

// ----------- Components ------------ //

function CategorySelect({ categories, selected, setSelected, isDark }) {
  return (
    <CategoryScroll role="tablist" aria-label="دسته بندی محصولات">
      {categories.map((cat) => (
        <CategoryItem
          key={cat.id}
          selected={selected === cat.id}
          onClick={() => setSelected(cat.id)}
          role="tab"
          aria-selected={selected === cat.id}
          aria-label={cat.title}
          tabIndex="0"
        >
          {typeof cat.icon === "function" ? cat.icon(isDark) : cat.icon}
          <span>{cat.title}</span>
        </CategoryItem>
      ))}
    </CategoryScroll>
  );
}

function ProductCardComp({ product }) {
  return (
    <ProductCard
      role="listitem"
      tabIndex="0"
      aria-label={`محصول ${product.title}`}
    >
      <div class="card-overlay"></div>
      <div class="card-inner">
        <div className="content">
          <h3>{product.title}</h3>
          <p className="desc">{product.desc}</p>
          <p className="price">{product.price}</p>
        </div>
        <img
          src={product.img}
          alt={""}
          loading="lazy"
          width={100}
          height={100}
          decoding="async"
          onError={(e) => (e.target.src = "")}
        />
      </div>
    </ProductCard>
  );
}

//  --------- Main Component --------

export default function OndamCafeMenu() {
  const [selectedCategory, setSelectedCategory] = useState(
    categoriesData[0].id,
  );

  const [searchValue, setSearchValue] = useState("");

  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const filteredProducts = useMemo(() => {
    if (!productsData[selectedCategory]) return [];
    if (!searchValue.trim()) return productsData[selectedCategory];

    return productsData[selectedCategory].filter(
      (p) =>
        p.title.includes(searchValue) ||
        (p.desc && p.desc.includes(searchValue)),
    );
  }, [selectedCategory, searchValue]);

  const [isLightOn, setIsLightOn] = useState(false);
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsLightOn(hour >= 8 && hour < 23);
    };
    checkTime();

    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // state جدید برای دکمه بالا
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // اگه بیشتر از 300px از بالا اسکرول کرده بود، دکمه رو نشون بده
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // تابع برای رفتن به بالا
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // انیمیشن نرم
    });
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          {/* Header */}
          <Header>
            <div class="card">
              <div class="card__content"></div>
              <div class="blob blob-1"></div>
              <div class="blob blob-2"></div>
              <div class="blob blob-3"></div>
              <div class="blob blob-4"></div>
              <div class="del">
                <div
                  className="status"
                  id="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <img
                    src={isLightOn ? openSVG : closeSVG}
                    alt="status"
                    width={59}
                  />
                </div>
              </div>
              <img
                src={darkMode ? logo1d : logo1}
                alt="Ondam Cafe Logo"
                className="logo1"
                draggable={false}
                width={100}
                height={100}
              />
              <ThemeToggle>
                <label class="theme-switch">
                  <input
                    type="checkbox"
                    class="theme-switch__checkbox"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                  <div class="theme-switch__container">
                    <div class="theme-switch__clouds"></div>
                    <div class="theme-switch__stars-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 144 55"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div class="theme-switch__circle-container">
                      <div class="theme-switch__sun-moon-container">
                        <div class="theme-switch__moon">
                          <div class="theme-switch__spot"></div>
                          <div class="theme-switch__spot"></div>
                          <div class="theme-switch__spot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </ThemeToggle>
            </div>
          </Header>

          {/* Search */}
          <SearchBar role="search" aria-label="جستجو در کافه Ondam ">
            <input
              type="search"
              placeholder="جستجو در کافه آن‌دَم ..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="جستجو در کافه آن‌دم "
            />
            <FiSearch aria-hidden="true" />
          </SearchBar>

          {/* Category selection */}
          <CategorySelect
            categories={categoriesData}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            isDark={darkMode}
          />

          {/* Category title */}
          <CategoryTitle role="heading" aria-level={2}>
            {(() => {
              const cat = categoriesData.find(
                (cat) => cat.id === selectedCategory,
              );
              if (!cat) return null;
              return typeof cat.icon === "function"
                ? cat.icon(darkMode)
                : cat.icon;
            })()}
            {categoriesData.find((cat) => cat.id === selectedCategory)?.title}
          </CategoryTitle>

          {/* Products */}
          <ProductListGrid role="list" aria-label="لیست محصولات">
            {filteredProducts.length === 0 && (
              <p
                role="alert"
                style={{
                  textAlign: "center",
                  padding: "60px",
                  width: "100%",
                  fontSize: "16px",
                  color: "#666",
                }}
              >
                بزودی :)
              </p>
            )}
            {filteredProducts.map((product) => (
              <ProductCardComp key={product.id} product={product} />
            ))}
          </ProductListGrid>

          {/* Footer */}
          <FooterWrapper role="contentinfo" aria-label="فوتر سایت  کافه Ondam">
            <div class="card">
              <div class="card__content"></div>
              <div class="blob blob-1"></div>
              <div class="blob blob-2"></div>
              <div class="blob blob-3"></div>
              <div class="blob blob-4"></div>
              <div className="footer">
                <div className="info-left">
                  <img
                    src={darkMode ? logo1d : logo1}
                    alt="Ondam Cafe Logo"
                    className="logo2"
                    draggable={false}
                    width={80}
                    height={80}
                  />
                  <p className="address" aria-label="آدرس کافه">
                    بابل، توحید ۵۱، خیابان وحدت، نبش وحدت ۱۲{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </p>
                  <p className="rights">
                    © تمامی حقوق برای کافه Ondam محفوظ است.
                  </p>
                  <p className="rights">
                    طراحی و توسعه توسط{" "}
                    <a
                      href="https://github.com/younghosein"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      حسین محمدپور
                    </a>
                  </p>
                </div>
                <div className="info-right">
                  <a
                    className="phone-box"
                    aria-label="شماره تماس کافه"
                    href="sms:+989113124145"
                    rel="noopener noreferrer"
                  >
                    <FiPhone aria-hidden="true" />
                    ۰۹۱۱۳۱۲۴۱۴۵
                  </a>
                  <nav className="social" aria-label="شبکه های اجتماعی کافه">
                    <a
                      className="insta"
                      href="https://instagram.com/ondam_cafe"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="اینستاگرام کافه Ondam"
                    >
                      <FiInstagram />
                    </a>
                    <a
                      className="whatsup"
                      href="https://wa.me/+989021378165"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="واتساپ کافه Ondam"
                    >
                      <FiMessageCircle />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </FooterWrapper>
        </Container>
        <BackToTopButton
          visible={showBackToTop}
          onClick={scrollToTop}
          aria-label="بازگشت به بالا"
        >
          <img
            src={darkMode ? upd : upl}
            alt="up"
            className="uplogo"
            draggable={false}
            width={30}
            height={30}
          />
        </BackToTopButton>
        {showSplash && (
          <SplashOverlay onClick={() => setShowSplash(false)}>
            <div class="card">
              <div class="icon0">
                <img
                  src={darkMode ? logo1d : logo1}
                  alt="Ondam Cafe Logo"
                  className="logo2"
                  draggable={false}
                  width={70}
                  height={70}
                />
              </div>
              <div class="content">
                <h3>خوش آمدید :)</h3>
                <p>
                  در ساعات شلوغ، زمان میزبانی از هر میز حداکثر ۱ ساعت و نیم
                  میباشد
                </p>
                <span>۸ صبح تا ۱۱:۳۰ شب</span>
              </div>
            </div>
          </SplashOverlay>
        )}
      </ThemeProvider>
    </>
  );
}
