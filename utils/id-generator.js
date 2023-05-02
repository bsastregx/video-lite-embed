export default function randomId() {
    /* four digits random id */
    return `a${Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)}`;
}
//# sourceMappingURL=id-generator.js.map