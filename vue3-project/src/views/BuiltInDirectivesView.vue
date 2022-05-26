<script setup>
import ParentComponent from "@/components/ParentComponent.vue";
</script>

<template>
  <div>
    <!-- 
        v-text
            Update the element's text content.
     -->
    <div v-text="vText"></div>
    <div>{{ vText }}</div>
    <!-- 
        v-html
            Update the element's innerHTML.
     -->
    <div v-html="vHtml"></div>
    <!-- 
        v-show
     -->
    <div v-show="vShow">vShow</div>
    <!-- 
        v-if, v-else-if, v-else
            
     -->
    <div v-if="vIf">vIf</div>
    <div v-else-if="vElseIf">vElseIf</div>
    <div v-else>vElse</div>
    <!-- 
      v-for
     -->
    <div v-for="(item, index) in vForList" v-bind:key="index">
      {{ "vForList - " + index + ", " + item }}
    </div>
    <div v-for="item in vForList" :key="item">
      {{ "vForList - " + item }}
    </div>
    <div v-for="(value, key) in vForObject" v-bind:key="key">
      {{ "vForObject - " + key + ", " + value }}
    </div>
    <div v-for="value in vForObject" :key="value">
      {{ "vForObject - " + value }}
    </div>

    <br />

    <!-- 
      event
     -->
    <button v-on:click="doThis('basic event handler', $event)">
      method handler1
    </button>
    <button v-on:click="doThis">method handler2</button>
    <button @click="doThis('shorthand event handler')">@:click</button>
    <button @[dynamicEevent]="doThis('dynamic event haddler')">@:click</button>
    <button @click.stop="doThis('stop propagation')">@click.stop</button>
    <button @click.stop.prevent="doThis('chain modifiers')">
      @click.stop.prevent
    </button>
    <button @:click.once="doThis('click once')">v-on:click.once</button>
    <button @="{ mousedown: doThis, mouseup: doThat }">object syntax</button>

    <br />

    <!-- v-bind : basic binding -->
    <img v-bind:src="imgUrl" alt="예시 이미지" />
    <img :[dynamicAttribute]="imgUrl" alt="예시 이미지" />
    <img :="{ src: imgUrl, alt: '예시 이미지' }" />
    <img :="{ src: imgUrl, alt: '예시 이미지' }" :disabled="isDisabled" />
    <img :="objectOfAttrs" />
    <!-- v-bind : class binding -->
    <div :class="{ red: isRed }">class binding</div>
    <div :class="[classA, classB]">class binding</div>
    <div :class="[classA, { classB: isB, classC: isC }]">class binding</div>
    <!-- v-bind : style binding -->
    <div :style="{ fontSize: size + 'px' }">style binding</div>
    <div :style="[styleObjectA, styleObjectB]">style binding</div>
    <ParentComponent></ParentComponent>

    <br />

    <input type="text" v-model="vText" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      vText: "vText",
      vHtml: "<span>vHtml</span>",
      vShow: true,
      vIf: false,
      vElseIf: false,
      vForList: ["A", "B", "C"],
      vForObject: {
        A: 1,
        B: 2,
        C: 3,
      },
      dynamicEevent: "click",
      imgUrl: "https://via.placeholder.com/150",
      dynamicAttribute: "src",
      isDisabled: true,
      objectOfAttrs: {
        src: "https://via.placeholder.com/150",
        alt: "예시 이미지",
        disabled: false,
      },
      isRed: true,
      classA: "classA",
      classB: "classB",
      isB: true,
      isC: true,
      size: 20,
      styleObjectA: {
        fontSize: "20px",
      },
      styleObjectB: {
        color: "red",
      },
      someThing: {
        A: 1,
        B: 2,
      },
    };
  },
  methods: {
    doThis(msg, event) {
      console.log("msg : ", msg, ", event : ", event);
    },
    doThat(msg, event) {
      console.log("msg : ", msg, ", event : ", event);
    },
  },
};
</script>

<style>
.red {
  color: red;
}

.classA {
  color: red;
}

.classB {
  background-color: beige;
}

.classC {
  font-weight: bold;
}
</style>
