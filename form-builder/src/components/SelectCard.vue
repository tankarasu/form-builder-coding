<template>
  <div class="card text-center col-6 p-1">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item" @click="toggleFromElement">
          <span class="nav-link" :class="{ active: !isSetting }"></></span>
        </li>
        <li class="nav-item" @click="toggleFromSetting">
          <span class="nav-link" :class="{ active: isSetting }">Set</span>
        </li>
        <li class="nav-item">
          <button class="nav-link" @click="addBtn">
            <span class="badge badge-secondary">+</span>
          </button>
        </li>
      </ul>
    </div>
    <!-- fin header -->
    <div class="card-body">
      <div v-if="!isSetting">
        <h5 class="card-title">{{ tagType }}</h5>

        <dynamic-tag :tagType="tagType" :content="content"></dynamic-tag>
      </div>
      <div v-if="isSetting">
        <div>
          <input type="text" placeholder="class" />
        </div>
        <div>
          <input type="text" placeholder="id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicTag from "./DynamicTag.vue";
import { mapState } from "vuex";

export default {
  name: "select-card",
  props: ["content", "tagType", "type", "classes", "id"],
  components: { DynamicTag },
  computed: mapState(["elementData"]),
  data() {
    return { isSetting: false };
  },
  methods: {
    toggleFromElement() {
      this.isSetting = false;
    },
    toggleFromSetting() {
      this.isSetting = true;
    },
    addBtn() {
      this.$store.dispatch("addElementInfo", {
        content: this.content,
        tagType: this.tagType,
        class: this.classes,
      });
      console.log(this.elementData);
    },
  },
};
</script>

<style scoped>
.nav-item {
  width: 33%;
}
.nav-link {
  font-size: 14px;
  font-weight: 600;
}
</style>
