import { plantList } from "../datas/plantList"
import "../Styles/ShoppingList.css"


// function ShoppingList() {
//     return (
//         <ul>
//             {plantList.map(
//                 (plant, index) => (                             //key doit etre unique donc mettre
//                 <li key={`${plant}-${index}`}>{ plant }</li>    // le nom + l'index de la ligne
//                 ))}                                             
//         </ul>
//     )
// }
function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (           //installer emojisense
					<li key={cat}>{cat}</li>         //(windows) ctrl + i pour afficher liste emoji
				))}
			</ul>
			<ul className="lmj-plant-list">
				{plantList.map((plant) => (
					<li key={plant.id} className="lmj-plant-item">
                        {plant.name}
                        {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                    </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList

