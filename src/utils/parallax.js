import getMousePos from './getMousePos'

const getDistance = (x1, x2, y1, y2) => Math.sqrt( Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) )

// let instance = null

export default class Parallax {
	constructor() {
		// if (!instance) { instance = this }

		this.items = []

		let WIDTH = window.innerWidth
		let HEIGHT = window.innerHeight

		this.params = {
			width: WIDTH,
			height: HEIGHT,
			center: {
				x: WIDTH / 2,
				y: HEIGHT / 2
			},
			mousePos: {
				x: WIDTH / 2,
				y: HEIGHT / 2
			},
			tilt: {
				x: 16,
				y: 16
			}
		}
	
		window.addEventListener('resize', () => {
			WIDTH = window.innerWidth
			HEIGHT = window.innerHeight
		})

		document.addEventListener('mousemove', e => {
			this.params.mousePos = getMousePos(e);
		})

		// return instance
	}

	add(node) {
		node._tx = 0
		node._ty = 0
		node._easing = 0.08

		this.items.push(node)
	}

	remove(node) {
		this.items = this.items.filter(item => item !== node)
	}

	start() {
		this.items.map(item => {
			let transX = 2 * this.params.tilt.x / this.params.width * this.params.mousePos.x - this.params.tilt.x
			let transY = 2 * this.params.tilt.y / this.params.height * this.params.mousePos.y - this.params.tilt.y

			let bcr = item.getBoundingClientRect()
			let itemCenter = {
				x: bcr.left + bcr.width / 2,
				y: bcr.top + bcr.height / 2
			}

			let speed = 1
			if (item.dataset['speed']) speed = parseFloat(item.dataset['speed'])
			
			let dist = getDistance(itemCenter.x, itemCenter.y, this.params.center.x, this.params.center.y)

			item._tx += (speed * transX / this.params.width * dist - item._tx) * item._easing || 0
			item._ty += (speed * transY / this.params.height * dist - item._ty) * item._easing || 0
			
			item.style.transform = `translate3d(${item._tx}px, ${item._ty}px, 0)`
		})

		this.rafID = requestAnimationFrame(() => this.start())
	}

	stop() {
		if (this.rafID) window.cancelAnimationFrame(this.rafID)
	}
}
