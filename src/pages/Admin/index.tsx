import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"

export default function Admin(){
    const params = useParams()
    if(params.user !== 'banana'){
        return <Navigate to='/'/>
    }
    return (
        <h1>Area admin</h1>
    )
}