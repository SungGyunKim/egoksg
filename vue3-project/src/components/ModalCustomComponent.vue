<!--
[ Modal 요구사항 ]
size
  ㄴ width, height가 존재한다.
position
  ㄴ width, height를 고려하여 화면 중앙에 위치한다.
layout
  ㄴ header
    - 제목이 존재한다.
    - 닫기 버튼이 존재한다.
        - 닫기 버튼의 명친은 변경할 수 있다.
        - 닫기 버튼을 눌렀을 때, close 이벤트를 발생한다.
    - 위 내용을 구현한 다른 컴포넌트로 대체할 수 있다.
  ㄴ body
    - 
    - 내용물이 넘칠 경우, 수직 스크롤이 존재한다.
    - 위 내용을 구현한 다른 컴포넌트로 대체할 수 있다.
  ㄴ footer
    - 닫기 버튼이 존재한다.
        - 닫기 버튼의 명친은 변경할 수 있다.
        - 닫기 버튼을 눌렀을 때, close 이벤트를 발생한다.
    - 위 내용을 구현한 다른 컴포넌트로 대체할 수 있다.
method
  ㄴ 

https://jsonplaceholder.typicode.com/posts/42
-->
<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  console.log(111);
});
</script>

<style scoped></style>
