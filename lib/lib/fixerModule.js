/**
 * Fixes a MongoDB URI to ensure it contains the required parameters and sets a default DB name.
 */
module.exports = {
  fix: (url) => {
    if (url.includes('<password>')) {
      return { status: 401, message: 'Password not entered!' };
    }

    const validUrlPattern = /^mongodb\+srv:\/\/([^\s@]+):([^\s@]+)@([^\s@]+\.[^\s@]+\.mongodb\.net)(\/?.*)$/;
    const match = url.match(validUrlPattern);

    if (!match) {
      return { status: 400, message: 'Invalid MongoDB URL provided.' };
    }

    const username = match[1];
    let password = match[2];
    const host = match[3];
    
    // Remove < and > from password if present
    if (password.includes('<') && password.includes('>')) {
      password = password.replace(/<|>/g, '');
    }

    const correctedUrl = `mongodb+srv://${username}:${password}@${host}/anya_v2_database?retryWrites=true&w=majority&appName=anya_v2_db`;
    return { status: 200, url: correctedUrl, message: 'URL corrected successfully.' };
  },
};
