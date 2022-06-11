function defualtExportFn() {
  console.log('Rename Default Exports : export default');
}

function exportNamedFn1() {
  console.log('Rename Named Exports 1 : export');
}

function exportNamedFn2() {
  console.log('Rename Named Exports 2 : export');
}

// Default Exports와 Named Exports를 사용하는 곳에서 변경할 수 있다.
export default defualtExportFn;
export { exportNamedFn1, exportNamedFn2};