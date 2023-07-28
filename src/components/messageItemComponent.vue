<template>

  <div class="itemContainer">
        
        <div style="width: 15%;">
            <label class="container">
                <input type="checkbox">
                <svg viewBox="0 0 64 64" height="2em" width="2em">
                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                </svg>
            </label>
        </div>
    <router-link
      style="width: 60%;" 
      class="name"
      :to="{name: 'MessageDetalView', params: {uuid: `${this.message.uuid}`}}"
    >
        {{message.title}}
    </router-link>
    <router-link  
        v-if="inbox"
        class="name"
        style="width: 10%;"
        :to="{name: 'ProfileView', params: {uuid: `${this.message.sender_uuid}`}}"
    >
        {{message.sender}}
    </router-link >
    <router-link  
        v-else
        class="name"
        style="width: 10%;"
        :to="{name: 'ProfileView', params: {uuid: `${this.message.reciever_uuid}`}}"
    >
        {{message.reciever}}
    </router-link >
  </div>
</template>

<script>
export default {
    name: 'MessageItemComponent',
    props: ['message', 'inbox']
}
</script>

<style scoped> 
.itemContainer {
    display: flex;
    align-items: center;

    width: 95%;
    height: 50px;
    margin: 5px 0 5px 0;
    background-color: rgb(255, 255, 255);

    border-radius: 5px;
}

.buttons_container {
    width: 35%;
    padding: 5px;
    display: flex;
    justify-content:space-evenly;
}
.name {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.name:hover {
    text-decoration: underline;
}

.message_container {
    /* margin: 5px; */
    padding: 5px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px rgba(0, 0, 0, 0.182) solid;
    background-color: rgba(240, 248, 255, 0);
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

.container {
    cursor: pointer;
}

.container input {
  display: none;
}

.container svg {
  overflow: visible;
}

.path {
  fill: none;
  stroke: rgba(0, 0, 0, 0.67);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.container input:checked ~ svg .path {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
}


</style>