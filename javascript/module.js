export function firstModule() {
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