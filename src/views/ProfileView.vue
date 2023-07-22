<template>
    <div>
        <div>{{profil.name}}</div>
        <div>{{profil.race}}</div>
        <div>{{profil.lvl}}</div>
    </div>
</template>

<script>
import { axios } from '@/common/api.service.js';
export default {
    name: 'ProfileView',
    props: ['uuid'],
    data() {
        return {
            profil: {}
        }
    },
    methods: {
        async getProfile(){
            const endpoint = `/api/v1/profiles/${this.uuid}/`
            try {
                const response = await axios.get(endpoint)
                this.profil = response.data
                console.log(this.profil)
                } catch (error) {
                    console.log(error.response);
                    alert(error.response.statusText);
                }
        }
    },
    created() {
        this.getProfile()
    }
}
</script>

<style scoped>

</style>