const baseURL = "http://localhost:3001/admins?userName=";

export const adminLogin = async (userName , passwordIn) => {
    let loggedIn = false;
    try{
        let response = await fetch(`${baseURL}${userName}`);
        let jsonRes = await response.json();
        if (jsonRes[0].password === passwordIn){
            loggedIn = true;
        }
    }
    catch(err){
        console.log(err)
    }
    return loggedIn
}