<template>
  <div>
    
    <b-container fluid id="content">
      <carousel-landing :items="items"></carousel-landing>

      <b-row class="text-center promo1-row">

          <b-col cols="12" sm="12" md="12" lg="12" xl="4" class="card-promo">
            <b-card
              border-variant="light"
              class="text-center pr-5 pl-5 pb-5 pt-5"
              bg-variant="warning"
              >
                <blockquote class="blockquote mb-0">
                  <strong><v-icon name="paper-plane" scale="3.5"/></strong>
                  
                  <h3>Como Lake Kitesurf Courses</h3><br>
                  <h4>Your IKO Instructors</h4><br>
                  <p>
                      In our Kitesurf school in Dervio you can find Kitesurf courses and lessons for all levels from beginners to seniors, from 12 years of age
                  </p>
                  
                <div class="mx-auto" style="width: 200px;">
                  <b-button size="lg"  href="#" variant="primary">Go somewhere</b-button>
                </div>
                </blockquote>
            </b-card>
          </b-col>

          <b-col cols="12" sm="12" md="12" lg="12" xl="4" class="card-promo">
            <b-card
              border-variant="light"
              text-variant="light"
              class="text-center pr-5 pl-5 pb-5 pt-5"
              bg-variant="info"
              >
                <blockquote class="blockquote mb-0">
                  <strong><v-icon name="check" scale="3.5"/></strong>
                  <h3>Rent Kitesurf</h3><br>
                  <h4>The best internationalBrands</h4><br>
                  <p>With our kitesurf Rental Service the best equipments to use for your kite session in partnership with Minoia Board and Co.</p>
                
                  <div class="mx-auto" style="width: 200px;">
                    <b-button size="lg"  href="#" variant="primary">Go somewhere</b-button>
                  </div>
                </blockquote>
            </b-card>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="12" xl="4" class="card-promo">
            <b-card
              border-variant="light"
              class="text-center pr-5 pl-5 pb-5 pt-5"
              bg-variant="danger"
              text-variant="light"
            >
                <blockquote class="blockquote mb-0">
                  <strong><v-icon name="map" scale="3.5"/></strong>
                  <h3>Hospitality e Transfer</h3><br>
                  <h4>Transfer, B&B, hotel and holiday houses</h4><br>
                  <p>Xtremelement kite school can help you to find the best solution for your kitesurfing holiday on Como Lake. Live with us an xtreme kite experience</p>
                  <div class="mx-auto" style="width: 200px;">
                    <b-button size="lg"  href="#" variant="primary">Go somewhere</b-button>
                  </div>
                </blockquote>
            </b-card>
          </b-col>
        </b-row>





                
      <!-- </b-card-group> -->
      <br>


    <b-row class="text-center">
        <b-col cols="12" sm="5"><br> <br> <br>
          <h1>Fill this Space</h1>
          <h3>Fill this Space</h3>
          <h5>
              Our kitesurf school is in Dervio, on Como Lake. Near the "Breva and Tivan" bar, the Xtremelement Point is located in the best place on a Lake to see the wind arrival and to do kitesurfing.
              We are an IKO (International Kiteboarding Association) school, with certified Instructors and Assistants and we follow the IKO standards for teaching kitesurf.
              The school offers courses for all levels from beginners to advanced kite lessons with IKO certified instructors, certified by the release of the IKO Card at the end of the last lesson of the course, useful for monitoring your progress and for the rental of equipment.
              We have decided to offer our customers a very simple portfolio of offers, avoiding talking about objectives that, for a Kitesurfing course, remain extremely subjective.
          </h5>
        </b-col>

        <b-col cols="12" sm="7" class="mb-5">
            <b-img fluid src="http://www.xtremelement.it/xe/images/tavola.png" alt="Responsive image" />
        </b-col>

    </b-row>

    <b-row class="text-center teal">
         <b-col cols="12" sm="5" class="mb-5">
            <b-img src="http://www.xtremelement.it/xe/images/iko-card.png" alt="Responsive image" />
        </b-col>     
        
        <b-col cols="12" sm="7">
          <h1>Kitesurf Courses with certified IKO instructors</h1>
          <h3>We provide perfect and professional kitesurf courses</h3><br>
          <h5>
              All our kitesurf courses XTREMELEMENT are with IKO certified Instructors with several years of
              experience. At the end of the courses will be issued the card IKO Member Card that will attest to
              your skills and a level of certification valid and recognized worldwide. The IKO card is required in
              specialized centers to rent equipment or to access courses intermediate or advanced . The kite lessons
              will be held at the XTREMELEMENT school, in the magnificent natural setting of Lake Como based in Dervio.
          </h5>
        </b-col>
    </b-row>

    <b-row class="text-center">
         <b-col cols="12" md="6">
            <div class="zoom" >
                  <b-img thumbnail fluid :src="require('@/assets/static/pic2.jpeg')" alt="Responsive image" />
            </div>
            <div class="centered-caption">
                <h3 class="post-name">COURSES</h3>
                <h6 class="post-category subtitle-2">Basic and Advanced kitesurf courses with IKO certified instructors</h6>
            </div>
        </b-col>     
        
         <b-col cols="12" md="6">
            <div class="zoom">
              <b-img thumbnail fluid :src="require('@/assets/static/pic2.jpeg')" alt="Responsive image" />
            </div>
            <div class="centered-caption">
                <h3 class="post-name">LIFT SERVICE</h3>
                <h6 class="post-category subtitle-2">Join our experts and explore our premium selected spots</h6>
            </div>
        </b-col>
    </b-row>

    <b-row class="text-center">
         <b-col cols="12" md="6">
            <div class="zoom">
              <b-img thumbnail fluid :src="require('@/assets/static/pic2.jpeg')" alt="Responsive image" />
            </div>
            <div class="centered-caption">
                <h3 class="post-name">DOWNWINDS</h3>
                <h6 class="post-category subtitle-2">Basic and Advanced kitesurf courses with IKO certified instructors</h6>
            </div>
        </b-col>     
        
         <b-col cols="12" md="6">
            <div class="zoom">
              <b-img thumbnail fluid :src="require('@/assets/static/pic2.jpeg')" alt="Responsive image" />
            </div>
            <div class="centered-caption">
                <h3 class="post-name">Lodging</h3>
                <h6 class="post-category subtitle-2">Basic and Advanced kitesurf courses with IKO certified instructors</h6>
            </div>
        </b-col>
    </b-row>

  <div id="videoDiv">
    <!-- <youtube :video-id="videoId" @ready="yVideo"></youtube> -->
  </div>
  
  <!-- <b-jumbotron fluid bg-variant="light">
    <b-img src="http://www.xtremelement.it/xe/images/kitesurf-lago-di-como-dervio/extremelement-kitesurf-school-losroques.jpg" fluid-grow alt="Responsive image" />
  </b-jumbotron> -->
