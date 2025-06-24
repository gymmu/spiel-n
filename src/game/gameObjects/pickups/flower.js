import StaticObject from "../staticObject"
import { registerGameObject } from "../registry"

export default class Flower extends StaticObject {
  constructor (scene, x, y, properties) {
    super(scene, x, y, "pickups", "flower", properties)

    this.setOrigin(0, 0)
    this.setSize(24, 32)
    this.setOffset(8, 0)

    this.name = "flower"
  }

  onCollide(player) {
    //super.onCollide(player)
    player.heal(this.props.healAmount || 5)
    if (this.scene.cameraManager) {
      this.scene.cameraManager.cameraMaskRadius += 50
      this.scene.cameraManager.setCameraMask()
    }
    this.destroy()
  }
}

// Registriere das Flower-Objekt automatisch beim Import
registerGameObject("Flower", Flower)
