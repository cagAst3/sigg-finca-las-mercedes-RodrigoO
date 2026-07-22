const test = require('node:test');
const assert = require('node:assert/strict');

const { validateFormData } = require('../js/validacionFormulario.js');

test('validateFormData devuelve errores cuando faltan campos obligatorios', () => {
  const resultado = validateFormData({
    nombre: '',
    email: 'correo-invalido',
    mensaje: ''
  });

  assert.deepEqual(resultado, {
    nombre: 'El nombre es obligatorio.',
    email: 'Ingresa un correo electrónico válido.',
    mensaje: 'El mensaje es obligatorio.'
  });
});

test('validateFormData acepta datos válidos', () => {
  const resultado = validateFormData({
    nombre: 'Rodrigo',
    email: 'rodrigo@example.com',
    mensaje: 'Necesito consultar el inventario del hato.'
  });

  assert.deepEqual(resultado, {});
});
