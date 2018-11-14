<template>
<div id="app">
	<div class="scroll-snap"/>
	<div class="scroll-snap"/>
	<div class="scroll-snap"/>

	<main>

	</main>
</div>
</template>


<script>
import Events from '@/utils/events'
import checkBrowser from '@/utils/checkBrowser'

export default {
	name: 'App',
	data() {
		return {

		}
	},
	beforeCreate() {
		checkBrowser()
	},
	created() {

	},
	mounted() {

	},
}
</script>


<style lang="less">
@import "./styles/normalize.less";
@import "./styles/variables.less";
@import "./styles/animations.less";
@import "./styles/scrollbar.less";
@import "./styles/cursor.less";


html, body {
	font-family: @font-default;
	background-color: @color-bg;
}

body {
	overflow: hidden;
}


#app {
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	max-height: 100vh;
	opacity: 0;
	animation: fade-in .4s forwards;
}

.scroll-snap {
	height: 100vh;
	scroll-snap-align: start;
	scroll-snap-stop: always;
}


main {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

</style>
