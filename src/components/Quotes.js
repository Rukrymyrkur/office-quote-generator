import React, {useState, useEffect} from 'react';

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [by, setBy] = useState('');
    const [from, setFrom] = useState('');

    const getQuote = () => {
        let url = `https://frozen-anchorage-84147.herokuapp.com/api/quotes`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let randomNum = Math.floor(Math.random() * data.length);
            let randomQuote = data[randomNum];
            console.log(randomQuote);
            setQuote(randomQuote.sentence);
            setBy(randomQuote.by);
            setFrom(randomQuote.from);
        })
    }

    useEffect(() => {
        getQuote()
    }, []);

        return (
            <div>
                <div className="quote-container">
                    <button onClick={getQuote}>NEW QUOTE</button>
                    <div className="text">{quote}</div>
                    <div className="author">{by}</div>
                    <div className="from">{from}</div>
                </div>
            </div>
        )
}

export default Quotes;