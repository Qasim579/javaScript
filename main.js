// var x = 1; {
//     let x = 3;
// }
// console.log(x);

//arrow function

// let sum = (a, b) => a + b; // two variables
// console.log(sum(2, 3));

// let one = number => number + 4; // one variable
// console.log(one(6));

// let no = () => 'no aurguments';
// console.log(no());

// document.addEventListener('click', () => console.log('click'));


class person {
    constructor(name) {
        this.name = name;
    }
    printarrow() {
        setTimeout(() => {
            console.log('arrow' + this.name)
        }, 100)
    }
    withoutarrow() {
        setTimeout(function() {
            console.log('function' + this.name)
        }, 100)
    }
}

let perso = new person('qasim');
perso.printarrow();
perso.withoutarrow();



// main difference is that normal function redifnes this keyword with whatever scopes we call the
// function in while arrow does not do it

// var numbers = [45, 4, 9, 16, 25];
// var txt = "";
// var x;
// for (x of numbers) {
//     txt += [x] + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;



// //promises
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }



// let p = new Promise((resolve, reject) => {
//     let x = 4;
//     if (x == 0) {
//         resolve("ok");
//     } else {
//         reject("rejected");
//     }
// });
// p.then((message) => {
//     myDisplayer(message);
// }).catch((message) => {
//     myDisplayer(message);
// })


// let pr = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("dash.."); }, 3000);
// });
// pr.then((value) => {
//     document.getElementById("yo").innerHTML = value;
// })

const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two ', body: 'this is post two' }
];

function getpost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;
            if (!err) {
                resolve();
            } else {
                reject('Wrong');
            }
        }, 2000);

    });
}



async function init() {
    await createpost({ title: 'post one', body: 'this is post one' });
    getpost();
}
init();