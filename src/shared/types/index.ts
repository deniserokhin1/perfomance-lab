import { memo } from 'react'

export type SortOrder = 'asc' | 'desc'

export type Endpoints = 'electronics' | 'cloth' | 'food'

export const typedMemo: <T>(c: T) => T = memo
