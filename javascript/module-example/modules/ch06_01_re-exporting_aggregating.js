// ch03_01_export_default_named.js, ch04_02_import_renaming.js, ch05_01_import_namespace.js
// 하나의 파일로 호출로 세 가지 파일에 있는 모듈들을 통합(aggregating)하여 사용하려고 한다.
// 그런데 공통된 Default Exports와 Named Exports가 있어서 이름을 수정하고 내보내야(re-exporting) 한다.

// 방법1
import {
  default as firstDefaultExportFn,
  exportNamedFn1 as firstDefaultNamedFn1,
  exportNamedFn2 as firstDefaultNamedFn2,
} from "./ch03_01_export_default_named.js";
export { firstDefaultExportFn, firstDefaultNamedFn1, firstDefaultNamedFn2 };

// 방법2
export {
  default as secondDefaultExportFn,
  exportNamedFn1 as secondExportNamedFn1,
  exportNamedFn2 as secondExportNamedFn2,
} from "./ch04_02_import_renaming.js";

// 방법3
export * from "./ch05_01_import_namespace.js"; // ※ default는 포함되지 않는다.
export { default as default } from "./ch05_01_import_namespace.js";
