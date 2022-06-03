function exportDefaultFn() {
  console.log('Default Exports : export ~ as default');
}

// 특정 대상을 지정하여 Default Exports로 내보낼 수 있다.
export { exportDefaultFn as default };