<template>
  <div>
    <b-carousel
        style="text-shadow: 1px 1px 2px #333;"
        indicators
        :interval="0"
        img-width="1024"
        img-height="480"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        background="#ababab"
        :controls ="true"
    >
      <b-carousel-slide caption="Discover Los Roques!"
          text="The hidden jewel of the Caribbean"
          v-for="(value, key) in items"
          v-bind:key="value.location"
          :img-src="value.location"
      > 
      
      <b-row>
        <b-col></b-col>
        <b-col md="4" lg="2">
          <b-button size="lg" class="btn btn-success btn-block bookButton">Book Today!</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>
      </b-carousel-slide>
     </b-carousel> 
  </div>
</template>
<style>
  @media (min-width: 992px) { 
    button{
      font-size:18px;
    }
  }
  .bookButton:hover{
    background: white;
    color:black;
  }
  .carousel-caption, .carousel-indicators {
    z-index: 0;
  }
</style>

<script>
  export default {
    props:{
      items:Object
    },
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
}
</script>
