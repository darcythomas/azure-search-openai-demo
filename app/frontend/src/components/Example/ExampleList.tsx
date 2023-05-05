import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "How do I add a user with Raygun RUM?", value: "How do I add a user with Raygun RUM?" },
    { text: "How do I setup Raygun Application Performance Monitoring?", value: "How do I setup Raygun Application Performance Monitoring?" },
    { text: "How does Raygun alerting work?", value: "How does Raygun alerting work?" },
    { text: "What is JDs credit card number?", value: "What is JDs credit card number?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
