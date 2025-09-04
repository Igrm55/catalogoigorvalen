"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _React = React;
var useState = _React.useState;
var useEffect = _React.useEffect;

var CATEGORY_ICONS = {
  "Bebidas não alcoólicas": "https://img.icons8.com/color/48/soda-can.png",
  "Bebidas alcoólicas": "https://img.icons8.com/color/48/beer-bottle.png",
  "Bomboneire": "https://img.icons8.com/color/48/chocolate-bar.png",
  "Cigarro": "https://img.icons8.com/color/48/cigarette.png",
  "Utilidades": "https://img.icons8.com/color/48/toolbox.png"
};

function ProductCard(_ref) {
  var product = _ref.product;

  var codes = product.variants.map(function (v) {
    return v.code;
  }).filter(Boolean).join(', ');
  var flavors = product.variants.map(function (v) {
    return v.flavor;
  }).filter(Boolean).join(', ');
  return React.createElement(
    "div",
    { className: "bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg" },
    React.createElement(
      "div",
      { className: "bg-gray-50 p-4 h-40 flex items-center justify-center" },
      React.createElement("img", { loading: "lazy", src: product.imageUrl, alt: product.name, className: "w-full h-full object-contain" })
    ),
    React.createElement(
      "div",
      { className: "p-4 flex-grow flex flex-col" },
      React.createElement(
        "h3",
        { className: "font-bold text-lg", style: { color: 'var(--brand-green)' } },
        product.name
      ),
      flavors && React.createElement(
        "p",
        { className: "text-sm font-semibold", style: { color: 'var(--brand-red)' } },
        "Sabores: ",
        React.createElement(
          "span",
          { className: "font-normal text-gray-600" },
          flavors
        )
      ),
      codes && React.createElement(
        "p",
        { className: "text-sm font-semibold mt-1", style: { color: 'var(--brand-green)' } },
        "Códigos: ",
        React.createElement(
          "span",
          { className: "font-normal text-gray-600" },
          codes
        )
      )
    )
  );
}

function HomePage() {
  var _useState = useState({ products: [], settings: { categoriesOrder: [] } });

  var _useState2 = _slicedToArray(_useState, 2);

  var catalog = _useState2[0];
  var setCatalog = _useState2[1];

  var _useState3 = useState(true);

  var _useState32 = _slicedToArray(_useState3, 2);

  var loading = _useState32[0];
  var setLoading = _useState32[1];

  var _useState4 = useState('');

  var _useState42 = _slicedToArray(_useState4, 2);

  var query = _useState42[0];
  var setQuery = _useState42[1];

  var _useState5 = useState(null);

  var _useState52 = _slicedToArray(_useState5, 2);

  var activeCategory = _useState52[0];
  var setActiveCategory = _useState52[1];

  useEffect(function () {
    setLoading(true);
    api.getCatalog({ q: query, category: activeCategory }).then(function (data) {
      setCatalog(data);
      setLoading(false);
    });
  }, [query, activeCategory]);

  var grouped = catalog.settings.categoriesOrder.map(function (category) {
    return {
      category: category,
      products: catalog.products.filter(function (p) {
        return p.category === category;
      })
    };
  }).filter(function (g) {
    return g.products.length > 0;
  });

  return React.createElement(
    "div",
    { className: "container mx-auto p-4 sm:p-6 lg:p-8" },
    React.createElement(
      "div",
      { className: "panel p-6 mb-8" },
      React.createElement(
        "div",
        { className: "flex flex-wrap items-center justify-between gap-4 mb-4" },
        React.createElement(
          "div",
          { className: "flex flex-wrap items-center gap-2" },
          React.createElement(
            "button",
            { onClick: function () {
                return setActiveCategory(null);
              }, className: "px-4 py-2 text-sm font-semibold rounded-full transition-colors " + (!activeCategory ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200') },
            "Todas"
          ),
          catalog.settings.categoriesOrder.map(function (cat) {
            return React.createElement(
              "button",
              { key: cat, onClick: function () {
                  return setActiveCategory(cat);
                }, className: "flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors " + (activeCategory === cat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200') },
              React.createElement("img", { src: CATEGORY_ICONS[cat], alt: "", className: "w-4 h-4" }),
              cat
            );
          })
        ),
        React.createElement(
          "div",
          { className: "relative w-full max-w-xs sm:max-w-sm" },
          React.createElement("input", { type: "text", placeholder: "Buscar por nome, categoria ou código...", onChange: function (e) {
              return setQuery(e.target.value);
            }, className: "w-full pl-4 pr-12 py-3 bg-white border border-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500" }),
          React.createElement(
            "button",
            { className: "absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700" },
            React.createElement(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
              React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" })
            )
          )
        )
      )
    ),
    loading ? React.createElement(
      "div",
      { className: "text-center text-white text-2xl font-bold" },
      "Carregando..."
    ) : grouped.map(function (group) {
      return React.createElement(
        "div",
        { key: group.category, className: "mb-12" },
        React.createElement(
          "h2",
          { className: "flex items-center text-3xl font-bold text-white mb-4", style: { textShadow: '1px 1px 3px rgba(0,0,0,0.5)' } },
          React.createElement("img", { src: CATEGORY_ICONS[group.category], alt: "", className: "w-8 h-8 mr-2" }),
          group.category
        ),
        React.createElement(
          "div",
          { className: "bg-white rounded-3xl shadow-lg p-4 sm:p-6" },
          React.createElement(
            "div",
            { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" },
            group.products.map(function (p) {
              return React.createElement(ProductCard, { key: p.id, product: p });
            })
          )
        )
      );
    })
  );
}

function Header() {
  return React.createElement(
    "header",
    { className: "bg-green-600 sticky top-0 z-40 shadow-lg", style: { backgroundColor: 'var(--brand-green)' } },
    React.createElement(
      "div",
      { className: "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-24" },
      React.createElement(
        "div",
        { className: "bg-white px-4 py-2 rounded-2xl shadow" },
        React.createElement(
          "span",
          { className: "text-3xl font-bold", style: { color: 'var(--brand-green)' } },
          "Igor"
        ),
        React.createElement(
          "span",
          { className: "text-3xl font-bold", style: { color: 'var(--brand-red)' } },
          "Valen"
        ),
        React.createElement(
          "span",
          { className: "block text-sm -mt-1 font-medium text-gray-800" },
          "Distribuidora"
        )
      )
    )
  );
}

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(
      "main",
      null,
      React.createElement(HomePage, null)
    )
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
