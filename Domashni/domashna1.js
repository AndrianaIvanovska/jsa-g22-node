const fs = require('fs');

// fs.writeFile('hello.txt','Hello', (err)=>{
//     if(err) return console.log(err);
//     console.log('нов запис!');
// });

const fileWrite = (filename,data) => {
    return new Promise((success,fail)=>{
        fs.writeFile(filename,data, (err)=>{
            if(err) return fail(err);
            return success();

    });
});
};

fileWrite('hello1.txt','Нов фајл со запис од promise!')
.then(()=>{
    console.log('записот е успешен!');
})
.catch(err=>{
    console.log(err);
});

const fileRead = (filename,encoding) => {
    return new Promise((success,fail)=>{
        fs.readFile(filename,encoding, (err,data)=>{
            if(err) return fail(err);
            return success(data);

    });
});
};

fileRead('hello1.txt','utf8')
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
});

const fileRename = (filename,newfilename) => {
    return new Promise((success,fail)=>{
        fs.rename(filename,newfilename, (err)=>{
            if(err) return fail(err);
            return success();

    });
});
};


fileRename('hello1.txt','bye.txt')
.then(()=>{
    console.log('Името на датотеката е променето');
})
.catch(err=>{
    console.log(err);
});