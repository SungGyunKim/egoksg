function defualtExportFn() {
  console.log('Rename Default Exports : export default');
}

function exportNamdeFn1() {
  console.log('Rename Named Exports 1 : export');
}

function exportNamdeFn2() {
  console.log('Rename Named Exports 2 : export');
}

// Default Exports와 Named Exports를 사용하는 곳에서 변경할 수 있다.
export default defualtExportFn;
export { exportNamdeFn1, exportNamdeFn2};