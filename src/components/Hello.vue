<template>
  <b-jumbotron id="hello">
    <img id="leaf_one" :style="{ top: leafOneLeft + 'px' }" src="@/assets/img/red-leaf.png" />
    <img id="leaf_two" :style="{ left: leafTwoLeft + 'px' }" src="@/assets/img/red-leaf.png" />
    <b-container fluid="lg">
      <b-row align-v="center">
        <b-col offset-sm="2" offset-md="0" cols="12" xs="12" sm="8" md="6" lg="6">
          <img
            blank-color="black"
            fluid-grow
            alt="LM"
            src="@/assets/img/rusted_logo.svg"
          />
        </b-col>
        <b-col cols="12" xs="12" sm="12" md="6" lg="6">
          <b-row>
            <b-col cols="12" lg="12" class="text-left">
              <h3>Hello!</h3>
            </b-col>
            <b-col cols="12" lg="12" align-self="center">
              <AnimatedText />
            </b-col>
            <b-col cols="12" class="text-left">
              <p>{{ this.about }}</p>
            </b-col >
          </b-row>
        </b-col>
      </b-row>
      <br>
      <br>
      <b-row>
        <b-col md="12" xs="12">
              <p>Find me at Linkedin</p>
            </b-col>
         <b-col md="12" xs="12">
              <a :href="this.linkedin_url">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="link-icon" size="sm" />
              </a>
            </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>

<script>
import AnimatedText from "./Hello/AnimatedText";

export default {
  name: "Hello",
  props: {},
  created() {
    this.WEBEXP = parseInt(new Date().getFullYear()) - 1999;
    this.linkedin_url = "https://linkedin.com/in/lucasmaliszewski";
    this.code_pen = "";
    this.about = `Passionately building upon a computer science career, I'm primarily focuses on data-centric applications. My goals are not only in providing valuable knowledge to a project but also in building upon that knowledge. These include, but are not limited to, primary aspects of development such as UX development, MVC implementations, Data optimization, API architecture, and Security Operations.`;
    this.leafPos = -120;
    // this.opacity = 1;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
      let _leafOneLeft = 0, _leafTwoLeft = 0;

      if(this.scrolled && window.innerWidth < 768){
        _leafOneLeft = this.leafPos - (parseInt(window.scrollY)*0.9);
        _leafTwoLeft = this.leafPos - (parseInt(window.scrollY));
      }

      if(window.scrollY <= 0 || window.innerWidth >= 768){
        this.leafOneLeft = this.leafPos;
        this.leafTwoLeft = this.leafPos;
      }else{
        this.leafOneLeft = _leafOneLeft;
        this.leafTwoLeft = _leafTwoLeft;
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    AnimatedText
  },
  data (){
    return {
      leafOneLeft: -120,
      leafTwoLeft: -120
    }
  }
};
</script>

<style lang="scss">
  #leaf_one{
        position: fixed;
        top: -100px;
        left: -120px;
        transform: rotate(120deg);
        filter: blur(2px);
    }

    #leaf_two{
        position: fixed;
        top: -20px;
        left: -100px;
        transform: rotate(70deg);
    }



    .link-icon{
      font-size:10vh;
      cursor:pointer;
      border-bottom: 1px solid $accent;
      
    }
</style>