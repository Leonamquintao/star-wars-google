const ESCAPE_REGEX = /[.*+?^${}()|[\]\\]/g;

function createMatchingPattern(input: string) {
  const trimmedInput = input.trim();
  const escapedInput = trimmedInput.replace(ESCAPE_REGEX, "\\$&");
  const searchTokens = escapedInput.split(/\s+/).join("|");
  const searchPattern = new RegExp(`(${searchTokens})`, "giu");

  return searchPattern;
}

export default createMatchingPattern;