<div>
</div>
    <hr>

    <wkt-footer></wkt-footer>
</b-container>
  </div>
</template>
<script>
import Vue from 'vue';
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
import carousel from '@/components/carousel/carousel.vue';
import footer from '@/components/footer/footer.vue';
Vue.component('carousel-landing', carousel);
Vue.component('b-jumbotron', bJumbotron);
Vue.component('wkt-footer', footer);
import 'vue-awesome/icons/recycle';
import 'vue-awesome/icons/university';
import 'vue-awesome/icons/paper-plane';
import 'vue-awesome/icons/check';
import 'vue-awesome/icons/map';
import 'vue-awesome/icons/money-bill';
import 'vue-awesome/icons/book';
//import emailField from '@/components/emailField/emailField.vue';
import formMixin from '@/mixins/form';
import { required } from "vuelidate/lib/validators";
import Parallax from 'vue-parallaxy'

Vue.component('parallax', Parallax);

import Icon from 'vue-awesome/components/Icon';
export default {
    mixins:[formMixin],
    components:{
      'v-icon': Icon,
    },
  data: function() {
       return {
         imgLink:'',
          links :{
            roques:'https://tschi-578b.kxcdn.com/TSCH_files/pagina/752/lesroques_venezuela_103517324.jpg',
            jeri:'https://www.travelweguide.com/wp-content/uploads/2019/01/cacimba-do-padre-beach-BRAZILBEACHES0316.jpg'
          },
          items:{
              pic1:{
                  location:require('@/assets/static/pic1.jpeg')
              },
              pic2:{
                  location:'https://tschi-578b.kxcdn.com/TSCH_files/pagina/752/lesroques_venezuela_103517324.jpg'
              },
          },
          videoId:'',
          startTime:'',
          form:{
            selected: null,
            options: [
              { value: null, text: 'Pick your paradise' },
              { value: 'roques', text: 'Los Roques-Venezuela'  },
              { value: 'jeri', text: 'Jericoacoara-Brazil' }
            ]
          }
        }
    },
  validations: {
      form:{
            selected:{
                required
            }
      }
    },
    methods: {
        yVideo () {
          var url = 'https://www.youtube.com/watch?v=p6Rj1GTJL3g&t=40s';
          this.videoId = this.$youtube.getIdFromURL(url)
          this.startTime = this.$youtube.getTimeFromURL(url)
        },
        refreshLink () {
          this.imgLink=this.links[this.form.selected];
        },
        // submit() {
        //   //this.v$.$touch();
        // //   if (this.$v.form.$invalid) {
        // //     this.submitStatus = 'ERROR'
        // //   } else {
        // //     // do your submit logic here
        // //     this.submitStatus = 'PENDING'
        // //     setTimeout(() => {
        // //       this.submitStatus = 'OK'
        // //     }, 500)
        // //   }
        // },
        //...mapActions('account', ['login', 'logout']),
        submit () {
          //e.preventDefault()
          //alert('0a')
          //const userId = '123'
          //this.$router.push({ path: 'register', params: { email: '123' }})
          //this.$router.push({ name: 'register', params: { email:'1111' } })
          this.$router.push({ name: 'register', params: {email: this.form.email }});
            //this.$route.push({ name: 'register', params: { email: '123' } })
            // this.submitted = true;
            // const { username, password } = this;
            // if (username && password) {
            //     this.login({ username, password })
            // }
        }
    }
}
</script>

