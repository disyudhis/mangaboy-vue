<template>
  <div class="app" :class="mode">
    <NavBar :mode="mode" @toggle="toggle" />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  data() {
    return {
      mode: "light",
    };
  },
  components: { NavBar },
  created() {
    window.addEventListener("keyup", this.keyPress);
  },

  methods: {
    keyPress(e) {
      if (e.key === "t") {
        this.toggle();
      }
    },

    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

div {
  display: block;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  color: #152028;
  transition: background 0.3s ease-in-out;
}

.dark {
  background: #192734;
  color: #f3f3f3;
}
</style>
