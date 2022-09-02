import Card from "./shared/Card"
import {FaTimes} from "react-icons/fa"

function FeedbItem({item, handleDelet}) {


  return (
    <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>handleDelet(item.id)} className="close">
              <FaTimes color="purple"/>
            </button>
            <div className="text-display">{item.text} </div>
    </Card>
  )
}

export default  FeedbItem;