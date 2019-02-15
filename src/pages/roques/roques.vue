<template>
    <div>
        <carousel-roques :items="items"></carousel-roques>
        Los Rogues
    </div>
</template>
<script>
import carouselRoques from '@/components/carousel/carousel.vue';
export default {
    data:()=>{
        items:{
            pic1:{
                location:'http://www.xtremelement.it/xe/images/vacanza-kite-los-roques/los-roques-vacanza-kitesurf.jpg'
            }
        }
    },
    components:{
      'carousel-roques': carouselRoques,
      //'email-field':emailField
    }
}
</script>
