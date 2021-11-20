import React, {useRef} from 'react'

const SignIn = () => {
    const userNameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userNameRef.current.value, passwordRef.current.value)
        const fetchGraphQL = async (
            schema,
            variables = {},
          ) => {
            const graphql = JSON.stringify({
              query: schema,
              variables,
            });
            const requestOptions = {
              method: "POST",
              headers: {
                'content-type': 'application/json',
                'x-hasura-admin-secret': `92vDCAHE5MuUIUMtkNUQsCB7Hv9g30EGiyarlYsX9HvAOGOBrS2I2KBwyIanimSU`,
              },
              body: graphql,
            };
            const database_url = "https://accurate-goshawk-85.hasura.app/v1/graphql";
            const res = await fetch(database_url, requestOptions).then((res) =>
              res.json()
            );
            
            return res;
          };
        const SIGN_IN_BUSINESS = `
query MyQuery($password: String = "", $username: String = "") {
  business(where: {password: {_eq: $password}, username: {_eq: $username}}) {
    businessName
    id
  }
}
`
        const signIn = await fetchGraphQL(SIGN_IN_BUSINESS,  {
            "password": "secret",
            "username": "Apu"
          })
         console.log(signIn.data.business)
    }
        

    
    return (
        <div>
            
                <div className="min-h-screen flex items-center justify-center " >
                    <div className="bg-white p-16 rounded shadow-2xl w-2/3  ">
                        <h2 className="mb-3 font-bold text-purple-600">Sign-In</h2>
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

