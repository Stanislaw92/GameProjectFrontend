<template>
    <div>
        {{message.text}}
    </div>
</template>

<script>
import { axios } from '@/common/api.service.js';
export default {
    name: 'MessageDetalView',
    props: ['uuid'],
    data() {
        return {
            message: ''
        }
    },
    methods: {
        async getMessage() {
            const endpoint = `/api/v1/txtmsg/${this.uuid}/`
            try {
                const response = await axios.get(endpoint)
                this.message = response.data
                
                console.log(this.message)
            } catch (error){
                console.log(error)
            }
        }
    },
    created() {
        this.getMessage()
    }
}
</script>

<style scoped>

</style>