<template>
  <div class="home">
    <div class="divCont">
      <div class="testDiv">
        <div class="divStyle circleStyle">
          <div class="circle"></div>
          <div class="circle circle3">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="divStyle textBox">
          <div style="text-align:start;font-weight:bold;font-size:18px;">{{profile.name}}</div>
          <div style="text-align:start;font-size:18px;">rasa: {{profile.race}}</div>
        </div>
        <div class="divStyle">
          <div class="xpText">
            <div>Expierience points: <b>{{profile.xp0}}</b>/{{profile.xp1}}</div>
            <div>lvl: <b>{{profile.lvl}}</b></div>
          </div>
          <div class="progressBar__container">
            <div 
              :style="{'width': (profile.xp0/profile.xp1)*100 + '%'}"
              class="progressBar__inside"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from '@/common/api.service.js';


export default {
  name: 'HomeView',
  data() {
    return {
      profile: [],
      items: [],
    }
  },
  methods: {
    async getProfileData() {
      let endpoint = '/api/v1/profiles/'
      try {
        const response = await axios.get(endpoint)
        this.profile = response.data[0]
        console.log(this.profile)
      } catch (error) {
				console.log(error.response);
				alert(error.response.statusText);
      }
    },
    async getItemsData() {
      let endpoint = '/api/v1/items/'
      try {
        const response = await axios.get(endpoint)
        this.items.push(...response.data)
        console.log(this.items)
      } catch (error) {
        console.log(error.response);
        alert(error.response.statusText);
      }
    },
    async deleteItem(uuid, item){
      let endpoint = `/api/v1/items/${uuid}/`
      try {
        await axios.delete(endpoint)
        this.items.splice(this.items.indexOf(item), 1)
        console.log(this.items)
      } catch (error) {
        console.log(error.response)
        alert(error.response.statusText)
      }
    },
    async addItem(){
      const x = Math.floor(Math.random() * 1000)
      if (x > 500) {
        let endpoint = '/api/v1/items/create/'
        try {
          const result = await axios.post(endpoint)
          this.items.push(result.data)
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log('u dont succed during ur trip')
      }

    }
  },
  created() {
    document.title = 'Game Project'
    this.getProfileData()
    this.getItemsData()
  }
}
</script>

<style scoped>
.home {
  /* margin: auto; */
  padding: 10px;
  height: 90vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgb(3, 0, 91);
}
.divCont {
  width: 97%;
  height: 96%;
}

.testDiv {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding:20px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #ecd08b;
  border-radius: 20px;
  justify-content:space-between;
  align-items: start;
  align-self: flex-start;
  justify-self: flex-start;
}

.divStyle {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.divStyle:nth-child(3){
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.progressBar__container {
  height: 5px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.225);
}

.progressBar__inside {
  height: 100%;
  width: 0%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.599);
}

.circleStyle {
  height: 100px;
}

.circle {
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background-color: white;
  z-index: 3;
}

.dot {
  background-color: rgba(0, 0, 0, 0.733);
  height: 4px;
  width: 4px;
  border-radius: 100%;
  margin: 2.5px;
}

.textBox {
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
}

.circle3 {
  background-color: rgba(255, 237, 144, 0.758);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.xpText {
  width: 100%;
  margin-bottom: 5px;
  font-size: 12px;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
}
</style>
