<!--
The enter or leave can be triggered by one of the following:
  - Conditional rendering via v-if
  - Conditional display via v-show
  - Dynamic components toggling via the <component> special element

Transition Classes
  [ 요소 삽입 ]
  v-enter-from    : 요소 삽입을 위한 transition, animation의 시작 css 값. ex) opacity: 0;
  v-enter-to      : 요소 삽입을 위한 transition, animation의 종료 css 값. ex) opacity: 1;
  v-enter-active  : 요소 삽입을 위한 transition, animation의 동작 css 값. ex) transition: opacity 30s ease;

  [ 요소 제거 ]
  v-leave-from    : 요소 제거를 위한 transition, animation의 시작 css 값. ex) opacity: 1;
  v-leave-to      : 요소 제거를 위한 transition, animation의 종료 css 값. ex) opacity: 0;
  v-leave-active  : 요소 제거를 위한 transition, animation의 동작 css 값. ex) transition: opacity 30s ease;
-->
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <!-- Basic -->
    <h3>[ Basic ]</h3>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <!-- Named Transitions(css class의 v-를 커스텀) -->
    <h3>[ Named Transitions ]</h3>
    <Transition name="fade">
      <p v-if="show">hello</p>
    </Transition>
    <h3>[ CSS Transitions ]</h3>
    <!-- CSS Transitions -->
    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>
    <h3>[ CSS Animations ]</h3>
    <!-- CSS Animations -->
    <Transition name="bounce">
      <p v-if="show" style="text-align: center">
        Hello here is some bouncy text!
      </p>
    </Transition>
    <!-- Custom Transition Classes -->
    <h3>[ Custom Transition Classes ]</h3>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show">hello</p>
    </Transition>
    <!--
      Nested Transitions and Explicit Transition Durations
      
      <Transition> 내에 중첩된 element의 transition 혹은 animation이 있다면
      enter 시간과 leave 시간 중 최대 시간을 duration에 넣어 주거나
      { enter: 500, leave: 800 }와 같이 개별적으로 넣을 수도 있다.
    -->
    <h3>[ Nested Transitions and Explicit Transition Durations ]</h3>
    <Transition duration="550" name="nested">
      <div v-if="show" class="outer">
        <div class="inner">Hello</div>
      </div>
    </Transition>
    <!--
        JavaScript Hooks

        javascript로만 transitions할 경우 CSS transitions을 사용하지 않기 위해 css="false"로 바꾼다.
    -->
    <h3>[ JavaScript Hooks ]</h3>
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false"
    >
      <div class="gsap-box" v-if="show"></div>
    </Transition>
    <!-- Reusable Transitions -->
    <h3>[ Reusable Transitions ]</h3>
    <TransitionReusableComponent>
      <div v-if="show">Hello</div>
    </TransitionReusableComponent>

    <!--
      Transition Between Elements
      
      <Transition> 내에 동시에 여러 element를 조작할 때,
      enter & leave가 순차적으로 발생될 수 있도록 mode를 설정할 수 있다.
      mode 옵션은 <Transition> 내에 <component>가 있을때도 사용할 수 있다.
    -->
    <h3>[ Transition Between Elements ]</h3>
    <span style="margin-right: 20px">Click to cycle through states:</span>
    <div class="btn-container">
      <Transition name="slide-up" mode="out-in">
        <button v-if="docState === 'saved'" @click="docState = 'edited'">
          Edit
        </button>
        <button v-else-if="docState === 'edited'" @click="docState = 'editing'">
          Save
        </button>
        <button v-else-if="docState === 'editing'" @click="docState = 'saved'">
          Cancel
        </button>
      </Transition>
    </div>
    <!-- Dynamic Transitions -->
    <h3>[ Dynamic Transitions ]</h3>
    <Transition :name="transitionName">
      <p v-if="show">hello</p>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import TransitionReusableComponent from "@/components/TransitionReusableComponent.vue";

const show = ref(true);
const docState = ref("saved");
const transitionName = ref("fade");

/* JavaScript Hooks */
function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1,
  });
}

function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: "elastic.inOut(2.5, 1)",
    onComplete: done,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: "elastic.inOut(2.5, 1)",
  });
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done,
  });
}
</script>

<style scoped>
/* Basic */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Named Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* CSS Transitions */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* CSS Animations */
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

/* Nested Transitions and Explicit Transition Durations */
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

/* JavaScript Hooks */
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

/* Transition Between Elements */
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

.btn-container button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

<style>
/* Custom Transition Classes */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>
