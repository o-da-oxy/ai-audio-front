import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Audio2txt() {
  return (
    <Row>
      <Col className="d-flex flex-direction-column">
        <div className="welcome_page">
          <div style={{ margin: '25px 0 0 150px' }}>
            <h2>Перевести аудио в текст</h2>
            <p>Введите текст:</p>
            <div>
              <input style={{ padding: '100px' }} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
