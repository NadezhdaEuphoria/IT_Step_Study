const arr = ["php", "php", "css", "css", "script", "script", "html", "java"];
p1.innerHTML = arr;

function delDuplicate() {
    for (let b in arr) {
        for (let h in arr) {
            if (checkDuplicate(arr[b], arr)) {
                arr.splice(arr[b], 1);
            }
        }
    }
}

function checkDuplicate(value, arr) {
    for (let j of arr) {
        if (j === value)
            return true;
    }
    return false;
}

delDuplicate()


p2.innerHTML = arr;
console.log(arr);