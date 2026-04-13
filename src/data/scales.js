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

export const ALL_SCALES = [...MAJOR_SCALES, ...MINOR_SCALES]

/**
 * Generate flash cards from selected scale keys.
 * Returns shuffled array of card objects.
 */
export function generateCards(selectedKeys) {
  const cards = []

  for (const scale of ALL_SCALES) {
    if (!selectedKeys.includes(scale.key)) continue
    const degrees = scale.key.endsWith('_maj') ? MAJOR_DEGREES : MINOR_DEGREES

    scale.notes.forEach((note, index) => {
      cards.push({
        id: `${scale.key}_${index}`,
        scaleKey: scale.key,
        scaleLabel: scale.label,
        note,
        roman: degrees[index].roman,
        degreeName: degrees[index].name,
      })
    })
  }

  // Fisher-Yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cards[i], cards[j]] = [cards[j], cards[i]]
  }

  return cards
}
