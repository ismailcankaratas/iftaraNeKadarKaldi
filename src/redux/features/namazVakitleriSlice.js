import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities: [],
    currentCity: {},
}

export const namazVakitleriSlice = createSlice({
    name: 'namazVakitleri',
    initialState,
    reducers: {
        getCurrentCity: (state, action) => {
            state.currentCity = action.payload;
        },
        getCityChange: (state, action) => {
            state.city = action.payload;
        }
    }
})

export const getCurrentCityAsync = (city) => (dispatch) => {
    const apiUrl = "https://api.collectapi.com/pray/single?ezan=Akşam&data.city=" + city;
    const apiKey = "1Ob5SswhEmezvoNBbIz3Uh:05wGrbFPN9ZiFjZUzw54HK"
    dispatch(getCityChange(city));
    return fetch(apiUrl, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `apikey ${apiKey}`,
        },
    })
        .then(response => response.json())
        .then(response => { dispatch(getCurrentCity(response.result[0])) })
        .catch(handleError);
}
export function handleError(error) {
    console.log("Api hatası oluştu.");
    throw error;
}


export const { getCurrentCity, getCityChange } = namazVakitleriSlice.actions;

export default namazVakitleriSlice.reducer