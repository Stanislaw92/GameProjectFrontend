<template>
  <div class="container">
    <div class="square">

    </div>
  </div>
</template>

<script>
export default {
  name: 'TripView',
  data() {
    return {
    }
  },
}
</script>

<style>
.container {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.square {
  width: 200px;
  height: 200px;
  background-color: yellow;

  animation-name: spinning;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

}

@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>