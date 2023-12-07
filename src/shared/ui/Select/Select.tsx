import { useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { typedMemo } from '@/shared/types'

import cls from './Select.module.scss'
import { ListBox } from '../ListBox'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOption<T>>
    value?: T
    readonly?: boolean
    labelFitContent?: boolean
    onChange?: (value: T) => void
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>): JSX.Element => {
    const { label, options, onChange, value, readonly, labelFitContent } = props

    const onChangeHandler = useCallback((value: string) => onChange?.(value as T), [onChange])

    const labelMods = {
        [cls.fitContent]: labelFitContent,
    }

    return (
        <div className={classNames(cls.container, labelMods)}>
            {label && <span className={classNames(cls.label)}>{label}</span>}
            
            <ListBox
                className={classNames('')}
                value={value}
                onChange={onChangeHandler}
                items={options}
                readonly={readonly}
            />
        </div>
    )
})
