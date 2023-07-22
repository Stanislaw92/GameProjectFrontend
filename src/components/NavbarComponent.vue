<template>

    <nav class="navbar">
        <div class="navbar_container">
            <router-link 
                :to="{name: 'home'}" 
                class="navbar_brand"    
                :class="{ actual_page: $route.path == '/'}"
                :style="$route.path=='/'?{borderBottom: '3px solid #ecd08b', color: '#ecd08b'}:{}"
            >

                Game
            </router-link>
            <router-link 
                :to="{name: 'ArmoryView'}" 
                class="navbar_brand small-1"    
                :class="{ actual_page: $route.path == '/armory/'}"
            >
                Armory
            </router-link>
            <router-link 
                :to="{name: 'TripView'}" 
                class="navbar_brand small-1"    
                :class="{ actual_page: $route.path == '/tripView/'}"
            >
                Trip
            </router-link>
            <router-link 
                :to="{name: 'RankingView'}" 
                class="navbar_brand small-1"    
                :class="{ actual_page: $route.path == '/ranking/'}"
            >
                Ranking
            </router-link>




        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
    components: {

    },
    created(){
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: end;
    justify-content: start;
    width: 90%;
    height: 50px;
    border-bottom: 1px rgba(60, 60, 60, 0.353) solid;
    margin-bottom: 10px;
    /* background-color: rgba(165, 165, 165, 0.242); */
    padding: 0;
}
.navbar_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    /* margin-left: 20%; */

}
.navbar_brand {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Comic Sans MS, Comic Sans, cursive;
    color: black;
    text-decoration: none;
    font-size: 20px;
    margin-left: 20px;
    border-bottom: 3px solid rgba(0, 161, 193, 0);
}   

/* .navbar_brand:focus {
    border: 3px solid rgba(0, 161, 193, 0.614);
    box-shadow: 1px 0px 1px 0px rgba(0, 161, 193, 0.614);
} */

.actual_page {
    border-bottom: 3px solid rgb(0, 161, 193);
    /* border: 0 0 3px 0 solid rgb(0, 161, 193); */
    color: rgb(0, 161, 193);
}

.small-1 {
    font-size: 15px
}
</style>