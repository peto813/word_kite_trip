<template>
<div id="content">
    <b-container>
                <div class="toggle-content">
                    <h1 class="pb-3 text-center mt-5">
                        Frequently asked questions
                    </h1>
                    <p class="text-center">Hi! If you don't find an answer to a question you have feel free to contact us at any time!</p>
                    <div>
                        <b-btn v-b-toggle.collapse1 class="m-1" variant="outline-success" block>
                            <h4 class="mbr-fonts-style display-5">
                                <span class="sign mbr-iconfont mbri-arrow-down inactive"></span> Is travelling to Venezuela safe?
                            </h4> 
                        </b-btn>
                        <b-collapse id="collapse1">
                            <b-card>
                            Hell yeah!
                            </b-card>
                        </b-collapse>
                    </div>

                    <div>
                        <b-btn v-b-toggle.collapse2 class="m-1" variant="outline-success" block>
                            <h4 class="mbr-fonts-style display-5">
                                <span class="sign mbr-iconfont mbri-arrow-down inactive"></span> Is travelling to Venezuela safe?
                            </h4> 
                        </b-btn>
                    <b-collapse id="collapse2">
                        <b-card>
                        Hell yeah!
                        </b-card>
                    </b-collapse>
                    </div>

                <div>
                    <b-btn v-b-toggle.collapse3 class="m-1" variant="outline-success" block>
                        <h4 class="mbr-fonts-style display-5">
                            <span class="sign mbr-iconfont mbri-arrow-down inactive"></span> Is travelling to Venezuela safe?
                        </h4> 
                    </b-btn>
                    <b-collapse id="collapse3">
                        <b-card>
                        Hell yeah!
                        </b-card>
                    </b-collapse>
                </div>


                    </div>
    </b-container>
    <div id="footerContainer">
    <custom-footer></custom-footer>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import footer from '@/components/footer/footer.vue';
Vue.component('custom-footer', footer);
export default {
    //  components:{
    //   'v-icon': Icon,
    // }   
}
</script>

<style scope>
  #content{
    padding-top:150px;
  }
  #footerContainer{
      margin-top:50px;
  }
</style>
