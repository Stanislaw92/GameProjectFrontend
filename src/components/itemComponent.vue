<template>

	<div v-if="equipped">

		<div v-if="item.item != 0" class="itemContainer" :class="{item_component_clicked_bg : checked}">
			{{ item.item.name }}

			<div class="checkMark" @click="checkUnCheck">
				<i v-if="checked" class="fa-solid fa-check" style="color: #27282a"> </i>
				<!-- <Icon v-if="checked" icon="charm:cross" /> -->
			</div>
		</div>
		<div v-else class="itemContainer">
			empty
			<div class=""></div>
		</div>

	</div>

	<div v-else>

		<div v-if="item.item != 0" class="itemContainer" :class="{item_component_clicked_bg:checked}">
			{{ item.item.name }}

			<div class="checkMark" @click="checkUnCheck">
				<i v-if="checked" class="fa-solid fa-check" style="color: #27282a"> </i>
			</div>
		</div>
		<div v-else class="itemContainer">
			empty
			<div class=""></div>
		</div>

	</div>
</template>
l
<script>
import { Icon } from '@iconify/vue';
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
	components: [
		Icon
	],
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
/* .item_component_border {
	border: 1px solid black;
	padding: 3%;
	margin: 5px;
} */

/* .itemContainer {
	height: 30px;
	width: 200px;
	border: 1px solid rgb(0, 0, 0);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
    padding: 0 0 0 10px;
	font-size: 10px;
	
} */

.checkMark {
	height: 100%;
	width: 30px;
	border-left: 1px solid black;
	/* position: absolute; */
	top: 0px;
	border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
	left: 80px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
}



.itemContainer {
	width: 200px;
	height: 30px;
	margin: 5px 0 5px 0;
	font-family: 'Just Another Hand', cursive;
	padding-left: 10px;
    display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
    border: 1px solid #333333;
    font-size:12px;
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    text-transform: uppercase;
    letter-spacing: 0.01ch;
    position: relative;
}


.item_component_clicked_bg {
	background: #cd9c52ad;
}

.itemContainer::before {
	content: '';
	border: 1px solid #353535;
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
	border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
}



</style>
