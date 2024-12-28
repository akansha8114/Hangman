//We want this function should return ki jo letter guess nhi kia gya h masked h vo hidden rhe
//or jo guess kr lia gya h vo show ho
import { getMaskedString } from "./MaskingUtility";

function Maskedtext({ text, guessedLetters }) {
    const maskedString = getMaskedString(text, guessedLetters);

    return (
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}

export default Maskedtext;

//chatgpt se smjhlo line by line