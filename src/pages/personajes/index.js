import React, { useEffect, useState } from "react";
import Personaje from "../../components/personaje";
import { Col, Container, Row, Spinner } from "react-bootstrap";

export default function PersonajesPage() {
  //Refs
  const baseUrl = "https://rickandmortyapi.com/api";
  const [personajes, setPersonajes] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/character/`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setFetching(false);
      })
      .catch((e) => setError(true));
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-center text-info">Personajes</h1>
        <Row>
          {personajes.map((personaje) => (
            <Personaje {...personaje} key={personaje.id} />
          ))}
        </Row>
        {fetching && <Spinner animation="grow" variant="dark" />}
      </Container>
    </>
  );
}
