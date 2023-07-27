import { defineStore } from 'pinia'

export const useTripStore = defineStore({
    id: 'tripStore',
    state: () => ({
        trips: 10,
    }),
    actions: {
        updatedTrips(x){
            this.trips = x
        }
    }
})