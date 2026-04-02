import { ReactElement, createElement, useId, CSSProperties, Fragment } from "react";

import { RadioCardItem, RadioCardItemProps } from "./RadioCardItem";
import { Alert } from "./Alert";

export interface RadioCardGroupProps {
    name: string;
    items?: RadioCardItemProps[];
    selectedClass: string;
    className?: string;
    style?: CSSProperties;
    tabIndex?: number;
    error?: string;
}

export function RadioCardGroup(props: RadioCardGroupProps): ReactElement {
    const groupId = useId();
    const name = `${props.name || "radio-card"}-${groupId}`;

    return (
        <Fragment>
            <div
                className={`radio-card ${props.className}`.trimEnd()}
                style={props.style}
                tabIndex={props.tabIndex ?? 0}
            >
                <div className="radio-card__row">
                    {props.items?.map((itemProps, index) => (
                        <RadioCardItem
                            {...itemProps}
                            name={name}
                            id={`${name}-${index}`}
                            key={`${name}-${index}`}
                            selectedClass={props.selectedClass}
                        />
                    ))}
                </div>
            </div>
            {props.error !== undefined && <Alert id={`${props.name}-error`} message={props.error} />}
        </Fragment>
    );
}
