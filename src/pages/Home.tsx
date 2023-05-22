import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Home() {
  return (
    <Row>
      <Col className="d-flex flex-direction-column">
        <div className="welcome_page">
          <div style={{ margin: '25px 0 0 150px' }}>
            <h2>Добро пожаловать в ИИ-сервис для обработки аудио!</h2>
            <p>Выберите нужную опцию:</p>
            <div>
              <LinkContainer to="/audio2txt">
                <Button>Перевести аудио в текст</Button>
              </LinkContainer>
            </div>
            <div style={{ marginTop: '10px' }}>
              <LinkContainer to="/txt2audio">
                <Button>Перевести текст в аудио</Button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
