<template>
    <div class="card_container">
        <div class="personal_container">
            <div class="data_box">name: {{profile.name}}</div>
            <div class="data_box"></div>
            <div class="data_box"></div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProfileInspectComponent',
    props: ['profile']
}
</script>

<style scoped>
.card_container {
    margin: 20px;
    padding: 10px;
    width: 50%;
    height: 300px;
    background-color: rgba(128, 128, 128, 0.425);
    display: flex;
    flex-direction: column;
}

.personal_container {
    padding: 5px;
    width: 50%;
    height: 80px;
    background-color: rgba(0, 0, 255, 0.419);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
}

.data_box {
    /* margin: 2px; */
    font-size: 13px;
    margin: 2px 0 2px 0;
    background-color: white;
    height: 30px;
    width: 100%;
    box-shadow: inset 0 0 10px #000000ab;
}
</style>