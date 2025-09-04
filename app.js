 codex/improve-catalog-design-and-features-mkxvbq
const { useState, useEffect } = React;

const CATEGORY_ICONS = {
  "Bebidas não alcoólicas": "https://img.icons8.com/color/48/soda-can.png",
  "Bebidas alcoólicas": "https://img.icons8.com/color/48/beer-bottle.png",
  "Bomboneire": "https://img.icons8.com/color/48/chocolate-bar.png",
  "Cigarro": "https://img.icons8.com/color/48/cigarette.png",
  "Utilidades": "https://img.icons8.com/color/48/toolbox.png"
};

function ProductCard({ product }) {
  const codes = product.variants.map(v => v.code).filter(Boolean).join(', ');
  const flavors = product.variants.map(v => v.flavor).filter(Boolean).join(', ');
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
      <div className="bg-gray-50 p-4 h-40 flex items-center justify-center">
        <img loading="lazy" src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg" style={{color: 'var(--brand-green)'}}>{product.name}</h3>
        {flavors && (
          <p className="text-sm font-semibold" style={{color:'var(--brand-red)'}}>
            Sabores: <span className="font-normal text-gray-600">{flavors}</span>
          </p>
        )}
        {codes && (
          <p className="text-sm font-semibold mt-1" style={{color:'var(--brand-green)'}}>
            Códigos: <span className="font-normal text-gray-600">{codes}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function HomePage() {
  const [catalog, setCatalog] = useState({ products: [], settings: { categoriesOrder: [] } });
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.getCatalog({ q: query, category: activeCategory }).then(data => {

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  createContext = _React.createContext,
  useContext = _React.useContext;

// Context for routing & auth
var AppContext = createContext();
var AppProvider = function AppProvider(_ref) {
  var children = _ref.children;
  var _useState = useState({
      name: 'home'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    route = _useState2[0],
    setRoute = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAdmin = _useState4[0],
    setIsAdmin = _useState4[1];
  var navigate = function navigate(name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var path = name === 'home' ? '/' : "/".concat(name);
    window.history.pushState(params, '', path);
    setRoute({
      name: name,
      params: params
    });
  };
  useEffect(function () {
    var handlePopState = function handlePopState(event) {
      var path = window.location.pathname.slice(1);
      setRoute({
        name: path || 'home',
        params: event.state || {}
      });
    };
    window.addEventListener('popstate', handlePopState);
    var path = window.location.pathname.slice(1);
    if (path) setRoute({
      name: path
    });
    return function () {
      return window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  var auth = {
    isAdmin: isAdmin,
    login: function login(password) {
      return api.loginAdmin(password).then(function (res) {
        if (res.ok) setIsAdmin(true);
        return res;
      });
    },
    logout: function logout() {
      return setIsAdmin(false);
    }
  };
  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: {
      route: route,
      navigate: navigate,
      auth: auth
    }
  }, children);
};
var useApp = function useApp() {
  return useContext(AppContext);
};

// Header component
var Header = function Header() {
  var _useApp = useApp(),
    navigate = _useApp.navigate;
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-green-600 sticky top-0 z-40 shadow-lg",
    style: {
      backgroundColor: 'var(--brand-green)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white px-4 py-2 rounded-xl shadow"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      navigate('home');
    },
    className: "flex items-baseline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold",
    style: {
      color: 'var(--brand-green)'
    }
  }, "Igor"), /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-bold",
    style: {
      color: 'var(--brand-red)'
    }
  }, "Valen")), /*#__PURE__*/React.createElement("span", {
    className: "block text-sm -mt-1 font-medium text-gray-800"
  }, "Distribuidora")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      navigate('home');
    },
    className: "text-white font-semibold hover:text-green-200 transition-colors"
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      navigate('admin');
    },
    className: "text-white font-semibold hover:text-green-200 transition-colors"
  }, "ADM"))));
};

// Product card
var ProductCard = function ProductCard(_ref2) {
  var product = _ref2.product;
  var codes = product.variants.map(function (v) {
    return v.code;
  }).filter(Boolean);
  var flavors = product.variants.map(function (v) {
    return v.flavor;
  }).filter(Boolean);
  var codeLabel = codes.length > 1 ? 'Códigos' : 'Código';
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 p-4 relative h-40"
  }, codes.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded"
  }, codeLabel, ": ", codes.join(', ')), /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: product.imageUrl,
    alt: product.name,
    className: "w-full h-full object-contain"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-4 flex-grow flex flex-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-lg",
    style: {
      color: 'var(--brand-green)'
    }
  }, product.name), flavors.length > 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold mb-2",
    style: {
      color: 'var(--brand-red)'
    }
  }, "Sabores: ", /*#__PURE__*/React.createElement("span", {
    className: "font-normal text-gray-600"
  }, flavors.join(', ')))));
};

