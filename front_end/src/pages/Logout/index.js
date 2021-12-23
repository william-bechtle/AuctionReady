
import NavBar from "../../components/navbar";
import Logout from "../../components/logout";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const LogoutPage = () => {

    const dispatch = useDispatch();

    dispatch({type: "logout"})

    return(
        <>
            <NavBar />
            <Logout />
        </>
    )
}
export default LogoutPage;