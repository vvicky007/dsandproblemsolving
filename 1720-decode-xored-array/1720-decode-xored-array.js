/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let res = [first];
    let n = encoded.length;
    for (let i = 0; i < n; i++) {
        let tmp = res[res.length - 1] ^ encoded[i];
        res.push(tmp);
    }
    return res;
};