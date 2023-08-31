export abstract class Entity {
  protected movePrivateKeys(): void {
    for (const [key, value] of Object.entries(this)) {
      if (this.#isPrivateProperty(key)) {
        if (key === '_props') {
          Object.assign(this, value)
          delete (this as any)._props
        } else {
          const propertyName = key.slice(1) as keyof this
          this[propertyName] = value
        }
      }
    }
  }

  protected removePrivateKeys(): void {
    for (const key in this) {
      if (this.#isPrivateProperty(key)) {
        delete this[key as keyof this]
      }
    }
  }

  #isPrivateProperty(key: string): boolean {
    return key.startsWith('_')
  }
}
