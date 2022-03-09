import { createContext ,useReducer} from "react";
import githubReducer from "./GithubReducer";

const GithubContext =createContext()

export const GithubProvider =({children}) => {
    const initialState ={
        users: [] ,
        user: {},
        repos: [],
        loading :false
    }
     
    const [state , dispatch] =useReducer(githubReducer , initialState)
    
//clear users from state
//  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})
//SET LOADING
    // const setLoading = () => dispatch ({type: 'SET_LOADING'})
    return <GithubContext.Provider value= {{
       ...state,
       dispatch,
        
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext