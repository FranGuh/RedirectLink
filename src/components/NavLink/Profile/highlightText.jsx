const highlightText = (text, words = [], phrases = []) => {
    if (!text) return null;
  
    // Función para escapar caracteres especiales en regex
    const escapeRegExp = (string) => string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  
    // Construir regex combinada para frases y palabras
    const highlightRegex = new RegExp(
      [...phrases, ...words].map(escapeRegExp).join('|'),
      'gi'
    );
  
    return text.split(highlightRegex).reduce((acc, part, index, array) => {
      if (index < array.length - 1) {
        acc.push(part, <strong key={index} className="highlight">{text.match(highlightRegex)[index]}</strong>);
      } else {
        acc.push(part);
      }
      return acc;
    }, []);
  };
  
  export default highlightText;