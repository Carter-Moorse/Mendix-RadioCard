import { ReactElement, createElement, useId, CSSProperties } from "react";

import { RadioCardItem, RadioCardItemProps } from "./RadioCardItem";
import { GenericItem } from "src/utils/types";

export interface RadioCardGroupProps<T> {
    name: string
    field?: GenericItem<T>
    items?: RadioCardItemProps[]
    selectedClass: string
    className?: string
    style?: CSSProperties
    tabIndex?: number
}

export function RadioCardGroup<T>(props: RadioCardGroupProps<T>): ReactElement {
    const groupId = useId();
    const name = `${(props.name || "radio-card")}-${groupId}`;

    return (
        <div className={`radio-card ${props.className}`.trimEnd()} style={props.style} tabIndex={props.tabIndex ?? 0}>
            <div className="radio-card__row">
                {props.items?.map((itemProps, index) => <RadioCardItem {...itemProps} name={name} id={`${name}-${index}`} key={`${name}-${index}`} />)}
            </div>
        </div>
    );
}

