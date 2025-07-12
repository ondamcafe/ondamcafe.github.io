import React, { useState, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  FiSearch,
  FiPhone,
  FiInstagram,
  FiMessageCircle,
} from "react-icons/fi";
import {
  BsCloudSun,
} from "react-icons/bs";
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


// ------------- Global Style with RTL and Persian font -----------

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
    background: #8a9a73;
    border-radius: 4px;
  }
`;

// ------------- Sample Data ---------------

// دسته بندی ها مطابق تصاویر + آیکون SVG مشابه
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
    icon: <img src={brewing} alt="matcha icon" width={40} />,  },
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
];

// نمونه محصولات برای چند دسته
const productsData = {
  breakfast: [
    {
      id: 1,
      title: "تست آووکادو",
      desc: "نان خمیر ترش،پوره آووکادو، تخم مرغ آب‌پز",
      price: "۳۷۵,۰۰۰ تومان",
      img:"https://cdn.sallocoffee.com/avocado-toast.jpg",
    },
    {
      id: 2,
      title: "تست چیز بیکن",
      desc: "نان خمیر ترش، بیکن، تخم مرغ، پنیر، پیتزا قارچ",
      price: "۲۶۵,۰۰۰ تومان",
      img:
        "https://cdn.sallocoffee.com/cheese-bacon-toast.jpg",
    },
  ],
  "hot-espresso": [
    {
      id: 1,
      title: "قهوه فرانسه",
      desc: "عصاره گیری به روش فرانسه",
      price: "۲۲۰,۰۰۰ تومان",
      img:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "بدون کافئین",
      desc: "گزینه بدون کافئین",
      price: "۲۳۰,۰۰۰ تومان",
      img:
        "https://via.placeholder.com/120x120?text=No_Image",
    },
  ],
  "iced-espresso": [
    {
      id: 1,
      title: "آیس چاکلت دوپاتی",
      desc: "همجورای شکلات سرد و پوره توت فرنگی",
      price: "۱۲۰,۰۰۰ تومان",
      img:
        "https://via.placeholder.com/120x120?text=Ice_Chocolate",
    },
    {
      id: 2,
      title: "آیس دبی چاکلت",
      desc: "همجورای شکلات سرد و کرم پسته",
      price: "۱۳۰,۰۰۰ تومان",
      img:
        "https://via.placeholder.com/120x120?text=Ice_Dubai_Chocolate",
    },
  ],
  tea: [
    {
      id: 1,
      title: "دمنوش زعفران",
      desc: "دمنوش گرم با عطر زعفران",
      price: "۹۵,۰۰۰ تومان",
      img:
        "https://via.placeholder.com/120x120?text=Saffron_Tea",
    },
  ],
};

// ----------- Styled Components ----------

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`

  .header1 {
    --primary: #fff;
    --neutral-1: #e6e6e6;
    --neutral-2: #6e6e6e;
    --radius: 10px;

    cursor: pointer;
    border-radius: var(--radius);
    color: #4a4a4a;
    border: none;
    box-shadow:
      0 0.5px 0.5px 1px rgba(255, 255, 255, 0.2),
      0 10px 20px rgba(0, 0, 0, 0.2),
      0 4px 5px 0px rgba(0, 0, 0, 0.05);

    position: relative;
    transition: all 0.3s ease;
    min-width: 200px;
    height: 70px;
    font-style: normal;
    font-size: 19px;
    font-weight: 500;
  }
  .header1::after {
    content: "";
    inset: -7px;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    box-shadow:
      0 8px 32px 0 rgba(31, 38, 135, 0.4),
      inset 0 -2px 2px rgba(255, 255, 255, 0.4);
    border-radius: 15px;
    transition: all 0.5s ease 0.2s;
    z-index: 0;
  }
  .bg {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    background:
      linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45))
        border-box;
    z-index: 1;
    transition: all 0.4s ease;
  }
  .bg-spin {
    position: absolute;
    border-radius: inherit;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
    inset: -5px;
  }
  .bg-spin::before {
    content: "";
    position: absolute;
    inset: -100%;
    filter: blur(20px);
    background: conic-gradient(
      transparent 30%,
      rgba(255, 255, 255, 0.1) 80%,
      transparent 100%
    );
    animation: spin 2s linear infinite;
    animation-play-state: paused;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .button:hover .bg-spin {
    opacity: 1;
  }
  .button:hover .bg-spin::before {
    animation-play-state: running;
  }

  .bg-gradient {
    position: absolute;
    overflow: hidden;
    border-radius: 13px;
    inset: -7px;
    z-index: 0;
    opacity: 0.3;
    transition: all 0.5s linear;
    filter: blur(10px);
  }
  .button:hover .bg-gradient {
    opacity: 1;
  }
  .bg-gradient::before {
    content: "";
    position: absolute;
    inset: -4px;
    margin: auto;
    aspect-ratio: 1;
    background-image: linear-gradient(
      90deg,
      #0d3fe4,
      #ff52e2,
      #fd4845,
      #f7d35b,
      #50f77d,
      #25e1e4
    );
    animation: spin 2s linear infinite;
  }

  background: #697565;
  margin-top: 20px;
  border-radius: 5px  5px  5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 15px 25px;
  position: relative;

  .status {
    background: #3C3D37;
    padding: 12px 18px;
    border-radius: 5px  5px  5px 20px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    svg {
      margin-left: 8px;
      color: white;
      font-size: 18px;
    }
  }
  img.logo {
    width: 135px;
    height: 45px;
    object-fit: contain;
    user-select: none;
    font-size: 11px;
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
    background
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    .status {
      font-size: 12px;
      padding: 10px 14px;
    }
    img.logo {
      width: 90px;
      height: 30px;
    }
  }
`;

const SearchBar = styled.div`
  margin: 25px 0 10px 0;
  max-width: 700px;
  position: relative;

  input {
    width: 100%;
    border-radius: 14px;
    font-size: 15px;
    font-family: 'Vazir', Tahoma, sans-serif;

    border: none;
    outline: none;
    padding: 1em;
    background-color: #ccc;
    box-shadow: inset 2px 5px 10px rgba(15, 15, 15, 0.3);
    transition: 300ms ease-in-out;

    &:focus {
      background-color: white;
      transform: scale(1.05);
      box-shadow: 13px 13px 100px #969696,
        -13px -13px 100px #ffffff;
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 20px;
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
  background: ${props => (props.selected ? "#e0e0e0" : "linear-gradient(145deg, #d6d6d6, #ffffff)")};
  color: ${props => (props.selected ? "black" : "#333")};
  border-radius:  70px 5px 40px 20px;
  padding: 12px 18px;
  margin-right: 9px;
  margin-left: -8px;
  min-width: 110px;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: inset 5px 5px 10px #c7c7c7, inset -5px -5px 10px #f9f9f9;
  user-select: none;
  border: ${props => (props.selected ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(0,0,0,0)")};
  box-shadow: ${props =>
    props.selected ? "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);" : "5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff"};
  transition: 0.3s all;

  svg {
    font-size: 24px;
    color: ${props => (props.selected ? "#252525ff" : "#333")};
  }

  &:hover {
    svg {
      color: #1b1b1bff;
    }
  }

  @media (max-width: 768px) {
    min-width: 78px;
    padding: 14px 14px 12px 10px;
    
    font-size: 12.5px;
    svg {
      font-size: 26px;
      margin-bottom: 8px;
    }
  }
`;

const CategoryTitle = styled.h2`
  font-weight: 600;
  margin: 32px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;

  svg {
    color:rgb(44, 44, 44);
  }
`;

const ProductListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: grid;
  gap: 16px;
  align-items: center;
  position: relative;
  padding: 9px;
  background-color: var(--bg);
  border-radius: 35px;


  .card-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-conic-gradient(var(--bg) 0.0000001%, var(--grey) 0.000104%) 60% 60%/600% 600%;
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
    box-shadow: inset 5px 5px 10px #bbb, inset -5px -5px 10px #fff, 5px 5px 10px #ffffff,
      -5px -5px 10px #eee;
    transition: 0.5s;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-right: 16px;
    margin-top: 16px;

    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 18px;
      color: #444;
      line-height: 1.1;
    }
    p.desc {
      margin: 0;
      color: #666;
      font-size: 14px;
      line-height: 1.3;
      min-height: 40px;
      overflow-wrap: break-word;
    }
    p.price {
      margin-top: 50px;
      font-weight: 700;
      color: #555;
      font-size: 15px;
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
  background: #17211e;
  border-radius: 30px 0 0 30px;
  padding: 40px 30px 30px 30px;
  color: #bfc5bc;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  .info-left {
    max-width: 380px;

    h2 {
      color: #e0ebd5;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .address {
      opacity: 0.9;
      margin: 8px 0 12px 0;
      font-size: 13px;
      display: flex;
      gap: 5px;
      align-items: center;
      color: #a3b79b;

      svg {
        margin-left: 6px;
        min-width: 18px;
        min-height: 18px;
        stroke: currentColor;
      }
    }

    .rights {
      margin: 24px 0 0 0;
      font-size: 11px;
      opacity: 0.5;
      user-select: none;
    }
  }

  .info-right {
    display: flex;
    gap: 25px;
    align-items: center;

    .phone-box {
      background: #596c59;
      border-radius: 18px;
      color: white;
      padding: 23px 22px;
      cursor: default;
      font-weight: 600;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      user-select: text;

      svg {
        font-size: 22px;
      }
    }

    nav.social {
      display: flex;
      gap: 24px;

      a {
        color: #c6c9c3;
        font-size: 28px;
        transition: color 0.4s ease;
      }

      a:hover {
        color: #a9b396;
      }
    }
  }

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
    <ProductCard role="listitem" tabIndex="0" aria-label={`محصول ${product.title}`}>
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
            onError={(e) => (e.target.src = "https://via.placeholder.com/120x120?text=No+Image")}
          />
        </div>

      
    </ProductCard>
  );
}

//  --------- Main Component --------

export default function SeenCafeMenu() {
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0].id);
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

  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Header */}
        <Header class="header1">
            <div class="bg"></div>
            <div class="bg-spin"></div>
            <div class="bg-gradient"></div>

          
          <div className="status" aria-live="polite" aria-atomic="true">
            <BsCloudSun />
            ۸ تا  ۲۳ مهمان ما باشید.
          </div>
          <img
            src="https://seencafebakery.ir/wp-content/uploads/2022/11/seen-dark-logo.svg"
            alt="Ondam Cafe Logo"
            className="logo"
            draggable={false}
          />
        </Header>

        {/* Search */}
        <SearchBar role="search" aria-label="جستجو در کافه Ondam ">
          <input
            type="search"
            placeholder="جستجو در کافه Ondam ..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="جستجو در کافه Ondam "
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
          {
            categoriesData.find((cat) => cat.id === selectedCategory)?.icon
          }
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
              محصولی یافت نشد!
            </p>
          )}
          {filteredProducts.map((product) => (
            <ProductCardComp key={product.id} product={product} />
          ))}
        </ProductListGrid>

        {/* Footer */}
        <FooterWrapper role="contentinfo" aria-label="فوتر سایت  کافه Ondam">
          <div className="info-left">
            <h2>Ondam Café</h2>
            <p className="address" aria-label="آدرس کافه">
              بابل، خیابان گل{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="#a3b79b"
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
          </div>
          <div className="info-right">
            <div className="phone-box" aria-label="شماره تماس کافه">
              <FiPhone aria-hidden="true" />
              ۰۹۱۱۳۱۲۴۱۴۵
            </div>
            <nav className="social" aria-label="شبکه های اجتماعی کافه">
              <a
                href="https://instagram.com/zhivanstory"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام کافه Ondam"
              >
                <FiInstagram />
              </a>
              <a
                href="https://wa.me/09113124145"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساپ کافه Ondam"
              >
                <FiMessageCircle />
              </a>
            </nav>
          </div>
        </FooterWrapper>
      </Container>
    </>
  );
}