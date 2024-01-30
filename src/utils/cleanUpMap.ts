export const cleanUpMap = <T>(map: T) => {
  const cleanData: T = {} as T

  for (const key in map) {
    if (map[key] !== '' && map[key] !== undefined && map[key] !== null) {
      cleanData[key] = map[key]
    }
  }

  return cleanData
}
