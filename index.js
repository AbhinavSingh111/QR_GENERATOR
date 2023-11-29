// step 1 : getting input from user
// step 2 : turn the input to qr image
import inquirer from 'inquirer';
import  qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([
    {
        message:"Paste/type your URL",
        name:"URL"
    }
])
.then((answers)=>{
    const url = answers.URL;
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr.png'));
    fs.writeFile("url.txt",url,'utf-8',(err)=>{
        if(err) throw err;
        console.log("url recorded");
    })
})
.catch((error)=>{
    if(error.isTtyError)
    {console.log("Prompt could not be rendered in the current env");}
else{
    console.log("Error occured , retry.");
}});