import StorageAdpater from 'common/storageAdapter'

import { Db, Collection, ObjectID } from 'mongodb'
import * as queries from './queries'

export default class MongoStorageAdpater extends StorageAdapter {
  queries = {}
  db

  isMongo = true

  constructor(data) {
    super(data)

    this.db = data.db
    Object.assign(this.queries, queries)
  }

  save(type, data, descriptors) {
    const collection = this.getCollection(type)

    const query = {}

    if (data.id) {
      query._id = new ObjectID(data.id)
    }

    delete data.id

    // Transform fields with isID to ObjectID fields
    for (const descriptor of descriptors) {
      if (descriptor.isId) {
        const source = data[descriptor.key]

        if (typeof source === 'string') {
          if (source.length > 0) {
            delete data[descriptor.key]
          } else {
            data[descriptor.key] = new ObjectID(source)
          }
        }
      }
    }
  }
}
