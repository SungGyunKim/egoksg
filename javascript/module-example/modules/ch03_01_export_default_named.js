function defualtExportFn() {
  console.log('Default Exports : export default');
}

function exportNamdeFn1() {
  console.log('Named Exports 1 : export');
}

function exportNamdeFn2() {
  console.log('Named Exports 2 : export');
}

// Default Exports와 Named Exports를 동시에 사용할 수 있다.
export default defualtExportFn;
export { exportNamdeFn1, exportNamdeFn2 };