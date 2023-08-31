import { Entity } from './value-objects'

export abstract class AggregateRoot<
  ID extends Array<{ id: string }> = []
> extends Entity {
  protected setAggregates(...aggregates: ID[]): void {
    for (const aggregate of aggregates) {
      for (const prop of aggregate) {
        const { id } = prop
        const keyName = prop.constructor.name
        const key = this.#getKeyNameStartingWithLowerCase(keyName)
        ;(this as Record<string, any>)[key] = id
      }
    }
  }

  #getKeyNameStartingWithLowerCase(keyName: string): string {
    return `${keyName.charAt(0).toLowerCase()}${keyName.slice(1)}`
  }
}
