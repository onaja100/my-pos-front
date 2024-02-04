function TotalBuy({ products }) {
    const total = products.reduce((acc, product) => acc + (product.price * product.qty), 0);

    return (
        <tr>
            <td>Total: </td>
            <td> {total.toFixed(2)}</td>
        </tr>
    );
}

export default TotalBuy;