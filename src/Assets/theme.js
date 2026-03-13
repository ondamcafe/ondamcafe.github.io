// theme.js

export const lightTheme = {
  Up: {
    bg: "#ffffff",
    color: "#333333",
    border: "#e0e0e0",
    hoverbg: "#f0f0f0",
  },
  Splash: {
    bg: "rgba(0, 0, 0, 0.76);",
    card: {
      bg: "#f8f8f8",
      border: "3px solid #ffffff",
      shadow: "inset 5px 5px 10px #bbb, inset -5px -5px 10px #fff",
    },
    icon0: {
      color: "#808080",
      bg: "#eee",
      shadow: "8px 8px 10px #ddd, -8px -8px 10px #fff",
      h3: "2px 2px 0px #fff",
    },
    content: {
      color: "#7a7a7a",
      bg: "#eee",
      shadow: "8px 8px 10px #ddd, -8px -8px 10px #fff",
      h3: "2px 2px 0px #fff",
      shadowp: "2px 2px 0px #fff",
      colorp: "#7a7a7a",
      shadows: "2px 2px 0px #fff",
      colors: "#7a7a7a",
    },
  },
  mode: "light",
  bg: "#eeeeee",
  text: "#222",
  splashBg: "#eeeeee",
  ProductCard: {
    bg: "#e8e8e8",
    contrast: "#e2e0e0",
    grey: "#bdbdbd",
    shadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset
    `,

    img: {
      bg: "#eee",
      shadow: `inset 5px 5px 10px #bbb, inset -5px -5px 20px #ffffffd3,
      5px 5px 10px #ffffff54, -5px -5px 10px #eeeeee77;
        `,
      outline: "solid 1px #ebebeb",
    },

    content: {
    
      h3: {
        color: "#444",
      },
    
      p_desc: {
        color: "#666",
      
        a: {
          color: "#666",
        }
      },
    
      p_price: {
        color: "#555",
      },
    }
  },
  Header: {
    card: {
      color: "#ccc",
      color1: "#383838ff",
      bg: "lightgrey",
      shadow: `
        0px 50px 100px -20px,
        rgba(5, 5, 5, 0.44) 0px 30px 60px -30px,
        rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset
      `,
    },

    card__content: {
      bg: `linear-gradient(rgba(143, 143, 143, 0.36), rgba(150, 150, 150, 0.1))`,
      shadow: "5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff",
    },

    blob1: {
      bg: "#445f58",
      bg1: `-webkit-linear-gradient(to bottom, #555879, #898AC4, #748873)`,
      bg2: "linear-gradient(to bottom, #aaabb9, #6d7381, #313141)",
    },

    blob2: {
      bg: "#FFFA8D",
      bg1: "-webkit-linear-gradient(to bottom, #547792, #E9F5BE)",
      bg2: "linear-gradient(to bottom, #c4cee2, #566774))",
    },

    blob3: {
      bg: "#7a564a",
      bg1: "-webkit-linear-gradient(to bottom, #ffffff, #ffffff)",
      bg2: "linear-gradient(to bottom, #2a2a30, #a1aab9, #e7caa3)",
    },

    blob4: {
      bg: "#D8C4B6",
      bg1:`-webkit-linear-gradient(to bottom right, #55677e, #555555, #131010)`,
      bg2:`linear-gradient(to bottom right, #ffffff, #4e554b, #685752)`,
    },

    status: {
      color: "#444",
    },

    logo1: {
      opacity: "none",  // بین 0 (کاملاً شفاف) تا 1 (کاملاً مات)
      transition: "none",
    },

    search: {
      bg: "#e5e5e5",
    },
  },
  SearchBar: {
    background: "none",
    shadow: "none",

    input: {
      background: "#ccc",
      color: "rgb(70, 70, 70)",
      shadow: "inset 2px 5px 10px rgba(15, 15, 15, 0.3)",

      focus: {
        background: "rgb(255, 255, 255)",
        color: "rgb(80, 80, 80)",
        shadow: `inset 10px 10px 10px rgb(233, 233, 233),
        inset 10px 10px 10px rgb(255, 255, 255),
        0px 0px 100px rgb(0, 0, 0),
        0px 0px 50px rgb(255, 255, 255);`,
      },
    },

    svg: {
      color: "#888",
    },
  },
  Category: {
    colorN: "black",
    colorS: "#333",
    borderN: "1px solid rgba(80, 80, 80, 0.36)",
    borderS: "1px solid rgba(0, 0, 0, 0.08)",
    backgroundN: "radial-gradient(circle at bottom,rgba(238, 238, 238, 0.5) 20%,rgba(219, 219, 219, 0.5) 70%, #dadada 95%)",
    backgroundS: "linear-gradient(to bottom, #e4e4e4, #e9e9e9)",
    shadowN: "0 2px 4px #00000046, 0 10px 8px #00000033" ,
    shadowS: "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.17), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgb(255, 255, 255), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)",

    hover: {
      svg: {
        color: "#1b1b1bff",
      },
    },
    img: {
      opacity: "0.8",
      transition: "opacity 0.25s ease",
    },
    svg: {
      colorN: "#252525ff",
      colorS: "#333",
    },
  },
  Footer: {
    card__content: {
    background: "linear-gradient(rgba(255, 255, 255, 0.473), rgba(150, 150, 150, 0.25))",
    },
  
    blob1: {
      bg: "#2F5249",
      bg1: "-webkit-linear-gradient(to bottom, #555879, #898AC4, #748873)",
      bg2: "linear-gradient(to bottom, #081041, #ebebeb, #020b1d)",
    },
  
    blob2: {
      bg: "#FFFA8D",
      bg1: "-webkit-linear-gradient(to bottom, #547792, #E9F5BE)",
      bg2: "linear-gradient(to bottom, #27427a, #495272)",
    },
  
    blob3: {
      bg: "#854836",
      bg1: "-webkit-linear-gradient(to bottom, #727D73, #3D3D3D)",
      bg2: "linear-gradient(to bottom, #2d28a3, #ffffff)",
    },
  
    blob4: {
      bg: "#3E5879",
      bg1: "-webkit-linear-gradient(to bottom right, #E5D9F2, #131010, #9AA6B2)",
      bg2: "linear-gradient(to bottom right, #ffffff, #525868, rgb(57, 61, 100))",
    },
  
    footer: {
      bg: "lightgrey",
      color: "#ccc",
    },
  
    infoleft: {
      logo2: {
        opacity: "none",
        transition: "none",
      },
      h2: {
        color: "#111",
      },
    
      address: {
        color: "#222",
      },
    
      rights: {
        color: "#000000ff",
      
          a: {
            color: "#000000b0",
          },
        },
    },
  
    inforight: {
    
      phonebox: {
        background: "#ffffff15",
        color: "#0000008a",
      
        hover: {
          background: "#00000013",
          color: "#0000008a",
        },
        
      },
    
      navsocial: {
        a: {
          color: "#0000008a",
        },
      },
    },
  },
};

