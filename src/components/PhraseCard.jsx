import "./styles/PhraseCard.css"
import {  } from "module";

const PhraseCard = ({phraseRandom}) => {
//console.log(phraseRandom)

    const {phrase} = phraseRandom

  return (
    <p className="card__phrase">{phrase}</p>
  )
}

export default PhraseCard