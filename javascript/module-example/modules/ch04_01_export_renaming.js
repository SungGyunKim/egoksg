function defualtExportFn() {
  console.log('Rename Default Exports : export default');
}

function exportNamedFn1() {
  console.log('Rename Named Exports 1 : export');
}

function exportNamedFn2() {
  console.log('Rename Named Exports 2 : export');
}

// Default Exports와 Named Exports의 이름을 변경하여 내보낼 수 있다.
const renameDefaultExportFn = defualtExportFn;
export default renameDefaultExportFn;
export { exportNamedFn1 as renameExportNamedFn1, exportNamedFn2 as renameExportNamedFn2};