<template>
    <div id="content"><br><br>
    
        <b-container fluid>
            <h1 class="text-center">Pick your destination</h1><br>
            <b-row>
                <b-col style="float: none; margin: 0 auto;" class="destinationColumn" @click="showModal(place)" cols="12" sm="auto" md="auto" lg="auto" v-for="place in places" >
                    <destination-card
                        :instance= "place"
                    >
                    </destination-card>
                </b-col>
            </b-row>
        </b-container><br><br>
        <wkt-footer></wkt-footer>


        <!-- Modal Component -->

      <b-modal ref="myModalRef" hide-footer size="xl" variant="primary" :title="modal.title">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>


    </div>
</template>
<script>
import Vue from 'vue';
import footer from '@/components/footer/footer.vue';
Vue.component('wkt-footer', footer);

import desinationCard from '@/components/destinationCard/destinationCard.vue'
export default {
    components:{
        'destination-card':desinationCard
    },
    methods:{
        showModal(place) {
            console.log(this)
            console.log(place)
            this.selectCard(place)
            this.$refs.myModalRef.show()
        },
        hideModal() {
            this.$refs.myModalRef.hide()
        },
        selectCard(place){
            this.places.forEach(instance => {
                if (place.id==instance.id) {
                    place.active=true;
                }else{
                    instance.active=false;
                }
            })
        }
    },
    data(){
        return {
            modal:{
                title:'',
                content:'place explanation'
            },
            places:[
                {
                    id:1,
                    title:'Los Roques',
                    active:false,
                    btntext:'Take me there',
                    imageSrc:'http://www.losroques.com/posada/images/gallery/home/LogoLicious_20161012_221300.png',
                    text:'Pearly sand beaches, clear blue waters and the warmth of the Caribbeans most exotic destination'
                },
                {
                    id:2,
                    title:'Canaima',
                    active:true,
                    btntext:'Take me there',
                    imageSrc:'http://ciudadccs.info/wp-content/uploads/2017/12/canaima-1132x670.jpg',
                    text:'Land of magical waterfalls and lagoons, with caves with interiors lined by beaufiul crystals. Home of angel falls and considered natures geological masterpiece.',
                },
                {
                    id:3,
                    title:'Jericoacoara',
                    active:false,
                    btntext:'Take me there',
                    imageSrc:'https://ogimg.infoglobo.com.br/in/20995746-80f-614/FT1500A/650/INFOCHPDPICT000064823141.jpg',
                    text:'Wind Paradise with hundreds of world renowned spots with crystal lagoons, desert dunes and amazing sunsets. If you want to get away from it all and enjoy water sports and the ocean, this is the place for you.'
                }
            ]
        }
    }
}
</script>
<style scoped>
    /* #content{
        padding-top: 250px;
    } */
    /* .destinationColumn{
        margin:0 auto;
    } */
</style>

