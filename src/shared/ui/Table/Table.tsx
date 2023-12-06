// import { memo } from 'react'
// import { classNames } from '@/shared/lib/classNames'
import { firstCharUpperCase } from '../../lib/firstCharUpperCase'
import cls from './Table.module.scss'

interface ITableData {
    [key: string]: string | number
}

interface TableProps {
    className?: string
    data?: ITableData[]
}

export const Table = (props: TableProps) => {
    const { data } = props
    if (!data || data.length === 0) {
        return <p>No data available.</p>
    }

    const columns = Object.keys(data[0])

    return (
        <table className={cls.table}>
            <thead>
                <tr className={cls.tr}>
                    {columns.map((column) => (
                        <th className={cls.th} key={column}>
                            {firstCharUpperCase(column)}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr className={cls.tr} key={index}>
                        {columns.map((column) => (
                            <td className={cls.td} key={column}>
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
