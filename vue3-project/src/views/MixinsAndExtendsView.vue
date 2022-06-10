<template>
  <div>
    <ExtendsAndExtendsComponent01></ExtendsAndExtendsComponent01>
    <ExtendsAndExtendsComponent02></ExtendsAndExtendsComponent02>
    <ExtendsAndExtendsComponent03></ExtendsAndExtendsComponent03>
    <ExtendsAndExtendsComponent04></ExtendsAndExtendsComponent04>
    <ExtendsAndExtendsComponent05></ExtendsAndExtendsComponent05>
  </div>
</template>

<script>
import ExtendsAndExtendsComponent01 from "@/components/ExtendsAndExtendsComponent01.vue";
import ExtendsAndExtendsComponent02 from "@/components/ExtendsAndExtendsComponent02.vue";
import ExtendsAndExtendsComponent03 from "@/components/ExtendsAndExtendsComponent03.vue";
import ExtendsAndExtendsComponent04 from "@/components/ExtendsAndExtendsComponent04.vue";
import ExtendsAndExtendsComponent05 from "@/components/ExtendsAndExtendsComponent05.vue";

export default {
  /*
    공통 특징
      - 각 컴포넌트의 <style scoped />에 대해서 각자 적용된다. <head /> 참고하세요.
      - 각 컴포넌트의 <style />에 대해서 전역으로 적용된다. <head /> 참고하세요.
      - data, method 등은 부모 컴포넌트에서 해당 컴포넌트로 병합된다.
      - lifecycle hook은 부모 컴포넌트에서 해당 컴포넌트 순으로 호출된다.
  */
  components: {
    ExtendsAndExtendsComponent01, // base01
    ExtendsAndExtendsComponent02, // base02
    /*
      extends 특징
        - extends 대상을 하나만 지정할 수 있다.
        - 해당 컴포넌트의 <template />가 있다면 해당 <template />을 사용하고
          해당 컴포넌트의 <template />가 없다면 부모 컴포넌트의 <template />을 사용한다.
    */
    ExtendsAndExtendsComponent03, // comp extends base01
    /*
      mixins 특징
        - mixins 대상을 하나 이상을 지정할 수 있다.
        - 부모 컴포넌트의 <template /> 무시하고 해당 컴포넌트의 <template />을 사용한다.
        - 부모 컴포넌트가 여러 개일 경우, lifecycle hook은 순차적으로 호출된다.
        - app.mixin()을 통해 모든 컴포넌트에 적용시킬 수 있다.
    */
    ExtendsAndExtendsComponent04, // comp mixins [base01, base02]
    /*
      extends and mixins 특징
        - lifecycle hook의 호출 순서는 extends 컴포넌틑 > mixins 컴포넌트 > 해당 컴포넌트
    */
    ExtendsAndExtendsComponent05, // comp extends base01 and mixins [base02]
  },
};
</script>
