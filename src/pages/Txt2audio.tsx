import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Txt2audio() {
  return (
    <Row>
      <Col className="d-flex flex-direction-column">
        <div className="welcome_page">
          <div style={{ margin: '25px 0 0 150px' }}>
            <h2>Перевести текст в аудио</h2>
            <div style={{ paddingBottom: '10px' }}>
              <Button>Загрузить аудио-файл</Button>
            </div>
            <div>
              <input style={{ padding: '100px' }} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
