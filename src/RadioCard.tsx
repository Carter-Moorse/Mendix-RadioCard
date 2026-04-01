import { ReactElement, createElement } from "react";

import { RadioCardGroup } from "./components/RadioCardGroup";
import { useRadioCard } from "src/utils/hooks";
import { RadioCardContainerProps } from "../typings/RadioCardProps";

import "./ui/RadioCard.css";

export function RadioCard(props: RadioCardContainerProps): ReactElement {
    const { items, className, error } = useRadioCard(props);

    return <RadioCardGroup
        name={props.name}
        selectedClass={props.selectedClass}
        className={className}
        items={items}
        tabIndex={props.tabIndex}
        error={error}
    />;
}
