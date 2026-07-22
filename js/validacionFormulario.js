function validateFormData(formData) {
  const errors = {};

  if (!formData.nombre || !formData.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido.';
  }

  if (!formData.mensaje || !formData.mensaje.trim()) {
    errors.mensaje = 'El mensaje es obligatorio.';
  }

  return errors;
}

module.exports = {
  validateFormData,
};
