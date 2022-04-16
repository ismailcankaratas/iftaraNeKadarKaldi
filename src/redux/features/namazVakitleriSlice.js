import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities: [
        { "id": "0", "name": "" },
        { "id": "1", "name": "ADANA" },
        { "id": "2", "name": "ADIYAMAN" },
        { "id": "3", "name": "AFYONKARAHİSAR" },
        { "id": "4", "name": "AĞRI" },
        { "id": "5", "name": "AMASYA" },
        { "id": "6", "name": "ANKARA" },
        { "id": "7", "name": "ANTALYA" },
        { "id": "8", "name": "ARTVİN" },
        { "id": "9", "name": "AYDIN" },
        { "id": "10", "name": "BALIKESİR" },
        { "id": "11", "name": "BİLECİK" },
        { "id": "12", "name": "BİNGÖL" },
        { "id": "13", "name": "BİTLİS" },
        { "id": "14", "name": "BOLU" },
        { "id": "15", "name": "BURDUR" },
        { "id": "16", "name": "BURSA" },
        { "id": "17", "name": "ÇANAKKALE" },
        { "id": "18", "name": "ÇANKIRI" },
        { "id": "19", "name": "ÇORUM" },
        { "id": "20", "name": "DENİZLİ" },
        { "id": "21", "name": "DİYARBAKIR" },
        { "id": "22", "name": "EDİRNE" },
        { "id": "23", "name": "ELAZIĞ" },
        { "id": "24", "name": "ERZİNCAN" },
        { "id": "25", "name": "ERZURUM" },
        { "id": "26", "name": "ESKİŞEHİR" },
        { "id": "27", "name": "GAZİANTEP" },
        { "id": "28", "name": "GİRESUN" },
        { "id": "29", "name": "GÜMÜŞHANE" },
        { "id": "30", "name": "HAKKARİ" },
        { "id": "31", "name": "HATAY" },
        { "id": "32", "name": "ISPARTA" },
        { "id": "33", "name": "MERSİN" },
        { "id": "34", "name": "İSTANBUL" },
        { "id": "35", "name": "İZMİR" },
        { "id": "36", "name": "KARS" },
        { "id": "37", "name": "KASTAMONU" },
        { "id": "38", "name": "KAYSERİ" },
        { "id": "39", "name": "KIRKLARELİ" },
        { "id": "40", "name": "KIRŞEHİR" },
        { "id": "41", "name": "KOCAELİ" },
        { "id": "42", "name": "KONYA" },
        { "id": "43", "name": "KÜTAHYA" },
        { "id": "44", "name": "MALATYA" },
        { "id": "45", "name": "MANİSA" },
        { "id": "46", "name": "KAHRAMANMARAŞ" },
        { "id": "47", "name": "MARDİN" },
        { "id": "48", "name": "MUĞLA" },
        { "id": "49", "name": "MUŞ" },
        { "id": "50", "name": "NEVŞEHİR" },
        { "id": "51", "name": "NİĞDE" },
        { "id": "52", "name": "ORDU" },
        { "id": "53", "name": "RİZE" },
        { "id": "54", "name": "SAKARYA" },
        { "id": "55", "name": "SAMSUN" },
        { "id": "56", "name": "SİİRT" },
        { "id": "57", "name": "SİNOP" },
        { "id": "58", "name": "SİVAS" },
        { "id": "59", "name": "TEKİRDAĞ" },
        { "id": "60", "name": "TOKAT" },
        { "id": "61", "name": "TRABZON" },
        { "id": "62", "name": "TUNCELİ" },
        { "id": "63", "name": "ŞANLIURFA" },
        { "id": "64", "name": "UŞAK" },
        { "id": "65", "name": "VAN" },
        { "id": "66", "name": "YOZGAT" },
        { "id": "67", "name": "ZONGULDAK" },
        { "id": "68", "name": "AKSARAY" },
        { "id": "69", "name": "BAYBURT" },
        { "id": "70", "name": "KARAMAN" },
        { "id": "71", "name": "KIRIKKALE" },
        { "id": "72", "name": "BATMAN" },
        { "id": "73", "name": "ŞIRNAK" },
        { "id": "74", "name": "BARTIN" },
        { "id": "75", "name": "ARDAHAN" },
        { "id": "76", "name": "IĞDIR" },
        { "id": "77", "name": "YALOVA" },
        { "id": "78", "name": "KARABüK" },
        { "id": "79", "name": "KİLİS" },
        { "id": "80", "name": "OSMANİYE" },
        { "id": "81", "name": "DÜZCE" },
    ],
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