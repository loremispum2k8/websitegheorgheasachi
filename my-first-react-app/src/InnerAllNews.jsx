import { useState, useEffect, NavLink, useRef} from 'react'
import { useParams } from 'react-router'

function InnerAllNews(){
    const {page} = useParams()

    return(
        <div>
            <h1>page {page}</h1>
        </div>
    )
}

export default InnerAllNews