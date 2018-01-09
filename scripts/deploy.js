const exec = require('child_process').exec;
const fs = require('fs');

process.chdir(__dirname);

let initPromise = Promise.resolve();
if (!fs.existsSync('../master')) {
    fs.mkdirSync('../master');
    initPromise = promiseExec('git init').then(() => {
        return promiseExec('git remote add origin ..');
    }).then(() => {
        return promiseExec('git fetch');
    }).then(() => {
        return promiseExec('git checkout master');
    });
}

process.chdir('../master');

initPromise.then(() => {
    files = fs.readdirSync('.');
    for (const file of files) {
        if (file !== '.git' && file !== '.gitignore') {
            if (fs.lstatSync(file).isDirectory()) {
                rmRfDir(file);
            } else {
                fs.unlinkSync(file);
            }
        }
    }
}).then(() => {
    return promiseExec('cp ../dist/* .');
}).then(() => {
    return promiseExec('git add .');
}).then(() => {
    return promiseExec('git commit -a -m "Deploy '+ new Date().valueOf() +'"');
}).catch((error) => {
    console.error(error);
    process.exit(1);
});


function promiseExec(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(new Error(error));
            } else if (typeof stderr !== 'string') {
                reject(new Error(stderr));
            } else {
                resolve(stdout);
            }
        });
    });
}

function rmRfDir(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file, index) => {
            var curPath = path + '/' + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                rmRfDir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}