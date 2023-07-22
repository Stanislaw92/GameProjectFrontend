<template>
	<div v-if="item != 0" class="itemContainer">
		{{ item.name }}

		<div class="checkMark" @click="checkUnCheck">
			<i v-if="clicked" class="fa-solid fa-check" style="color: #27282a"> </i>
		</div>
	</div>
	<div v-else class="itemContainer">
		empty
		<div class=""></div>
	</div>
</template>

<script>
// import { axios } from '@/common/api.service.js';
export default {
	name: 'ItemComponent',
	props: ['item', 'equipped', 'clickedVar'],
	data() {
		return {
			clicked: this.clickedVar,
		};
	},
	methods: {
		checkUnCheck() {
			this.clicked = !this.clicked;
			if (this.equipped && this.item != 0) {
				this.$emit('addToUnCheckedList', this.item);
			} else {
				this.$emit('addToCheckedList', this.item);
			}
		},
	},
};
</script>

<style scoped>
.itemContainer {
	border: 1 solid black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
    padding: 3px;
	/* position: absolute; */
}

.checkMark {
	height: 100%;
	width: 20px;
	border-left: 1px solid black;
	position: absolute;
	top: 0px;
	left: 80px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
