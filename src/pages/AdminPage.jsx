// src/pages/AdminPage.jsx
import { useState, useEffect } from 'react';
import supabase from '../supabaseClient.js'; // Náš Supabase klient

function AdminPage() {
    // Vytvoříme stav pro uložení pole rezervací
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect se spustí jednou po načtení komponenty
    useEffect(() => {
        // Funkce pro načtení dat
        const getReservations = async () => {
            const { data, error } = await supabase
                .from('reservations') // Z tabulky 'reservations'
                .select('*') // Vyber všechny sloupce
                .order('date', { ascending: false }); // Seřaď je od nejnovějších

            if (error) {
                console.error('Chyba při načítání rezervací:', error);
                setError('Nepodařilo se načíst data.');
            } else {
                setReservations(data);
            }
            setLoading(false);
        };

        getReservations(); // Zavoláme funkci
    }, []); // Prázdné pole znamená, že se efekt spustí jen jednou

    if (loading) return <p className="container mt-4">Načítám rezervace...</p>;
    if (error) return <p className="container mt-4">{error}</p>;

    return (
        <div className="container mt-4">
            <h1>Administrace Rezervací</h1>
            <table className="table table-striped table-hover mt-4">
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Čas</th>
                        <th>Jméno</th>
                        <th>Počet hostů</th>
                        <th>Kontakt</th>
                        <th>Stav</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{new Date(reservation.date).toLocaleDateString('cs-CZ')}</td>
                            <td>{reservation.time.substring(0, 5)}</td>
                            <td>{reservation.name}</td>
                            <td>{reservation.guest_count}</td>
                            <td>{reservation.email}<br/>{reservation.phone}</td>
                            <td>
                                <span className={`badge fs-6 ${reservation.status === 'confirmed' ? 'bg-success' : reservation.status === 'cancelled' ? 'bg-danger' : 'bg-warning'}`}>
                                    {reservation.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;