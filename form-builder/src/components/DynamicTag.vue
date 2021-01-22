<template>
  <div>
    <input type="text" v-if="tagType == 'input'" />
    <textarea v-if="tagType == 'textarea'"></textarea>
    <button v-if="tagType == 'button'">{{ content }}</button>
    <span v-if="show" class="badge badge-secondary ml-2" @click="removeItem()"
      >X</span
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "dynamic-tag",
  computed: mapState(["elementData"]),
  props: ["tagType", "content", "type", "classes", "id", "index", "show"],
  methods: {
    removeItem() {
      this.$store.commit("removeElement", this.index);
    },
  },
};
</script>

<style></style>
