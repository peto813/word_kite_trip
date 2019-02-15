<template>
  <div id="navBar">

<div class="header">
      <b-row class="text-center promo1-row">
          <b-col cols="12" sm="12" md="12" lg="12" xl="4">
            <div id="follow" @click="scrollInto">
              <strong>Follow Us</strong>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="12" xl="4">
            <div>
              <strong>+7864149998888</strong>
              </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="12" xl="4">
            <div>
              <strong>webmaster@worldkitetrip.com</strong>
            </div>
          </b-col>
      </b-row>
</div>
  <span class="position-absolute trigger"></span>

  <b-navbar id="myNav" toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <router-link to="/">
        <div style="height:80px">
            <b-img height="80" :src="require('@/assets/static/brand.jpg')" />
        </div>
        </router-link>
      </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="navLinkContainer">
        <b-nav-item href="#"><router-link to="/"><span v-text="$ml.with('VueJS').get('home')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink"  href="#"><router-link to="/reservations"><span v-text="$ml.with('VueJS').get('reservations')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink" v-if="!userData.loggedIn" href="#"><router-link to="/login"><span v-text="$ml.with('VueJS').get('destinations')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink" href="#"><router-link to="/faq"><span v-text="$ml.with('VueJS').get('faq')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink"  href="#"><router-link to="/contact"><span/>Contact</router-link></b-nav-item>

      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown :text="$ml.with('VueJS').get('lang')" style="z-index:10" right>
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
          let container = document.querySelector("footer");
          container.scrollIntoView(true)
          let faIcons = container.querySelectorAll('#socialDiv a')
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
         // document.querySelector('#content').style.paddingTop='150px'
            (new IntersectionObserver(function(e,o){
                let navbar = document.querySelector('#myNav')
                let header = document.querySelector('.header')
                if (e[0].intersectionRatio > 0){
                     navbar.classList.remove("stick");
                     header.classList.remove("headerstick");
                      document.querySelector('#content').style.paddingTop='150px'
                } else {
                    navbar.classList.add("stick");
                    header.classList.add("headerstick");
                    document.querySelector('#content').style.paddingTop='200.4px'//.classList.remove('customPadding')
                    
                };
            })).observe(document.querySelector('.trigger'));
        });

    },
    computed: {
      canViewInmuebles () {
        let userIsCondo = (this.userData.role=='condo');
        let userIsResident = (this.userData.role=='resident');
        return userIsCondo || userIsResident;
      },
      canViewPayments () {
        let userIsRentee = (this.userData.role=='rentee');
        let userIsResident = (this.userData.role=='resident');
        return userIsRentee || userIsResident;
      }
    }
  }
</script>
  <style scoped>
    
   .navLinkContainer a{
      color:white;
      font-weight:bold;
      font-size: 18px;
      transition: all 1.3s
    }

    .navbar{
      padding:25px 1rem;
      transition: all 1.3s;
      background:black!important;
      position: fixed;
      top: 44px;
      width: 100%;
      left: 0;
      z-index: 1;
    }

    .header {
      background: black;
      padding: 10px 30px;
      position:absolute;
      width: 100%;
      top:0;
      left:0;
      transition: all 1s ease;
      color: #fff;
      z-index: 3;
    }

    .headerstick{
      color:black;
      padding:0;
      top:-10px;
    }

    .stick{
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 2;
    }

    #follow{
      cursor: pointer;
    }
    
 </style>