// Home page
var HomePage = function HomePage() {
  var _useState5 = useState({
      products: [],
      settings: {
        categoriesOrder: []
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    catalog = _useState6[0],
    setCatalog = _useState6[1];
  var _useState7 = useState(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    query = _useState0[0],
    setQuery = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    activeCategory = _useState10[0],
    setActiveCategory = _useState10[1];
  useEffect(function () {
    setLoading(true);
    api.getCatalog({
      q: query,
      category: activeCategory
    }).then(function (data) {
 main
      setCatalog(data);
      setLoading(false);
    });
  }, [query, activeCategory]);
 codex/improve-catalog-design-and-features-mkxvbq

  const grouped = catalog.settings.categoriesOrder.map(category => ({
    category,
    products: catalog.products.filter(p => p.category === category)
  })).filter(g => g.products.length > 0);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="panel p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => setActiveCategory(null)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${!activeCategory ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Todas</button>
            {catalog.settings.categoriesOrder.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory===cat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <img src={CATEGORY_ICONS[cat]} alt="" className="w-4 h-4"/>
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <input type="text" placeholder="Buscar por nome, categoria ou código..." onChange={e=>setQuery(e.target.value)} className="w-full pl-4 pr-12 py-3 bg-white border border-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-center text-white text-2xl font-bold">Carregando...</div>
      ) : (
        grouped.map(group => (
          <div key={group.category} className="mb-12">
            <h2 className="flex items-center text-3xl font-bold text-white mb-4" style={{textShadow:'1px 1px 3px rgba(0,0,0,0.5)'}}>
              <img src={CATEGORY_ICONS[group.category]} alt="" className="w-8 h-8 mr-2"/>
              {group.category}
            </h2>
            <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.products.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="bg-green-600 sticky top-0 z-40 shadow-lg" style={{backgroundColor:'var(--brand-green)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-24">
        <div className="bg-white px-4 py-2 rounded-2xl shadow">
          <span className="text-3xl font-bold" style={{color:'var(--brand-green)'}}>Igor</span>
          <span className="text-3xl font-bold" style={{color:'var(--brand-red)'}}>Valen</span>
          <span className="block text-sm -mt-1 font-medium text-gray-800">Distribuidora</span>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
=======
  var groupedProducts = catalog.settings.categoriesOrder.map(function (category) {
    return {
      category: category,
      products: catalog.products.filter(function (p) {
        return p.category === category;
      })
    };
  }).filter(function (group) {
    return group.products.length > 0;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto p-4 sm:p-6 lg:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel p-6 mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveCategory(null);
    },
    className: "px-4 py-2 text-sm font-semibold rounded-full transition-colors ".concat(!activeCategory ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
  }, "Todas"), catalog.settings.categoriesOrder.map(function (cat) {
    return /*#__PURE__*/React.createElement("button", {
      key: cat,
      onClick: function onClick() {
        return setActiveCategory(cat);
      },
      className: "px-4 py-2 text-sm font-semibold rounded-full transition-colors ".concat(activeCategory === cat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
    }, cat);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Buscar por nome, categoria ou c\xF3digo...",
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    className: "w-full pl-4 pr-32 py-3 bg-white border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
  }), /*#__PURE__*/React.createElement("button", {
    className: "absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700"
  }, "Buscar"))), loading ? /*#__PURE__*/React.createElement("div", {
    className: "text-center text-white text-2xl font-bold"
  }, "Carregando...") : groupedProducts.map(function (group) {
    return /*#__PURE__*/React.createElement("div", {
      key: group.category,
      className: "mb-12"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl font-bold text-white mb-4",
      style: {
        textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
      }
    }, group.category), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-4 sm:p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    }, group.products.map(function (p) {
      return /*#__PURE__*/React.createElement(ProductCard, {
        key: p.id,
        product: p
      });
    }))));
  }));
};

// Admin login page
var AdminLoginPage = function AdminLoginPage() {
  var _useApp2 = useApp(),
    navigate = _useApp2.navigate,
    auth = _useApp2.auth;
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    password = _useState12[0],
    setPassword = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    error = _useState14[0],
    setError = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    auth.login(password).then(function (res) {
      if (res.ok) navigate('admin/products');else {
        setError('Senha incorreta.');
        setLoading(false);
      }
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center pt-20"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "panel p-8 w-full max-w-sm"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-center mb-6 text-gray-800"
  }, "Bem-vindo de volta!"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    placeholder: "Digite a senha admin",
    className: "w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-xl mb-4 focus:outline-none focus:border-green-500"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading,
    className: "w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 disabled:bg-gray-400"
  }, loading ? 'Entrando...' : 'Entrar'), error && /*#__PURE__*/React.createElement("p", {
    className: "text-red-500 text-center mt-4"
  }, error)));
};

