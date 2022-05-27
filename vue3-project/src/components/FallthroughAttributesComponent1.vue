<template>
  <div>
    <!-- 자식 컴포넌트의 root element에 자동으로 적용(FallthroughAttributes)되는 속성과 이벤트 -->
    <FallthroughAttributesComponent2
      :id="'component1'"
      :class="['fs24']"
      :style="{ background: 'red' }"
      @click="onOuterClick"
    >
      Basic FallthroughAttributes
    </FallthroughAttributesComponent2>
    <!-- 자식 컴포넌트에서 만든 속성과 이벤트는 자동으로 적용되지 않는다. -->
    <FallthroughAttributesComponent2
      :id="'component2'"
      :class="['fs24']"
      :style="{ background: 'red' }"
      @click="onOuterClick"
      v-bind:custom-prop="'customProp'"
      @custom-event="onCustomEvent"
    >
      Custom Attr & Event not FallthroughAttributes
    </FallthroughAttributesComponent2>
    <!-- 자식 컴포넌트에서 만든 속성과 이벤트는 자동으로 적용되지 않는다. -->
    <FallthroughAttributesComponent3
      :id="'component3'"
      :class="['fs24']"
      :style="{ background: 'red' }"
      @click="onOuterClick"
      v-bind:custom-prop="'customProp'"
      @custom-event="onCustomEvent"
    >
      inheritAttrs : false & v-bind="$attrs" FallthroughAttributes
    </FallthroughAttributesComponent3>
    <br />
  </div>
</template>

<script setup>
import FallthroughAttributesComponent2 from "@/components/FallthroughAttributesComponent2.vue";
import FallthroughAttributesComponent3 from "@/components/FallthroughAttributesComponent3.vue";

function onOuterClick(e) {
  console.log(
    "[FallthroughAttributesComponent2] onOuterClick - e.target",
    e.target
  );
}

function onCustomEvent() {}
</script>

<style>
.fs24 {
  font-size: 24px;
}
</style>