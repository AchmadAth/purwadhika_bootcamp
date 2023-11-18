const tryPromise = new Promise((resolve,reject)=>{
    let isError = false;
    if (!isError) resolve('success');
    else reject('error')
})

tryPromise.then((res)=>console.log(res)).catch((err))