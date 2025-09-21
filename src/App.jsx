//! DEVELOPED AND DESIGNED BY : HTTPS://GITHUB.COM/YOUNGHOSEIN

//---------import statics-----------
import React, { useState, useMemo, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  FiSearch,
  FiPhone,
  FiInstagram,
  FiMessageCircle,
} from "react-icons/fi";
import breakfast1 from "./icons/breakfast1.svg";
import croissant from "./icons/croissant.svg";
import h_coffee from "./icons/h-coffee.svg";
import iced_coffee from "./icons/iced_coffee.svg";
import tea from "./icons/tea.svg";
import matcha from "./icons/matcha.svg";
import brewing from "./icons/brewing.svg";
import cocktail from "./icons/cocktail.svg";
import icy from "./icons/icy.svg";
import hot_drink from "./icons/hot-drink.svg";
import openSVG from "./icons/open.svg";
import closeSVG from "./icons/close.svg";
import logo1 from "./icons/logo1.svg";
import lmeal from "./icons/l-meal.svg";
import meal from "./icons/meal.svg";
import pizza from "./icons/pizza.svg";

//---------global styles-----------
const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css');
  * {
    box-sizing: border-box;
  }
  body {
    position: "relative";
    zIndex: 1;
    font-family: 'Vazir', Tahoma, sans-serif;
    margin: 0;
    background: #eeeeee;
    direction: rtl;
    color: #222;
  }
  input, button {
    font-family: inherit;
  }
  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #575757ff;
    border-radius: 4px;
  }
