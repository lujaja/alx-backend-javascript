function createInt8TypedArray(len, pos, val) {
  if (pos >= len) {
    throw new Error('Position outside range');
  }

  const arraybufeer = new ArrayBuffer(len);

  const view = new DataView(arraybufeer);
  view.setInt8(pos, val);

  return (view);
}

export default createInt8TypedArray;
