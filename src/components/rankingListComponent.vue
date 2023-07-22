<template>
    <div>
        <div class="listDescribe_container">
            <div style="width: 5%;">#</div>
            <div style="width: 40%;">name</div>
            <div style="width: 10%;">race</div>
            <div style="width: 10%;">lvl</div>
            <div class="buttons_container">
                <div>spy</div>
                <div>atack</div>
                <div>add</div>
            </div>
        </div>
        <RankingItemComponent 
            v-for="player, index in players"
            :player="player"
            :index ="index"
            :key="player"
        ></RankingItemComponent>
    </div>
</template>

<script>
import RankingItemComponent from '../components/rankingItemComponent.vue';
export default {
    name: 'rankingListComponent',
	props: ['players'],
    components: {
        RankingItemComponent
    },
	data() {
		return {}
    }
}
</script>

<style scoped>
.listDescribe_container {
    display: flex;
    align-items: center;

    width: 95%;
    height: 25px;
    margin: 5px 0 5px 0;
    background-color: rgba(31, 31, 31, 0.819);

    border-radius: 5px;
    color: rgb(223, 223, 223);
}

.buttons_container {
    width: 35%;
    padding: 5px;
    display: flex;
    justify-content:space-evenly;
}
</style>