// Admin product list page
var AdminProductListPage = function AdminProductListPage() {
  var _useApp3 = useApp(),
    navigate = _useApp3.navigate;
  var _useState17 = useState([]),
    _useState18 = _slicedToArray(_useState17, 2),
    products = _useState18[0],
    setProducts = _useState18[1];
  var _useState19 = useState(true),
    _useState20 = _slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  var sortableRef = useRef(null);
  useEffect(function () {
    api.getAdminProducts().then(function (data) {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  useEffect(function () {
    if (sortableRef.current && !loading) {
      new Sortable(sortableRef.current, {
        animation: 150,
        handle: '.sortable-handle',
        ghostClass: 'sortable-ghost',
        onEnd: function onEnd(evt) {
          var newProducts = _toConsumableArray(products);
          var _newProducts$splice = newProducts.splice(evt.oldIndex, 1),
            _newProducts$splice2 = _slicedToArray(_newProducts$splice, 1),
            movedItem = _newProducts$splice2[0];
          newProducts.splice(evt.newIndex, 0, movedItem);
          setProducts(newProducts);
          api.reorderProducts(newProducts);
        }
      });
    }
  }, [loading, products]);
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto p-4 sm:p-6 lg:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-6"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold text-white",
    style: {
      textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
    }
  }, "Produtos"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigate('admin/product/new');
    },
    className: "bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700"
  }, "Adicionar"), /*#__PURE__*/React.createElement("button", {
    className: "bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300"
  }, "Importar CSV"))), /*#__PURE__*/React.createElement("div", {
    className: "panel overflow-x-auto p-4"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left text-gray-800"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("th", {
    className: "p-4 w-12"
  }), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Imagem"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Produto"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "C\xF3digos"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Categoria"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "Ativo"), /*#__PURE__*/React.createElement("th", {
    className: "p-4"
  }, "A\xE7\xF5es"))), /*#__PURE__*/React.createElement("tbody", {
    ref: sortableRef
  }, loading ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "7",
    className: "p-4 text-center"
  }, "Carregando...")) : products.map(function (p) {
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id,
      className: "border-b border-gray-200 last:border-b-0"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-4 text-center sortable-handle text-gray-400"
    }, "\u2630"), /*#__PURE__*/React.createElement("td", {
      className: "p-4"
    }, /*#__PURE__*/React.createElement("img", {
      src: p.imageUrl,
      className: "w-12 h-12 object-contain rounded bg-gray-100 p-1"
    })), /*#__PURE__*/React.createElement("td", {
      className: "p-4 font-semibold"
    }, p.name), /*#__PURE__*/React.createElement("td", {
      className: "p-4"
    }, p.variants.map(function (v) {
      return v.code;
    }).filter(Boolean).join(', ')), /*#__PURE__*/React.createElement("td", {
      className: "p-4"
    }, p.category), /*#__PURE__*/React.createElement("td", {
      className: "p-4"
    }, p.active ? 'Sim' : 'Não'), /*#__PURE__*/React.createElement("td", {
      className: "p-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return navigate('admin/product/edit', {
          id: p.id
        });
      },
      className: "bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
    }, "Editar")));
  })))));
};

