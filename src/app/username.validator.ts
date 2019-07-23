import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidator{

    static userNameSpaceValidation(control:AbstractControl):ValidationErrors | null
    {
        var value = <string>control.value;
        if(value.indexOf(' ')>0){
            return { usernameContainsSpace : true };
        }
        return null;
    }

    static userNameShouldBeUnique(control:AbstractControl):Promise<ValidationErrors>{
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                var username =<string> control.value;
                if(username == 'saravanan' ){
                    resolve({usernameShouldBeUnique : true});
                }

                resolve(null);
            },4000);
        });
    }
}