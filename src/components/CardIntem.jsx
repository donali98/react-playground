import React from "react";
import { Button, Card } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const CardItem = ({ text, onDelete }) => {
    return (
        <Card className="mb-3">
            <Card.Body className="d-flex justify-content-between align-items-center">
                <span>{text}</span>
                <Button variant="danger" onClick={onDelete}>
                    Eliminar
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardItem;