`;

//---------category dictionaries-----------
const categoriesData = [
  {
    id: "breakfast",
    title: "صبحانه و میان وعده",
    icon: <img src={breakfast1} alt="breakfast icon" width={40} />,
  },
  {
    id: "pastry",
    title: "شیرینی ها",
    icon: <img src={croissant} alt="bakery icon" width={40} />,
  },
  {
    id: "hot-espresso",
    title: "نوشیدنی گرم بر پایه اسپرسو",
    icon: <img src={h_coffee} alt="hot-bar icon" width={40} />,
  },
  {
    id: "iced-espresso",
    title: "نوشیدنی سرد بر پایه اسپرسو",
    icon: <img src={iced_coffee} alt="iced-bar icon" width={40} />,
  },
  {
    id: "tea",
    title: "چای و دمنوش",
    icon: <img src={tea} alt="tea icon" width={40} />,
  },
  {
    id: "drip-coffee",
    title: "قهوه های دمی",
    icon: <img src={brewing} alt="matcha icon" width={40} />,
  },
  {
    id: "iced-matcha",
    title: "آیس ماچا",
    icon: <img src={matcha} alt="matcha icon" width={40} />,
  },
  {
    id: "hot-drinks",
    title: "نوشیدنی گرم",
    icon: <img src={hot_drink} alt="hot-drink icon" width={40} />,
  },
  {
    id: "cold-drinks",
    title: "نوشیدنی سرد",
    icon: <img src={cocktail} alt="cocktail icon" width={40} />,
  },
  {
    id: "icy",
    title: "شیک و اسموتی",
    icon: <img src={icy} alt="ice-cream icon" width={40} />,
  },
  {
    id: "l-meal",
    title: "پیش غذا",
    icon: <img src={lmeal} alt="light meal icon" width={40} />,
  },
  {
    id: "meal",
    title: "غذای اصلی",
    icon: <img src={meal} alt="meal icon" width={40} />,
  },
  {
    id: "pizza",
    title: "پیتزا",
    icon: <img src={pizza} alt="pizza icon" width={50} />,
  },
];

//---------products dictionary-----------
const productsData = {
  breakfast: [
    {
      id: 1,
      title: "تست آووکادو",
      desc: "نان خمیر ترش، پوره آووکادو، تخم مرغ آب‌پز",
      price: "۲۱۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/avocado-toast.jpg",
    },
    {
      id: 2,
      title: "تست اسکرمبل",
      desc: " نان خمیر ترش، فراورده تخم مرغ و شیر ",
      price: "۱۷۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 3,
      title: "اِگ کروسان بیکن",
      desc: "نان کروسان، تخم مرغ، بیکن",
      price: "۲۲۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 4,
      title: "اِگ کروسان آووکادو",
      desc: "نان کروسان، تخم مرغ، آووکادو",
      price: "۱۷۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 5,
      title: "فرنچ تست",
      desc: "نان خمیر ترش، سس بری، خامه",
      price: "۱۷۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 6,
      title: "املت ایرانی",
      desc: "",
      price: "۱۵۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 7,
      title: "بشقاب انگلیسی",
      desc: "تخم مرغ، لوبیا، هات داگ، بیکن، سیب زمینی، قارچ",
      price: "۲۸۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 8,
      title: "تست نیمرو آن دم",
      desc: "",
      price: "۲۶۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 9,
      title: "تست کره بادام زمینی و عسل",
      desc: "",
      price: "۱۶۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 10,
      title: "تست نوتلا بستنی",
      desc: "",
      price: "۲۱۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
  ],
  pastry: [
    {
      id: 1,
      title: "کروسان کره ای",
      desc: "",
      price: "۱۱۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 2,
      title: "کروسان موز و نوتلا",
      desc: "",
      price: "۱۶۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 3,
      title: "کروسان کره بادام زمینی",
      desc: "",
      price: "۱۴۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 4,
      title: "کیک روز",
      desc: "",
      price: "۹۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 5,
      title: "سن سباستین",
      desc: "",
      price: "۱۴۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 6,
      title: "کیک بستنی",
      desc: "",
      price: "۱۶۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 7,
      title: "کوکی",
      desc: "",
      price: "۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 8,
      title: "وافل نوتلا",
      desc: "وافل ساده همراه با نوتلا، میوه و بستنی",
      price: "۲۱۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 9,
      title: "وافل کره بادام زمینی",
      desc: "وافل ساده همراه با کره بادام زمینی میوه و عسل",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 10,
      title: "وافل لوتوس",
      desc: "وافل ساده همراه با کرم لوتوس و بستنی",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
  ],
  "hot-espresso": [
    {
      id: 1,
      title: "اسپرسو ترکیب ۸۰/۲۰",
      desc: (
        <>
          از برند <a href="https://onandonroastery.com/product/blend-80-arabica-1kg/" target="_blank" rel="noopener noreferrer">آن‌اند‌آن</a>
        </>
      ),
      price: "۱۰۷,۰۰۰ تومان",
      img: " ",
    },
    {
      id: 2,
      title: "اسپرسو ترکیب ۵۰/۵۰ ",
      desc: (
        <>
          از برند <a href="https://onandonroastery.com/product/%d9%82%d9%87%d9%88%d9%87-%d8%aa%d8%b1%da%a9%db%8c%d8%a8%db%8c-50%d9%aa-%d8%b9%d8%b1%d8%a8%db%8c%da%a9%d8%a7/" target="_blank" rel="noopener noreferrer">آن‌اند‌آن</a>
        </>
      ),
      price: "۹۷,۰۰۰ تومان",
      img: " ",
    },
        {
      id: 3,
      title: "آمریکانو ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با آب داغ",
      price: "۱۱۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 4,
      title: "آمریکانو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با آب داغ",
      price: "۱۰۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 5,
      title: "کورتادو ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با ۶۰ سی سی شیر گرم شده",
      price: "۱۲۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 6,
      title: "کورتادو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۶۰ سی سی شیر گرم شده",
      price: "۱۱۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 7,
      title: "کاپوچینو ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با ۱۵۰ سی سی شیر گرم شده",
      price: "۱۳۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 8,
      title: "کاپوچینو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۱۵۰ سی سی شیر گرم شده",
      price: "۱۲۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 9,
      title: "لاته ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده",
      price: "۱۳۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 10,
      title: "لاته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده",
      price: "۱۲۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 11,
      title: "موکا ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ شکلات",
      price: "۱۴۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 12,
      title: "موکا ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ شکلات",
      price: "۱۳۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 13,
      title: "لاته کارامل ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ کارامل",
      price: "۱۴۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 14,
      title: "لاته کارامل ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و سیروپ کارامل",
      price: "۱۳۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 15,
      title: "لاته لوتوس ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم لوتوس",
      price: "۱۵۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 16,
      title: "لاته لوتوس ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم لوتوس",
      price: "۱۴۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 17,
      title: "لاته پسته ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم پسته",
      price: "۱۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 18,
      title: "لاته پسته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با ۲۲۰ سی سی شیر گرم شده و کرم پسته",
      price: "۱۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 19,
      title: "آیتم سیروپ اضافه",
      desc: "شیر عسلی، فندوق، نارگیل، عسل، وانیل",
      price: "۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
  ],
  "iced-espresso": [
       {
      id: 1,
      title: "آیس اسپرسو ترکیب ۸۰/۲۰",
      desc: (
        <>
          اسپرسو همراه با یخ از برند <a href="https://onandonroastery.com/product/blend-80-arabica-1kg/" target="_blank" rel="noopener noreferrer">آن‌اند‌آن</a>
        </>
      ),
      price: "۱۱۷,۰۰۰ تومان",
      img: " ",
    },
    {
      id: 2,
      title: "آیس اسپرسو ترکیب ۵۰/۵۰ ",
      desc: (
        <>
          اسپرسو همراه با یخ از برند <a href="https://onandonroastery.com/product/blend-80-arabica-1kg/" target="_blank" rel="noopener noreferrer">آن‌اند‌آن</a>
        </>
      ),
      price: "۱۰۷,۰۰۰ تومان",
      img: " ",
    },
        {
      id: 3,
      title: "آیس آمریکانو ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با آب سرد و یخ",
      price: "۱۲۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 4,
      title: "آیس آمریکانو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با آب سرد و یخ",
      price: "۱۱۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 5,
      title: "آفوگاتو ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با بستنی وانیل",
      price: "۱۳۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 6,
      title: "آفوگاتو ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با بستنی وانیل",
      price: "۱۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 7,
      title: "آفوگاتو پسته ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با بستنی وانیل و کرم پسته",
      price: "۱۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 8,
      title: "آفوگاتو پسته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با بستنی وانیل و کرم پسته",
      price: "۱۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 9,
      title: "آفوگاتو نوتلا ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با بستنی وانیل و نوتلا",
      price: "۱۸۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 10,
      title: "آفوگاتو نوتلا ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با بستنی وانیل و نوتلا",
      price: "۱۷۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },

    {
      id: 11,
      title: "آیس لاته ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با شیر سرد و یخ",
      price: "۱۴۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 12,
      title: "آیس لاته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و یخ",
      price: "۱۳۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 13,
      title: " آیس موکا ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با شیر سرد و سیروپ شکلات",
      price: "۱۵۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 14,
      title: "آیس موکا ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و سیروپ شکلات",
      price: "۱۴۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 15,
      title: "آیس لاته کارامل ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با شیر سرد و سیروپ کارامل",
      price: "۱۵۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 16,
      title: "آیس لاته کارامل ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و سیروپ کارامل",
      price: "۱۴۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
        {
      id: 15,
      title: "آیس لاته لوتوس ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با شیر سرد و کرم لوتوس",
      price: "۱۶۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 16,
      title: "آیس لاته لوتوس ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و کرم لوتوس",
      price: "۱۵۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 17,
      title: "آیس لاته پسته ترکیب ۸۰/۲۰",
      desc: "اسپرسو همراه با شیر سرد و کرم پسته",
      price: "۱۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
        {
      id: 18,
      title: "آیس لاته پسته ترکیب ۵۰/۵۰",
      desc: "اسپرسو همراه با شیر سرد و کرم پسته",
      price: "۱۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
    {
      id: 19,
      title: "آیتم سیروپ اضافه",
      desc: "شیر عسلی، فندوق، نارگیل، عسل، وانیل",
      price: "۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=No_Image",
    },
  ],
  tea: [
    {
      id: 1,
      title: "چای سیاه گیلان",
      desc: "چای معطر لاهیجان",
      price: "۶۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "چای زعفران",
      desc: "چای معطر لاهیجان همراه با زعفران سرد دم",
      price: "۸۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "چای هل و دارچین",
      desc: "",
      price: "۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "چای انگلیسی",
      desc: "چای معطر لاهیجان همراه با عسل و شیر گرم شده",
      price: "۱۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "چای سبز",
      desc: "",
      price: "۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "چای ترش",
      desc: "",
      price: "۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "چای لیمو عسل",
      desc: "چای معطر لاهیجان همراه با عسل و لیمو",
      price: "۱۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 8,
      title: "دمنوش آرامش",
      desc: "آب داغ همراه با گل گاوزبان و لیمو و عسل",
      price: "۱۱۷,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 9,
      title: "دمنوش توت وحشی",
      desc: "چای ترش همراه با توت فرنگی و توت وحشی",
      price: "۱۱۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 10,
      title: "دمنوش بهار",
      desc: "آب داغ همراه با بهار نارنج و گل محمدی",
      price: "۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 11,
      title: "دمنوش میوه ای",
      desc: "آب داغ همراه با میوه خشک و عسل",
      price: "۱۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "drip-coffee": [
    {
      id: 1,
      title: "قهوه ترک",
      desc: "",
      price: "۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    /*{
      id: 2,
      title: "وی ۶۰",
      desc: "",
      price: "۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "سایفون",
      desc: "",
      price: "۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },*/
  ],
  "iced-matcha": [
    {
      id: 1,
      title: "آیس ماچا لاته",
      desc: "ماچا همراه با شیر سرد و یخ",
      price: "۱۴۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "آیس منگو ماچا لاته",
      desc: "آیس ماچا لاته همراه با انبه مادل شده",
      price: "۱۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "آیس بری ماچا لاته",
      desc: "آیس ماچا لاته همراه با توت فرنگی و شاتوت مادل شده",
      price: "۱۸۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "آیس کوکو ماچا لاته",
      desc: "آیس ماچا لاته همراه با شیر نارگیل",
      price: "۱۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "hot-drinks": [
    {
      id: 1,
      title: "هات چاکلت",
      desc: "",
      price: "۱۰۲,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "کرانچ",
      desc: "راستش من فقط یه برنامه نویس سادم، نمیدونم ترکیباتش چیه :)",
      price: "۱۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "شیر کاکائو",
      desc: "",
      price: "۹۸,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "ماسالا",
      desc: "",
      price: "۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "شیر نسکافه",
      desc: "",
      price: "۱۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "شیر عسل دارچین",
      desc: "",
      price: "۱۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "هات نوتلا",
      desc: "",
      price: "۱۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 1,
      title: "هات لوتوس",
      desc: "",
      price: "۱۲۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "cold-drinks": [
    {
      id: 1,
      title: "لیموناد",
      desc: "عصاره لیمو همراه با سیروپ شکر و سودا",
      price: "۱۱۵,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 2,
      title: "لیموناد بری",
      desc: "عصاره لیمو همراه با سیروپ شکر، توت فرنگی و سودا",
      price: "۱۳۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 3,
      title: "موهیتو",
      desc: "عصاره لیمو همراه با سیروپ شکر، نعنا و سودا",
      price: "۱۲۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
    {
      id: 4,
      title: "شربت بهار",
      desc: "",
      price: "۱۱۰,۰۰۰ تومان",
      img: "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
  ],
  icy: [
    {
      id: 1,
      title: "اسموتی هندوانه",
      desc: "",
      price: "۱۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "اسموتی طالبی",
      desc: "",
      price: "۱۲۳,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "اسموتی انبه",
      desc: "",
      price: "۱۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "شیک وانیل",
      desc: "",
      price: "۱۴۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "شیک شکلات",
      desc: "",
      price: "۱۶۳,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "شیک نوتلا",
      desc: "",
      price: "۱۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "شیک لوتوس",
      desc: "",
      price: "۱۸۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 8,
      title: "شیک کوکی",
      desc: "",
      price: "۱۵۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 9,
      title: "شیک نسکافه",
      desc: "",
      price: "۱۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 10,
      title: "شیک اسپرسو",
      desc: "",
      price: "۱۸۸,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 11,
      title: "شیک پسته",
      desc: "",
      price: "۲۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 12,
      title: "هزل نات",
      desc: "بستنی وانیل همراه با شکلات و فندق",
      price: "۱۷۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  "l-meal": [
    {
      id: 1,
      title: "فرایز",
      desc: "",
      price: "۱۹۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "بیکن فرایز",
      desc: "",
      price: "۲۸۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "فشن فرایز",
      desc: "",
      price: "۲۷۸,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "سزار گریل",
      desc: "سالاد سزار همراه با مرغ گریل",
      price: "۳۱۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "سزار سوخاری",
      desc: "سالاد سزار همراه با مرغ سوخاری",
      price: "۳۵۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "پاپ کرن سوخاری",
      desc: "",
      price: "۲۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "آیتم سس اضافه",
      desc: "چیلی، قارچ، چدار، پستو، زرشک",
      price: "۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  meal: [
    {
      id: 1,
      title: "پنینی مرغ و پستو",
      desc: "",
      price: "۲۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 2,
      title: "پنینی مرغ و زرشک",
      desc: "",
      price: "۳۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 3,
      title: "زینگر",
      desc: "",
      price: "۲۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 4,
      title: "هات داگ",
      desc: "",
      price: "۲۵۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 5,
      title: "برگر کلاسیک",
      desc: "",
      price: "۳۲۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 6,
      title: "فشن برگر",
      desc: "",
      price: "۳۵۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 7,
      title: "برث برگر",
      desc: "",
      price: "۳۶۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 8,
      title: "پاستا چیکن آلفردو",
      desc: "",
      price: "۳۳۰,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 9,
      title: "پاستا آلفردو سوخاری",
      desc: "",
      price: "۳۳۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
    {
      id: 10,
      title: "پاستا پستو",
      desc: "",
      price: "۲۹۵,۰۰۰ تومان",
      img: "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
  pizza: [],
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
    border-radius: 5px  5px  5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ccc;
    padding: 35px 25px;
    position: relative;
    color: #fff;
    transition: 0.5s;
    background: lightgrey;
    box-shadow:  0px 50px 100px -20px, rgba(0, 0, 0, 0.44) 0px 30px 60px -30px, rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset;
    z-index: 0;
    overflow: hidden;
    }

  .card__content {
    background: linear-gradient(rgba(143, 143, 143, 0.36), rgba(150, 150, 150, 0.1));
    z-index: -1;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: absolute;
    width: 100%;
    box-shadow: "5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff";
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
    background: #2F5249;
    background: -webkit-linear-gradient(to bottom, #555879, #898AC4, #748873);
    background: linear-gradient(to bottom, #333446, #7F8CAA, #B0DB9C);
    transform: rotate(12deg);
  }

  .blob-2 {
    left: -30px;
    top: 120px;
    background: #FFFA8D;
    background: -webkit-linear-gradient(to bottom, #547792, #E9F5BE);
    background: linear-gradient(to bottom, #9FB3DF, #A0C878);
    transform: rotate(20deg);
  }

  .blob-3 {
    right: -60px;
    bottom: -10px;
    background: #854836;
    background: -webkit-linear-gradient(to bottom, #727D73, #3D3D3D);
    background: linear-gradient(to bottom, #3A3960, #7C444F);
    transform: rotate(-10deg);
  }

  .blob-4 {
    right: -70px;
    top: 20px;
    background: #D8C4B6;
    background: -webkit-linear-gradient(to bottom right, #3E5879, #E5D9F2, #131010);
    background: linear-gradient(to bottom right, #9AA6B2, #4B5945, #685752);
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
  }

  .status {
    margin-right: -100%;
    margin-top: -50%;
    color:#111;
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    color:#444;
  }
  .logo1 {
    margin-top:-35px;
    margin-bottom:-20px;
  }
  .search {
    display: flex;
    align-items: center;
    background: #e5e5e5;
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
    .del div{
      padding-bottom:20px;
      padding-right:20px;
    }
    img.logo {
      width: 90px;
      height: 30px;
    }
  }
`;

