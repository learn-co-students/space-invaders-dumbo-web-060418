class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip = 'Looking for a Rig'
  }

  hasShip(){
    if (this.currentShip === 'Looking for a Rig'){
      return false;
    }
    else {
      return true;
    }
  }

  engageWarpDrive(){
    if (!this.hasShip()){
      return 'had no effect'
    }
  }

  setsInvisibility(){
    if (this.hasShip() && this.position === 'Defender'){
      this.currentShip.cloaked = true;
    }
    else {
      return 'had no effect'
    }
  }

  chargePhasers(){
    if (!this.hasShip()){
      return 'had no effect'
    }
  }


}
