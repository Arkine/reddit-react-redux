import StorageAdapter from 'common/StorageAdapter'

export default (adapter, type, params, descriptors) => {
  return adapter.findMultiple(type, undefined, descriptors)
}
