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
  BsCupStraw,
  BsCupHot,
  BsFillHeartFill,
  BsCup,
  BsClock,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";

// ------------- Global Style with RTL and Persian font -----------

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Vazir', Tahoma, sans-serif;
    margin: 0;
    background: #fff;
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
    icon: <BsCup />,
  },
  {
    id: "pastry",
    title: "بیکری",
    icon: <BsFillHeartFill />,
  },
  {
    id: "hot-espresso",
    title: "نوشیدنی گرم بر پایه اسپرسو",
    icon: <BsCupHot />,
  },
  {
    id: "iced-espresso",
    title: "نوشیدنی سرد بر پایه اسپرسو",
    icon: <BsCupStraw/>,
  },
  {
    id: "tea",
    title: "چای و دمنوش",
    icon: <BsCupStraw />,
  },
  {
    id: "drip-coffee",
    title: "قهوه های دمی",
    icon: <BsClock />,
  },
  {
    id: "iced-matcha",
    title: "آیس ماچا",
    icon: <BsCloudSun />,
  },
  {
    id: "cold-drinks",
    title: "نوشیدنی سرد",
    icon: <BsCupStraw />,
  },
  {
    id: "icy",
    title: "آیس",
    icon: <BsFillJournalBookmarkFill />,
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
  background: #8a9a73;
  margin-top: 20px;
  border-radius: 5px  5px  5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 15px 25px;
  position: relative;

  .status {
    background: #5a6156;
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
    font-size: 12px;
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
    padding: 14px 46px 14px 14px;
    border-radius: 14px;
    border: 1px solid #ccc;
    font-size: 15px;
    outline: none;
    transition: border-color 0.3s ease;
    font-family: 'Vazir', Tahoma, sans-serif;

    &:focus {
      border-color: #8a9a73;
      box-shadow: 0 0 10px #a0b576cc;
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
  background: ${props => (props.selected ? "#8a9a73" : "#f6f8f4")};
  color: ${props => (props.selected ? "white" : "#333")};
  border-radius:  70px 5px 40px 20px;
  padding: 12px 18px;
  min-width: 110px;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  border: none;
  box-shadow: ${props =>
    props.selected ? "0 0 10px rgba(78, 78, 78, 0.7)" : "none"};
  transition: 0.3s all;

  svg {
    font-size: 24px;
    color: ${props => (props.selected ? "#e0ebd5" : "#7a8c70")};
  }

  &:hover {
    background: #8a9a73;
    color: white;
    svg {
      color: #e0ebd5;
    }
  }

  @media (max-width: 768px) {
    min-width: 78px;
    padding: 14px 14px 12px 10px;
    //border-radius: 50%;
    
    font-size: 10px;
    svg {
      font-size: 26px;
      margin-bottom: 8px;
    }
  }
`;

const CategoryTitle = styled.h2`
  font-weight: 700;
  margin: 32px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;

  svg {
    color: #8a9a73;
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
  background: #fbfdf9;
  border-radius: 18px;
  padding: 15px;
  box-shadow: 4px 4px 8px #dbe1d6, -4px -4px 8px #fbfdf9;
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 18px;
    background-color: #f1f3eb;
    user-select: none;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;

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
      font-weight: 700;
      color: #555;
      font-size: 15px;
      align-self: flex-start;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 180px;
      border-radius: 20px;
    }

    .content p.desc {
      min-height: auto;
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
    border-radius: 30px 30px 0 0;
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
      <img
        src={product.img}
        alt={product.title}
        loading="lazy"
        width={100}
        height={100}
        decoding="async"
        onError={(e) => (e.target.src = "https://via.placeholder.com/120x120?text=No+Image")}
      />
      <div className="content">
        <h3>{product.title}</h3>
        <p className="desc">{product.desc}</p>
        <p className="price">{product.price}</p>
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
        <Header>
          <div className="status" aria-live="polite" aria-atomic="true">
            <BsCloudSun />
            سفارش بسته است.
          </div>
          <img
            src="https://seencafebakery.ir/wp-content/uploads/2022/11/seen-dark-logo.svg"
            alt="Seen Cafe Logo"
            className="logo"
            draggable={false}
          />
        </Header>

        {/* Search */}
        <SearchBar role="search" aria-label="جستجو در سین کافه">
          <input
            type="search"
            placeholder="جستجو در سین کافه..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="جستجو در سین کافه"
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
        <FooterWrapper role="contentinfo" aria-label="فوتر سایت سین کافه">
          <div className="info-left">
            <h2>Seen Café</h2>
            <p className="address" aria-label="آدرس کافه">
              بابل، شهرک بهزاد{" "}
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
            <p className="rights">© تمامی حقوق برای سین کافه محفوظ است.</p>
          </div>
          <div className="info-right">
            <div className="phone-box" aria-label="شماره تماس کافه">
              <FiPhone aria-hidden="true" />
              ۰۹۱۱۱۹۶۷۶۰
            </div>
            <nav className="social" aria-label="شبکه های اجتماعی سین کافه">
              <a
                href="https://instagram.com/seencafebakery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام سین کافه"
              >
                <FiInstagram />
              </a>
              <a
                href="https://wa.me/0911196760"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساپ سین کافه"
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