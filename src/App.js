import { AppContainer, PageTitle, PageSubTitle } from "./components";
import { Summary } from "./components/sections/Summary";
import "./styles.scss";

export default function App() {
  return (
    <AppContainer>
      <PageTitle>Thomas Vo</PageTitle>
      <PageSubTitle>Engineer, Entrepreneur</PageSubTitle>
      <Summary />
    </AppContainer>
  );
}
