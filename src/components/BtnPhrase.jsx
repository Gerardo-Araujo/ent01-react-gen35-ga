

import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from "../utils/phrases.json"
import arrImages from "../utils/arrImages.json"
import './styles/BtnPhrase.css'


const BtnPhrase = ({setPrhaseRandom, setImageSelected}    ) => {

    const handleClick = () => {
        const phrase = getRandomFromArray(phrases)
        setPrhaseRandom(phrase)

        const background = getRandomFromArray(arrImages)
        setImageSelected(background)
    }
  return (
    <button className="btn__Phrase" onClick={handleClick}>Probar mi suerte</button>
  )
}

export default BtnPhrase