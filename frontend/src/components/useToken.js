import { useState } from 'react'; 

function useTocken() {

    function getTocken(){
        const userToken = localStorage.getItem('token');
        return userToken && userToken
    }

    const [token, setToken] = useState(getTocken());

    function saveToken(userToken) {
        localStorage.setItem('token', userToken); 
        setToken(useTocken); 
    }; 

    function removeToken() {
        localStorage.removeItem('token'); 
        setToken(null); 
    }

    return {
        setToken: saveToken, 
        token, 
        removeToken
    }
}

export default useTocken; 