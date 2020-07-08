<template>
  <vue-typed-js
    id="animated-text"
    :strings="['Lucas Maliszewski', 'a Sr. Web Developer', 'a Software Engineer','a DevOps', 'a Technologist']"
    :backSpeed="20"
    :loop="true"
  >
    <h5 id="typed-text">
      I'm
      <span class="typing"></span>
    </h5>
  </vue-typed-js>
</template>

<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";

Vue.use(VueTypedJs);

export default {
  VueTypedJs,
  name: "AnimatedText",
  props: {
    title: String
  },
  mounted() {}
};
</script>

<style lang="scss">
#animated-text {
  #typed-text {
    font-weight: bold;
    font-size: 1em;

    text-transform: uppercase;
    .typing {
      background-image: -webkit-linear-gradient(70deg, $accent, $accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .typing {
      color: $animated-text;
    }
  }
}
</style>