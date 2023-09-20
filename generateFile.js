import path from "path";
import fs from "fs";
import {v4 as uuid} from 'uuid';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirCodes =path.join(__dirname,'codes')

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true})
};

const generateFile=async(format,content)=>{
    const jobId=uuid();
    const filename=`${jobId}.${format}`
    const filepath=path.join(dirCodes,filename);
    await fs.writeFileSync(filepath,content);
    return filepath;
};

export default generateFile;