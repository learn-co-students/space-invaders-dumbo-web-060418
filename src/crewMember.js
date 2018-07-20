class CrewMember  {
  constructor(position, currentShip, cloaked) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }
    engageWarpDrive() {
      if (this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
    }

    setsInvisibility() {
      if (this.currentShip !== 'Looking for a Rig') {
        if (this.position === 'defender') {
          this.currentShip.cloaked = true
        } else {
          this.currentShip.cloaked = false
          return 'have no effect'
        }
      }
    }

    chargePhasers() {
      if (this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
    }


}
