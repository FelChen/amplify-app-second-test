import { useEffect } from "react";
import { RESOURCE_TYPES } from "../../enum/enums";



export default function ResourceBar({ maxNum = 0, currentNum, type }) {
    
    useEffect(() => {
        // console.log("MOUNTED");
    },[]);
    const renderSwitch = (param) => {
        switch (param) {
            case RESOURCE_TYPES.Health:
                break;
            case RESOURCE_TYPES.TemporaryHealth:
                break;
            case RESOURCE_TYPES.Mana:
                break;
            case RESOURCE_TYPES.Armor:
                break;
            default:
                break;
        }
    };
    // const Parentdiv = {
    //     height: 30,
    //     width: '100%',
    //     backgroundColor: 'whitesmoke',
    //     borderRadius: 40,
    //     margin: 50
    //   }
     
    //   const Childdiv = {
    //     height: '100%',
    //     width: `${100*currentNum/maxNum}%`,
    //     backgroundColor: "green",
    //    borderRadius:40,
    //     textAlign: 'right'
    //   }
     
    //   const progresstext = {
    //     padding: 10,
    //     color: 'black',
    //     fontWeight: 900
    //   }
    return (
        <div>
            {renderSwitch(type)}

            {type}: {currentNum} / {maxNum}
            {/* <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${100*currentNum/maxNum}%`}</span>
      </div>
    </div> */}
        </div>
    );
}