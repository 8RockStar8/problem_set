function isUnique(str) {
    for(let ix = 0; ix < str.length - 1; ++ix){
        for(let jx = ix + 1; jx < str.length; ++jx){
            if(str[ix] == str[jx]){
                return false;
            }
        }
    }
    return true;
}
console.log(isUnique('hello'));
console.log(isUnique('world'));