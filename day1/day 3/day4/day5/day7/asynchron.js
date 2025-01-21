// // window.setTimeout(() => {
// //     console.log("iam set time out");
    
// // }, 6000);
// // window.setInterval(() => {
// //     console.log("iam interval");
    
// // }, 3000);

// function main(m,n){
//     setTimeout(()=>{
//         for(let i = m;i<=n;i++){
//             console.log(i);
            
//         }
//     },2000)
// }
// main(1,10)
// function main(()=>{
//     setInterval(()=>{
//         console.log("asdfghjkl");
        
//     })
// },2000)
let online = window.navigator.onLine

new Promise((resolve,reject) => {
    setTimeout(()=>{
        if (online === true){
            return resolve
        }else{
            return reject
        }
    },5000 )
})
.then(()=>{
    console.log("online");
    
})
.catch(()=>{
    console.log("offline");
    
})