export const darkTheme = {
  Up: {
    bg: "#383838",
    color: "#ffffff",
    border: "#161616",
    hoverbg: "#4d4d4d",
  },
    Splash: {
    bg: "rgba(0, 0, 0, 0.7);",
    card: {
      bg: "rgb(20, 20, 20)",
      border: "3px solid #1b1b1b",
      shadow: `inset 5px 5px 10px rgb(7, 7, 7), inset -5px -5px 10px rgb(44, 44, 44),
        0px 0px 100px rgba(0, 0, 0, 0), 0px 0px 100px rgba(255, 0, 0, 0)`,
    },
    icon0: {
      color: "#e9e9e9",
      bg: "#181818",
      shadow: "8px 8px 10px #1b1b1b, -8px -8px 10px #111111",
      h3: "2px 2px 0px #000000",
    },
    content: {
      color: "#e9e9e9",
      bg: "#181818",
      shadow: "8px 8px 10px #1b1b1b, -8px -8px 10px #111111",
      h3: "2px 2px 0px #000000",
      shadowp: "2px 2px 0px #000000",
      colorp: "#e9e9e9",
      shadows: "2px 2px 0px #000000",
      colors: "#e9e9e9",
    },
  },
  mode: "dark",
  bg: "#212121",
  text: "#bdbdbd",
  splashBg: "#161515",
  ProductCard: {
    bg: "rgb(26, 26, 26)",
    contrast: "rgb(31, 31, 31)",
    grey: "rgb(46, 46, 46)",
    shadow: `rgba(0, 0, 0, 0.38) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.49) 0px 30px 60px -30px,
    rgba(0, 0, 0, 0.8) 0px -2px 6px 0px inset
    `,

    img: {
      bg: "#1d1d1dff",
      shadow: `
      inset 10px 10px 10px rgba(0, 0, 0, 0.5),
        inset 10px 10px 10px rgba(37, 37, 37, 0.5),
        1px 2px 1px rgba(179, 179, 179, 0.14),
        -1px -2px 1px rgba(255, 255, 255, 0.13)
        `,
      outline: "1px solid #000000",
    },

    content: {

      h3: {
        color: "#ecececff",
      },

      p_desc: {
        color: "#c2c2c2ff",

        a: {
          color: "#ecececff",
        }
      },

      p_price: {
        color: "#ffffffff",
      },
    }
  },
  Header: {
    card: {
      color: "rgb(110, 110, 110)",
      color1: "rgb(0, 0, 0)",
      bg:"#00000019",
      shadow: `
        0px 50px 100px -20px,
        rgba(5, 5, 5, 0.44) 0px 30px 60px -30px,
        rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset
      `,
    },

    card__content: {
      background: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.1))`,
      shadow: "5px 5px 10px #000000ff, -5px -5px 10px #000000ff",
    },

    blob1: {
      bg: "rgb(116, 65, 65)",
      bg1: ` -webkit-linear-gradient(
        to bottom,
        #4e4e4eff,
        #727272ff,
        #1a1a1aff,
      )`,
      bg2: "linear-gradient(to bottom, #808080ff, #161616ff, #535353ff)",
    },

    blob2: {
      bg: "rgb(74, 124, 55)",
      bg1: "-webkit-linear-gradient(to bottom, rgb(216, 216, 216), rgb(124, 74, 74))",
      bg2: "linear-gradient(to bottom, rgb(150, 106, 106), #080808ff)",
    },

    blob3: {
      bg: "rgb(121, 68, 156)",
      bg1: "-webkit-linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255))",
      bg2: "linear-gradient(to bottom, rgb(0, 0, 0), rgb(95, 96, 105))",
    },

    blob4: {
      bg: "rgb(66, 141, 141)",
      bg1:` -webkit-linear-gradient(
        to bottom right,
        rgb(255, 255, 255),
        rgb(255, 255, 255),
        rgb(255, 255, 255)
      )`,
      bg2:` linear-gradient(
        to bottom right,
        rgb(255, 255, 255),
        rgb(255, 255, 255),
        rgb(255, 255, 255)
      )`,
    },

    status: {
      color: "#111",
    },

    logo1: {
      opacity: "0.7",
      transition: "opacity 0.25s ease",
    },

    search: {
      bg: "#000000ff",
    },
  },
  SearchBar: {
    background: "linear-gradient(173deg, #272727ff 0%rgba (24, 24, 24, 1) 1a 100%)",
    shadow: "1px 1px 2px #0f0f0fff, -1px -1px 4px #464646ff",

    input: {
      background: "#292929ff",
      color: "#cfcfcfff",
      shadow: `inset 5px 5px 10px #131313ff, inset -5px -5px 10px #494949ff,
        0px 0px 100px rgba(0, 0, 0, 0), 0px 0px 100px rgba(255, 0, 0, 0)`,
      transition: "all 0.2s ease-in-out",

      focus: {
        background: "rgb(20, 20, 20)",
        color: "rgb(163, 163, 163)",
        shadow: `inset 10px 10px 10px rgb(10, 10, 10),
        inset 10px 10px 10px rgb(15, 15, 15),
        0px 0px 100px rgb(143, 143, 143),
        0px 0px 50px rgb(0, 0, 0),
        0px 0px 80px rgb(26, 26, 26);`,
      },
    },

    svg: {
      color: "#a7a7a7ff",
    },
  },
  Category: {
    colorN: "#bdbdbd",
    colorS: "#bdbdbd",
    borderN: "1px solid #292929",
    borderS: "1px solid rgb(26, 26, 26)",
    backgroundS: "radial-gradient(circle at bottom,rgba(19, 19, 19, 0.5) 20%,rgba(32, 32, 32, 0.5) 70%,#212121 95%)",
    backgroundN: "linear-gradient(to bottom, #171717, #242424)",
    shadowN: "0 2px 4px rgba(0, 0, 0, 1), 0 10px 8px rgba(0, 0, 0, 0.4)",
    shadowS: "inset 6px 6px 10px #161616ff,inset -6px -6px 10px rgba(95, 95, 95, 0.3),2px 2px 10px rgba(0, 0, 0, 0.3),-2px -2px 10px rgba(66, 66, 66, 0.5)",

    hover: {
      svg: {
        color: "#ffffffff",
      },
    },
    img: {
      opacity: "0.7",
      transition: "opacity 0.25s ease",
    },
    svg: {
      colorN: "#ffffffff",
      colorS: "#bebebeff",
    },
  },
  Footer: {
    card__content: {
    background: "linear-gradient(rgba(19, 19, 19, 0.3), rgba(15, 15, 15, 0.63))",
    },
  
    blob1: {
      bg: "#5a5a5aff",
      bg1: "-webkit-linear-gradient(to bottom, #9c9c9cff, #222222ff, #969696ff)",
      bg2: "linear-gradient(to bottom, #0c0c0cff, #8d8d8dff, #161616ff)",
    },
  
    blob2: {
      bg: "#c4c4c4ff",
      bg1: "-webkit-linear-gradient(to bottom, #222222ff, #919191ff)",
      bg2: "linear-gradient(to bottom, #7e7e7eff, #0c0c0cff)",
    },
  
    blob3: {
      bg: "#666666ff",
      bg1: "-webkit-linear-gradient(to bottom, #000000ff, #000000ff)",
      bg2: "linear-gradient(to bottom, #8b8b8bff, #111111ff)",
    },
  
    blob4: {
      bg: "#a1a1a1ff",
      bg1: "-webkit-linear-gradient(to bottom right, #0e0e0eff, #818181ff, #000000ff)",
      bg2: "linear-gradient(to bottom right, #5f5f5fff, #000000ff, #252525ff)",
    },
  
    footer: {
      bg: "1d1d1dff",
      color: "#1d1d1dff",
    },
  
    infoleft: {
      logo2: {
        opacity: "0.7",
        transition: "opacity 0.25s ease",
      },

      h2: {
        color: "#e0e0e0ff",
      },
    
      address: {
        color: "#dadadaff",
      },
    
      rights: {
        color: "#b9b9b9ff",
      
          a: {
            color: "#ffffffff",
          },
        },
    },
  
    inforight: {
    
      phonebox: {
        background: "#00000013",
        color: "#ffffff8a",
      
        hover: {
          background: "#00000023",
          color: "#ffffff8a",
        },
        
      },
    
      navsocial: {
        a: {
          color: "#ffffff8a",
        },
      },
    },
  },
};