<style scoped>
/* @media only screen and (min-width: 495px) {
  blockquote h3, blockquote h6{
    font-size:2rem;
  }
} */
/* #regButton{
  position: absolute;
    top: 1px;
    left: 380px;

} */
/* body{
  padding-top:500px!important;
} */
h3 {
  margin: 40px 0 0;
}
/* ul {
  list-style-type: none;
  padding: 0;
} */
/* li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #42b983;
} */

/* .card{
  margin-left: 0px!important;
  margin-right: 0px!important;
} */

/* .container-fluid{
  padding-left: 0px;
  padding-right: 0px;
} */
.row.teal{
  background: #D6F77B;
  padding: 50px 0px;
}
/* .header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
} */
/* #carouselLanging{
  padding-left:0px;
  padding-right:0px;
} */



.centered-caption {
  color:white;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.centered-caption h3{
  font-size:5.5vw;
}

.centered-caption h6{
  font-size:4vw;
}





/* MEDIA QUERIES */
@media (min-width: 768px) {

  .card-promo{
      padding:0px;
  }
  .card-promo .card{
      height:645px;
  }

  .centered-caption h3{
    font-size:40px;
  }

  .centered-caption h6{
      font-size:16px;
  }

} 
/* 
@media (min-width: 992px) { 
  .centered-caption h6{
    font-size:18px;
  }
  .caption {
      position:absolute;
      top:0;
      right:0;
      background:rgba(66, 139, 202, 0.75);
      width:100%;
      height:100%;
      padding:2%;
      display: none;
      text-align:center;
      color:#fff !important;
  }
}

 */
 #videoDiv{
   text-align:center;margin-top:35px;
 }
.zoom {
    float: left;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
}
.zoom img {
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
}

.zoom:hover img {
  -webkit-transform: scale(1.12);
  transform: scale(1.12);
}

@media (min-width: 1200px) { 

  .card-promo{
      padding:0px;
  }
  .card-promo .card{
      height:645px;
  }

  .centered-caption h3{
    font-size:50px;
    /* font-size:5vw; */
  }

  .centered-caption h6{
      font-size:16px;
  }

}
</style>