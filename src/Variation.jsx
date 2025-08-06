export function normalizeHospitalName(name) {
  if (!name) return "";

  let normalized = name.toLowerCase();
  const replacements = [
    [/\bmt\.?\b/g, "mount"],
    [/\bst\.?\b/g, "saint"],
    [/\buniv\.?\b/g, "university"],
    [/\bmed(ical)?\s?ctr\.?\b/g, "medical center"],
    [/\bgen\.?\b/g, "general"],
    [/\bctr\.?\b/g, "center"],
    [/\bcnty\.?\b/g, "county"],
    [/\breg\.?\b/g, "regional"],
    [/\bhosp\b/g, "hospital"],
    [/\bsys\b/g, "system"],
    [/\bch\b/g, "community hospital"]
  ];

  replacements.forEach(([regex, replacement]) => {
    normalized = normalized.replace(regex, replacement);
  });

  return normalized
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .trim();
}

export function normalizeHospitalWithLocation(name, city = "", state = "") {
  const baseName = normalizeHospitalName(name);
  const locationParts = [];

  if (city) locationParts.push(city.trim().replace(/\b\w/g, c => c.toUpperCase()));
  if (state) locationParts.push(state.trim().toUpperCase());

  return [baseName, ...locationParts].join(" - ");
}
