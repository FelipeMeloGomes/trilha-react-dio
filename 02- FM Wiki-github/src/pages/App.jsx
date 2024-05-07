import { Container } from "./styles";
import Input from "../components/Input";
import useRepo from "../Hooks/useRepo";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import gitLogo from "../assets/logo.png";
function App() {
    const {
        currentRepo,
        handleRemoveRepo,
        handleSearchRepo,
        setCurrentRepo,
        repos,
    } = useRepo();

    return (
        <Container>
            <img src={gitLogo} alt="logo" width={72} height={72} />
            <Input
                value={currentRepo}
                onChange={(e) => setCurrentRepo(e.target.value)}
            />
            <Button onClick={handleSearchRepo} />
            {repos.map((repo) => (
                <ItemRepo
                    repo={repo}
                    key={repo.id}
                    handleRemoveRepo={handleRemoveRepo}
                />
            ))}
        </Container>
    );
}

export default App;
