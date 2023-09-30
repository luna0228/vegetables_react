export default function Content() {
    return (

        <div className="main-container">
            <div className="container">
                <div className="banner mb-30">
                    <img src="img/banner.jpg" alt="banner" className="border-r" />
                </div>
                <div className="row">
                    <div className="left mb-30">
                        <div className="head-title border-r ">
                            Vegetables
                        </div>
                        <div className="photo-grid">
                            <ul>
                                <li className="border-r ">
                                    <img src="img/vegetable01.jpg" alt="Vegetables" />
                                </li>
                                <li className="border-r ">
                                    <img src="img/vegetable02.jpg" alt="Vegetables" />
                                </li>
                                <li className="border-r ">
                                    <img src="img/vegetable03.jpg" alt="Vegetables" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right mb-30">
                        <div className="head-title border-r ">
                            Contact
                        </div>
                        <div className="card">
                            <p>For any questions or suggestions about Vegetables, Vegetables Club or your
                                online order you can contact Vegetables Customer Service by phone, email
                                or post and we’ll be happy to help.</p>
                            <hr />
                            <p className="lineH-2">E-mail : Vegetables@aaabbccc.com<br />
                                PHONE : +886-123-456-789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}