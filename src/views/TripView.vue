<template>
  <div class="container">
    <div class="card">
      <div class="imageField">
        <img src="../../../static/photos/Stachu_dark_wizard_opening_gate.png" alt="trip_page_photo">
        <div class="whatever"></div>
      </div>
      <div class="textField">You have {{logged_in_profile.trips}} / 32 trips left</div>
      <div class="buttonField">
        <button @click="trip">trip!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTripStore } from '@/stores/store.js'
import { axios } from '@/common/api.service.js';
export default {
  name: 'TripView',
  data() {
    return {
      logged_in_profile: {}
    }
  },
  methods: {
      async getProfileData() {
          let endpoint = '/api/v1/profiles/'
          try {
              const response = await axios.get(endpoint)
              this.logged_in_profile = response.data[0]
              console.log(this.logged_in_profile)
              const store = useTripStore()
              store.updatedTrips(this.logged_in_profile.trips)
          } catch (error) {
              console.log(error.response);
              alert(error.response.statusText);
          }
      },
      async trip() {
        
        const num_of_trips = this.logged_in_profile.trips - 1

        const endpoint0 = `/api/v1/trip_results/create/`
        const endpoint = `/api/v1/profiles/${this.logged_in_profile.uuid}/`
        try {
            this.$emit('changeTripsNumber')
            const result = await axios.put(endpoint, {trips: num_of_trips})
            console.log(result)


            const result0 = await axios.post(endpoint0)
            console.log(result0.data.result)

            if (result0.data.result == 'True') {
                this.$notify({
                  title: "Trip result",
                  text: "You have successfully completed your trip!",
                  duration: 50000,
                  type: 'success'
                });
            } else {
                this.$notify({
                  title: "Trip result",
                  text: "You dont complete your trip",
                  duration: 50000,
                  type: 'warn'
                });
            }
            this.getProfileData()


        } catch (error) {
            console.log(error)
        }



        // const num_of_trips = this.logged_in_profile.trips - 1

        // const endpoint = `/api/v1/profiles/${this.logged_in_profile.uuid}/`
        // try {
        //     this.$emit('changeTripsNumber')
        //     const result = await axios.put(endpoint, {trips: num_of_trips})
        //     console.log(result)
        //     this.getProfileData()

        // } catch (error) {
        //     console.log(error)
        // }
      },
  },
  created() {
    this.getProfileData()
  }
}
</script>

<style scoped>
img {
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px black;
  opacity: 0.9;
  position: relative;
}

button {
  background: #0a1820;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid #feb584;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  margin-top: 10px;
  color: #feb584;

}

button:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

button:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}

.whatever {
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0, #000000),
        color-stop(1, rgba(0,0,0,0))
    );
    background-image: -o-linear-gradient(bottom, #000000 0%, rgba(0,0,0,0) 100%);
    background-image: -moz-linear-gradient(bottom, #000000 0%, rgba(0,0,0,0) 100%);
    background-image: -webkit-linear-gradient(bottom, #000000 0%, rgba(0,0,0,0) 100%);
    background-image: -ms-linear-gradient(bottom, #000000 0%, rgba(0,0,0,0) 100%);
    background-image: linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%);
    height:20%;
    position:relative;
    width:100%;
    top: -100%;
}

.container,
.card {
  display: flex;
  justify-content: center;
  align-items: center;

}

.container {
  width: 95%;
  height: 90vh;
}

.card {
  width: 75%;
  height: 550px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 2px black;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  padding: 20px;
}

.textField {
  font-family: 'Lugrasimo', cursive;
  font-size: 20px;
  font-weight: bold;
  color: #feb584;
}
</style>