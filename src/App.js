import {Link, Route} from "react-router-dom";
import {Users} from "./components/Users";

const App = () => {
    return (
        <div>
            <Link to={ `/users` }>Users</Link>
            <div>
                <Route path={ `/users` } render={ (props) => <Users { ...props }/> }/>
            </div>
        </div>
    );
}

export default App;

