import { defineStore } from 'pinia'

export const useTripStore = defineStore({
    id: 'tripStore',
    state: () => ({
        trips: 10,
        timer: 0
    }),
    actions: {
        updatedTrips(x){
            this.trips = x
        },
        updateTimer(x){
            this.timer = x
        },
    }
})

export const useReplyMsgUuid = defineStore({
    id: 'replyMsgStore',
    state: () => ({
        uuid: null,
        title: null
    }),
    actions: {
        updateUuid(x){
            this.uuid = x
        },
        updateTitle(x){
            this.title = x
        }
    }
})

export const useLoggedInProfile = defineStore({
    id: 'loggedInProfile',
    state: () => ({
        profile: null,

    }),
    actions: {

        updateProfile(x){
            this.profile = x
        }
    }
})

