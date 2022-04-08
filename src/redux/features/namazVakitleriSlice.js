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
    const apiUrl = "https://api.collectapi.com/pray/single?ezan=Akşam&data.city=" + dispatch(Cevir(city));
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
export const Cevir = (text) => (dispatch) => {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };
    for (var key in trMap) {
        text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    return text.replace(/[^-a-zA-Z0-9\s]+/ig, '')
        .replace(/\s/gi, "-")
        .replace(/[-]+/gi, "-")
        .toLowerCase();

}


export const { getCurrentCity, getCityChange } = namazVakitleriSlice.actions;

export default namazVakitleriSlice.reducer