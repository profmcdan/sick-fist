import App, { Container } from "next/app";
import { compareAsc } from "date-fns";
import Page from "../components/Page";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
