import { DynamicValue, ListExpressionValue, ObjectItem } from "mendix";

export type ResponsiveType = "desktop" | "tablet" | "phone";
export type ResponsiveWidth = "autofill" | "autofitContent" | "manual";
export type GenericItem<T> = {
    readonly value: T;
    setValue: (value: T) => void;
    readonly readOnly: boolean;
    readonly formatter?: {
        format: (value?: T) => string;
    };
};

export type ItemClassProperties = {
    desktopWidth: ResponsiveWidth;
    desktopSize: number | null;
    tabletWidth: ResponsiveWidth;
    tabletSize: number | null;
    phoneWidth: ResponsiveWidth;
    phoneSize: number | null;
    dynamicClasses?: DynamicValue<string>;
    dynamicClassesReference?: ListExpressionValue<string>;
};
