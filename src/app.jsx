const { useState, useEffect, useRef, createContext, useContext } = React;

// Context for routing & auth
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [route, setRoute] = useState({ name: 'home' });
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = (name, params = {}) => {
        const path = name === 'home' ? '/' : `/${name}`;
        window.history.pushState(params, '', path);
        setRoute({ name, params });
    };

    useEffect(() => {
        const handlePopState = (event) => {
            const path = window.location.pathname.slice(1);
            setRoute({ name: path || 'home', params: event.state || {} });
        };
        window.addEventListener('popstate', handlePopState);
        const path = window.location.pathname.slice(1);
        if (path) setRoute({ name: path });
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const auth = {
        isAdmin,
        login: (password) => api.loginAdmin(password).then(res => {
            if(res.ok) setIsAdmin(true);
            return res;
        }),
        logout: () => setIsAdmin(false),
    };

    return <AppContext.Provider value={{ route, navigate, auth }}>{children}</AppContext.Provider>;
};

const useApp = () => useContext(AppContext);

// Header component
const Header = () => {
    const { navigate } = useApp();
    return (
        <header className="bg-green-600 sticky top-0 z-40 shadow-lg" style={{backgroundColor: 'var(--brand-green)'}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
                <div className="bg-white px-4 py-2 rounded-xl shadow">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex items-baseline">
                        <span className="text-3xl font-bold" style={{color: 'var(--brand-green)'}}>Igor</span>
                        <span className="text-3xl font-bold" style={{color: 'var(--brand-red)'}}>Valen</span>
                    </a>
                    <span className="block text-sm -mt-1 font-medium text-gray-800">Distribuidora</span>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="text-white font-semibold hover:text-green-200 transition-colors">Catálogo</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('admin'); }} className="text-white font-semibold hover:text-green-200 transition-colors">ADM</a>
                </div>
            </div>
        </header>
    );
};

