import React, { Component }from "react";

class CartColums extends Component {
    render() {
        return (
                <div className="container-fluid text-center d-none d-lg-block">
                    <div className="row">
                        <div className="col-10 col-lg-2 mx-auto">
                            <p className="text-uppercase">products</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                            <p className="text-uppercase">Name of product</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                            <p className="text-uppercase">Price</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                            <p className="text-uppercase">quantity</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                            <p className="text-uppercase">remove</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                            <p className="text-uppercase">total</p>
                        </div>
                    </div>
                </div>
            );
    }
}

export default CartColums;