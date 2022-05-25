<template>
  <div>
    <div>
      <!-- <input> with text types and <textarea> elements use value property and input event; -->
      <h3>[ input ]</h3>
      <input type="text" v-model="data.input" />
      <!-- You can add the lazy modifier to instead sync after change events -->
      <h3>[ input - lazy modifier ]</h3>
      <input type="text" v-model.lazy="data.input" />
      <p>{{ data.input }}</p>
      <h3>[ textarea ]</h3>
      <textarea v-model="data.textarea"></textarea>
      <p style="white-space: pre-line">{{ data.textarea }}</p>
    </div>
    <div>
      <!-- <input type="checkbox"> and <input type="radio"> use checked property and change event; -->
      <h3>[ checkbox ]</h3>
      <template v-for="item in checkboxDataList" :key="item.value">
        <input
          type="checkbox"
          name=""
          :id="'checkbox1_' + item.value"
          :value="item.value"
          v-model="data.checkbox1"
        />
        <label :for="'checkbox1_' + item.value">{{ item.label }}</label>
      </template>
      <p>{{ data.checkbox1 }}</p>
      <!-- 아래 체크박스는 :value가 없다. -->
      <h3>[ checkbox - true-value and false-value ]</h3>
      <input
        type="checkbox"
        name=""
        :id="'checkbox2'"
        v-model="data.checkbox2"
        true-value="true"
        false-value="false"
      />
      <label :for="'checkbox2'">custrom true and false</label>
      <p>{{ data.checkbox2 }}</p>
      <h3>[ radio ]</h3>
      <template v-for="item in radioDataList" :key="item.value">
        <input
          type="radio"
          name=""
          :id="item.value"
          :value="item.value"
          v-model="data.radio"
        />
        <label :for="item.value">{{ item.label }}</label>
      </template>
      <p>{{ data.radio }}</p>
    </div>
    <div>
      <!-- <select> use value as a prop and change as an event. -->
      <h3>[ select - value is string ]</h3>
      <select v-model="data.select">
        <option disabled value="">Please select one</option>
        <option
          v-for="(item, index) in selectDataList"
          :key="index"
          :value="item.value"
        >
          {{ item.label }}
        </option>
      </select>
      <h3>[ select - value is object ]</h3>
      <select v-model="data.select">
        <option disabled value="">Please select one</option>
        <option
          v-for="(item, index) in selectDataList"
          :key="index"
          :value="item"
        >
          {{ item.label }}
        </option>
      </select>
      <p>{{ data.select }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const data = reactive({
  input: "",
  textarea: "",
  checkbox1: [],
  checkbox2: "",
  radio: "",
  select: "",
});

const selectDataList = reactive([
  { value: "C01", label: "C01" },
  { value: "C02", label: "C02" },
  { value: "C03", label: "C03" },
  { value: "C04", label: "C04" },
]);

const checkboxDataList = reactive([
  { value: "C01", label: "C01", checked: false },
  { value: "C02", label: "C02", checked: false },
  { value: "C03", label: "C03", checked: true },
  { value: "C04", label: "C04", checked: false },
]);

const radioDataList = reactive([
  { value: "C01", label: "C01", checked: false },
  { value: "C02", label: "C02", checked: false },
  { value: "C03", label: "C03", checked: true },
  { value: "C04", label: "C04", checked: false },
]);
</script>

<style></style>
