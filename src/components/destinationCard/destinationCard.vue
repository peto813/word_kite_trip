<template>
    <div class="elem" v-bind:class="{ isActive: instance.active}">
        <b-card :title="instance.title"
                :img-src="instance.imageSrc"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
            <p class="card-text text-justify">
                {{instance.text}}
            </p>
            <div class="text-center">
                <b-form >
                        <b-button @click.stop="greet(instance.title)"  variant="primary">{{instance.btntext}}</b-button>
                </b-form>
                
            </div>
    </b-card>
    </div>
</template>
<script>
export default {
    props:{
        instance:Object
    },
  methods: {
    greet: function () {

        alert('ssjot')
    }
  }
}
</script>
<style scoped>

.elem{
    border:5px solid transparent;
    transition:border 0.5s ease;
    padding:5px;
    cursor:pointer;
}
.card-title{
    text-align: center;
}
div.card-body{
    height:256px!important;
}
.card{
    height:551px;
}
.isActive{
    border:5px solid red;
    border-radius:5px;
    
}

</style>

