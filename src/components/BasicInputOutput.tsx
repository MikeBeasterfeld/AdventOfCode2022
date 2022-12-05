import React, { ChangeEvent, FormEvent, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type IOProps = {
    func: (input: string) => number;
    inputLabel: string;
    outputLabel: string;
};

function BasicInputOutput(props: IOProps) {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<number | undefined>(undefined);

    function updateInput(event: ChangeEvent<HTMLTextAreaElement>) {
        setInput(event.target.value);
    }

    function calculate(event: FormEvent) {
        event.preventDefault();
        setOutput(props.func(input));
    }

    return (
        <div className="BasicInputOutput">
            <header className="BasicInputOutput-header">
                <Form onSubmit={calculate}>
                    <Form.Group>
                        <Form.Label>{props.inputLabel}:</Form.Label>
                        <Form.Control as="textarea" rows={10} onChange={updateInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                <p>{props.outputLabel}: {output}</p>
            </header>
        </div>
    );
}

export default BasicInputOutput;
