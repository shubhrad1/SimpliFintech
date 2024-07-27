const getToken = () => {
    return localStorage.getItem('jwtToken');
    
};


export const isAuthenticated = () => {
    const token = getToken();
    if (!token) return false;
    
    else return true;
};
