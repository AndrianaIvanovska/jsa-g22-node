const fs = require('fs'); //vcituvanje na paket/modul za rabota so filesystem - fajlovi i direktoriumi

// fs.writeFile(
// 'data.txt', //fajlot kade ke se zapise
//  'HELLO WORLD...Node...:(', //sto ke bide zapisano vo fajlot
//  (err)=>{ //funkcijata koja ke se izvrsi otkako ke se zavrsi zapisot
//     if(err) return console.log(err);
//     console.log('zapisot e napraven!')

// });

fs.writeFile('data.txt','HELLO WORLD....Node...:(', (err)=>{
    if(err) return console.log(err);
    console.log('записот е направен!');
});

// PROMISE

//чекор 1

//const fileWrite = () => {

//}

// чекор 2

// const fileWrite = () =>{
//     return new Promise();
// };

// чекор 3

// const fileWrite = () =>{
//     return new Promise(()=>{

//     });
// };


// чекор 4

// const fileWrite = () => {
//     return new Promise((success,fail)=>{

//     });
// };

// чекор 5

// const fileWrite = () => {
//     return new Promise((success,fail)=>{
//         fs.writeFile('data.txt','HELLO WORLD....Node...:(', (err)=>{
//             if(err) return console.log(err);
//             console.log('записот е направен!');

//     });
// });
// };

// чекор 6

// const fileWrite = () => {
//     return new Promise((success,fail)=>{
//         fs.writeFile('data.txt','HELLO WORLD....Node...:(', (err)=>{
//             if(err) return fail(err);
//             return success();

//     });
// });
// };

// чекор 7 

const fileWrite = (filename,data) => {
    return new Promise((success,fail)=>{
        fs.writeFile(filename,data, (err)=>{
            if(err) return fail(err);
            return success();

    });
});
};



fileWrite('data1.txt','Нов фајл со запис од promise!')
.then(()=>{
    console.log('записот е успешен! (во новиот фајл)')
})
.catch(err=>{
    console.log(err);
});

// (async ()=>{
//     try{
//         await fileWrite('data1.txt','Нов фајл со запис од promise!')
//         await fileWrite('data1.txt','Нов фајл со запис од promise!')
//         await fileWrite('data1.txt','Нов фајл со запис од promise!')
//     }
//     catch(err){
//         console.log(err);
//     }
// })();

const main = async () => {
    try {
        await fileWrite('data1.txt','Нов фајл со запис од promise!')
        await fileWrite('data1.txt','Нов фајл со запис од promise!')
        await fileWrite('data1.txt','Нов фајл со запис од promise!') 
    }
    catch (err){
        console.log(err);
    }
};

main();
