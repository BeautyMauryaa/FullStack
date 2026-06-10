const { resolve } = require("node:dns");

async function fetchData(shouldfail){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(shouldfail){
            reject(new Error("data fetch failed"));
        }else{
            resolve("data fetch success");
        }
    },1000);
  });
}


async function main(){
    try{
        const data=await fetchData(false);
        console.log("success",data);

        const fail=await fetchData(true);
        console.log("will not run");
    }

    catch(err){
        console.log("err: ",err.message);
    }finally{
        console.log("finally always run");
    }
}