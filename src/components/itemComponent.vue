<template>
	<div v-if="item.item != 0" class="itemContainer">
		{{ item.item.name }}

		<div class="checkMark" @click="checkUnCheck">
			<i v-if="checked" class="fa-solid fa-check" style="color: #27282a"> </i>
		</div>
	</div>
	<div v-else class="itemContainer">
		empty
		<div class=""></div>
	</div>
</template>
l
<script>
// import { axios } from '@/common/api.service.js';
export default {
	name: 'ItemComponent',
	props: ['item', 'equipped', 'checked'],
	data() {
		return {
			clicked: this.checked,
			itemVar: null
		};
	},
	methods: {
		checkUnCheck() {
			if (this.equipped && this.item.item != 0) {
				this.$emit('addToUnEquipList', this.item);
			} else {
				this.$emit('addToEquipList', this.item);
			}
		},
	},
	created() {
	},
};
</script>

<style scoped>
.itemContainer {
	border: 1 solid black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
    padding: 3px;
	font-size: 10px;
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
