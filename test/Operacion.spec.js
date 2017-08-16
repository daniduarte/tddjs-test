
describe('Operaciones binarias', function () {
  var operacion = new Operacion;

  it('suma 1 + 1', function () {
    expect(operacion.suma(1, 1)).toBe(2);
  });

  it('producto 4 * 2', function () {
    expect(operacion.producto(4, 2)).toBe(8);
  });

  it('diferencia 4 - 2', function () {
    expect(operacion.diferencia(4, 2)).toBe(2);
  });

  it('cociente 4 / 2', function () {
    expect(operacion.cociente(4, 2)).toBe(2);
  })
});
