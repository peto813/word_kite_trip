<template>
  <div id="navBar">

<div class="header">
      <b-row class="text-center promo1-row">
          <b-col cols="4">
            <div id="follow" @click="scrollInto">
              <strong>Follow Us</strong>
            </div>
          </b-col>
          <b-col cols="4">
            <div>
              <strong>+7864149998888</strong>
              </div>
          </b-col>
          <b-col cols="4">
            <div>
              <strong>webmaster@worldkitetrip.com</strong>
            </div>
          </b-col>
      </b-row>
</div>

  <span class="position-absolute trigger"></span>

  <b-navbar id="myNav" toggleable="md" type="dark" variant="dark">
    <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->
    <b-button
        @click="showCollapse = !showCollapse"
        type="button" 
        aria-label="Toggle navigation"
        aria-controls="nav_collapse"
        aria-expanded="false"
        class="navbar-toggler"><span class="navbar-toggler-icon"></span>
    </b-button>
      <b-navbar-brand href="#">
        <router-link to="/">
        <div style="height:80px">
            <b-img height="80" :src="require('@/assets/static/brand.jpg')" />
        </div>
        </router-link>
      </b-navbar-brand>


          <!-- <b-collapse is-nav id="nav_collapse"> -->
      <b-collapse class="mt-2" v-model="showCollapse" id="nav_collapse" is-nav>


      <b-navbar-nav @click="showCollapse = !showCollapse" class="navLinkContainer">
        <b-nav-item  href="#"><router-link to="/"><span v-text="$ml.with('VueJS').get('home')" /></router-link></b-nav-item>
        <b-nav-item  class="anonymousLink"  href="#"><router-link to="/reservations"><span v-text="$ml.with('VueJS').get('reservations')" /></router-link></b-nav-item>
        <b-nav-item  class="anonymousLink" v-if="!userData.loggedIn" href="#"><router-link to="/login"><span v-text="$ml.with('VueJS').get('destinations')" /></router-link></b-nav-item>
        <b-nav-item  class="anonymousLink" href="#"><router-link to="/faq"><span v-text="$ml.with('VueJS').get('faq')" /></router-link></b-nav-item>
        <b-nav-item  class="anonymousLink"  href="#"><router-link to="/contact"><span/>Contact</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown :text="$ml.with('VueJS').get('lang')" right>
          <b-dropdown-item href="#"
            v-for="lang in $ml.list"
            :key="lang"
            v-text="lang"
            @click="$ml.change(lang)"
          >
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right v-if="userData.loggedIn"> 
          <template  slot="button-content">
            <em ><v-icon name="user" scale="1.5"/> {{userData.first_name}}</em>
          </template>
          <b-dropdown-item href="#" v-on:click="goToProfile"><span v-text="$ml.with('VueJS').get('profile')" /></b-dropdown-item>
          <b-dropdown-item href="#"><span v-text="$ml.get('signOut')" /></b-dropdown-item>
        </b-nav-item-dropdown> 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>    
  </div>
</template>
<script>
  import Icon from 'vue-awesome/components/Icon';
  import 'vue-awesome/icons/user';
  export default {
    name: 'navBar',
    components:{
      'v-icon': Icon
    },
    data() {
      return {
        showCollapse: false
      }
    },
    methods: {
      goToProfile () {
        this.$router.push('/profile')
      },
      scrollInto(){
          function reset_animation(el) {
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = null; 
          }
          let container = document.querySelector("#anchor-name");
          container.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

          let faIcons = document.querySelectorAll('#socialDiv a')
          faIcons.forEach(element => {
              reset_animation(element)
              element.classList.add("animated", "flash");
          });
      }
    },
      props: {
      userData: Object
    },
    created:function(){
        this.$nextTick(() => {
            (new IntersectionObserver(function(e){
                let navbar = document.querySelector('#myNav')
                let header = document.querySelector('.header')
                let content = document.querySelector('.container-fluid ,container')
                if (e[0].intersectionRatio > 0){
                     navbar.classList.remove("stick");
                     header.classList.remove("headerstick");
                    content.classList.remove("morepadding");
                } else {
                    navbar.classList.add("stick");
                    header.classList.add("headerstick");
                    content.classList.add("morepadding");
                }
            })).observe(document.querySelector('.trigger'));
        });

    }
  }
</script>

<style>
.morepadding{
  padding-top: 201px!important;
}
</style>

  <style scoped>
    #navBar{
      background:black;
       z-index: 20;
    }
   .navLinkContainer a{
      color:white;
      font-weight:bold;
      font-size: 18px;
      /* transition: all 1.3s */
    }

    .navbar{
      padding:25px 1rem;
      transition: all 0.5s;
      background:black!important;
      position: fixed;
      top: 19px;
      width: 100%;
      left: 0;
      z-index: 20;
    }

    .header {
      background: black;
      padding:0px;
      position:fixed;
      width: 100%;
      top:0;
      left:0;
      /* transition: all 0.5s ease; */
      color: #fff;
      font-size: 0.8em;
      z-index: 20;
    }

    .headerstick{
      color:black;
      padding:0;
      /* top:-10px; */
    }

    .stick{
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
    }

    #follow{
      cursor: pointer;
    }


 @media only screen and (min-width: 576px) {
   .header{
     font-size:1rem;
     padding: 0px 30px 70px;
   }
    /* .navbar{
      top: 49px!important;
    } */
}
 </style>

