<template>
    <div class="component_container">
        <div class="boxes_container">
            <div
                :class="{'boxActive': inbox}"
                @click="inbox = true"
            >
                inbox
            </div>
            <div
                @click="inbox = false"
                :class="{'boxActive': !inbox}"
            >
                outbox
            </div>
        </div>
        <div 
            v-if="inbox"
            class="message_list_container"
        >
            <div class="listDescribe_container">
                <div style="width: 15%;">#</div>
                <div style="width: 60%;">title</div>
                <div style="width: 10%;">author</div>
            </div>
            <MessageItemComponent 
                v-for="message in inboxMessages"
                :message='message'
                :key="message"
                :inbox="inbox"
            />
        </div>
        <div 
            v-else 
            class="message_list_container"
        >
            <div class="listDescribe_container">
                <div style="width: 15%;">#</div>
                <div style="width: 60%;">title</div>
                <div style="width: 10%;">reciever</div>
            </div>
            <MessageItemComponent 
                v-for="message in outboxMessages"
                :message='message'
                :key="message"
                :inbox="inbox"
            />
        </div>

    </div>
</template>

<script>
import { axios } from '@/common/api.service.js';
import MessageItemComponent from './messageItemComponent.vue'
export default {
    name: 'MessageListComponent',
    components: {
        MessageItemComponent
    },
    data() {
        return {
            inboxMessages: [],
            outboxMessages: [],
            inbox: true,

        }
    },
    methods: {
        async getInboxList(){
            const endpoint = "/api/v1/txtmsg/inbox/"

            try {
                const response = await axios.get(endpoint)
                console.log(response.data)

                this.inboxMessages.push(...response.data)
            } catch (error) {
                console.log(error.response)
            }
        },
        async getOutboxList(){
            const endpoint = "/api/v1/txtmsg/outbox/"

            try {
                const response = await axios.get(endpoint)
                console.log(response.data)

                this.outboxMessages.push(...response.data)
            } catch (error) {
                console.log(error.response)
            }
        }
    },
    created() {
        this.getInboxList()
        this.getOutboxList()
    }
}
</script>

<style scoped> 
.component_container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.boxes_container {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
}

.boxActive {
    font-weight: bold;
    font-size: 18px;
    color: rgb(0, 161, 193);
}

.message_list_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    background-color: rgb(238, 238, 238);
    padding: 10px 0px 10px 0px;
    margin-top: 20px;
    border-radius: 5px;

}
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




.column_names_container {
    /* margin: 5px; */
    padding: 5px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px rgba(0, 0, 0, 0.182) solid;
    background-color: azure;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    height: 40px;
}

.box1 {
    width: 40%;
}
.box2 {
    width: 20%;
}
.box3 {
    width: 15%;
}

.check_box {
    width: 15%;
}
</style>