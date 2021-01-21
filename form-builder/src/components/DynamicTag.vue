<template>
  <div>
    <div  v-if="tagType != 'button'">
      <label>titre label</label>
    </div>
    <input type="text" v-if="tagType == 'input'" />
    <textarea v-if="tagType == 'textarea'"></textarea>
    <button v-if="tagType == 'button'">{{ content }}</button>
  </div>
</template>

<script>
export default {
  name: "dynamic-tag",
  props: ["tagType", "content", "type", "classes", "id"],
};
</script>

<style></style>