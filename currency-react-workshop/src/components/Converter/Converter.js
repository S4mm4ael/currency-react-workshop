import styles from './Coverter.module.css';

export function Converter(){
    return (
        <form>
            <label>
                <p>Сумма в рублях</p>
                <input type="number" name="rub" min="0" step="1"></input>
            </label>
            <label>
                <p>Сумма в долларах</p>
                <input type="number" name="usd" min="0" step="1"></input>
            </label>
        </form>
    );
}