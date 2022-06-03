// ch03_01_export_default_named.js, ch04_02_import_renaming.js, ch05_01_import_namespace.js
// 하나의 파일로 호출로 세 가지 파일에 있는 모듈들을 통합(aggregating)하여 사용하려고 한다.
// 그런데 공통된 Default Exports와 Named Exports가 있어서 이름을 수정하고 내보내야(re-exporting) 한다.

// 방법1
import {
  default as firsetDefualtExportFn,
  exportNamdeFn1 as firsetExportNamdeFn1,
  exportNamdeFn2 as firsetExportNamdeFn2
} from './ch03_01_export_default_named.js';
export {
  firsetDefualtExportFn,
  firsetExportNamdeFn1,
  firsetExportNamdeFn2
};

// 방법2
export {
  default as secondDefualtExportFn,
  exportNamdeFn1 as secondExportNamdeFn1,
  exportNamdeFn2 as secondExportNamdeFn2
} from './ch04_02_import_renaming.js';

// 방법3
export * from './ch05_01_import_namespace.js'; // ※ default는 포함되지 않는다.
export { default as default } from './ch05_01_import_namespace.js';