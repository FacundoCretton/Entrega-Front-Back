import React from "react"
import { LayoutStyled } from "./LayoutStyled"


const Layout =({children})=>{

    return(
        <LayoutStyled> 
            {children}
        </LayoutStyled>
    )
}


export default Layout