// Product card
const ProductCard = ({ product }) => {
    const codes = product.variants.map(v => v.code).filter(Boolean);
    const flavors = product.variants.map(v => v.flavor).filter(Boolean);
    const codeLabel = codes.length > 1 ? 'Códigos' : 'Código';
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
            <div className="bg-gray-50 p-4 relative h-40">
                {codes.length > 0 && (
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded">
                        {codeLabel}: {codes.join(', ')}
                    </div>
                )}
                <img loading="lazy" src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="font-bold text-lg" style={{color: 'var(--brand-green)'}}>{product.name}</h3>
                {flavors.length > 0 && (
                    <p className="text-sm font-semibold mb-2" style={{color: 'var(--brand-red)'}}>
                        Sabores: <span className="font-normal text-gray-600">{flavors.join(', ')}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

// Home page
const HomePage = () => {
    const [catalog, setCatalog] = useState({ products: [], settings: { categoriesOrder: [] } });
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        setLoading(true);
        api.getCatalog({ q: query, category: activeCategory }).then(data => {
            setCatalog(data);
            setLoading(false);
        });
    }, [query, activeCategory]);

    const groupedProducts = catalog.settings.categoriesOrder
        .map(category => ({
            category,
            products: catalog.products.filter(p => p.category === category)
        }))
        .filter(group => group.products.length > 0);

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="panel p-6 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={() => setActiveCategory(null)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${!activeCategory ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Todas</button>
                        {catalog.settings.categoriesOrder.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === cat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{cat}</button>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <input type="text" placeholder="Buscar por nome, categoria ou código..." onChange={(e) => setQuery(e.target.value)} className="w-full pl-4 pr-32 py-3 bg-white border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700">Buscar</button>
                </div>
            </div>
            {loading ? (
                <div className="text-center text-white text-2xl font-bold">Carregando...</div>
            ) : (
                groupedProducts.map(group => (
                    <div key={group.category} className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>{group.category}</h2>
                        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {group.products.map(p => <ProductCard key={p.id} product={p} />)}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

// Admin login page
const AdminLoginPage = () => {
    const { navigate, auth } = useApp();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        auth.login(password).then(res => {
            if(res.ok) navigate('admin/products');
            else {
                setError('Senha incorreta.');
                setLoading(false);
            }
        });
    };

    return (
        <div className="flex justify-center items-center pt-20">
            <form onSubmit={handleSubmit} className="panel p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Bem-vindo de volta!</h1>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite a senha admin" className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-xl mb-4 focus:outline-none focus:border-green-500" />
                <button type="submit" disabled={loading} className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 disabled:bg-gray-400">
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
        </div>
    );
};

// Admin product list page
const AdminProductListPage = () => {
    const { navigate } = useApp();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const sortableRef = useRef(null);

    useEffect(() => {
        api.getAdminProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (sortableRef.current && !loading) {
            new Sortable(sortableRef.current, {
                animation: 150,
                handle: '.sortable-handle',
                ghostClass: 'sortable-ghost',
                onEnd: (evt) => {
                    const newProducts = [...products];
                    const [movedItem] = newProducts.splice(evt.oldIndex, 1);
                    newProducts.splice(evt.newIndex, 0, movedItem);
                    setProducts(newProducts);
                    api.reorderProducts(newProducts);
                },
            });
        }
    }, [loading, products]);

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>Produtos</h1>
                <div className="flex gap-2">
                    <button onClick={() => navigate('admin/product/new')} className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700">Adicionar</button>
                    <button className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300">Importar CSV</button>
                </div>
            </div>
            <div className="panel overflow-x-auto p-4">
                <table className="w-full text-left text-gray-800">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="p-4 w-12"></th>
                            <th className="p-4">Imagem</th>
                            <th className="p-4">Produto</th>
                            <th className="p-4">Códigos</th>
                            <th className="p-4">Categoria</th>
                            <th className="p-4">Ativo</th>
                            <th className="p-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody ref={sortableRef}>
                        {loading ? (
                            <tr><td colSpan="7" className="p-4 text-center">Carregando...</td></tr>
                        ) : (
                            products.map(p => (
                                <tr key={p.id} className="border-b border-gray-200 last:border-b-0">
                                    <td className="p-4 text-center sortable-handle text-gray-400">☰</td>
                                    <td className="p-4"><img src={p.imageUrl} className="w-12 h-12 object-contain rounded bg-gray-100 p-1" /></td>
                                    <td className="p-4 font-semibold">{p.name}</td>
                                    <td className="p-4">{p.variants.map(v => v.code).filter(Boolean).join(', ')}</td>
                                    <td className="p-4">{p.category}</td>
                                    <td className="p-4">{p.active ? 'Sim' : 'Não'}</td>
                                    <td className="p-4">
                                        <button onClick={() => navigate('admin/product/edit', {id: p.id})} className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">Editar</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Admin product edit page
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
            api.getProduct(id).then(data => {
                setProduct({ ...data, variants: data.variants || [{ code: '', flavor: '' }] });
                if (data.imageUrl) setImagePreview(data.imageUrl);
                setLoading(false);
            });
        } else {
            setProduct({ name: '', category: categories[0], active: true, variants: [{ code: '', flavor: '' }] });
            setLoading(false);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleVariantChange = (index, field, value) => {
        setProduct(p => {
            const variants = [...p.variants];
            variants[index] = { ...variants[index], [field]: value };
            return { ...p, variants };
        });
    };

    const addVariant = () => {
        setProduct(p => ({ ...p, variants: [...p.variants, { code: '', flavor: '' }] }));
    };

    const removeVariant = (index) => {
        setProduct(p => ({ ...p, variants: p.variants.filter((_, i) => i !== index) }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImagePreview(URL.createObjectURL(file));
            console.log('Arquivo selecionado:', file.name);
        }
    };

    const handleSave = () => {
        const productData = { ...product, imageUrl: imagePreview };
        const promise = id ? api.updateProduct(id, productData) : api.createProduct(productData);
        promise.then(() => navigate('admin/products'));
    };

    if (loading) return <div className="text-center text-white text-2xl font-bold pt-20">Carregando...</div>;
    if (!product) return <div className="text-center text-red-500 text-2xl font-bold pt-20">Produto não encontrado.</div>;

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-white mb-6" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>{id ? 'Editar Produto' : 'Adicionar Produto'}</h1>
            <div className="panel p-8 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-semibold mb-1">Nome</label>
                                <input type="text" name="name" value={product.name} onChange={handleChange} className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Categoria</label>
                                <select name="category" value={product.category} onChange={handleChange} className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg">
                                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Códigos e Sabores</label>
                            {product.variants.map((v, index) => (
                                <div key={index} className="flex gap-2 mb-2">
                                    <input type="text" value={v.code} onChange={e => handleVariantChange(index, 'code', e.target.value)} placeholder="Código" className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded-lg" />
                                    <input type="text" value={v.flavor} onChange={e => handleVariantChange(index, 'flavor', e.target.value)} placeholder="Sabor" className="flex-1 p-2 bg-gray-100 border border-gray-300 rounded-lg" />
                                    <button type="button" onClick={() => removeVariant(index)} className="text-red-600 font-bold px-2">×</button>
                                </div>
                            ))}
                            <button type="button" onClick={addVariant} className="mt-2 bg-green-600 text-white font-semibold px-4 py-1 rounded-lg">Adicionar</button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block font-semibold mb-1">Imagem do Produto</label>
                        <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="h-full w-full object-contain rounded-lg" />
                            ) : (
                                <span className="text-gray-500">Pré-visualização</span>
                            )}
                        </div>
                        <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} className="hidden" />
                        <button onClick={() => fileInputRef.current.click()} className="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300">Adicionar Imagem</button>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <label className="flex items-center gap-2"><input type="checkbox" name="active" checked={product.active} onChange={handleChange} /> Ativo</label>
                    <div className="flex gap-2">
                        <button onClick={() => navigate('admin/products')} className="bg-gray-200 text-gray-800 font-semibold px-6 py-2 rounded-lg">Cancelar</button>
                        <button onClick={handleSave} className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main app component
const App = () => {
    const { route, auth } = useApp();

    const renderPage = () => {
        if (!auth.isAdmin && route.name.startsWith('admin')) {
            return <AdminLoginPage />;
        }
        switch (route.name) {
            case 'home': return <HomePage />;
            case 'admin': return <AdminLoginPage />;
            case 'admin/products': return <AdminProductListPage />;
            case 'admin/product/edit': return <AdminProductEditPage />;
            case 'admin/product/new': return <AdminProductEditPage />;
            default: return <HomePage />;
        }
    };

    return (
        <div>
            <Header />
            <main>{renderPage()}</main>
        </div>
    );
};

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById('root')
);
