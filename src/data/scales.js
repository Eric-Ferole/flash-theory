// ── Degree definitions ───────────────────────────────────────────────────────

export const MAJOR_DEGREES = [
  { roman: 'I',    name: 'Tonic' },
  { roman: 'II',   name: 'Supertonic' },
  { roman: 'III',  name: 'Mediant' },
  { roman: 'IV',   name: 'Subdominant' },
  { roman: 'V',    name: 'Dominant' },
  { roman: 'VI',   name: 'Submediant' },
  { roman: 'VII',  name: 'Leading tone' },
]

export const MINOR_DEGREES = [
  { roman: 'i',    name: 'Tonic' },
  { roman: 'ii°',  name: 'Supertonic' },
  { roman: 'III',  name: 'Mediant' },
  { roman: 'iv',   name: 'Subdominant' },
  { roman: 'v',    name: 'Dominant' },
  { roman: 'VI',   name: 'Submediant' },
  { roman: 'VII',  name: 'Subtonic' },
]

// Major pentatonic: I II III V VI  (skip IV and VII)
export const MAJOR_PENTA_DEGREES = [
  { roman: 'I',   name: 'Tonic' },
  { roman: 'II',  name: 'Supertonic' },
  { roman: 'III', name: 'Mediant' },
  { roman: 'V',   name: 'Dominant' },
  { roman: 'VI',  name: 'Submediant' },
]

// Minor pentatonic: i III iv v VII  (skip ii° and VI)
export const MINOR_PENTA_DEGREES = [
  { roman: 'i',    name: 'Tonic' },
  { roman: 'III',  name: 'Mediant' },
  { roman: 'iv',   name: 'Subdominant' },
  { roman: 'v',    name: 'Dominant' },
  { roman: 'VII',  name: 'Subtonic' },
]

// ── Scale data ───────────────────────────────────────────────────────────────

