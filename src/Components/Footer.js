import React from "react";
import { FcStart, FcContacts, FcOnlineSupport, FcHome } from "react-icons/fc";

import "../Styles/footer.css";


const FooterPage = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col">
                        <h4> QUICK LINKS </h4>
                        <ul className="list-unstyled">
                            <li className="summerActivitiesQuick">Summer Activities</li>
                            <li className="winterActivitiesQuick"> Winter Activities</li>
                            <li className="tippsQuick">Tipps from Locals</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="ccl">
                        <h4>POLICIES</h4>
                        <ul className="list-unstyled">
                            <li className="privacyPolicy">Privacy Policy</li>
                            <li className="socialMediaPolicy">Social Media Policy</li>
                            <li className="copyrightPolicy">Copyright Policy</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="thirdrow">
                        <h4>OUR TEAM</h4>
                        <ul><li className="ourTeamAuthors">Authors</li>
                            <li className="ourTeamAboutUs">About us</li>
                            <li className="ourTeamJoinUs">Join us</li>
                        </ul>
                    </div>
                    {/* Column4 */}
                    <div className="thirdrow">
                        <h4>CONTACT US</h4>
                        <button className="youtube-btn">
                            <FcStart />
                        </button>

                        <button className="contact-btn">
                            <FcContacts />
                        </button>
                        <div>
                            <button className="support-btn">
                                <FcOnlineSupport />
                            </button>
                            <button className="adress-btn">
                                <FcHome />
                            </button>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="lastrow">
                    <p1 className="col-sm">
                        &copy;{new Date().getFullYear()} GO TO AUSTRIA | All rights reserved
                    </p1>

                </div>
            </div>

        </div >

    )
}

export default FooterPage;