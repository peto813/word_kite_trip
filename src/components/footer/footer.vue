<template>
<!-- Footer -->
<footer color="unique-color-dark" class="page-footer font-small pt-0">
  <div style="backgroundColor: black">

    <b-container class="text-left">
      <social-sharing url="https://vuejs.org/" inline-template>
      <div id="socialDiv">
        <b-row class="py-4 d-flex align-items-center">
          <b-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0 text-white">{{$ml.with('VueJS').get('socialMedia')}}</h6>
          </b-col>
          <b-col md="6" lg="7" class="text-center text-md-right">
            <a class="fb-ic ml-0">
              <network network="facebook">
                <v-icon name="brands/facebook"   style="cursor:pointer;" class="text-white mr-lg-4"/>
              </network>
            </a>
            <a class="tw-ic">
              <network network="twitter">
                <v-icon name="brands/twitter"  style="cursor:pointer;" class="text-white mr-lg-4"/>
              </network>
            </a>
            <a class="gplus-ic">
               <network network="googleplus">
                <v-icon name="brands/google-plus"  style="cursor:pointer;" class="text-white mr-lg-4"/>
              </network>             
            </a>
            <a class="li-ic">
               <network network="linkedin">
                <v-icon name="brands/linkedin-in"  style="cursor:pointer;" class="text-white mr-lg-4"/>
              </network> 
            </a>
            <a>
               <network network="whatsapp">
                <v-icon name="brands/whatsapp"  style="cursor:pointer;" class="text-white mr-lg-4"/>
              </network>   
            </a>
          </b-col>
        </b-row>
      </div>
      </social-sharing>
    </b-container>

  </div>
  <b-container class="mt-5 mb-4 text-center text-md-left footerBContainer">
    <b-row class="mt-3">
      <b-col md="3" lg="4" xl="3" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>Fractal Software, Corp.</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p>A la vanguardia de la tecnologia.</p>
      </b-col>
      <b-col md="2" lg="2" xl="2" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>Products</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p><a href="#!">MDBootstrap</a></p>
        <p><a href="#!">MDWordPress</a></p>
        <p><a href="#!">BrandFlow</a></p>
        <p><a href="#!">Bootstrap Angular</a></p>
      </b-col>
      <b-col md="3" lg="2" xl="2" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p><a href="#!">Your Account</a></p>
        <p><a href="#!">Become an Affiliate</a></p>
        <p><a href="#!">Shipping Rates</a></p>
        <p><a href="#!">{{$ml.with('VueJS').get('help')}}</a></p>
      </b-col>
      <b-col cols="12" sm="4" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>{{$ml.with('VueJS').get('contact')}}</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p>
          <v-icon name="home" class="mr-3"/>Miami, FL 33196, US
        </p>
        <p>
          <v-icon name="envelope" class="mr-3"/>
          contact@worldkitetrip.com
        </p>
        <p><v-icon name="phone" class="mr-3"/> + 01 786 401 9338</p>
        <p><v-icon name="print" class="mr-3"/> + 01 786 401 9338</p>
      </b-col>
    </b-row>
  </b-container>
  <div class="footer-copyright text-center py-3">
    <b-container fluid>
      &copy; 2019 Copyright: <a href="https://www.MDBootstrap.com"> Condominioaldia.net </a>
    </b-container>
  </div>

</footer>

</template>
<script>

import 'vue-awesome/icons/home';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/phone';
import 'vue-awesome/icons/print';
import 'vue-awesome/icons/brands/facebook';
import 'vue-awesome/icons/brands/twitter';
import 'vue-awesome/icons/brands/linkedin-in';
import 'vue-awesome/icons/brands/google-plus';
import 'vue-awesome/icons/brands/instagram';
import 'vue-awesome/icons/brands/whatsapp';
//import Icon from 'vue-awesome/components/Icon';

  export default {
    name: 'navBar',
    // components:{
    //   'v-icon': Icon
    // },
  }
</script>
<style>
  /* .fa-icon {
      width: auto;
      height: 2em; 
      max-width: 100%;
      max-height: 100%;
  } */
  .text-left a{
    margin:5px;
  }
  #socialDiv .fa-icon, .footerBContainer .fa-icon{
      width: auto;
      height: 2em; 
      max-width: 100%;
      max-height: 100%;
      cursor:pointer!important;
      -webkit-transition: 0.4s ease;
      transition: 0.4s ease;
  }
  #socialDiv .fa-icon:hover, .footerBContainer .fa-icon{
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
  }

#socialDiv a{
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-iteration-count: 5;
}
</style>
