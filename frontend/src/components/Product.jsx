import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card className='my-4 p-3 rounded'>
            <a href={`/products/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </a>

            <Card.Body>
                <a href={`/products/${product._id}`}>
                    <Card.Title as="div">
                        <b>{product.name}</b>
                    </Card.Title>
                </a>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product