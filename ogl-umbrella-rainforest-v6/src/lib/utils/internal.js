function internal(wm, key, value) {
    if (wm.has(key)) {
        return wm.get(key);
    } else {
        wm.set(key, value);
        return wm.get(key)
    }
}
export { internal };
