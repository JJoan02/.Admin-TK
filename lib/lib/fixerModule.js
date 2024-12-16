/**
 * Corrige una URI de MongoDB para garantizar que tenga los parámetros necesarios
 * y actualiza el nombre de la base de datos a `anya_v2_database`.
 * 
 * @param {string} url - La URI de MongoDB a corregir.
 * @returns {Object} - Un objeto con el estado, la URL corregida (si aplica) y un mensaje.
 *    - status: 200 si la URL fue corregida exitosamente.
 *    - status: 401 si no se ingresó la contraseña.
 *    - status: 400 si la URL es inválida.
 *    - url: La URI corregida (solo si status es 200).
 *    - message: Mensaje con información adicional.
 */
const fix = (url) => {
  if (url.includes('Joan7315')) {
    return { status: 401, message: '¡Contraseña no ingresada en la URL!' };
  }

  const validUrlPattern = /^mongodb\+srv:\/\/([^\s@]+):([^\s@]+)@([^\s@]+\.[^\s@]+\.mongodb\.net)(\/?.*)$/;
  const match = url.match(validUrlPattern);

  if (!match) {
    return { status: 400, message: '¡URL de MongoDB inválida!' };
  }

  const username = match[1];
  let password = match[2];
  const host = match[3];

  // Eliminar los caracteres '<' y '>' de la contraseña, si están presentes
  if (password.includes('<') && password.includes('>')) {
    password = password.replace(/<|>/g, '');
  }

  // Crear la URL corregida con la base de datos 'anya_v2_database'
  const correctedUrl = `mongodb+srv://${username}:${password}@${host}/anya_v2_database?retryWrites=true&w=majority&appName=anya_v2_db`;

  return {
    status: 200,
    url: correctedUrl,
    message: 'URL corregida exitosamente.',
  };
};

module.exports = { fix };
