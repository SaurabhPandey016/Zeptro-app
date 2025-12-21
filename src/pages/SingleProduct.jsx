import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'

const SingleProduct = () => {

    const params = useParams()
    const [SingleProduct, setSingleProduct] = useState("")

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
            const product = res.data;
            setSingleProduct(product)
            // console.log(product);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])


  return (
    <div>
        <img src={SingleProduct.images[0]} alt="" />
        
    </div>
  )
}

export default SingleProduct
