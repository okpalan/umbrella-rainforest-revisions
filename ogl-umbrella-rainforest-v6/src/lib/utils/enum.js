
function Enum(...args) {
    for (let i = 0; i < args.length; i++) {
        this[args[i]] = i;
    }
    Object.freeze(this);
    return this
}

export { Enum };
