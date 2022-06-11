function defualtExportFn() {
  console.log('Namespace Default Exports : export default');
}

function exportNamedFn1() {
  console.log('Namespace Named Exports 1 : export');
}

function exportNamedFn2() {
  console.log('Namespace Named Exports 2 : export');
}

// Default Exports와 Named Exports를 namespace 하나로 묶어 사용할 수 있다.
export default defualtExportFn;
export { exportNamedFn1, exportNamedFn2};