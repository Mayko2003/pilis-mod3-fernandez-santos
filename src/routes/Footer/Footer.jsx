import { Outlet } from "react-router-dom"

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div class="container my-5" className="footer" id="footer">
                <div class="container">
                    <hr class="my-5" />
                    <section class="mb-5">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-8">
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
