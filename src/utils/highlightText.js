/**
 * Split `text` into segments, flagging the ones that match any of `phrases`.
 * Pure, build-time safe — returns plain data (no React, no HTML injection).
 *
 * @param {string} text
 * @param {string[]} [phrases]
 * @returns {{ text: string, highlight: boolean }[]}
 */
export function highlightSegments(text, phrases = []) {
  if (!text) return [];
  if (!phrases.length) return [{ text, highlight: false }];
  const escape = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${phrases.map(escape).join('|')})`, 'gi');
  return text
    .split(regex)
    .filter((p) => p !== '')
    .map((part) => ({
      text: part,
      highlight: phrases.some((p) => p.toLowerCase() === part.toLowerCase()),
    }));
}
