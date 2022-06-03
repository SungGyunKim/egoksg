function exportNamdeFn1() {
  console.log('Named Exports 1 : export');
}

function exportNamdeFn2() {
  console.log('Named Exports 2 : export');
}

// 하나의 파일에 이름이 정해진 여러 개의 모듈 내보낼 수 있다.
export { exportNamdeFn1, exportNamdeFn2 };