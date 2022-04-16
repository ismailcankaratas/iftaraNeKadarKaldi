import { connect, useDispatch } from "react-redux";
import withRouter from "../withRouter";
import { getCurrentCityAsync } from '../../redux/features/namazVakitleriSlice'
import Sehir from "../../views/Sehir";
import { useEffect, useState } from "react";

function Iftar({ city, currentCity }) {
    const [sehir, setSehir] = useState(city);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentCityAsync(city));
    }, [sehir]);

    return (
        <Sehir
            city={city}
            currentCity={currentCity}
        />

    )
}

function mapStateToProps(state, ownProps) {
    const city = ownProps.params.sehir;
    const currentCity = state.namazVakitleriSlice.currentCity;
    return {
        city,
        currentCity,
    }
}

export default withRouter(connect(mapStateToProps)(Iftar));