import { quotes } from './quotes';

export function selectRandomQuote() {
    const randomIndex= Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex]
}
