<template>
    <div class="container">
        <div class="buttons_container">
            <button @click="equipItem">Equip</button>
            <button @click="unEquipItem">UnEquip</button>
        </div>
        <div class="itemsList">
            <div v-if="loadingData">
                <div v-for="index in 7" :key="index" class="loader">
                    <div class="wrapper">
                        <div class="line-3"></div>
                    </div>
                </div>
            </div>
            <div v-else>
                <ItemComponent
                    v-for="item in equippedItems"
                    :item="item.item"
                    :key="item.item"
                    class="container_items"
                    @addToUnCheckedList ="addToUnCheckedList"
                    :equipped ="true"
                    :clickedVar ="item.clicked"
                />
            </div>
            <div v-if="loadingData">
                <div v-for="index in 7" :key="index" class="loader">
                    <div class="wrapper">
                        <div class="line-3"></div>
                    </div>
                </div>
            </div>
            <div v-else
                class="unEquipped" >
                <ItemComponent 
                    class="container_items"
                    v-for="item in unEquippedItems" 
                    :key="item"
                    :item = "item"
                    @refreshItems = "refreshItems"
                    @addToCheckedList = 'addToCheckedList'
                    :equipped = 'false'
                > </ItemComponent>
            </div>
            <!-- <div v-else class="unEquipped">
                There is none unequipped items
            </div> -->
        </div>





    </div>
</template>

<script>
import { axios } from '@/common/api.service.js';
import ItemComponent from '../components/itemComponent.vue';
export default {
    name: 'ArmoryView',
    emits: 
        ['addToCheckedList', 'addToUnCheckedList']
    ,
    data() {
        return {
            loadingData: true,
            equippedItems: 
            [
                {
                    item: 0,
					clicked: false
				},
				{
                    item: 0,
					clicked: false
				},
				{
                    item: 0,
					clicked: false
				},
				{
                    item: 0,
					clicked: false
				},
				{
                    item: 0,
					clicked: false
				},
				{
                    item: 0,
					clicked: false
				},
				{
                    item: 0,
					clicked: false
				},
            ],
            profile: [],
            items: [],
            checkedItems: [],
            unEquippedItems: [],
            itemsToUnEquip: [],

        }
    },
    components: {
        ItemComponent
    },
    methods: {
        async getItemsData() {
            this.loadingData = true
            let endpoint = '/api/v1/items/'
            let endpoint1 = '/api/v1/eqippedItems/'
            let endpoint2 = '/api/v1/unEqippedItems/'
            try {
                this.items = []
                const response = await axios.get(endpoint)
                this.items.push(...response.data)
                console.log(this.items)

                const response1 = await axios.get(endpoint1)
                response1.data.forEach((el)=>{
                    this.equippedItems[el.itemType-1].item = el
                })
                console.log('equippedItems', this.equippedItems)

                this.unEquippedItems = []
                const response2 = await axios.get(endpoint2)
                this.unEquippedItems.push(...response2.data)
                console.log('unEquippedItems', this.unEquippedItems)
                this.loadingData = false


            } catch (error) {
                console.log(error.response);
                alert(error.response.statusText);
            }
        },
        refreshItems() {
            this.getItemsData()
        },
        addToUnCheckedList(item) {
            if (this.itemsToUnEquip.includes(item)) {
                this.itemsToUnEquip.splice(this.itemsToUnEquip.indexOf(item), 1)
                this.equippedItems[item.itemType-1].clicked = false
            } else {
                this.itemsToUnEquip.push(item)
                this.equippedItems[item.itemType-1].clicked = true
            }
        },
        addToCheckedList(item){
            if (this.checkedItems.includes(item)) {
                this.checkedItems.splice(this.checkedItems.indexOf(item), 1)
            } else {
                this.checkedItems.push(item)
            }
        },
        async equipItem(){
            await this.checkedItems.forEach((el)=>{
                let endpoint = `/api/v1/items/${el.uuid}/`

                try {
                    if ( this.equippedItems[el.itemType-1].item == 0) {
                        axios.put(endpoint, {equipped: true})
                        this.checkedItems.splice(this.checkedItems.indexOf(el))
                        this.getItemsData()
                    } else {
                            this.$notify({
                                title: "Armory alert",
                                text: "You have already equipped that slot",
                                duration: 4000,
                                type: 'warn'
                            });
                        console.log('u already equipped item on this slot')
                    }
                } catch (error) {
                    console.log(error.response)
                    alert(error.response.statusText)
                }
            })
        },
        async unEquipItem(){
            await this.itemsToUnEquip.forEach((el)=>{
                let endpoint = `/api/v1/items/${el.uuid}/`
                try {

                    axios.put(endpoint, {equipped: false})
                    this.itemsToUnEquip.splice(this.itemsToUnEquip.indexOf(el))
                    this.equippedItems[el.itemType-1].item = 0
                    this.equippedItems[el.itemType-1].clicked = false
                    this.getItemsData()

                } catch (error) {
                    console.log(error.response)
                    alert(error.response.statusText)
                }
            })
        }
    },
    created() {
        this.getItemsData()
        console.log(this.items)
    }
}
</script>

<style scoped>
button {
  background: rgb(0, 161, 193);
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  margin-top: 10px;
}

button:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

button:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}

.container {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    justify-content: space-around;
    align-items: center;
}
.container_items {
    border: 1px solid black;
    width: 100px;
    height: 20px;
    position: relative;
    margin-bottom: 10px;
}

.itemsList {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: start;
    flex-direction: row;
}

.checkMark {
    height: 100%;
    width: 20px;
    border: 1px solid rgba(0, 0, 0, 0.329);
    position: absolute;
    top: 0px;
    left: 0px;
    cursor: pointer;
}

.loader {
  position: relative;
  width: 100px;
  height: 20px;
  margin-bottom: 10px;
  border: 1px solid #00000000;
  /* padding: 15px; */
  background-color: #e3e3e3;
  overflow: hidden;
}

.loader:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(110deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgba(227, 227, 227, 0.5) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
  animation: gradient-animation_2 1.2s linear infinite;
}

.loader .wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.loader .wrapper > div {
  background-color: #ffffff;
}

.loader .button {
  display: inline-block;
  height: 32px;
  width: 75px;
}


.loader .line-3 {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}

.buttons_container {
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
}


@keyframes gradient-animation_2 {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>