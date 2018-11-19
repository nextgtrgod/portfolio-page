<template>
<div id="app" :class="{ loaded }">
	<div class="scroll-snap"/>
	<div class="scroll-snap" id="scroll-anchor"/>
	<div class="scroll-snap"/>

	<bulbs :section="section" :invert="invert"/>

	<main>
		<about :visible="section === 'about'" :invert="invert"/>	
		<skills :visible="section === 'skills'"/>
		<projects :visible="section === 'projects'"/>

		<!-- <span class="pos">{{ pos }}</span> -->

	</main>

	<button id="scroll-to" :class="{ visible: section === 'about', invert }" @click="scrollNext">
		<span/>
		<span/>
		<span/>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7.4">
			<path fill="#111" d="M1.4 0L6 4.6 10.6 0 12 1.4l-6 6-6-6L1.4 0z"/>
			<path fill="none" d="M-6-8.6h24v24H-6v-24z"/>
		</svg>
	</button>
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
			loaded: false,

			height: window.innerHeight,
			section: 'about',
			count: 3,
			rafId: null,
			pos: 0,
			browser: '',
			invert: false,
		}
	},
	created() {
		this.browser = checkBrowser()
		document.getElementsByTagName('html')[0].classList.add(this.browser)

		window.addEventListener('resize', () => this.height = window.innerHeight)

		// temp darkmode
		document.addEventListener('keypress', ({ keyCode }) => {
			(keyCode === 100) && (this.invert = !this.invert)
		})
	},
	mounted() {
		this.prevPos = this.$el.scrollTop
		this.rafId = this.handleScroll()

		this.loaded = true
	},
	methods: {
		handleScroll() {
			let pos = this.$el.scrollTop
			// this.pos = pos

			if (pos === this.prevPos) return requestAnimationFrame(this.handleScroll)

			this.prevPos = pos

			if (pos < this.height) this.section = 'about'
			else if ((pos >= this.height) && (pos < 2 * this.height)) this.section = 'skills'
			else this.section = 'projects'

			return requestAnimationFrame(this.handleScroll)
		},

		scrollNext() {
			this.$el.scrollTop = window.innerHeight
		},
	},
	beforeDestroy() {
		cancelAnimationFrame(this.rafId)
	},
	watch: {
		section(to, from) {
			console.log(from, '->', to)

			// disableScroll()
			// setTimeout(enableScroll, 100)
		},

		invert(invert) {
			if (invert) document.body.classList.add('invert')
			else document.body.classList.remove('invert')
		},
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
	transition: background 400ms;

	&.invert {
		background-color: #0d0d0d !important;
		// background-color: #111 !important;
	}
}


#app {
	position: relative;
	scroll-snap-type: y mandatory;
	overflow-y: auto;
	max-height: 100vh;
	opacity: 0;

	&.loaded {
		animation: fade-in 400ms forwards;
	}
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
	bottom: 5px;
	right: 20px;
	font-size: 42px;
	font-weight: 700;
}


#scroll-to {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 50%;
	bottom: 20px;
	padding: 10px 20px;
	transform: translateX(-50%);
	opacity: 0;
	pointer-events: none;
	transition: all 200ms;
	animation: bounce 2s infinite ease-in-out;

	&.visible {
		opacity: 1;
		pointer-events: all;
	}

	&.invert {
		span {
			background-color: #FFF;
		}

		svg path:first-child {
			fill: #FFF;
		}
	}

	span {
		width: 2px;
		height: 6px;
		background-color: @color-dark;
		margin-top: 4px;
		transition: background 400ms;
	}

	svg {
		margin-top: 2px;
		width: 14px;

		path {
			transition: fill 400ms;
		}
	}

	// &:after {
	// 	content: '';
	// 	position: absolute;
	// 	left: 0;
	// 	right: 0;
	// 	bottom: -2.6em;
	// 	margin: auto;
	// 	width: 4em;
	// 	height: 4em;
	// 	background-image: url('./assets/images/chevron.svg');
	// 	opacity: .8;
	// 	background-position: center;
	// 	background-size: cover;
	// 	background-repeat: no-repeat;
	// 	animation: bounce 2s infinite;
	// }
}

</style>
