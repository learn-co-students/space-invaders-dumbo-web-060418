class Spaceship {
  constructor(name, CrewMembers, phasers, shields){
    this.name = name
    this.CrewMembers = CrewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.docked = true
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
  }

  assignCrewToShip() {
    this.CrewMembers.forEach(function(member){
      member.currentShip = this
    })
    this.docked = false
  }

}
