export interface FormWrapperProps {
    children: React.ReactNode;
    formikProps: any;
}
export declare const FormWrapper: ({ children, formikProps }: FormWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const Form: (({ children, formikProps }: FormWrapperProps) => import("react/jsx-runtime").JSX.Element) & {
    FieldGroup: ({ children, cols, alignment }: import('./FieldGroup/FieldGroup').FieldGroupProps) => import("react/jsx-runtime").JSX.Element;
    FormField: ({ children, label, hiddenLabel, name, maxWidth, helper, helperpostop, required, displayError, }: import('./FormField/FormField').FormFieldProps) => import("react/jsx-runtime").JSX.Element;
    FieldControl: ({ ...props }: import('./FieldControl/FieldControl').FieldControlProps | import('./FieldControl/FieldControl').FieldControlSetProps) => import("react/jsx-runtime").JSX.Element | null;
    FieldArrayContainer: ({ children }: import('./FieldArrayContainer/FieldArrayContainer').FieldArrayContainerProps) => import("react/jsx-runtime").JSX.Element;
    Error: ({ ...props }: import('./Error/Error').ErrorProps) => import("react/jsx-runtime").JSX.Element;
};
