import {exec} from "child_process"




const executeJava=(filepath)=>{
  return new Promise((resolve,reject)=>{
       exec(
        `javac ${filepath}`,
        (error,stdout,stderr)=>{
        
        if(error){
        reject({error,stderr});
        }

        if(stderr){
            reject(stderr);
        }

        resolve(stdout);

       })
    });
}

export default executeJava