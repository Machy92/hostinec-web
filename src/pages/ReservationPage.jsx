// src/pages/ReservationPage.jsx
import React, { useState } from 'react';
import supabase from '../supabaseClient'; // Importujeme našeho klienta

// Funkce se jmenuje ReservationPage, aby seděla do naší navigace
function ReservationPage() {
    // Stavy pro každý input v našem formuláři
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guestCount, setGuestCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Funkce, která se spustí po odeslání formuláře
    const handleSubmit = async (e) => {
        e.preventDefault(); // Zabráníme refreshnutí stránky
        setLoading(true);
        setMessage('');

        // Odešleme data do tabulky "reservations" v Supabase
        const { data, error } = await supabase
            .from('reservations')
            .insert([{
                name: name,
                email: email,
                phone: phone,
                date: date,
                time: time,
                guest_count: guestCount
            }]);

        setLoading(false);

        if (error) {
            console.error('Chyba při vkládání:', error);
            setMessage('Něco se pokazilo. Zkuste to prosím znovu.');
        } else {
            console.log('Rezervace úspěšná:', data);
            setMessage('Děkujeme! Vaše rezervace byla úspěšně odeslána.');
            // Vyčistíme formulář
            setName('');
            setEmail('');
            setPhone('');
            setDate('');
            setTime('');
            setGuestCount(1);
        }
    };

    return (
    <div className="page-container">
      <div className="container">
            <h2>Vytvořit rezervaci</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Jméno a příjmení</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Telefon</label>
                    <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="date" className="form-label">Datum</label>
                        <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="time" className="form-label">Čas</label>
                        <input type="time" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="guestCount" className="form-label">Počet hostů</label>
                        <input type="number" className="form-control" id="guestCount" value={guestCount} min="1" onChange={(e) => setGuestCount(e.target.value)} required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Odesílám...' : 'Rezervovat stůl'}
                </button>
                {message && <div className="alert alert-info mt-3">{message}</div>}
            </form>
        </div>
    </div>

    );
}

export default ReservationPage;