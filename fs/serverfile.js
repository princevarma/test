//ReadFile
/*
const fs=require('fs');
fs.readFile('file1.html',(error,data)=>{
    if (error){
        console.log("error");
        console.log(error);
    }
    else{
        console.log(data.toString());
    }
});
console.log('terminated');
*/

//writefile
/*
const fs=require('fs');
let content="this is write file content"
fs.writeFile('file2.txt',content,(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("saved")
    }
});
*/

//appendFile
/*
const fs=require('fs');
fs.appendFile('file2.txt',' \n this append content',(err)=>{
    if(err){
        console.log('error'+err);
    }else{
        console.log('saved')
    }
});
*/

//delete

/*
const fs=require('fs');
fs.unlink('file2.txt',(err)=>{
    if(err){
        console.log(err);
        }
        else{
            console.log('deleted')
        }
});
*/
