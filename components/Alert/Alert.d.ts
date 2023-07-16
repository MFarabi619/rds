import { PropsWithChildren } from 'react';
export interface AlertBaseProps {
    type: 'success' | 'error' | 'warning' | 'info';
}
export declare const Alert: {
    ({ children, type }: PropsWithChildren<AlertBaseProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Alerter: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
    Title: {
        ({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Alert.d.ts.map