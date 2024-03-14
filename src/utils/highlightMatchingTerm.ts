import createMatchingPattern from "./createMatchingPattern";

export type HighlightFormatter = (matchedSubstring: string) => React.ReactNode;

const WHITESPACE_ONLY_PATTERN = /^\s*$/u;

function isValidInput(
  term: string,
  target: string,
  formatter: HighlightFormatter
) {
  return (
    typeof term === "string" &&
    typeof target === "string" &&
    typeof formatter === "function" &&
    !WHITESPACE_ONLY_PATTERN.test(term)
  );
}

function formatMatchingSubstrings(
  pattern: RegExp,
  target: string,
  formatter: HighlightFormatter
) {
  const result: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const { index, 0: matchedSubstring } of target.matchAll(pattern)) {
    const unmatchedSegment = target.substring(lastIndex, index!);
    const formattedSubstring = formatter(matchedSubstring);

    result.push(unmatchedSegment, formattedSubstring);
    lastIndex = index! + matchedSubstring.length;
  }

  const remainingUnmatched = target.substring(lastIndex);

  return [...result, remainingUnmatched];
}

function highlightMatchingTerms(
  term: string,
  target: string,
  formatter: HighlightFormatter
): React.ReactNode {
  if (!isValidInput(term, target, formatter)) return target;

  const pattern = createMatchingPattern(term);

  if (!target.match(pattern)) return target;

  return formatMatchingSubstrings(pattern, target, formatter);
}

export default highlightMatchingTerms;
