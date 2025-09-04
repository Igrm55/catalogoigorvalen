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
      setCatalog(data);
      setLoading(false);
    });
  }, [query, activeCategory]);

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
