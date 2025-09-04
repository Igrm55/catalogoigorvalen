var CatalogApp = (() => {
  const { useState, useEffect, useRef, createContext, useContext } = React;
  const AppContext = createContext();
  const AppProvider = ({ children }) => {
    const [route, setRoute] = useState({ name: "home" });
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = (name, params = {}) => {
      const path = name === "home" ? "/" : `/${name}`;
      window.history.pushState(params, "", path);
      setRoute({ name, params });
    };
    useEffect(() => {
      const handlePopState = (event) => {
        const path2 = window.location.pathname.slice(1);
        setRoute({ name: path2 || "home", params: event.state || {} });
      };
      window.addEventListener("popstate", handlePopState);
      const path = window.location.pathname.slice(1);
      if (path) setRoute({ name: path });
      return () => window.removeEventListener("popstate", handlePopState);
    }, []);
    const auth = {
      isAdmin,
      login: (password) => api.loginAdmin(password).then((res) => {
        if (res.ok) setIsAdmin(true);
        return res;
      }),
      logout: () => setIsAdmin(false)
    };
    return /* @__PURE__ */ React.createElement(AppContext.Provider, { value: { route, navigate, auth } }, children);
  };
  const useApp = () => useContext(AppContext);
  const Header = () => {
    const { navigate } = useApp();
    return /* @__PURE__ */ React.createElement("header", { className: "bg-green-600 sticky top-0 z-40 shadow-lg", style: { backgroundColor: "var(--brand-green)" } }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white px-4 py-2 rounded-xl shadow" }, /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => {
      e.preventDefault();
      navigate("home");
    }, className: "flex items-baseline" }, /* @__PURE__ */ React.createElement("span", { className: "text-3xl font-bold", style: { color: "var(--brand-green)" } }, "Igor"), /* @__PURE__ */ React.createElement("span", { className: "text-3xl font-bold", style: { color: "var(--brand-red)" } }, "Valen")), /* @__PURE__ */ React.createElement("span", { className: "block text-sm -mt-1 font-medium text-gray-800" }, "Distribuidora")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-6" }, /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => {
      e.preventDefault();
      navigate("home");
    }, className: "text-white font-semibold hover:text-green-200 transition-colors" }, "Cat\xE1logo"), /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => {
      e.preventDefault();
      navigate("admin");
    }, className: "text-white font-semibold hover:text-green-200 transition-colors" }, "ADM"))));
  };
  const ProductCard = ({ product }) => {
    const codes = product.variants.map((v) => v.code).filter(Boolean);
    const flavors = product.variants.map((v) => v.flavor).filter(Boolean);
    const codeLabel = codes.length > 1 ? "C\xF3digos" : "C\xF3digo";
    return /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gray-50 p-4 relative h-40" }, codes.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded" }, codeLabel, ": ", codes.join(", ")), /* @__PURE__ */ React.createElement("img", { loading: "lazy", src: product.imageUrl, alt: product.name, className: "w-full h-full object-contain" })), /* @__PURE__ */ React.createElement("div", { className: "p-4 flex-grow flex flex-col" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-lg", style: { color: "var(--brand-green)" } }, product.name), flavors.length > 0 && /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold mb-2", style: { color: "var(--brand-red)" } }, "Sabores: ", /* @__PURE__ */ React.createElement("span", { className: "font-normal text-gray-600" }, flavors.join(", ")))));
  };
  const HomePage = () => {
    const [catalog, setCatalog] = useState({ products: [], settings: { categoriesOrder: [] } });
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);
    useEffect(() => {
      setLoading(true);
      api.getCatalog({ q: query, category: activeCategory }).then((data) => {
        setCatalog(data);
        setLoading(false);
      });
    }, [query, activeCategory]);
    const groupedProducts = catalog.settings.categoriesOrder.map((category) => ({
      category,
      products: catalog.products.filter((p) => p.category === category)
    })).filter((group) => group.products.length > 0);
    return /* @__PURE__ */ React.createElement("div", { className: "container mx-auto p-4 sm:p-6 lg:p-8" }, /* @__PURE__ */ React.createElement("div", { className: "panel p-6 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveCategory(null), className: `px-4 py-2 text-sm font-semibold rounded-full transition-colors ${!activeCategory ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }, "Todas"), catalog.settings.categoriesOrder.map((cat) => /* @__PURE__ */ React.createElement("button", { key: cat, onClick: () => setActiveCategory(cat), className: `px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === cat ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}` }, cat)))), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("input", { type: "text", placeholder: "Buscar por nome, categoria ou c\xF3digo...", onChange: (e) => setQuery(e.target.value), className: "w-full pl-4 pr-32 py-3 bg-white border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" }), /* @__PURE__ */ React.createElement("button", { className: "absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700" }, "Buscar"))), loading ? /* @__PURE__ */ React.createElement("div", { className: "text-center text-white text-2xl font-bold" }, "Carregando...") : groupedProducts.map((group) => /* @__PURE__ */ React.createElement("div", { key: group.category, className: "mb-12" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold text-white mb-4", style: { textShadow: "1px 1px 3px rgba(0,0,0,0.5)" } }, group.category), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-lg p-4 sm:p-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" }, group.products.map((p) => /* @__PURE__ */ React.createElement(ProductCard, { key: p.id, product: p })))))));
  };
  const AdminLoginPage = () => {
    const { navigate, auth } = useApp();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      auth.login(password).then((res) => {
        if (res.ok) navigate("admin/products");
        else {
          setError("Senha incorreta.");
          setLoading(false);
        }
      });
    };
    return /* @__PURE__ */ React.createElement("div", { className: "flex justify-center items-center pt-20" }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "panel p-8 w-full max-w-sm" }, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-center mb-6 text-gray-800" }, "Bem-vindo de volta!"), /* @__PURE__ */ React.createElement("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Digite a senha admin", className: "w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-xl mb-4 focus:outline-none focus:border-green-500" }), /* @__PURE__ */ React.createElement("button", { type: "submit", disabled: loading, className: "w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 disabled:bg-gray-400" }, loading ? "Entrando..." : "Entrar"), error && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-center mt-4" }, error)));
  };
  const AdminProductListPage = () => {
    const { navigate } = useApp();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const sortableRef = useRef(null);
    useEffect(() => {
      api.getAdminProducts().then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }, []);
    useEffect(() => {
      if (sortableRef.current && !loading) {
        new Sortable(sortableRef.current, {
          animation: 150,
          handle: ".sortable-handle",
          ghostClass: "sortable-ghost",
          onEnd: (evt) => {
            const newProducts = [...products];
            const [movedItem] = newProducts.splice(evt.oldIndex, 1);
            newProducts.splice(evt.newIndex, 0, movedItem);
            setProducts(newProducts);
            api.reorderProducts(newProducts);
          }
        });
      }
    }, [loading, products]);
    return /* @__PURE__ */ React.createElement("div", { className: "container mx-auto p-4 sm:p-6 lg:p-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-6" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-white", style: { textShadow: "1px 1px 3px rgba(0,0,0,0.5)" } }, "Produtos"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("admin/product/new"), className: "bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700" }, "Adicionar"), /* @__PURE__ */ React.createElement("button", { className: "bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300" }, "Importar CSV"))), /* @__PURE__ */ React.createElement("div", { className: "panel overflow-x-auto p-4" }, /* @__PURE__ */ React.createElement("table", { className: "w-full text-left text-gray-800" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { className: "border-b border-gray-200" }, /* @__PURE__ */ React.createElement("th", { className: "p-4 w-12" }), /* @__PURE__ */ React.createElement("th", { className: "p-4" }, "Imagem"), /* @__PURE__ */ React.createElement("th", { className: "p-4" }, "Produto"), /* @__PURE__ */ React.createElement("th", { className: "p-4" }, "C\xF3digos"), /* @__PURE__ */ React.createElement("th", { className: "p-4" }, "Categoria"), /* @__PURE__ */ React.createElement("th", { className: "p-4" }, "Ativo"), /* @__PURE__ */ React.createElement("th", { className: "p-4" }, "A\xE7\xF5es"))), /* @__PURE__ */ React.createElement("tbody", { ref: sortableRef }, loading ? /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", { colSpan: "7", className: "p-4 text-center" }, "Carregando...")) : products.map((p) => /* @__PURE__ */ React.createElement("tr", { key: p.id, className: "border-b border-gray-200 last:border-b-0" }, /* @__PURE__ */ React.createElement("td", { className: "p-4 text-center sortable-handle text-gray-400" }, "\u2630"), /* @__PURE__ */ React.createElement("td", { className: "p-4" }, /* @__PURE__ */ React.createElement("img", { src: p.imageUrl, className: "w-12 h-12 object-contain rounded bg-gray-100 p-1" })), /* @__PURE__ */ React.createElement("td", { className: "p-4 font-semibold" }, p.name), /* @__PURE__ */ React.createElement("td", { className: "p-4" }, p.variants.map((v) => v.code).filter(Boolean).join(", ")), /* @__PURE__ */ React.createElement("td", { className: "p-4" }, p.category), /* @__PURE__ */ React.createElement("td", { className: "p-4" }, p.active ? "Sim" : "N\xE3o"), /* @__PURE__ */ React.createElement("td", { className: "p-4" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("admin/product/edit", { id: p.id }), className: "bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold" }, "Editar"))))))));
  };
  const AdminProductEditPage = () => {
    const { navigate, route } = useApp();
    const { id } = route.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const categories = MOCK_SETTINGS.categoriesOrder;
    useEffect(() => {
      if (id) {
        api.getProduct(id).then((data) => {
          setProduct({ ...data, variants: data.variants || [{ code: "", flavor: "" }] });
          if (data.imageUrl) setImagePreview(data.imageUrl);
          setLoading(false);
        });
      } else {
        setProduct({ name: "", category: categories[0], active: true, variants: [{ code: "", flavor: "" }] });
        setLoading(false);
      }
    }, [id]);
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setProduct((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    };
    const handleVariantChange = (index, field, value) => {
      setProduct((p) => {
        const variants = [...p.variants];
        variants[index] = { ...variants[index], [field]: value };
        return { ...p, variants };
      });
    };
    const addVariant = () => {
      setProduct((p) => ({ ...p, variants: [...p.variants, { code: "", flavor: "" }] }));
    };
    const removeVariant = (index) => {
      setProduct((p) => ({ ...p, variants: p.variants.filter((_, i) => i !== index) }));
    };
    const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setImagePreview(URL.createObjectURL(file));
        console.log("Arquivo selecionado:", file.name);
      }
    };
    const handleSave = () => {
      const productData = { ...product, imageUrl: imagePreview };
      const promise = id ? api.updateProduct(id, productData) : api.createProduct(productData);
      promise.then(() => navigate("admin/products"));
    };
    if (loading) return /* @__PURE__ */ React.createElement("div", { className: "text-center text-white text-2xl font-bold pt-20" }, "Carregando...");
    if (!product) return /* @__PURE__ */ React.createElement("div", { className: "text-center text-red-500 text-2xl font-bold pt-20" }, "Produto n\xE3o encontrado.");
    return /* @__PURE__ */ React.createElement("div", { className: "container mx-auto p-4 sm:p-6 lg:p-8" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-white mb-6", style: { textShadow: "1px 1px 3px rgba(0,0,0,0.5)" } }, id ? "Editar Produto" : "Adicionar Produto"), /* @__PURE__ */ React.createElement("div", { className: "panel p-8 text-gray-800" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "md:col-span-2 space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block font-semibold mb-1" }, "Nome"), /* @__PURE__ */ React.createElement("input", { type: "text", name: "name", value: product.name, onChange: handleChange, className: "w-full p-2 bg-gray-100 border border-gray-300 rounded-lg" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block font-semibold mb-1" }, "Categoria"), /* @__PURE__ */ React.createElement("select", { name: "category", value: product.category, onChange: handleChange, className: "w-full p-2 bg-gray-100 border border-gray-300 rounded-lg" }, categories.map((cat) => /* @__PURE__ */ React.createElement("option", { key: cat, value: cat }, cat))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block font-semibold mb-1" }, "C\xF3digos e Sabores"), product.variants.map((v, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex gap-2 mb-2" }, /* @__PURE__ */ React.createElement("input", { type: "text", value: v.code, onChange: (e) => handleVariantChange(index, "code", e.target.value), placeholder: "C\xF3digo", className: "flex-1 p-2 bg-gray-100 border border-gray-300 rounded-lg" }), /* @__PURE__ */ React.createElement("input", { type: "text", value: v.flavor, onChange: (e) => handleVariantChange(index, "flavor", e.target.value), placeholder: "Sabor", className: "flex-1 p-2 bg-gray-100 border border-gray-300 rounded-lg" }), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => removeVariant(index), className: "text-red-600 font-bold px-2" }, "\xD7"))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: addVariant, className: "mt-2 bg-green-600 text-white font-semibold px-4 py-1 rounded-lg" }, "Adicionar"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("label", { className: "block font-semibold mb-1" }, "Imagem do Produto"), /* @__PURE__ */ React.createElement("div", { className: "w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed" }, imagePreview ? /* @__PURE__ */ React.createElement("img", { src: imagePreview, alt: "Preview", className: "h-full w-full object-contain rounded-lg" }) : /* @__PURE__ */ React.createElement("span", { className: "text-gray-500" }, "Pr\xE9-visualiza\xE7\xE3o")), /* @__PURE__ */ React.createElement("input", { type: "file", accept: "image/*", onChange: handleImageChange, ref: fileInputRef, className: "hidden" }), /* @__PURE__ */ React.createElement("button", { onClick: () => fileInputRef.current.click(), className: "w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300" }, "Adicionar Imagem"))), /* @__PURE__ */ React.createElement("div", { className: "mt-6 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", name: "active", checked: product.active, onChange: handleChange }), " Ativo"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("admin/products"), className: "bg-gray-200 text-gray-800 font-semibold px-6 py-2 rounded-lg" }, "Cancelar"), /* @__PURE__ */ React.createElement("button", { onClick: handleSave, className: "bg-green-600 text-white font-semibold px-6 py-2 rounded-lg" }, "Salvar")))));
  };
  const App = () => {
    const { route, auth } = useApp();
    const renderPage = () => {
      if (!auth.isAdmin && route.name.startsWith("admin")) {
        return /* @__PURE__ */ React.createElement(AdminLoginPage, null);
      }
      switch (route.name) {
        case "home":
          return /* @__PURE__ */ React.createElement(HomePage, null);
        case "admin":
          return /* @__PURE__ */ React.createElement(AdminLoginPage, null);
        case "admin/products":
          return /* @__PURE__ */ React.createElement(AdminProductListPage, null);
        case "admin/product/edit":
          return /* @__PURE__ */ React.createElement(AdminProductEditPage, null);
        case "admin/product/new":
          return /* @__PURE__ */ React.createElement(AdminProductEditPage, null);
        default:
          return /* @__PURE__ */ React.createElement(HomePage, null);
      }
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, renderPage()));
  };
  ReactDOM.render(
    /* @__PURE__ */ React.createElement(AppProvider, null, /* @__PURE__ */ React.createElement(App, null)),
    document.getElementById("root")
  );
})();
