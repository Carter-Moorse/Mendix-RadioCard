/**
 * This file was generated from RadioCard.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, ReactNode } from "react";
import { DynamicValue, EditableValue, ListValue, ListExpressionValue, ListWidgetValue, ReferenceValue } from "mendix";

export type TypeEnum = "attribute" | "association";

export type DesktopWidthEnum = "autofill" | "autofitContent" | "manual";

export type TabletWidthEnum = "autofill" | "autofitContent" | "manual";

export type PhoneWidthEnum = "autofill" | "autofitContent" | "manual";

export interface DisplayItemsType {
    content?: ReactNode;
    value: DynamicValue<string | boolean>;
    dynamicClasses?: DynamicValue<string>;
    desktopWidth: DesktopWidthEnum;
    desktopSize: number;
    tabletWidth: TabletWidthEnum;
    tabletSize: number;
    phoneWidth: PhoneWidthEnum;
    phoneSize: number;
}

export type RadioPositionEnum = "left" | "right" | "above" | "below";

export type CardAlignmentEnum = "start" | "center" | "end";

export type CardSizeEnum = "small" | "normal" | "large";

export type DesktopWidthEnum = "autofill" | "autofitContent" | "manual";

export type TabletWidthEnum = "autofill" | "autofitContent" | "manual";

export type PhoneWidthEnum = "autofill" | "autofitContent" | "manual";

export interface DisplayItemsPreviewType {
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    value: string;
    dynamicClasses: string;
    desktopWidth: DesktopWidthEnum;
    desktopSize: number | null;
    tabletWidth: TabletWidthEnum;
    tabletSize: number | null;
    phoneWidth: PhoneWidthEnum;
    phoneSize: number | null;
}

export interface RadioCardContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    type: TypeEnum;
    customContent: boolean;
    reference: ReferenceValue;
    selectableObjects: ListValue;
    displayValueReference: ListExpressionValue<string>;
    contentReference: ListWidgetValue;
    attribute: EditableValue<string | boolean>;
    displayItems: DisplayItemsType[];
    fullSizeContainer: boolean;
    containerClass: string;
    hideRadioInput: boolean;
    radioPosition: RadioPositionEnum;
    cardAlignment: CardAlignmentEnum;
    cardSize: CardSizeEnum;
    highlightSelected: boolean;
    selectedClass: string;
    dynamicClasses?: DynamicValue<string>;
    dynamicClassesReference?: ListExpressionValue<string>;
    desktopWidth: DesktopWidthEnum;
    desktopSize: number;
    tabletWidth: TabletWidthEnum;
    tabletSize: number;
    phoneWidth: PhoneWidthEnum;
    phoneSize: number;
}

export interface RadioCardPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    type: TypeEnum;
    customContent: boolean;
    reference: string;
    selectableObjects: {} | { caption: string } | { type: string } | null;
    displayValueReference: string;
    contentReference: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    attribute: string;
    displayItems: DisplayItemsPreviewType[];
    fullSizeContainer: boolean;
    containerClass: string;
    hideRadioInput: boolean;
    radioPosition: RadioPositionEnum;
    cardAlignment: CardAlignmentEnum;
    cardSize: CardSizeEnum;
    highlightSelected: boolean;
    selectedClass: string;
    dynamicClasses: string;
    dynamicClassesReference: string;
    desktopWidth: DesktopWidthEnum;
    desktopSize: number | null;
    tabletWidth: TabletWidthEnum;
    tabletSize: number | null;
    phoneWidth: PhoneWidthEnum;
    phoneSize: number | null;
    onChangeAttribute: {} | null;
    onChangeReference: {} | null;
}
