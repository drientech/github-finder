import React, { useContext } from 'react'
import UserItem from './Useritem';
import Sppiner from '../layout/Sppiner';
import GithubContext from '../../context/github/githubContext';
 


const Users = ()=> {
const githubContext = useContext(GithubContext);

const {loading ,users} = githubContext;
    
    const userStyle ={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'1rem'
    }

 

   if(loading){
       return <Sppiner />;
   }
   else{
    return (
        <div style={userStyle}>
            {users.map(user =>(
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
   }

 
       

    
    
}

export default Users;
