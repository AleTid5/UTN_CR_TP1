import React, { useEffect, useState } from "react";
import Personaje from "../../components/personaje";
import { Col, Container, Row, Spinner } from "react-bootstrap";

export default function PersonajePage({
  match: {
    params: { id },
  },
}) {
  //Refs
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const [personaje, setPersonaje] = useState({});
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonaje(data);
        setFetching(false);
      })
      .catch((e) => setError(true));
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-center text-info">Personaje {id}</h1>
        <Row>
          <Col xs={4} />
          <Personaje {...personaje} key={personaje.id} goBack={true} />
        </Row>
        {fetching && <Spinner animation="grow" variant="dark" />}
      </Container>
    </>
  );
}
