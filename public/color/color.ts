export const baseColors = {
    hoshino: "#fbd7d7",
    kujirasan: "#72a2e9",
} as const

export const whitishColors = {
    hoshino: `color-mix(in srgb, ${baseColors.hoshino} 50%, white)}`,
    kujirasan: `color-mix(in srgb, ${baseColors.kujirasan} 50%, white)`,
} as const