export default {
    setMultipleAttributes(target, objectSeq) {
        Object.keys(objectSeq).forEach((attrName) => {
            target.setAttribute(attrName, objectSeq[attrName])
        });
    }
}
