
import {LoginForm} from "../../components/LogForm";
import InviteToSomewhere from "../../components/InviteToSomewhere";
import './loginPageStyles.sass';
import {observer} from "mobx-react-lite";


const LoginPage = observer( () => {
    return(
        <>
            <div className="form_container">
                <LoginForm />
            </div>

            <InviteToSomewhere  path={"/registration"} text={"Еще не зарегистрированы?"}/>
        </>
    );
});

export default LoginPage;