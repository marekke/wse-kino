export function generateIDForEntity(entityName, state) {
  let entityID = 1;
  const IDs = Object.keys(state[entityName]).map(id => parseInt(id));

  if (Object.keys(state[entityName]).length > 0) {
    entityID = Math.max(...IDs) + 1;
  }

  return entityID;
}
