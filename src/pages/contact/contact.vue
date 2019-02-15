<template>
    <div>
        <beach></beach>
<!--Section: Contact v.2-->
<b-container class="mb-4 mt-5">
    
    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <b-row id="formRow">
        <b-col cols="12" lg="6" class="formCol">
            <h3 class="text-center">Take a break...</h3>
            <p>
                We aim to make your adventure as pleasant and as gratifying as possible. Let us show you white sands, turquoise blue
                waters. And an experience second to none in exotic world renowned locations.
            </p>
        </b-col>
        <!--Grid column-->
        <b-col cols="12" lg="6" class="formCol">
            <h3 class="text-center">Were here to help!</h3>
            <contact-form :data="form"></contact-form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" >Send</a>
            </div>
            <div class="status"></div>
        </b-col>

    </b-row>

</b-container>
<custom-footer></custom-footer>
    </div>
</template>
<script>
import Vue from 'vue';
import 'vue-awesome/icons/map-marker-alt';
import 'vue-awesome/icons/phone';
import 'vue-awesome/icons/envelope';
//import Icon from 'vue-awesome/components/Icon';
import footer from '@/components/footer/footer.vue';
import beach from '@/components/beach/beach.vue';
import contactForm from '@/components/contactForm/contactForm.vue';
Vue.component('custom-footer', footer);

Vue.component('beach', beach);

Vue.component('contact-form', contactForm);

export default {
    components:{
      //'v-icon': Icon,
    },
    data: function() {
        return {
            form:{
                name:'',
                email:'',
                subject:'',
                message:''
            }
        }
    }
}
</script>
<style scoped>
    /* #content{
        margin-top: 120px; 
    } */
    input{
        border-top-color: currentcolor;
        border-top-style: none;
        border-top-width: medium;
        border-right-color: currentcolor;
        border-right-style: none;
        border-right-width: medium;
        border-bottom-color: currentcolor;
        border-bottom-style: none;
        border-bottom-width: medium;
        border-left-color: currentcolor;
        border-left-style: none;
        border-left-width: medium;
        border-image-outset: 0;
        border-image-repeat: stretch;
        border-image-slice: 100%;
        border-image-source: none;
        border-image-width: 1;
        border-bottom: 1px solid #ced4da;
        border-radius: 0;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        background-color: transparent;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
        outline:0;
        box-shadow: none;
    }


    .form-control{
        display: block;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        width: 100%;
        color:#495057;
        background-clip:padding-box;
        padding: .3rem 0 .55rem 0;
        background-image: none;
        background-color: transparent;
        height: auto;
        margin:0 0 .5rem 0;
    }
  /* #content{
    padding-top:150px
  } */


 #formRow {
     border-radius: 10px;
 }
  #formRow .formCol{
        background: rgba(255, 255, 255, 0.8);
        padding: 20px; 
  }
  form input{
      background:white;
      color:black;
      font-size: 18px;
      font-weight:bold;
  }
</style>

