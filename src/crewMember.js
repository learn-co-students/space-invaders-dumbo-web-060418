class CrewMember {

	constructor(position) {
		this.position = position
		this.currentShip = 'Looking for a Rig'
	}

	chargePhasers(){
		if(this.position === 'Gunner' && typeof this.currentShip === Spaceship){
			this.currentShip.phasersCharge = 'charged'
		} else {
			return 'had no effect'
		}
	}

	engageWarpDrive(){
		if(this.position === 'Pilot' && typeof this.currentShip === Spaceship){
			this.currentShip.warpDrive = 'engaged'
		} else {
			return 'had no effect'
		}
	}

	setsInvisibility(){
		debugger
		if(this.position === 'Defender' && this.currentShip !== 'Looking for a Rig'){
			this.currentShip.cloaked = true
		} else {
			return 'had no effect'
		}
	}

}
