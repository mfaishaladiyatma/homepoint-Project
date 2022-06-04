import React, { createContext } from "react";

export const addressContext = createContext()

function AddressProvider({ children }) {

    const [listProvinsi, setListProvinsi] = React.useState([])

    React.useEffect(() => {
        const getProvinsi = async () => {
            const provinsiData = await fetch(`http://dev.farizdotid.com/api/daerahindonesia/provinsi`);
            setListProvinsi(await provinsiData.json())
        }
        // const getKabupaten = async () => {
        //     const kabupatenData = await fetch(`http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32`);
        //     setListKabupaten(await kabupatenData.json())
        // }
        // const getKecamatan = async () => {
        //     const kecamatanData = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3214`);
        //     setListKecamatan(await kecamatanData.json())
        // }
        // const getKelurahan = async () => {
        //     const kelurahanData = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=3214010`);
        //     setListKelurahan(await kelurahanData.json())
        // }
        getProvinsi()
        // getKabupaten()
        // getKecamatan()
        // getKelurahan()
    }, [])
    return (
        <addressContext.Provider value={{ listProvinsi }}>
            {children}
        </addressContext.Provider>
    )
}

export default AddressProvider