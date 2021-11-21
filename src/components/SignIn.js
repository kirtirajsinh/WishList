import React, {useRef} from 'react'
import { fetchGraphQL } from '../helperFunctions'
import { SIGN_IN_BUSINESS } from '../schemas'
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
    const userNameRef = useRef()
    const passwordRef = useRef()
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const businessRaw = await fetchGraphQL(SIGN_IN_BUSINESS, {
            username: userNameRef.current.value,
            password: passwordRef.current.value
        })
        console.log(businessRaw);
        console.log(businessRaw.data.business[0])
        if (businessRaw.data) {
          props.setBusiness(businessRaw.data.business[0])
          navigate("/dashboard")
        }
    }
        

    
    return (
        <div>
            
                <div className="min-h-screen flex items-center justify-center " >
                    <div className="bg-white p-16 rounded shadow-2xl w-2/3  ">
                        <h2 style={{fontSize:"30px"}} className="mb-3 font-bold text-purple-600">Wishlist</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                    <label htmlFor="userName">userName:</label>
                    <input type="userName" id="userName" ref={userNameRef} placeholder="userName" className=" mb-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-2"/>
                    </div>
                    <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" ref={passwordRef} placeholder="Password" className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-2"/>
                   </div>
                    <button type="submit">Sign-In</button>
                    </form>
                </div>
                </div>
            
        </div>
    )
}

export default SignIn