export const MAJOR_SCALES = [
  { key: 'C_maj',  label: 'C Major',  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] },
  { key: 'G_maj',  label: 'G Major',  notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'] },
  { key: 'D_maj',  label: 'D Major',  notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'] },
  { key: 'A_maj',  label: 'A Major',  notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'] },
  { key: 'E_maj',  label: 'E Major',  notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'] },
  { key: 'B_maj',  label: 'B Major',  notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'] },
  { key: 'Gb_maj', label: 'G♭ Major', notes: ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'] },
  { key: 'Db_maj', label: 'D♭ Major', notes: ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'] },
  { key: 'Ab_maj', label: 'A♭ Major', notes: ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'] },
  { key: 'Eb_maj', label: 'E♭ Major', notes: ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'] },
  { key: 'Bb_maj', label: 'B♭ Major', notes: ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'] },
  { key: 'F_maj',  label: 'F Major',  notes: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'] },
]

export const MINOR_SCALES = [
  { key: 'A_min',  label: 'A minor',  notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
  { key: 'E_min',  label: 'E minor',  notes: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'] },
  { key: 'B_min',  label: 'B minor',  notes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'] },
  { key: 'Fs_min', label: 'F# minor', notes: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'] },
  { key: 'Cs_min', label: 'C# minor', notes: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'] },
  { key: 'Gs_min', label: 'G# minor', notes: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'] },
  { key: 'Eb_min', label: 'E♭ minor', notes: ['E♭', 'F', 'G♭', 'A♭', 'B♭', 'C♭', 'D♭'] },
  { key: 'Bb_min', label: 'B♭ minor', notes: ['B♭', 'C', 'D♭', 'E♭', 'F', 'G♭', 'A♭'] },
  { key: 'F_min',  label: 'F minor',  notes: ['F', 'G', 'A♭', 'B♭', 'C', 'D♭', 'E♭'] },
  { key: 'C_min',  label: 'C minor',  notes: ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B♭'] },
  { key: 'G_min',  label: 'G minor',  notes: ['G', 'A', 'B♭', 'C', 'D', 'E♭', 'F'] },
  { key: 'D_min',  label: 'D minor',  notes: ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'] },
]

export const MAJOR_PENTA_SCALES = [
  { key: 'C_mpenta',  label: 'C Maj. Penta',  notes: ['C', 'D', 'E', 'G', 'A'] },
  { key: 'G_mpenta',  label: 'G Maj. Penta',  notes: ['G', 'A', 'B', 'D', 'E'] },
  { key: 'D_mpenta',  label: 'D Maj. Penta',  notes: ['D', 'E', 'F#', 'A', 'B'] },
  { key: 'A_mpenta',  label: 'A Maj. Penta',  notes: ['A', 'B', 'C#', 'E', 'F#'] },
  { key: 'E_mpenta',  label: 'E Maj. Penta',  notes: ['E', 'F#', 'G#', 'B', 'C#'] },
  { key: 'B_mpenta',  label: 'B Maj. Penta',  notes: ['B', 'C#', 'D#', 'F#', 'G#'] },
  { key: 'Gb_mpenta', label: 'G♭ Maj. Penta', notes: ['G♭', 'A♭', 'B♭', 'D♭', 'E♭'] },
  { key: 'Db_mpenta', label: 'D♭ Maj. Penta', notes: ['D♭', 'E♭', 'F', 'A♭', 'B♭'] },
  { key: 'Ab_mpenta', label: 'A♭ Maj. Penta', notes: ['A♭', 'B♭', 'C', 'E♭', 'F'] },
  { key: 'Eb_mpenta', label: 'E♭ Maj. Penta', notes: ['E♭', 'F', 'G', 'B♭', 'C'] },
  { key: 'Bb_mpenta', label: 'B♭ Maj. Penta', notes: ['B♭', 'C', 'D', 'F', 'G'] },
  { key: 'F_mpenta',  label: 'F Maj. Penta',  notes: ['F', 'G', 'A', 'C', 'D'] },
]

export const MINOR_PENTA_SCALES = [
  { key: 'A_minpenta',  label: 'A Min. Penta',  notes: ['A', 'C', 'D', 'E', 'G'] },
  { key: 'E_minpenta',  label: 'E Min. Penta',  notes: ['E', 'G', 'A', 'B', 'D'] },
  { key: 'B_minpenta',  label: 'B Min. Penta',  notes: ['B', 'D', 'E', 'F#', 'A'] },
  { key: 'Fs_minpenta', label: 'F# Min. Penta', notes: ['F#', 'A', 'B', 'C#', 'E'] },
  { key: 'Cs_minpenta', label: 'C# Min. Penta', notes: ['C#', 'E', 'F#', 'G#', 'B'] },
  { key: 'Gs_minpenta', label: 'G# Min. Penta', notes: ['G#', 'B', 'C#', 'D#', 'F#'] },
  { key: 'Eb_minpenta', label: 'E♭ Min. Penta', notes: ['E♭', 'G♭', 'A♭', 'B♭', 'D♭'] },
  { key: 'Bb_minpenta', label: 'B♭ Min. Penta', notes: ['B♭', 'D♭', 'E♭', 'F', 'A♭'] },
  { key: 'F_minpenta',  label: 'F Min. Penta',  notes: ['F', 'A♭', 'B♭', 'C', 'E♭'] },
  { key: 'C_minpenta',  label: 'C Min. Penta',  notes: ['C', 'E♭', 'F', 'G', 'B♭'] },
  { key: 'G_minpenta',  label: 'G Min. Penta',  notes: ['G', 'B♭', 'C', 'D', 'F'] },
  { key: 'D_minpenta',  label: 'D Min. Penta',  notes: ['D', 'F', 'G', 'A', 'C'] },
]

export const ALL_SCALES = [
  ...MAJOR_SCALES,
  ...MINOR_SCALES,
  ...MAJOR_PENTA_SCALES,
  ...MINOR_PENTA_SCALES,
]

// ── Degree lookup helper ─────────────────────────────────────────────────────

function getDegreesForKey(key) {
  if (key.endsWith('_maj'))      return MAJOR_DEGREES
  if (key.endsWith('_min'))      return MINOR_DEGREES
  if (key.endsWith('_mpenta'))   return MAJOR_PENTA_DEGREES
  if (key.endsWith('_minpenta')) return MINOR_PENTA_DEGREES
  return MAJOR_DEGREES
}

// ── Fisher-Yates shuffle ─────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Game: Scale Degrees ──────────────────────────────────────────────────────
// One card per note. Front: scale + note. Back: degree.

export function generateDegreeCards(selectedKeys) {
  const cards = []

  for (const scale of ALL_SCALES) {
    if (!selectedKeys.includes(scale.key)) continue
    const degrees = getDegreesForKey(scale.key)

    scale.notes.forEach((note, index) => {
      cards.push({
        type: 'degree',
        id: `${scale.key}_${index}`,
        scaleKey: scale.key,
        scaleLabel: scale.label,
        note,
        roman: degrees[index].roman,
        degreeName: degrees[index].name,
      })
    })
  }

  return shuffle(cards)
}

// ── Game: Spell the Scale ────────────────────────────────────────────────────
// One card per scale. Front: scale name. Back: all notes + degrees.

export function generateSpellCards(selectedKeys) {
  const cards = []

  for (const scale of ALL_SCALES) {
    if (!selectedKeys.includes(scale.key)) continue
    const degrees = getDegreesForKey(scale.key)

    cards.push({
      type: 'spell',
      id: `${scale.key}_spell`,
      scaleKey: scale.key,
      scaleLabel: scale.label,
      notes: scale.notes.map((note, i) => ({
        note,
        roman: degrees[i].roman,
        degreeName: degrees[i].name,
      })),
    })
  }

  return shuffle(cards)
}

// Kept for backwards-compat (used nowhere new)
export const generateCards = generateDegreeCards
