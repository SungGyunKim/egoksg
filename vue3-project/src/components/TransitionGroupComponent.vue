<template>
  <div>
    <h3>[ Enter / Leave / Move Transitions ]</h3>
    <button @click="insert">insert at random index</button>
    <button @click="reset">reset</button>
    <button @click="shuffle">shuffle</button>
    <TransitionGroup tag="ul" name="fade" class="container">
      <div v-for="item in items" class="item" :key="item">
        {{ item }}
        <button @click="remove(item)">x</button>
      </div>
    </TransitionGroup>
    <h3>[ Staggering List Transitions ]</h3>
    <input v-model="query" />
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li
        v-for="(item, index) in computedList"
        :key="item.msg"
        :data-index="index"
      >
        {{ item.msg }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { shuffle as _shuffle } from "lodash";
import { ref, computed } from "vue";
import gsap from "gsap";

// Enter / Leave / Move Transitions
const getInitialItems = () => [1, 2, 3, 4, 5];
const items = ref(getInitialItems());
let id = items.value.length + 1;

function insert() {
  const i = Math.round(Math.random() * items.value.length);
  items.value.splice(i, 0, id++);
}

function reset() {
  items.value = getInitialItems();
}

function shuffle() {
  items.value = _shuffle(items.value);
}

function remove(item) {
  const i = items.value.indexOf(item);
  if (i > -1) {
    items.value.splice(i, 1);
  }
}

// Staggering List Transitions
const list = [
  { msg: "Bruce Lee" },
  { msg: "Jackie Chan" },
  { msg: "Chuck Norris" },
  { msg: "Jet Li" },
  { msg: "Kung Fury" },
];

const query = ref("");

const computedList = computed(() => {
  return list.filter((item) => item.msg.toLowerCase().includes(query.value));
});

function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: "1.6em",
    delay: el.dataset.index * 0.15,
    onComplete: done,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done,
  });
}
</script>

<style scoped>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
