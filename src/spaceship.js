class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = 5
    this.shields = 4
    this.crew = crew
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.assignCrewMember()
    if (crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }

      this.phasersCharge = 'uncharged'
  }

  assignCrewMember() {
    this.crew.forEach((member) => {
      member.currentShip = this
    })
  }
}
