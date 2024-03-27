import { ColumnDefinitionType } from './Table';
interface TableHeaderProps {
    columns: ColumnDefinitionType[];
    noWordBreak: boolean;
    sortData: (a: string, s: boolean) => void;
}
declare const TableHeader: ({ columns, noWordBreak, sortData }: TableHeaderProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export default TableHeader;