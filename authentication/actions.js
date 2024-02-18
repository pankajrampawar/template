import axios from 'axios'
import Cookies from 'js-cookie';


export const  signup=async (user)=>{

try{
    console.log("user",user);
    const response=await axios.post("http://localhost:8000/api/v1/user/signup",user,{
        withCredentials:true,
    }  );
    console.log("response",response);


    if(response.headers['set-cookie']){
        
        const cookiesFromResponse = response.headers['set-cookie'];

        cookiesFromResponse.forEach(cookie => {
            const [cookieName, cookieValue] = cookie.split(';')[0].split('=');
            Cookies.set(cookieName,cookieValue,{path:"/",sameSite:"None",secure:true});
        });
          }
          console.log("signup response",response);
          localStorage.setItem('user', JSON.stringify(response.data.user))

          if(response)return {status:true,user:response.data.user};
}
catch(err){
    console.log("error in ",err);
    return {status:false};
}

}


export const login=async(user)=>{
    try {

    const response = await axios.post("http://localhost:8000/api/v1/user/signin", 
    user ,
    {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    }
);


if (response.headers['set-cookie']) {
   const cookiesFromResponse = response.headers['set-cookie'];

   cookiesFromResponse.forEach(cookie => {
       const [cookieName, cookieValue] = cookie.split(';')[0].split('=');
       Cookies.set(cookieName, cookieValue, { path: '/' , sameSite: 'None', secure: true });
   });
}

localStorage.setItem('user', JSON.stringify(response.data.user))

return { status: true, user: response.data.user };
} catch (error) {
console.log("error logging in", error);
alert(error)
return {status : false };
}
}

export const checkUserStatus = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/user/userStatus", {
            withCredentials: true,
        });

        if (response.data.userStatus) {
            return true
        }
        return false
    } catch (error) {
        console.log("some error occured in action")
        return false;
    }
}