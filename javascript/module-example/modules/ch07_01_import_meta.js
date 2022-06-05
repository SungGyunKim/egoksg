const url = new URL(import.meta.url);

// 모듈 호출 정보
console.log("Import info - import.meta : ", import.meta);
console.log("Import info - url : ", url);
console.log("Import info - url's param : ", url.searchParams.toString());
console.log("Import info - url's hash : ", url.hash);