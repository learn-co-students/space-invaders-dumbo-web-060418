class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = this.crew.length > 0 ? false : true
    this.phasersCharge = 'uncharged'

    for(let member of this.crew) {
      member.currentShip = this
    }
  }
}
