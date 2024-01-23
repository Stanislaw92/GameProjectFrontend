<template>
    <div class="divCont">
      <div class="testDiv">
        <div class="divStyle circleStyle">
          <div class="circle">
            <img :src="profile.photo" alt="">
          </div>
          <div class="circle circle3" @click="addXp(50)">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="divStyle textBox">
          <div>
            <div style="text-align:start;font-weight:bold;font-size:18px;">{{profile.name}}</div>
            <div style="text-align:start;font-size:18px;">rasa: {{profile.race}}</div>
          </div>
          <div class="statistic_container">
            <p class="statistic">stat1: 
              <b
                :style="profile.equip_stat1+profile.stat1>profile.stat1?{color: 'green'}:{color:'black'}"
              >{{profile.equip_stat1+profile.stat1}}</b>
            </p>
            <p class="statistic">stat2: <b :style="profile.equip_stat2+profile.stat2>profile.stat2?{color: 'green'}:{color:'black'}">{{profile.equip_stat2+profile.stat2}}</b></p>
            <p class="statistic">stat3: <b :style="profile.equip_stat3+profile.stat3>profile.stat3?{color: 'green'}:{color:'black'}">{{profile.equip_stat3+profile.stat3}}</b></p>
            <p class="statistic">stat4: <b :style="profile.equip_stat4+profile.stat4>profile.stat4?{color: 'green'}:{color:'black'}">{{profile.equip_stat4+profile.stat4}}</b></p>
            <p class="statistic">stat5: <b :style="profile.equip_stat5+profile.stat5>profile.stat5?{color: 'green'}:{color:'black'}">{{profile.equip_stat5+profile.stat5}}</b></p>
          </div>
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
      <div class="innerElement" :style="inner_element_style"></div>
      <div class="bottom_element"></div>
      <button>test</button>
    </div>
</template>

<script>

import { axios } from '@/common/api.service.js';


export default {
  name: 'HomeView',
  data() {
    return {
      inner_element_style: 'height: 1px;',
      profile: [],
      items: [],
    }
  },
  components: {
  },
  methods: {
    test(){
      this.$notify({
        title: "Important message",
        text: "Hello user!",
        duration: 400000,
        type: 'success'
      });
    },

    //Get data of logged in profile
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


    //Delete exact item function
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

    //Adding random item function, fust for testing purpose
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
    },

    //function to add xp after atack or trip or other source of expieriece points, addedXp is the number of xp u want to add.
    async addXp(addedXp) {
      const endpoint = `api/v1/profiles/${this.profile.uuid}/`
      try {
          const xpGain = addedXp + this.profile.xp0
          const listResult = this.updateXP(xpGain, this.profile.xp1, this.profile.lvl)
          console.log(listResult)
          const result = await axios.put(endpoint, {xp0: listResult[0], xp1: listResult[1], lvl: listResult[2]})
          console.log(result)
          this.getProfileData()
      } catch (error) {
          console.log(error)
      }
    },
    updateXP(xp0, xp1, lvl){
      let errorCounter = 0
      while (xp0 >= xp1){
        lvl += 1
        xp0 = xp0 - xp1
        xp1 = Math.round(xp1*19/18)
        errorCounter += 1
        if ( errorCounter >= 10){
          break
        }
      }
      console.log(xp0, xp1, lvl)
      return [xp0, xp1, lvl]
    },
    update_inner_element_height() {
      if ( this.inner_element_style == 'height: 1px;') {
        this.inner_element_style = 'height: 100px;'
      } else {
        this.inner_element_style = 'height: 1px;'
      }
    },
  },
  
  created() {
    document.title = 'Game Project'
    this.getProfileData()
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
/* .divCont {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 97%;
  height: 96%;
} */

.testDiv {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding:20px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #ecd08b;
  border-radius: 20px 20px 0 0 ;
  justify-content:space-between;
  align-items: flex-start;
  border-bottom: 1px #ecd08b solid;
}

.bottom_element {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* padding:20px; */
  height: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #ecd08b;
  border-radius: 0 0 20px 20px;
  align-items: flex-start;
  border-top: 1px #ecd08b solid;
}

.innerElement {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #ecd08b;
  align-items: flex-start;
  box-shadow: inset 0 0 10px #00000033;
  transition: height 2s;
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
  align-items: flex-start;
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

  display: flex;
  justify-content: center;
  align-items: center;

}

.circle img {
  z-index: -1;
  width:95%;
  height: 95%;
  object-fit:cover;
  overflow:hidden;
  border-radius: 100%;
  /* position: relative; */
}

.statistic_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  width: 35%;
}
.statistic {
  margin: 1px;
}

.dot {
  background-color: rgba(0, 0, 0, 0.733);
  height: 4px;
  width: 4px;
  border-radius: 100%;
  margin: 2.5px;
}

.textBox {
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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