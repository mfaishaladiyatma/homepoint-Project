import React, { createContext } from "react";
import axios from "axios";

export const addressContext = createContext()

function AddressProvider({ children }) {

    const [listProvinsi, setListProvinsi] = React.useState([])
    const [dataProduct, setDataProduct] = React.useState([])

    React.useEffect(() => {

        const getProvinsi = async () => {
            const provinsiData = await fetch(`http://dev.farizdotid.com/api/daerahindonesia/provinsi`);
            setListProvinsi(await provinsiData.json())
        }

        getProvinsi()

    }, [])

    React.useEffect(() => {
        const getProducts = async () => {
            const productData = await axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products')
            setDataProduct(await productData.data.data)
        }

        getProducts()
    }, [])

    return (
        <addressContext.Provider value={{ listProvinsi, dataProduct, setDataProduct }}>
            {children}
        </addressContext.Provider>
    )
}

export default AddressProvider