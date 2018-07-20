class Spaceship {

	constructor(name, crew, phasers, shields) {
		this.name = name
		this.crew = crew
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		this.phasersCharge = 'uncharged'
		this.docked = this.crew.length === 0 ? true : false

		for(let el of this.crew){
			el.currentShip = this
		}

	}

}
