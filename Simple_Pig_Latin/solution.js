const str = 'Pig latin is cool!';

function pigIt(str) {
    const pl = 'ay';
    let arr = str.split(' ');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split('');
        
        if (/^[A-Za-z]+$/.test(arr[i])) {
            let firstLtr = word.splice(0, 1);
            word.push(firstLtr[0] + pl);
        }

        result.push(word.join(''));
    }

    return result.join(' ');
}

console.log(pigIt(str));