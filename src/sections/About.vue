<template>
<section id="about" :class="{ visible }">
	<ul class="contacts">
		<li><a href="mailto:kyakovlev7@gmail.com"/></li>
		<li><a href="https://github.com/nextgtrgod" target="_blank"></a></li>
	</ul>

	<div data-speed="2" class="movable"/>
	<div data-speed="4" class="movable"/>
	<h1 data-speed="1" class="movable">Hi,<br>I'm Kirill,<br>web developer</h1>
	<h2 data-speed="2" class="movable">let's do a better web today</h2>
	<div data-speed="3" class="movable"/>
</section>
</template>


<script>
import Events from '@/utils/events'
import Parallax from '@/utils/parallax'

export default {
	name: 'About',
	props: {
		visible: {
			type: Boolean,
			required: true,
		},
	},
	mounted() {
		this.animation = new Parallax()

		let nodes = [...document.querySelectorAll('.movable')]

		nodes.map(node => this.animation.add(node))

		this.animation.start()
	},
	watch: {
		visible(visible) {
			if (visible) this.animation.start()
			else this.animation.stop()
		},
	},
}
</script>


<style lang="less" scoped>
@import "../styles/variables.less";
@import "../styles/section.less";


#about {
	width: 60%;
	left: 40%;
	font-size: 14px;
}


ul.contacts {
	// display: none !important; // delete this
	position: absolute;
	top: 0;
	right: 25px;
	// right: 220px;
	display: flex;
	font-size: 0;
	// opacity: 0;
	// pointer-events: none;
	// transition: opacity .2s;
	pointer-events: all;

	&.visible {
		opacity: 1;
		pointer-events: all;
	}

	li {
		width: 48px;
		height: 48px;
		margin: 12px 8px;
		transform: scale(0.95);
		transition: transform 300ms;

		&:hover {
			transform: scale(1.1);
		}
	}

	a {
		display: block;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		&[href*='gmail'] {
			background-image: url('../assets/images/gmail.svg');
		}

		&[href*='github'] {
			background-image: url('../assets/images/github.svg');
		}
	}
}


.movable {
	position: absolute;
	will-change: transform;
	box-shadow: 0 5px 45px -10px fade(@color-dark, 15%);
}

h1, h2 {
	line-height: 1;
	text-shadow: -1px 1px 0 @color-dark;
}

h1 {
	position: absolute;
	top: 22%;
	left: -15%;
	font-size: 4.2em;
	padding: .15em .2em;
	padding-bottom: .2em;
	font-weight: 600;
	background-color: @color-primary;
}

h2 {
	position: absolute;
	top: 62%;
	left: -10%;
	color: #FFF;
	font-size: 4em;
	padding: .1em;
	padding-top: 0;
	background-color: @color-dark;
	mix-blend-mode: darken;
}

div {
	position: absolute;
	pointer-events: none;

	&:nth-of-type(1) {
		top: 2%;
		left: 25%;
		width: 15%;
		height: 55%;
		background-color: @color-accent;
	}
	
	&:nth-of-type(2) {
		top: 12%;
		left: 46%;
		width: 5%;
		height: 75%;
		background-color: #FE1235;
	}

	&:nth-of-type(3) {
		top: 22%;
		left: 42%;
		width: 4vw;
		height: 4vw;
		background-color: #111;
		border-radius: 50%;
		mix-blend-mode: saturation;
	}
}

</style>