const SearchBar = styled.div`
  margin: 25px 0 10px 0;
  max-width: 1200px;
  position: relative;

  input {
    width: 100%;
    border-radius: 14px;
    font-size: 12px;
    font-family: "Vazir", Tahoma, sans-serif;

    border: none;
    outline: none;
    padding: 1em;
    background-color: #ccc;
    box-shadow: inset 2px 5px 10px rgba(15, 15, 15, 0.3);
    transition: 400ms ease-in-out;

    &:focus {
      background-color: white;
      transform: scale(1.01);
      box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 20px;
    transition: 300ms ease-in-out;
  }
`;

const CategoryScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 14px;

  /* Hide scrollbar 
  scrollbar-width: none;
  -ms-overflow-style: none;*/

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryItem = styled.button`
  background: ${(props) =>
    props.selected ? "#ecececff" : "linear-gradient(145deg, #d6d6d6, #ffffff)"};
  color: ${(props) => (props.selected ? "black" : "#333")};
  border-radius: 70px 5px 40px 20px;
  padding: 14px 14px 12px 10px;
  margin-right: 9px;
  margin-left: -8px;
  min-width: 78px;
  min-height: 155px;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12.5px;
  cursor: pointer;
  box-shadow: inset 5px 5px 10px #c7c7c7, inset -5px -5px 10px #f9f9f9;
  user-select: none;
  border: ${(props) =>
    props.selected
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0,0,0,0)"};
  box-shadow: ${(props) =>
    props.selected
      ? "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);"
      : "5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff"};
  transition: 400ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    svg {
      color: #1b1b1bff;
    }
  }
  svg {
    font-size: 24px;
    color: ${(props) => (props.selected ? "#252525ff" : "#333")};
  }

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
  --bg: #e8e8e8;
  --contrast: #e2e0e0;
  --grey: #93a1a1;
  border-radius: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: grid;
  gap: 36px;
  align-items: center;
  position: relative;
  padding: 9px;
  background-color: var(--bg);
  border-radius: 35px;

  .card-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 25px;
    background: repeating-conic-gradient(
        var(--bg) 0.0000001%,
        var(--grey) 0.000104%
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
    background-color: var(--contrast);
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
    background-color: #eee;
    text-align: center;
    box-shadow: inset 5px 5px 10px #bbb, inset -5px -5px 10px #fff,
      5px 5px 10px #ffffff, -5px -5px 10px #eee;
    transition: 0.5s;
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
      color: #444;
      line-height: 1.1;
      
    }
    p.desc {
      margin-bottom: 2;
      color: #666;
      font-size: 12px;
      line-height: 1.8;
      min-height: auto;
      overflow-wrap: break-word;
      
      a{
        text-decoration: none;
        font-weight: bold;
        color: #666;
      }
    }
    p.price {
      margin-top: 10px;
      font-weight: 700;
      color: #555;
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
    background: linear-gradient(rgba(255, 255, 255, 0.473), rgba(150, 150, 150, 0.25));
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
    background: #2F5249;
    background: -webkit-linear-gradient(to bottom, #555879, #898AC4, #748873);
    background: linear-gradient(to bottom, #333446, #7F8CAA, #B0DB9C);
    transform: rotate(12deg);
  }

  .blob-2 {
    left: -30px;
    top: 120px;
    background: #FFFA8D;
    background: -webkit-linear-gradient(to bottom, #547792, #E9F5BE);
    background: linear-gradient(to bottom, #9FB3DF, #A0C878);
    transform: rotate(20deg);
  }

  .blob-3 {
    right: -60px;
    bottom: -10px;
    background: #854836;
    background: -webkit-linear-gradient(to bottom, #727D73, #3D3D3D);
    background: linear-gradient(to bottom, #3A3960, #D8C4B6);
    transform: rotate(-10deg);
  }

  .blob-4 {
    right: -70px;
    top: 20px;
    background: #3E5879;
    background: -webkit-linear-gradient(to bottom right, #E5D9F2, #131010, #9AA6B2);
    background: linear-gradient(to bottom right, #4B5945, #685752, #7fbbffff);
    transform: rotate(-25deg);
  }

  .footer{
    background: lightgrey;
    border-radius: 30px 0 0 30px;
    padding: 40px 30px 30px 30px;
    color: #ccc;
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
    }

    h2 {
      color: #111;
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
      color: #222;

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
      color: #000000ff;
      font-weight:400;
    
        a {
          color: #000000b0;
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
      background: #0000008a;
      border-radius: 18px;
      color: white;
      padding: 15px;
      margin-bottom: 15px;
      cursor: default;
      font-weight: 600;
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
        background: #ffffff42;
        color:#333;
      }
      
    }

    nav.social {
      display: flex;
      gap: 24px;
      z-index:3;


      a {
        color: #0000008a;
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

function CategorySelect({ categories, selected, setSelected }) {
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
          {cat.icon}
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
          alt={product.title}
          loading="lazy"
          width={100}
          height={100}
          decoding="async"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/120x120?text=No+Image")
          }
        />
      </div>
    </ProductCard>
  );
}

//  --------- Main Component --------

export default function OndamCafeMenu() {
  const [selectedCategory, setSelectedCategory] = useState(
    categoriesData[0].id
  );
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = useMemo(() => {
    if (!productsData[selectedCategory]) return [];
    if (!searchValue.trim()) return productsData[selectedCategory];

    return productsData[selectedCategory].filter(
      (p) =>
        p.title.includes(searchValue) ||
        (p.desc && p.desc.includes(searchValue))
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

  return (
    <>
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
              src={logo1} 
              alt="Ondam Cafe Logo"
              className="logo1"
              draggable={false}
              width={100}
              height={100}
            />
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
        />

        {/* Category title */}
        <CategoryTitle role="heading" aria-level={2}>
          {categoriesData.find((cat) => cat.id === selectedCategory)?.icon}
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
                src={logo1} 
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
                <p className="rights">© تمامی حقوق برای کافه Ondam محفوظ است.</p>
                <p className="rights">طراحی و توسعه توسط <a href="https://github.com/younghosein" target="_blank" rel="noopener noreferrer">حسین محمدپور</a></p>
              </div>
              <div className="info-right">
                <a className="phone-box" aria-label="شماره تماس کافه" href="sms:+989113124145" rel="noopener noreferrer">
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
    </>
  );
}
