import React from "react"
import HOCG from "./HocGreen"
import HOCR from "./HocRed"
import Counter from "./Counter"
const Parent=()=>{
    return(
        <div>
        <HOCG data={Counter} />
        <HOCR data={Counter} />
        </div>
    )
}
export default Parent