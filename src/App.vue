<template>
  <div id="app">
    <Navigation/>
    <Hello />
    <!-- <marquee-text id="marquee-text" :duration="100" :repeat="7">      
      <img src="@/assets/img/icons8-magento-50.png"/>
      <img src="@/assets/img/icons8-php-logo-50.png"/>
      <img src="@/assets/img/icons8-mysql-logo-50.png"/>
      <img src="@/assets/img/icons8-css3-50.png"/>
      <img src="@/assets/img/icons8-docker-50.png"/>
      <img src="@/assets/img/icons8-html-5-50.png"/>
      <img src="@/assets/img/icons8-java-50.png"/>
      <img src="@/assets/img/icons8-laravel-50.png"/>
      <img src="@/assets/img/icons8-javascript-50.png"/>
      <img src="@/assets/img/icons8-python-50.png"/>
      <img src="@/assets/img/icons8-react-50.png"/>
      <img src="@/assets/img/icons8-travis-ci-50.png"/>
      <img src="@/assets/img/icons8-vue-js-50.png"/>
    </marquee-text> -->
    <!-- <Portfolio msg="Portfolio"/> -->
    <Footer/>
  </div>
</template>

<script>
// import MarqueeText from 'vue-marquee-text-component'
import Navigation from './components/Navigation';
import Hello from './components/Hello';
// import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    // MarqueeText,
    Navigation,
    Hello,
    // Portfolio,
    Footer
  }
}
</script>

<style lang="scss">
  @import "./scss/app.scss";  
</style>
