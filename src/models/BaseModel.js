import { Model } from './orm'

export default class BaseModel extends Model {
  static getAll(adapter) {
    return this.queryMultiple(adapter, 'GetAll')
  }

  static async queryMultiple(adapter, query, params) {
    const data = await adapter.query(this.name, params, this.getPropertyList())

    if (!data) {
      console.warn(
        `Adapter findMultiple returns nothing for queryMultiple(${query}); It should return an empty array if nothing was found!`
      )
      return []
    }

    if (!Array.isArray(data)) {
      throw new Error(
        `StorageAdapter returned a non-array object from queryMultiple(${query}). Did you use the right query?`
      )
    }

    return data.map(entry => new this(this.searialize(entry)))
  }
}
