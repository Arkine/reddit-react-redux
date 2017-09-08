const map = {
  /**
	 * Copies the map and sets the given key inside of it
	 */
  set(store, key, value) {
    const newStore = { ...store }
    newStore[key] = value

    return newStore
  },

  /**
	 * Copies the map and sets the given key inside of it.
	 * If the key doesn't exist in the collection, acts the same as set().
	 * Otherwise, it merges the new value with the existing key using spread.
	 */
  setOrMerge(store, key, value) {
    const newStore = { ...store }

    const existing = newStore[key]

    if (existing) {
      newStore[key] = {
        ...existing,
        ...value,
      }
    } else {
      newStore[key] = value
    }

    return newStore
  },

  /**
	 * Copies the map and deletes the given key
	 */
  delete(store, key) {
    const newStore = { ...store }

    delete newStore[key]

    return newStore
  },

  /**
	 * Copies the given map and merges another map into it
	 */
  merge(store, otherStore) {
    return { ...store, ...otherStore }
  },

  /**
	 * A helper method to quickly create a map from a list of uniquely-keyed objects.
	 * fromList(listOfObjects, "id") creates a map keyed by "id".
	 * Useful for merging a list of models into a map of models:
	 * map.merge(users, map.fromList(newUsers, "id"))
	 */
  fromList(list, key, useValue?) {
    const result = {}

    for (const value of list) {
      if (useValue !== undefined) {
        result[value[key]] = useValue
      } else {
        result[value[key]] = value
      }
    }

    return result
  },

  /**
	 * Type-correct Object.values for map-like objects
	 */
  values(store) {
    return Object.values(store)
  },
}

export default map
