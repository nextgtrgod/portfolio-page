<template>
<section id="about" :class="{ visible, invert }">
	<ul class="contacts">
		<li>
			<a href="mailto:kyakovlev7@gmail.com">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path fill="#fff" d="M501.551 387.058c0 28.498-23.312 51.808-51.809 51.808H62.258c-28.496 0-51.809-23.311-51.809-51.808V124.942c0-28.497 23.313-51.808 51.809-51.808h387.484c28.497 0 51.809 23.311 51.809 51.808v262.116z"/>
					<path fill="#d50707" d="M62.258 438.867h10.885v-276.32l182.716 147.187 182.716-147.187v276.319h11.166c26.683 0 48.816-20.435 51.528-46.43V124.942c0-28.498-23.313-51.808-51.809-51.808L255.859 229.627 62.258 73.133c-28.496 0-51.809 23.311-51.809 51.808v262.117c0 28.498 23.313 51.809 51.809 51.809z"/>
					<path d="M449.742 62.684H62.258C27.929 62.684 0 90.614 0 124.942v262.117c0 34.329 27.929 62.257 62.258 62.257h387.484c34.33 0 62.258-27.928 62.258-62.257V124.942c0-34.328-27.928-62.258-62.258-62.258zm-29.83 20.898L255.859 216.19 91.806 83.582h328.106zm8.214 344.836H83.592V184.382l165.712 133.49c3.826 3.082 9.284 3.082 13.11 0l165.711-133.49v244.036zm62.976-41.36c0 22.806-18.554 41.359-41.36 41.359h-.717v-265.87c0-4.023-2.309-7.688-5.939-9.425-3.632-1.738-7.934-1.235-11.065 1.288L255.859 296.318 79.698 154.41c-3.134-2.523-7.438-3.026-11.065-1.288-3.63 1.737-5.939 5.402-5.939 9.425v265.87h-.436c-22.805.001-41.359-18.553-41.359-41.358V124.942c0-21.626 16.688-39.418 37.861-41.2l190.532 154.012c1.915 1.549 4.242 2.323 6.568 2.323 2.327 0 4.653-.774 6.568-2.323L452.983 83.721c21.295 1.66 38.119 19.507 38.119 41.22v262.117z"/>
					<path d="M398.522 263.111c2.309 0 4.634-.762 6.568-2.328l3.635-2.942c4.485-3.631 5.177-10.21 1.546-14.695-3.63-4.486-10.211-5.178-14.695-1.547l-3.636 2.942c-4.485 3.631-5.177 10.211-1.546 14.696 2.065 2.55 5.083 3.874 8.128 3.874zM297.54 344.054c2.309 0 4.634-.762 6.568-2.327l74.708-59.674c4.485-3.631 5.177-10.21 1.546-14.695-3.63-4.486-10.211-5.179-14.695-1.549l-74.708 59.674c-4.485 3.631-5.177 10.21-1.546 14.695 2.063 2.551 5.082 3.876 8.127 3.876z"/>
				</svg>
			</a>
		</li>
		<li>
			<a href="https://github.com/nextgtrgod" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416.2">
					<path fill="#111" d="M0 214.4c0 23.2 2.2 44.2 6.5 63 4.3 18.8 10.3 35.1 18 48.9 7.7 13.9 17.4 26 29.3 36.6 11.9 10.5 24.7 19.1 38.6 25.8 13.9 6.7 29.7 12.1 47.4 16.3 17.8 4.2 35.9 7.1 54.5 8.8 18.5 1.7 38.9 2.5 61.1 2.5 22.4 0 42.8-.8 61.3-2.5s36.7-4.6 54.6-8.8c17.9-4.2 33.8-9.6 47.7-16.3 13.9-6.7 26.9-15.3 38.8-25.8 11.9-10.5 21.8-22.7 29.5-36.6 7.8-13.9 13.8-30.2 18.1-48.9 4.3-18.8 6.5-39.8 6.5-63 0-41.4-13.9-77.2-41.6-107.4 1.5-4 2.9-8.6 4.1-13.6 1.3-5.1 2.4-12.4 3.5-21.8s.7-20.3-1.3-32.7c-1.9-12.4-5.5-25-10.6-37.8l-3.8-.8c-2.7-.5-7.1-.4-13.1.4s-13 2.2-21.1 4.5c-8.1 2.3-18.5 6.6-31.3 13s-26.2 14.5-40.4 24.2c-24.4-6.7-57.8-10-100.4-10-42.4 0-75.8 3.3-100.1 10-14.3-9.7-27.8-17.8-40.8-24.2S91.8 7.4 84.1 5.2C76.4 2.9 69.2 1.5 62.6.8 55.9.1 51.7-.1 50 .2c-1.8.2-3.1.5-4.1.9-5.2 12.9-8.7 25.5-10.6 37.8C33.4 51.3 33 62.1 34 71.6c1.1 9.4 2.3 16.7 3.5 21.8 1.3 5.1 2.6 9.6 4.1 13.6C13.9 137.2 0 173 0 214.4zm62.8 62.8c0-24 10.9-46.1 32.8-66.1 6.5-6 14.1-10.6 22.8-13.6 8.7-3.1 18.5-4.8 29.4-5.3 10.9-.4 21.4-.3 31.4.3s22.4 1.4 37.1 2.4c14.7 1 27.4 1.5 38.1 1.5 10.7 0 23.4-.5 38.1-1.5 14.7-1 27-1.8 37.1-2.4 10-.6 20.5-.7 31.4-.3 10.9.4 20.7 2.2 29.4 5.3 8.7 3.1 16.3 7.6 22.8 13.6 21.9 19.7 32.8 41.7 32.8 66.1 0 14.4-1.8 27.1-5.4 38.2-3.6 11.1-8.2 20.4-13.8 27.9-5.6 7.5-13.4 13.9-23.3 19.2-9.9 5.3-19.6 9.3-29 12.1-9.4 2.8-21.5 5-36.3 6.6-14.8 1.6-28 2.5-39.6 2.9-11.6.3-26.3.5-44.2.5s-32.6-.2-44.2-.5c-11.6-.3-24.8-1.3-39.6-2.9s-26.9-3.8-36.3-6.6c-9.4-2.8-19.1-6.9-29-12.1S87.6 350.8 82 343.3c-5.6-7.5-10.2-16.8-13.8-27.9-3.6-11.1-5.4-23.8-5.4-38.2zm257.2-5c0 26.5 14.3 48 32 48s32-21.5 32-48-14.3-48-32-48-32 21.5-32 48zm-192 0c0 26.5 14.3 48 32 48s32-21.5 32-48-14.3-48-32-48-32 21.5-32 48z"/>
				</svg>
			</a>
		</li>
	</ul>

	<div data-speed="-2" class="movable"/>
	<div data-speed="4" class="movable"/>
	<h1 data-speed="-1" class="movable">Hi,<br>I'm Kirill,<br>web developer</h1>
	<h2 data-speed="2" class="movable">let's do a better web today</h2>
	<div data-speed="-3" class="movable"/>

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
		invert: {
			type: Boolean,
			default: false,
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
	font-size: 16px;
	transition: filter 400ms, opacity 300ms;

	&.invert {
		* {
			box-shadow: none;
		}

		div:nth-of-type(3) {
			background-color: #FFF;
		}

		a[href*='github'] {
			svg path {
				fill: #FFF;
			}
		}
	}
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
		display: flex;
		align-items: center;
		height: 100%;

		svg {
			width: 100%;

			path {
				transition: fill 400ms;
			}
		}
	}
}


.movable {
	position: absolute;
	// will-change: transform;
	box-shadow: 0 5px 45px -10px fade(@color-dark, 20%); // delete this mb
	transition: box-shadow 400ms;
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
	white-space: nowrap;
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
		// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='#F0DB4F' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
	}
	
	&:nth-of-type(2) {
		top: 12%;
		left: 54%;
		width: 5%;
		height: 75%;
		background-color: #FE1235;
	}

	&:nth-of-type(3) {
		top: 22%;
		left: 49%;
		width: 4vw;
		height: 4vw;
		background-color: #111;
		border-radius: 50%;
		mix-blend-mode: saturation;
		transition: background 400ms;
	}
}

</style>
