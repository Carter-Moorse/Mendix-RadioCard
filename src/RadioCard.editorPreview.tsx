import { ReactElement, createElement } from "react";
import { RadioCardGroup } from "./components/RadioCardGroup";
import { RadioCardPreviewProps } from "../typings/RadioCardProps";
import { useRadioCardPreview } from "./utils/hooks";

export function preview(props: RadioCardPreviewProps): ReactElement {
    const { items, className } = useRadioCardPreview(props);

    return (
        <RadioCardGroup
            name={"Preview"}
            selectedClass={props.selectedClass}
            className={className}
            items={items}
            tabIndex={0}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/RadioCard.css");
}
