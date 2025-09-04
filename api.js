// lib/api.js - mock API implementation

const MOCK_PRODUCTS = [
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
];

let MOCK_SETTINGS = {
    id: 1,
    categoriesOrder: ['Bebidas não alcoólicas', 'Bebidas alcoólicas', 'Bomboneire', 'Cigarro', 'Utilidades'],
};

const api = {
    getCatalog: async (q) => {
        await new Promise(res => setTimeout(res, 500));
        let products = MOCK_PRODUCTS.filter(p => p.active);
        if (q && q.q) {
            const searchTerm = q.q.toLowerCase();
            products = products.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.variants.some(v => (v.code || '').toLowerCase().includes(searchTerm) || (v.flavor || '').toLowerCase().includes(searchTerm))
            );
        }
        if (q && q.category) {
            products = products.filter(p => p.category === q.category);
        }
        return { products, settings: MOCK_SETTINGS };
    }
};

window.api = api;
