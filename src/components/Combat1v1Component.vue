<template>
    <div 
        class="wrap-it">
        <img src="../../../static/photos/clash.jpg" class="clash_image" />
        <div class="round_container" v-for="(round, index) in testArr" :key="round">
            <RaportRoundComponent 
                :round = "round"
                :profile = "profile"
                :message = "message"
                :index="index"
            />
            
        </div>
        <div class="horizontal_line">
            Winner is {{message.winner}}
        </div>
    </div> 
</template>

<script>
import RaportRoundComponent from './RaportRoundComponent.vue'
export default {
    props: ['message', 'testArr'],
    name: 'Combat1v1Component',
    components: {
        RaportRoundComponent
    }
}
</script>

<style scoped>
.clash_image {
    width: 100%;
    /* height: 70vh; */
    margin-top: 0;
    background-position: center;
    background-size: cover;
}
</style>