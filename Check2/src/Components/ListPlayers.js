import players from "../players"
import CardPlayer from "./CardPlayer"

const ListPlayer =()=>{
    return(
        <div id="listplayer">
            {
                players.map((el,i,t)=><CardPlayer el={el}/>)
            }
        </div>
    )
}

export default ListPlayer