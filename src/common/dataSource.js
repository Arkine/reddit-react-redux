import StorageAdapter from './storageAdapter'

const dataSource = {
  adapter: new StorageAdapter(),

  initialize(adapter) {
    this.adapter = adapter
  },

  getMongo() {
    const adapter = this.adapter

    if (!adapter.isMongo) {
      throw new Error(
        'Cannot call getMongo with a non-mongoDB Storage Adapter!'
      )
    }

    return adapter
  },
}

export default dataSource
