<template>
    <div v-if="this.profileStore.profile.name" class="line_style">
        <!-- {{updatedLine}} -->
        <span v-html="updatedLine"></span>
    </div>
    <div v-else>
        loading
    </div>
</template>

<script>
import { useLoggedInProfile } from '@/stores/store.js'
export default {
    name: 'SingleLineRaportComponent',
    props: ['line'],
    data() {
        return{
            updatedLine: '',
            profileStore: useLoggedInProfile()
        }
    },
    methods: {
        getLine(){
            const profileName = this.profileStore.profile.name
            this.updatedLine = this.line.replace(profileName, `<b style="font-size: 13px; color: rgb(51, 172, 164)"> ${profileName} </b>`)
        }
    },
    created(){
        console.log(this.line)
        console.log(this.profileStore.profile.name)
        this.getLine()


    },

}
</script>

<style scoped>
.line_style {
    white-space: pre-line;
}
.name_of_user {
    font-size: 15px;
    color: rgb(51, 192, 114);
}
</style>