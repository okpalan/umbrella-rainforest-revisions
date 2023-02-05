const mixin = function (base, { ...obj }) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            base[key] = obj[key];
        }
    }
    return base;
}
export { mixin };
