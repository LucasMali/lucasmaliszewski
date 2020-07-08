<template>
    <b-card-group deck>
        <b-card
            v-for="(object, index) in this.cards"
            :key="index"
            :title=object.title
            :img-src=object.image
            :img-alt=object.title
            img-top
        >
            <b-card-text>
            {{ object.desc }}
            </b-card-text>

            <template v-slot:footer>
                <small class="text-muted">Last updated 3 mins ago</small>
            </template>
        </b-card>
    </b-card-group>
</template>

<script>
// import Vue from 'vue'

export default {
  name: "Portfolio",
  props: {
    msg: String,
  },
  data() {
    return {
        cards: [
        {
            title: "Web Sites",
            desc: "20+ years of experance",
            image: "https://via.placeholder.com/150/4B4849/4B4849/?text=IPaddress.net"
        },
        {
            title: "Software",
            desc: "10+ years of experance",
            image: "https://via.placeholder.com/150/4B4849/4B4849/?text=IPaddress.net"
        },
        {
            title: "SecOps",
            desc: "Coming soon",
            image: "https://via.placeholder.com/150/4B4849/4B4849/?text=IPaddress.net"
        }
    ]
    }
  }
}
</script>