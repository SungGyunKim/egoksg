function defualtExportFn() {
  console.log('Default Exports : export default');
}

function exportNamedFn1() {
  console.log('Named Exports 1 : export');
}

function exportNamedFn2() {
  console.log('Named Exports 2 : export');
}

// Default Exports와 Named Exports를 동시에 사용할 수 있다.
export default defualtExportFn;
export { exportNamedFn1, exportNamedFn2 };