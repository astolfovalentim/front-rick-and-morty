const validations = {
    email:(event)=>{
        event.preventDefault();
        let email = event.target.value;
        let className = event.target.className;
        if(className.includes("inputError")){
            className = className.replace(" inputError","");
        }
        if(className.includes("inputOk")){
            className = className.replace(" inputOk","");
        }
        if(email.includes('@') && email.substr((email.length-4),(email.length))==='.com'){
            if(!className.includes('inputOk')){
                event.target.className=className + " inputOk";
            }
        }else{
            if(!className.includes('inputError')){
                event.target.className=className + " inputError";
            }
        }
    }
}

export default validations;