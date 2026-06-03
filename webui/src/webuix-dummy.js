export function wrapInputStream(stream) {
    return Promise.resolve({
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0))
    });
}
