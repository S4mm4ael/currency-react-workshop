import styles from './Quote.module.css';
import { quotes } from './quotes';
import { selectRandomQuote } from './selectRandomQuote';

const defaultQuote = selectRandomQuote(quotes);

export function Quote({quote = defaultQuote}){
    const { author, text } = quote;
    return (<footer className={styles.quote}>
    <blockquote>{text}</blockquote>
    <cite className={styles.author}> - {author}</cite>
    </footer>);
}