<template>
  <div>
    <h4>[ $props ]</h4>
    <div style="padding-left: 20px">{{ $props }}</div>
    <h4>[ $attrs ]</h4>
    <div style="padding-left: 20px">{{ $attrs }}</div>
    -----------------------------------------------
  </div>
</template>

<script>
export default {
  // 자식 노드에게 non-prop 속성($attr)을 상속하지 않는다.
  inheritAttrs: false,
  /**
   * - props는 부모 컴포넌트에서 해당 컴포넌트로 넘겨질 데이터를 정의하는 곳이다.
   * - 부모 컴포너트에서 props를 접근할 때, kebab-case를 사용하여 접근한다.
   *   ex) <PropsComponent prop-a="10"></PropsComponent>
   * - 부모 컴포넌트에서 Object를 사용하여 여러 개의 prop에 동시 접근이 가능하다.
   *   ex)
   *   const obj = {
   *    propA: 10,
   *    propB: "egoksg"
   *   }
   *
   *   <PropsComponent v-bind="obj"></PropsComponent>
   * - 부모로 부터 받은 props는 변경이 불가능하다.
   */
  props: {
    // Basic type check(`null` and `undefined` values will allow any type)
    propA: Number,
    // Multiple possible types
    propB: [String, Number],
    // Required string
    propC: {
      type: String,
      required: true,
    },
    // Number with a default value
    propD: {
      type: Number,
      default: 100,
    },
    // Object with a default value
    propE: {
      type: Object,
      // type이 Object이거나 Array일 경우, default function의 return 값이 기본값이 된다.
      default(rawProps) {
        console.log("[PropsComponent] propE - rawProps : ", rawProps);
        return { message: "hello" };
      },
    },
    // Custom validator function
    propF: {
      type: String,
      validator(value) {
        // The value must match one of these strings
        return ["success", "warning", "danger"].includes(value);
      },
    },
    // Function with a default value
    propG: {
      type: Function,
      // type이 Function인 경우, default function 자체가 기본값이 된다.
      default() {
        return "Default function";
      },
    },
    // 부모 컴포넌트에서 해당 prop를 넣기만 해도 해당 prop의 값은 true이다.
    // ex) <PropsComponent prop-h></PropsComponent>
    propH: {
      type: Boolean,
    },
    propI: String,
    propIModifiers: { default: () => ({}) },
  },
  setup(props, context) {
    // props나 emits에 정의되어 있지 않는 prop를 non-prop이라고 한다. ex) title, class, style ...
    // <template></template>에서는 $attr를 통해 접근할 수 있다.
    console.log("[PropsComponent] non-prop - ", context.attrs);

    if (props.propIModifiers.capitalize) {
      console.log(
        "[PropsComponent] props.propIModifiers - ",
        props.propIModifiers
      );
    }
  },
};
</script>

<style></style>
