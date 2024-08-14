
// import React, { useState } from 'react'

// const Signin = () => {
//     const [signedin, setSignedin] = useState(false)

//     const handleSignin = () => {
//         setSignedin(true)
//     }

//     const handleSignout = () => {
//         setSignedin(false)
//     }
//   return (
//          <div>
//            { signedin ? ( 
//         <div>
//             <button type="button" onClick={handleSignout}>Sign Out</button>
//             <p>Welcome back, good to see you in here</p>
//         </div>) :

//         (<div>
//             <button type="button"onClick={handleSignin}>Sign In</button>
//             <p>Please Sign in</p>
//         </div>)
//            }
//         </div>
//   )
// }

// export default Signin;

import React, { useState } from "react";

const Handlesubmit = () => {
    const [Sign, setSign] = useState(false)

    const signout = () => {
        setSign(true);
    };

    const signin = () => {
        setSign(false);
    };

    return (
        <div>
            {Sign ? (
                <div>
                    <button onClick={signin}>signout</button>
                    <p>welcome</p>
                </div>
            ) : (
                <div>
                    <button onClick={signout}>sinin</button>
                    <p>go back</p>
                </div>
            )
            }
        </div>
    )
}
export default Handlesubmit;