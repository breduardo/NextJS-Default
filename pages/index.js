import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { ButtonLoading, Modal, Pagination } from "../components";
import styles from "../styles/Home.module.css";

import { Header } from "components/Layout";
import { Footer } from "../components/Layout";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import Alert from "components/Alert";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [page, setPage] = useState(1);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const user = useSession();

  const { data } = user;

  // if (user.status === "loading") {
  //   return "Loading or not authenticated...";
  // }
  return (
    <>
      <Modal
        visible={showModal}
        closeModal={() => setShowModal(false)}
        modalTitle="Modal Title"
        modalBody={
          <div>
            <p>Modal Body</p>
          </div>
        }
      />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container className="mt-3">
          <Row>
            <Col xs={12}>
              <Stack direction="horizontal" gap={3}>
                <ButtonLoading
                  loading={loading}
                  loadingText="Carregando"
                  onClick={handleClick}
                >
                  Button loading
                </ButtonLoading>
                <Button onClick={() => setShowModal(true)}>Modal</Button>

                <Pagination
                  totalRecords={100}
                  pageLimit={5}
                  page={page}
                  onChangePage={(e) => setPage(e)}
                />
              </Stack>
            </Col>
            <Col md={6} lg={3}>
              <Alert
                status={"success"}
                message="Teste"
                buttonText="Button Text"
                link="https://google.com.br"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  console.log({ session });
  return {
    props: {
      session,
    },
  };
}
