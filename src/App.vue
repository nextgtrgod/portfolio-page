<template>
<div id="app">
	<div class="scroll-snap"/>
	<div class="scroll-snap"/>
	<div class="scroll-snap"/>

	<bulbs/>

	<main>
		<about :visible="section === 'about'"/>	
		<skills :visible="section === 'skills'"/>
		<projects :visible="section === 'projects'"/>

		<span class="pos">{{ pos }}</span>

	</main>
</div>
</template>


<script>
import Events from '@/utils/events'
import checkBrowser from '@/utils/checkBrowser'
// import { enableScroll, disableScroll } from '@/utils/scroll'

import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Bulbs from '@/components/Bulbs'

export default {
	name: 'App',
	components: {
		About,
		Skills,
		Projects,
		Bulbs,
	},
	data() {
		return {
			height: window.innerHeight,
			section: 'about',
			count: 3,
			rafId: null,
			pos: 0,
			browser: '',
		}
	},
	created() {
		this.browser = checkBrowser()
		document.getElementsByTagName('html')[0].classList.add(this.browser)

		window.addEventListener('resize', () => this.height = window.innerHeight)
	},
	mounted() {
		this.rafId = this.handleScroll()

		window.addEventListener('scroll', function() {
			console.log('dsa')
		})
	},
	methods: {
		handleScroll() {
			let pos = this.$el.scrollTop
			this.pos = pos

			if (pos < this.height) this.section = 'about'
			else if ((pos >= this.height) && (pos < 2 * this.height)) this.section = 'skills'
			else this.section = 'projects'

			return requestAnimationFrame(this.handleScroll)
		},
	},
	beforeDestroy() {
		cancelAnimationFrame(this.rafId)
	},
	watch: {
		section(to, from) {
			console.log(from, to)

			// disableScroll()
			// setTimeout(enableScroll, 100)
		}
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
	color: @color-dark;
	font-family: @font-default;
	background-color: @color-bg;
}

body {
	overflow: hidden;
}


#app {
	position: relative;
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
	pointer-events: none;
}

.pos {
	position: absolute;
	top: 120px;
	right: 20px;
	font-size: 42px;
	font-weight: 700;
}

</style>
