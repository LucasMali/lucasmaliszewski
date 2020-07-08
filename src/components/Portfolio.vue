<template>
  <div class="portfolio">
    <h3>{{msg}}</h3>
    <b-container fluid="lg" align-v="stretch">
      <div class="text-md-center">
        <Card/>
      </div>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import Card from "./Card"
import "@/assets/js/scrolleffect.js";

export default {
  name: "Portfolio",
  props: {
    msg: String
  },
  components: {
    Card
  }
};

new Vue({
  el: "",
  data: {
    cards: [
      {
        title: "Test"
      }
    ]
  }
});
</script>
