function defualtExportFn() {
  console.log('Default Exports : export default');
}

// 하나의 파일에 하나의 모듈만 export default할 수 있다.
// 외부에서 Default Exports을 사용할 때, 지정해준 이름을 사용해야 한다.
export default defualtExportFn;