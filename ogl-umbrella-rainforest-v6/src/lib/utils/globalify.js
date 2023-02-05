
function globalify(globExports) {
    var globals = globExports.globals;
    var exports = globExports.exports;
    var ignoreMissing = globExports.ignoreMissing;
    var silence = globExports.silence;

    if (globals) {
        globals.forEach(function (name) {
            if (name in global) {
                exports[name] = global[name];
            } else if (!silence && !ignoreMissing) {
                throw new Error('"' + name + '" is not present in global scope.');
            }
        });
    }

}

export { globalify };

