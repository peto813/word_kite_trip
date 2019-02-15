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
          v-for="value in items"
          v-bind:key="value.location"
          :img-src="value.location"
      > 
      
      <b-row>
        <b-col></b-col>
        <b-col cols="6" md="4" lg="2">
          <b-button variant="success" block class="bookButton">Book Today!</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>
      </b-carousel-slide>
     </b-carousel> 
  </div>
</template>
<style>
  .carousel-caption {
    padding-top:25px;
    bottom:10%;
  }
  .carousel-caption >p{
    font-size: 12px;
  }
  .carousel-caption > h3{
    font-size: 0.95em;
  }
  .carousel-caption button{
    font-size: 12px;
  }
  @media (min-width: 568px) { 
    .carousel-caption button{
      font-size:18px;
    }
    .carousel-caption >p{
      font-size: 18px;
    }
  }
</style>

<style scoped>



  .bookButton:hover{
    background: white;
    color:black;
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
      onSlideStart () {
        this.sliding = true
      },
      onSlideEnd () {
        this.sliding = false
      }
    }
}
</script>
