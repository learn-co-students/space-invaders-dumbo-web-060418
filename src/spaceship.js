class Spaceship {
  constructor(name, crewMembers, phasers, shields){
    this.name = name;
    this.crew = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    if (crewMembers.length === 0){
      this.docked = true;
    }
    else{
      crewMembers.forEach(function(member){
        member.currentShip = this;
      }.bind(this));
      this.docked = false;
    }
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
  }

}
