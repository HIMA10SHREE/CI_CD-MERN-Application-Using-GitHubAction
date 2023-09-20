import {exec} from "child_process"
import path from "path"
import fs from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputpath=path.join(__dirname,"outputs")
if(!fs.existsSync(outputpath)){
    fs.mkdirSync(outputpath,{recursive:true})
}

const executeCpp=(filepath)=>{
    const jobId=path.basename(filepath).split(".")[0];
    const outpath=path.join(outputpath,`${jobId}.exe`)
    return new Promise((resolve,reject)=>{
       exec(
        `g++ ${filepath} -o ${outpath} && cd ${outputpath} && .\\${jobId}.exe`,
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

export default executeCpp