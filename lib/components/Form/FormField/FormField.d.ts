export interface FormFieldProps {
    children: React.ReactNode;
    label: string;
    hiddenLabel?: boolean;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
    displayError?: boolean;
}
export declare const FormField: ({ ...props }: FormFieldProps) => import("react/jsx-runtime").JSX.Element;