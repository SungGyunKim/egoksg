function defualtExportFn() {
  console.log('Namespace Default Exports : export default');
}

function exportNamdeFn1() {
  console.log('Namespace Named Exports 1 : export');
}

function exportNamdeFn2() {
  console.log('Namespace Named Exports 2 : export');
}

// Default Exports와 Named Exports를 namespace 하나로 묶어 사용할 수 있다.
export default defualtExportFn;
export { exportNamdeFn1, exportNamdeFn2};