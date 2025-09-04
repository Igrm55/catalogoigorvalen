// lib/api.js - mock API implementation

const MOCK_PRODUCTS = [
 codex/improve-catalog-design-and-features-gmz91i

 codex/improve-catalog-design-and-features-88qr0z

 codex/improve-catalog-design-and-features-bum5a1
 main
 main
    {
        id: 'p1',
        name: 'Refrigerante Goob 2L',
        category: 'Bebidas não alcoólicas',
        variants: [
            { code: '66', flavor: 'Cola' },
            { code: '69', flavor: 'Guaraná' },
            { code: '', flavor: 'Laranja' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Bebida+1',
        sortOrder: 1,
        active: true,
    },
    {
        id: 'p2',
        name: 'Energético Ener Up 250ML',
        category: 'Bebidas não alcoólicas',
        variants: [
            { code: '49', flavor: 'Tradicional' },
            { code: '', flavor: 'Tropical' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Bebida+2',
        sortOrder: 2,
        active: true,
    },
    {
        id: 'p7',
        name: 'Suco de Laranja 1L',
        category: 'Bebidas não alcoólicas',
        variants: [
            { code: '71', flavor: 'Laranja' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Bebida+3',
        sortOrder: 3,
        active: true,
    },
    {
        id: 'p4',
        name: 'Cerveja Skol Lata 350ml',
        category: 'Bebidas alcoólicas',
        variants: [
            { code: '150', flavor: 'Pilsen' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Alcoólica+1',
        sortOrder: 4,
        active: true,
    },
    {
        id: 'p8',
        name: 'Vinho Tinto Suave 750ml',
        category: 'Bebidas alcoólicas',
        variants: [
            { code: '155', flavor: 'Tinto Suave' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Alcoólica+2',
        sortOrder: 5,
        active: true,
    },
    {
        id: 'p3',
        name: 'Bombom Garoto',
        category: 'Bomboneire',
        variants: [
            { code: '101', flavor: 'Sortidos' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Doce+1',
        sortOrder: 6,
        active: true,
    },
    {
        id: 'p9',
        name: 'Chocolate Lacta 90g',
        category: 'Bomboneire',
        variants: [
            { code: '105', flavor: 'Ao Leite' },
            { code: '105B', flavor: 'Branco' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Doce+2',
        sortOrder: 7,
        active: true,
    },
    {
        id: 'p5',
        name: 'Rothmans Click',
        category: 'Cigarro',
        variants: [
            { code: '201', flavor: 'Mentolado' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Cigarro+1',
        sortOrder: 8,
        active: true,
    },
    {
        id: 'p6',
        name: 'Isqueiro Bic',
        category: 'Utilidades',
        variants: [
            { code: '301', flavor: 'Cores Sortidas' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Utilidade+1',
        sortOrder: 9,
        active: true,
    },
    {
        id: 'p10',
        name: 'Vela de Aniversário',
        category: 'Utilidades',
        variants: [
            { code: '305', flavor: 'Número 0-9' },
        ],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Utilidade+2',
        sortOrder: 10,
        active: true,
    },
 codex/improve-catalog-design-and-features-gmz91i

 codex/improve-catalog-design-and-features-88qr0z


    { id: 'p1', name: 'Refrigerante Goob 2L', category: 'Bebidas não alcoólicas', codes: '66, 69', flavors: 'Cola, Guaraná, Laranja', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Bebida+1', priceUV: 4.20, priceUP: 4.25, priceFV: 25.21, priceFP: 25.49, sortOrder: 1, active: true },
    { id: 'p2', name: 'Energético Ener Up 250ML', category: 'Bebidas não alcoólicas', codes: '49', flavors: 'Tradicional, Tropical', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Bebida+2', priceUV: 3.50, priceUP: 3.55, priceFV: 21.00, priceFP: 21.30, sortOrder: 2, active: true },
    { id: 'p7', name: 'Suco de Laranja 1L', category: 'Bebidas não alcoólicas', codes: '71', flavors: 'Laranja', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Bebida+3', priceUV: 5.00, priceUP: 5.10, priceFV: 30.00, priceFP: 30.60, sortOrder: 3, active: true },
    { id: 'p4', name: 'Cerveja Skol Lata 350ml', category: 'Bebidas alcoólicas', codes: '150', flavors: 'Pilsen', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Alcoólica+1', priceUV: 2.80, priceUP: 2.85, priceFV: 33.60, priceFP: 34.20, sortOrder: 4, active: true },
    { id: 'p8', name: 'Vinho Tinto Suave 750ml', category: 'Bebidas alcoólicas', codes: '155', flavors: 'Tinto Suave', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Alcoólica+2', priceUV: 15.00, priceUP: 15.50, priceFV: 90.00, priceFP: 93.00, sortOrder: 5, active: true },
    { id: 'p3', name: 'Bombom Garoto', category: 'Bomboneire', codes: '101', flavors: 'Sortidos', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Doce+1', priceUV: 1.50, priceUP: 1.55, priceFV: 45.00, priceFP: 46.50, sortOrder: 6, active: true },
    { id: 'p9', name: 'Chocolate Lacta 90g', category: 'Bomboneire', codes: '105', flavors: 'Ao Leite, Branco', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Doce+2', priceUV: 5.50, priceUP: 5.60, priceFV: 82.50, priceFP: 84.00, sortOrder: 7, active: true },
    { id: 'p5', name: 'Rothmans Click', category: 'Cigarro', codes: '201', flavors: 'Mentolado', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Cigarro+1', priceUV: 6.50, priceUP: 6.50, priceFV: 65.00, priceFP: 65.00, sortOrder: 8, active: true },
    { id: 'p6', name: 'Isqueiro Bic', category: 'Utilidades', codes: '301', flavors: 'Cores Sortidas', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Utilidade+1', priceUV: 3.00, priceUP: 3.00, priceFV: 30.00, priceFP: 30.00, sortOrder: 9, active: true },
    { id: 'p10', name: 'Vela de Aniversário', category: 'Utilidades', codes: '305', flavors: 'Número 0-9', imageUrl: 'https://placehold.co/400x400/e2e8f0/334155?text=Utilidade+2', priceUV: 4.00, priceUP: 4.00, priceFV: 40.00, priceFP: 40.00, sortOrder: 10, active: true },
 main
 main
 main
];

let MOCK_SETTINGS = {
    id: 1,
    categoriesOrder: ['Bebidas não alcoólicas', 'Bebidas alcoólicas', 'Bomboneire', 'Cigarro', 'Utilidades'],
};

const api = {
    loginAdmin: async (password) => {
        await new Promise(res => setTimeout(res, 500));
        return { ok: password === '1234' };
    },

    getCatalog: async (q) => {
        await new Promise(res => setTimeout(res, 500));
        let products = MOCK_PRODUCTS.filter(p => p.active);
 codex/improve-catalog-design-and-features-gmz91i
        if (q && q.q) {
            const searchTerm = q.q.toLowerCase();

 codex/improve-catalog-design-and-features-88qr0z
        if (q && q.q) {
            const searchTerm = q.q.toLowerCase();

        if (q?.q) {
            const searchTerm = q.q.toLowerCase();
 codex/improve-catalog-design-and-features-bum5a1
 main
 main
            products = products.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.variants.some(v => (v.code || '').toLowerCase().includes(searchTerm) || (v.flavor || '').toLowerCase().includes(searchTerm))
            );
 codex/improve-catalog-design-and-features-gmz91i
        }
        if (q && q.category) {

 codex/improve-catalog-design-and-features-88qr0z
        }
        if (q && q.category) {


            products = products.filter(p => p.name.toLowerCase().includes(searchTerm) || p.codes?.toLowerCase().includes(searchTerm));
 main
        }
        if (q?.category) {
 main
 main
            products = products.filter(p => p.category === q.category);
        }
        return { products, settings: MOCK_SETTINGS };
    },

    getAdminProducts: async () => {
        await new Promise(res => setTimeout(res, 500));
        return [...MOCK_PRODUCTS].sort((a, b) => a.sortOrder - b.sortOrder);
    },

    getProduct: async (id) => {
        await new Promise(res => setTimeout(res, 500));
        return MOCK_PRODUCTS.find(p => p.id === id) || null;
    },

    updateProduct: async (id, data) => {
        await new Promise(res => setTimeout(res, 500));
        const index = MOCK_PRODUCTS.findIndex(p => p.id === id);
        if (index !== -1) {
            MOCK_PRODUCTS[index] = { ...MOCK_PRODUCTS[index], ...data };
            return { ...MOCK_PRODUCTS[index] };
        }
        return null;
    },

    createProduct: async (data) => {
        await new Promise(res => setTimeout(res, 500));
        const newProduct = { ...data, id: `p${Date.now()}`, sortOrder: MOCK_PRODUCTS.length + 1 };
        MOCK_PRODUCTS.push(newProduct);
        return newProduct;
    },

    reorderProducts: async (orderedProducts) => {
        await new Promise(res => setTimeout(res, 500));
        orderedProducts.forEach((p, index) => {
            const mockProduct = MOCK_PRODUCTS.find(mp => mp.id === p.id);
            if (mockProduct) {
                mockProduct.sortOrder = index + 1;
            }
        });
        return { ok: true };
    },
};

window.api = api;
window.MOCK_SETTINGS = MOCK_SETTINGS;

