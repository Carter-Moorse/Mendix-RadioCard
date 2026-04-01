import { ReactElement, createElement } from "react";

export interface AlertProps {
    id: string,
    message: string;
}

export function Alert(props: AlertProps): ReactElement {
    return <div id={props.id} className="alert alert-danger mx-validation-message" role="alert">
            {props.message}
        </div>
}