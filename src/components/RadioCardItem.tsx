import { ReactElement, ReactNode, createElement } from "react";

export type Position = "left" | "right" | "above" | "below";
export type Alignment = "start" | "center" | "end";

export interface RadioCardItemProps {
    id?: string;
    name?: string;
    value?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    className?: string;
    columnClassName?: string;
    content?: ReactNode | string;
    position: Position;
    alignment: Alignment;
    selectedClass?: string;
}

const getPositionClass = (position: Position) => {
    switch (position) {
        case "right":
            return "radio-card__item--right";
        case "above":
            return "radio-card__item--above";
        case "below":
            return "radio-card__item--below";
        case "left":
        default:
            return "radio-card__item--left";
    }
};

const getAlignmentClass = (alignment: Alignment) => `radio-card__item--align-${alignment}`;

export function RadioCardItem({
    id,
    name,
    value,
    checked,
    onChange,
    disabled,
    className,
    columnClassName,
    content,
    position,
    alignment,
    selectedClass
}: RadioCardItemProps): ReactElement {
    const display = content ?? value;

    className += ` ${getPositionClass(position)} ${getAlignmentClass(alignment)}`;
    if (checked) {
        className += ` radio-card__item-selected ${selectedClass || ""}`.trimEnd();
    }

    return (
        <div className={`radio-card__col ${columnClassName}`}>
            <label key={id} htmlFor={id} className={`radio-card__item ${className}`}>
                {(position === "left" || position === "above") && (
                    <input
                        type="radio"
                        id={id}
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        className="radio-card__input"
                    />
                )}

                <span className="radio-card__content">{display}</span>

                {(position === "right" || position === "below") && (
                    <input
                        type="radio"
                        id={id}
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        className="radio-card__input"
                    />
                )}
            </label>
        </div>
    );
}
