import { Api } from "../api/api";
const verifyAuth = ()=>{
    if(!Api.keyJwt){
        console.log('false');
        return false;
    }else{
        return true;
    }
};

export default verifyAuth;