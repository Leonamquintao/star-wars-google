import createMatchingPattern from "./createMatchingPattern";

const DIACRITICAL_MARKS_REGEX = /[\u0300-\u036f]/g;
const WHITESPACE_REGEX = /\s+/g;

function normalize(input: string) {
  const normalized = input.normalize("NFD");
  const removeDiacriticalMarks = normalized.replace(
    DIACRITICAL_MARKS_REGEX,
    ""
  );
  const replaceWhitespaceWithSingleSpace = removeDiacriticalMarks.replace(
    WHITESPACE_REGEX,
    " "
  );

  return replaceWhitespaceWithSingleSpace;
}

function findMatchingTerm(matchTerm: string, targetString: string) {
  if (typeof matchTerm !== "string" || typeof targetString !== "string") {
    throw new Error("Input must be a string");
  }

  const normalizedMatchTerm = normalize(matchTerm);
  const normalizedTarget = normalize(targetString);
  const matchPattern = createMatchingPattern(normalizedMatchTerm);

  return matchPattern.test(normalizedTarget);
}

export default findMatchingTerm;
