<template>
  <div><Navbar /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/navbar/Navbar.vue";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
  },
});
</script>

<style lang="scss" scoped></style>
