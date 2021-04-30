export const generateMapJSON = (rows, cols, type) => {
  let json = {
    _devNote: 'Each Line in the tiles array is a column',
    columns: Number(cols),
    rows: Number(rows),
    test: []
  }

  const tiles = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      tiles.push(`${type}, 0, 0`);
    }
  }

  json.test = tiles;

  return json;
}
