// src/pages/MenuPage.jsx
import { useState, useEffect } from 'react';
import supabase from '../supabaseClient.js';

// Data pro legendu alergenů
const allergenKey = [
    { id: 1, name: 'Obiloviny obsahující lepek' },
    { id: 2, name: 'Korýši a výrobky z nich' },
    { id: 3, name: 'Vejce a výrobky z nich' },
    { id: 4, name: 'Ryby a výrobky z nich' },
    { id: 5, name: 'Podzemnice olejná (arašídy)' },
    { id: 6, name: 'Sójové boby (sója)' },
    { id: 7, name: 'Mléko a výrobky z něj' },
    { id: 8, name: 'Skořápkové plody (ořechy)' },
    { id: 9, name: 'Celer a výrobky z něj' },
    { id: 10, name: 'Hořčice a výrobky z ní' },
    { id: 11, name: 'Sezamová semena (sezam)' },
    { id: 12, name: 'Oxid siřičitý a siřičitany' },
    { id: 13, name: 'Vlčí bob (lupina)' },
    { id: 14, name: 'Měkkýši a výrobky z nich' }
];

function MenuPage() {
    const [menu, setMenu] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const categoryOrder = [ 'Burgery', 'Speciál Burger', 'Smažený sýr', 'Smažená jídla', 'Jídla z grilu', 'Náš tatarák', 'Předkrmy', 'Přílohy', 'Pivo dle nabídky', 'Víno', 'Nealko nápoje' ];

    useEffect(() => {
        const getMenu = async () => {
            const { data, error } = await supabase.from('menu_items').select('*').order('sort_order', { ascending: true });
            if (error) {
                setError('Nepodařilo se načíst menu.');
                setLoading(false); return;
            }
            const groupedMenu = data.reduce((acc, item) => {
                (acc[item.category] = acc[item.category] || []).push(item);
                return acc;
            }, {});
            setMenu(groupedMenu);
            setLoading(false);
        };
        getMenu();
    }, []);

    if (loading) return <div className="page-container"><p className="container">Načítám menu...</p></div>;
    if (error) return <div className="page-container"><p className="container">{error}</p></div>;

    return (
        <div className="page-container">
            <div className="container" data-aos="fade-up">
                <div className="text-center mb-5">
                    <h1 className="display-4">Naše Menu</h1>
                    <p className="lead text-muted">Vše připravujeme z čerstvých surovin.</p>
                </div>

                {categoryOrder.map((category) => {
                    const items = menu[category];
                    if (!items) return null;
                    return (
                        <div key={category} className="mb-5">
                            <h2 className="display-5 border-bottom border-primary pb-2 mb-4">{category}</h2>
                            <div className="row">
                                {items.map((item) => (
                                    <div className="col-lg-6 mb-4" key={item.id}>
                                        <div className="d-flex justify-content-between">
                                            <h4 className="h5">{item.name}</h4>
                                            <p className="h5 text-primary fw-bold">{item.price}</p>
                                        </div>
                                        {item.description && <p className="text-muted mb-2">{item.description}</p>}
                                        {item.allergens && item.allergens.length > 0 && (
                                            <div className="allergen-list">
                                                <span className="allergen-prefix">Alergeny:</span>
                                                {item.allergens.join(', ')}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* ===== NOVÁ SEKCE: LEGENDA ALERGENŮ ===== */}
                <div className="mt-5 pt-5 border-top">
                    <h3 className="allergen-legend-title">Seznam alergenů</h3>
                    <ul className="allergen-legend-list list-unstyled column-count-2">
                        {allergenKey.map(allergen => (
                            <li key={allergen.id}><strong>{allergen.id}</strong> - {allergen.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;