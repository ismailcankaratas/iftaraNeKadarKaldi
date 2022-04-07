import { useParams } from 'react-router-dom';

const withRouter = Component => props => {
    const params = useParams();
    return <Component {...props} params={params} />;
}
export default withRouter;