// Admin product edit page
var AdminProductEditPage = function AdminProductEditPage() {
  var _useApp4 = useApp(),
    navigate = _useApp4.navigate,
    route = _useApp4.route;
  var id = route.params.id;
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    product = _useState22[0],
    setProduct = _useState22[1];
  var _useState23 = useState(true),
    _useState24 = _slicedToArray(_useState23, 2),
    loading = _useState24[0],
    setLoading = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    imagePreview = _useState26[0],
    setImagePreview = _useState26[1];
  var fileInputRef = useRef(null);
  var categories = MOCK_SETTINGS.categoriesOrder;
  useEffect(function () {
    if (id) {
      api.getProduct(id).then(function (data) {
        setProduct(_objectSpread(_objectSpread({}, data), {}, {
          variants: data.variants || [{
            code: '',
            flavor: ''
          }]
        }));
        if (data.imageUrl) setImagePreview(data.imageUrl);
        setLoading(false);
      });
    } else {
      setProduct({
        name: '',
        category: categories[0],
        active: true,
        variants: [{
          code: '',
          flavor: ''
        }]
      });
      setLoading(false);
    }
  }, [id]);
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value,
      type = _e$target.type,
      checked = _e$target.checked;
    setProduct(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, name, type === 'checkbox' ? checked : value));
    });
  };
  var handleVariantChange = function handleVariantChange(index, field, value) {
    setProduct(function (p) {
      var variants = _toConsumableArray(p.variants);
      variants[index] = _objectSpread(_objectSpread({}, variants[index]), {}, _defineProperty({}, field, value));
      return _objectSpread(_objectSpread({}, p), {}, {
        variants: variants
      });
    });
  };
  var addVariant = function addVariant() {
    setProduct(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        variants: [].concat(_toConsumableArray(p.variants), [{
          code: '',
          flavor: ''
        }])
      });
    });
  };
  var removeVariant = function removeVariant(index) {
    setProduct(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        variants: p.variants.filter(function (_, i) {
          return i !== index;
        })
      });
    });
  };
  var handleImageChange = function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      var file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      console.log('Arquivo selecionado:', file.name);
    }
  };
  var handleSave = function handleSave() {
    var productData = _objectSpread(_objectSpread({}, product), {}, {
      imageUrl: imagePreview
    });
    var promise = id ? api.updateProduct(id, productData) : api.createProduct(productData);
    promise.then(function () {
      return navigate('admin/products');
    });
  };
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "text-center text-white text-2xl font-bold pt-20"
  }, "Carregando...");
  if (!product) return /*#__PURE__*/React.createElement("div", {
    className: "text-center text-red-500 text-2xl font-bold pt-20"
  }, "Produto n\xE3o encontrado.");
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto p-4 sm:p-6 lg:p-8"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold text-white mb-6",
    style: {
      textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
    }
  }, id ? 'Editar Produto' : 'Adicionar Produto'), /*#__PURE__*/React.createElement("div", {
    className: "panel p-8 text-gray-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-2 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-semibold mb-1"
  }, "Nome"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: product.name,
    onChange: handleChange,
    className: "w-full p-2 bg-gray-100 border border-gray-300 rounded-lg"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-semibold mb-1"
  }, "Categoria"), /*#__PURE__*/React.createElement("select", {
    name: "category",
    value: product.category,
    onChange: handleChange,
    className: "w-full p-2 bg-gray-100 border border-gray-300 rounded-lg"
  }, categories.map(function (cat) {
    return /*#__PURE__*/React.createElement("option", {
      key: cat,
      value: cat
    }, cat);
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-semibold mb-1"
  }, "C\xF3digos e Sabores"), product.variants.map(function (v, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: v.code,
      onChange: function onChange(e) {
        return handleVariantChange(index, 'code', e.target.value);
      },
      placeholder: "C\xF3digo",
      className: "flex-1 p-2 bg-gray-100 border border-gray-300 rounded-lg"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: v.flavor,
      onChange: function onChange(e) {
        return handleVariantChange(index, 'flavor', e.target.value);
      },
      placeholder: "Sabor",
      className: "flex-1 p-2 bg-gray-100 border border-gray-300 rounded-lg"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return removeVariant(index);
      },
      className: "text-red-600 font-bold px-2"
    }, "\xD7"));
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: addVariant,
    className: "mt-2 bg-green-600 text-white font-semibold px-4 py-1 rounded-lg"
  }, "Adicionar"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block font-semibold mb-1"
  }, "Imagem do Produto"), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed"
  }, imagePreview ? /*#__PURE__*/React.createElement("img", {
    src: imagePreview,
    alt: "Preview",
    className: "h-full w-full object-contain rounded-lg"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Pr\xE9-visualiza\xE7\xE3o")), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handleImageChange,
    ref: fileInputRef,
    className: "hidden"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return fileInputRef.current.click();
    },
    className: "w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300"
  }, "Adicionar Imagem"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "active",
    checked: product.active,
    onChange: handleChange
  }), " Ativo"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigate('admin/products');
    },
    className: "bg-gray-200 text-gray-800 font-semibold px-6 py-2 rounded-lg"
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    className: "bg-green-600 text-white font-semibold px-6 py-2 rounded-lg"
  }, "Salvar")))));
};

// Main app component
var App = function App() {
  var _useApp5 = useApp(),
    route = _useApp5.route,
    auth = _useApp5.auth;
  var renderPage = function renderPage() {
    if (!auth.isAdmin && route.name.startsWith('admin')) {
      return /*#__PURE__*/React.createElement(AdminLoginPage, null);
    }
    switch (route.name) {
      case 'home':
        return /*#__PURE__*/React.createElement(HomePage, null);
      case 'admin':
        return /*#__PURE__*/React.createElement(AdminLoginPage, null);
      case 'admin/products':
        return /*#__PURE__*/React.createElement(AdminProductListPage, null);
      case 'admin/product/edit':
        return /*#__PURE__*/React.createElement(AdminProductEditPage, null);
      case 'admin/product/new':
        return /*#__PURE__*/React.createElement(AdminProductEditPage, null);
      default:
        return /*#__PURE__*/React.createElement(HomePage, null);
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("main", null, renderPage()));
};
ReactDOM.render(/*#__PURE__*/React.createElement(AppProvider, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root'));
 main
