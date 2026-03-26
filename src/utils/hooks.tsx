import { createElement, ReactNode } from "react";

import { ObjectItem } from "mendix";
import { RadioCardContainerProps, RadioCardPreviewProps } from "typings/RadioCardProps";
import { RadioCardItemProps } from "src/components/RadioCardItem";
import { GenericItem, ItemClassProperties, ResponsiveType, ResponsiveWidth } from "./types";

/**
 * Generic get responsive class names
 * @param type Responsive device type
 * @param width Responsive width type
 * @param size Responsive size no.
 * @returns Space seperated class names for `RadioCardItem` column
 */
const getResponsiveClass = (type: ResponsiveType, width: ResponsiveWidth, size: number | null) => {
    const getFlag = (prefix: string = "", suffix: string = "") => {
        switch (type) {
            case "desktop":
                return `${prefix}lg${suffix}`;
            case "tablet":
                return `${prefix}md${suffix}`;
            default:
                return "";
        }
    }

    switch (width) {
        case "autofitContent":
            return `col${getFlag("-", "-")}auto`;
        case "manual":
            return `col${getFlag("-", "-")}${size ?? 12}`
        default:
            return `col${getFlag("-")}`;
    }
}

/**
 * Generic get column class names for `RadioCardItem`
 * @param properties Responsive properties object
 * @returns Space seperated class names for `RadioCardItem` column
 */
const getColumnClass = (properties: ItemClassProperties) => {
    var result = "";
    // Responsive columns
    result += `${getResponsiveClass("desktop", properties.desktopWidth, properties.desktopSize)}`;
    result += ` ${getResponsiveClass("tablet", properties.tabletWidth, properties.tabletSize)}`;
    result += ` ${getResponsiveClass("phone", properties.phoneWidth, properties.phoneSize)}`;

    return result;
}

/**
 * Generic get dynamic class names for `RadioCardItem`
 * @param properties Properties object
 * @param item Optional Mendix object that drives dynamic class retrieval
 * @returns Space seperated class names for `RadioCardItem`
 */
const getItemClass = (properties: ItemClassProperties, item?: ObjectItem) => {
    var result = "";
    // Dynamic class
    result += `${properties.dynamicClasses?.value || ""}`.trimEnd();
    if (properties.dynamicClassesReference && item) result += ` ${properties.dynamicClassesReference.get(item).value || ""}`.trimEnd();

    return result;
}

/**
 * Get class names for `RadioCardGroup`
 * @param param0 Radio Card Group class properties
 * @returns Space seperated class names for `RadioCardGroup`
 */
const getBaseClass = ({
    containerClass,
    highlightSelected,
    hideRadioInput,
    fullSizeContainer,
    cardSize
}: {
    containerClass: string
    highlightSelected: boolean
    hideRadioInput: boolean
    fullSizeContainer: boolean
    cardSize: "small" | "normal" | "large"
}) => {
    var result = "";
    result += `${containerClass || ""}`.trimEnd();
    if (highlightSelected) result += " radio-card-highlight";
    if (hideRadioInput) result += " radio-card-hideinput";
    if (fullSizeContainer) result += " radio-card-fill";

    if (cardSize === "small") result += " radio-card-sm";
    else if (cardSize === "large") result += " radio-card-lg";

    return result;
}

/**
 * Get string display value of given value
 * @param value Value to format
 * @param item Optional item to format value with 
 * @returns 
 */
const getDisplayValue = (value: any, item?: GenericItem<any>) => {
    if (item?.formatter) return item.formatter.format(value);
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (!value) return "";
    if (value.id) return value.id;
    return value;
}

export const useRadioCard = (props: RadioCardContainerProps) => {
    const field = props.type === "attribute" ? props.attribute : props.reference;
    const currentValue = getDisplayValue(field?.value, field);
    const position = props.radioPosition ?? "left";
    const alignment = props.cardAlignment ?? "center";

    const onChangeOption = (item: GenericItem<any> | undefined, value: any) => {
        if (item && !item?.readOnly) item.setValue(value);
    };

    const getRadioItem = (itemValue: any, className: string, columnClassName: string, content?: ReactNode | string): RadioCardItemProps => {
        const value = getDisplayValue(itemValue, field);
        const checked = value !== "" && value === currentValue;
        const disabled = field?.readOnly;
        const onChange = () => onChangeOption(field, itemValue);
        const selectedClass = props.selectedClass;

        return {
            alignment,
            position,
            checked,
            className,
            columnClassName,
            content,
            disabled,
            onChange,
            selectedClass,
            value
        }
    }

    const getItems = (): RadioCardItemProps[] | undefined => {
        if (props.type === "attribute") {
            if (props.customContent) {
                return props.displayItems?.map(obj => getRadioItem(obj.value.value, getItemClass(obj), getColumnClass(obj), obj.content));
            }
            else {
                return props.attribute.universe?.map(value => getRadioItem(value, getItemClass(props), getColumnClass(props)));
            }
        }
        else {
            if (props.customContent) {
                return props.selectableObjects.items?.map(refObj => getRadioItem(refObj, getItemClass(props, refObj), getColumnClass(props), props.contentReference.get(refObj)));
            }
            else {
                return props.selectableObjects.items?.map(refObj => getRadioItem(refObj, getItemClass(props, refObj), getColumnClass(props), props.displayValueReference.get(refObj).value));
            }
        }
    }

    return { items: getItems(), className: getBaseClass(props) };
}

export const useRadioCardPreview = (props: RadioCardPreviewProps) => {
    const position = props.radioPosition ?? "left";
    const alignment = props.cardAlignment ?? "center";

    const getRadioItem = (checked: boolean, value: any, className: string, columnClassName: string, content?: ReactNode | string): RadioCardItemProps => {
        const disabled = props.readOnly;
        const selectedClass = props.selectedClass;

        return {
            alignment,
            position,
            checked,
            className,
            columnClassName,
            content,
            disabled,
            selectedClass,
            value
        }
    }

    const getItems = (): RadioCardItemProps[] | undefined => {
        const classProps = { ...props, dynamicClasses: undefined, dynamicClassesReference: undefined };

        if (props.type === "attribute") {
            if (props.customContent) {
                return props.displayItems?.map((obj, idx) => {
                    const classProps = { ...obj, dynamicClasses: undefined };
                    
                    return getRadioItem(!!idx, obj.value, getItemClass(classProps), getColumnClass(classProps), (<obj.content.renderer><div></div></obj.content.renderer>));
                });
            }
            else {
                return [getRadioItem(true, props.attribute, getItemClass(classProps), getColumnClass(classProps))];
            }
        }
        else {
            if (props.customContent) {
                return [getRadioItem(true, props.reference, getItemClass(classProps), getColumnClass(classProps), (<props.contentReference.renderer><div></div></props.contentReference.renderer>))];
            }
            else {
                return [getRadioItem(true, props.reference, getItemClass(classProps), getColumnClass(classProps), props.displayValueReference)];
            }
        }
    }

    return { items: getItems(), className: getBaseClass(props) };
}