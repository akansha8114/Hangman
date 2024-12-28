//if u open the hungman game niche shuffled letters show hote h who act like a button this file is for that function


const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({ text, guessedLetters, onLetterClick }) {

    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter) {
        if(guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return 'bg-blue-500';
        }
    }

    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);  //?. -> optional chaining: if onLetterClick is a function , then call it otherwise just return undefined
    }

    const buttons = ALPHABETS.map(letter => {
        return (
            <button
                key={`button-${letter}`}
                value={letter}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                { letter }
            </button>
        );
    });

    return (
        <>
            { buttons }
        </>
    )

}

export default LetterButtons;