import { IconContext } from "react-icons";


function IconCustom(props){
    return(
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size:`${props.size}` }} >
        <div>
            {props.icon}
        </div>
        </IconContext.Provider>
    );
}

export default IconCustom;