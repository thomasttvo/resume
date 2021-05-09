import { Metrics } from '@constants'

const goldenRatio = degree => {
  return Math.pow(1.618, Math.round(degree))
}

export const goldenRatioSpacing = degree => {
  return goldenRatio(degree) * Metrics.fontSizeDefault
}
