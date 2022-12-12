import { useState } from 'react'


function QuestionForm () {
	const [inputValue, setInputValue] = useState("Posez votre question")
	return (
		<div>
			<textarea
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)} //permet de controler la valeur de l'input, par la suite pouvoir interdire l'usage de certain mot ou autre condition
			/>
             <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
		</div>
	)
}

export default QuestionForm

//exemple : 
// const = isInputError = input.includes('f') 			(ici on interdit l'utilisation de 'f')
// {isInputError && (
// 	<div> 🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici. </div>   (ici on affiche un msg en fonction du booleen)
// )}

// il faudra ensuite changer la fonction callback 
// on change ={(e) => checkValue(e.target.value)} (permet de verifier la valeur garder en memoire suivant les conditions précédentes)