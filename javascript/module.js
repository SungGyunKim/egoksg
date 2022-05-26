export function firstModule() {
    console.log("[firstModule] import.meta : ", import.meta)
    console.log("[firstModule] import.meta.url : ", import.meta.url)
    console.log("[firstModule] ", new URL("./src", import.meta.url))
    return "called firstModule!!!";
};

export function secondModule() {
    return "called secondModule!!!";
};

export let sharedModule = (function() {
    console.log("sharedModule loaded");

    return {
        name: 'John'
    };
})();

export default function() {
    return "called default module!!!";
};