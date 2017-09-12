export default class StorageAdapter {
  queries = {}

  save(type, data, descriptors) {
    throw new Error('Not Implemented!')
  }

  load(type, id, descriptors) {
    throw new Error('Not Implemented!')
  }

  delete(type, id, descriptors) {
    throw new Error('Not Implemented!')
  }

  query(type, query, params?, descriptors) {
    const method = this.queries[query]

    if (!method) {
      throw new Error(
        `Query "${query}" is not implemented for StorageAdpater "${this
          .constructor.name}"`
      )
    }

    return method(this, type, params, descriptors)
  }
}
