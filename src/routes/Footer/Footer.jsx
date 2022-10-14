import { Outlet } from "react-router-dom"

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="container my-5 footer" id="footer">
                <div className="container">
                    <hr className="my-5" />
                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    PILIS - Fernandez - Santos - {year}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Outlet />
        </>

    )
}
