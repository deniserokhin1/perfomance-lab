import { memo } from 'react'

export type SortOrder = 'asc' | 'desc'

export type Endpoints = 'electronics' | 'cloth'

export const typedMemo: <T>(c: T) => T = memo
