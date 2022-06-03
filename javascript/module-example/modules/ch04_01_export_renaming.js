function defualtExportFn() {
  console.log('Rename Default Exports : export default');
}

function exportNamdeFn1() {
  console.log('Rename Named Exports 1 : export');
}

function exportNamdeFn2() {
  console.log('Rename Named Exports 2 : export');
}

// Default Exports와 Named Exports의 이름을 변경하여 내보낼 수 있다.
const renameDefualtExportFn = defualtExportFn;
export default renameDefualtExportFn;
export { exportNamdeFn1 as renameExportNamdeFn1, exportNamdeFn2 as renameExportNamdeFn2};