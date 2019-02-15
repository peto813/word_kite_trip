<template>
  <div>
    <loading
      color="#95C11F"
      loader="dots"
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :width="120"
      >
    </loading>
    <!-- <nav-bar id="gold" :user-data="userData"></nav-bar> -->
    <transition
            name="fade"
            mode="out-in"
          >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import navBar from '@/components/navBar/navBar.vue';
import Vue from 'vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'app',
  components: {
    Loading
  },
  methods: {
      doAjax() {
          this.isLoading = true;
          // simulate AJAX
          setTimeout(() => {
            this.isLoading = false
          },5000)
      },
      onCancel() {
        console.log('User cancelled the loader.')
      }
    },
    data: function() {
         return {
            userData: {
              role:undefined,
              first_name:'Einstein',
              loggedIn : false
            },
            isLoading: true,
            fullPage: true
          }
      },
  mounted(){
    let ComponentClass =  Vue.extend(navBar);
    let instance= new ComponentClass(
      {
        propsData:{
          userData:this.userData
        },
        router:this.$router
      }
    )
    instance.$mount();

    document.body.insertBefore(instance.$el, document.body.firstChild);
    this.isLoading=false;
}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>>
