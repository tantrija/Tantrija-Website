import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Android from "../../assets/android.svg"
import Apple from "../../assets/apple.svg"
import Flutter from "../../assets/flutter.svg"
import React from "../../assets/react-yellow.svg"
import Swift from "../../assets/swift.svg"
import Firebase from "../../assets/firebase.svg"
import Yii from "../../assets/yii.svg"
import Java from "../../assets/java.svg"

export default function collaboration() {
    return (
            <div className="bg-circle-left collab mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                            <p className="text-uppercase text-white">Collaboration</p>
                            <hr className="border-white mt-1 mx-auto hr-x-small" />
                            <h4 className="text-warning text-uppercase">We Work With</h4>
                            </div>
                             <div className="col-lg-12 text-center co-operator-tabs">
                            <Tabs>
                                <TabList>
                                    <Tab>Mobile</Tab>
                                    <Tab>Front End</Tab>
                                    <Tab>Back End</Tab>
                                    <Tab>Database</Tab>
                                    <Tab>CMS</Tab>
                                    <Tab>Infra & Devops</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                            <img src={Android} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                            <img src={Apple} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                            <img src={Flutter} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                            <img src={React} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                            <img src={Swift} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1250" data-aos-once="true">
                                            <img src={Firebase} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1500" data-aos-once="true">
                                            <img src={Yii} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1750" data-aos-once="true">
                                            <img src={Java} alt="tech icon" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                            <img src={Swift} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                            <img src={Firebase} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                            <img src={Yii} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                            <img src={Java} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                            <img src={Android} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1250" data-aos-once="true">
                                            <img src={Apple} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1500" data-aos-once="true">
                                            <img src={Flutter} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1750" data-aos-once="true">
                                            <img src={React} alt="tech icon" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                            <img src={Swift} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                            <img src={Firebase} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                            <img src={Yii} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                            <img src={Android} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                            <img src={Apple} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1250" data-aos-once="true">
                                            <img src={Flutter} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1500" data-aos-once="true">
                                            <img src={React} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1750" data-aos-once="true">
                                            <img src={Java} alt="tech icon" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                            <img src={Flutter} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                            <img src={React} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                            <img src={Swift} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                            <img src={Firebase} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                            <img src={Yii} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1250" data-aos-once="true">
                                            <img src={Android} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1500" data-aos-once="true">
                                            <img src={Apple} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1750" data-aos-once="true">
                                            <img src={Java} alt="tech icon" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                            <img src={Yii} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                            <img src={Java} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                            <img src={React} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                            <img src={Swift} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                            <img src={Android} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1250" data-aos-once="true">
                                            <img src={Apple} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1500" data-aos-once="true">
                                            <img src={Flutter} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1750" data-aos-once="true">
                                            <img src={Firebase} alt="tech icon" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                            <img src={React} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                            <img src={Swift} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                            <img src={Android} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                            <img src={Yii} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                            <img src={Flutter} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1250" data-aos-once="true">
                                            <img src={Firebase} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1500" data-aos-once="true">
                                            <img src={Java} alt="tech icon" />
                                        </div>
                                        <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1750" data-aos-once="true">
                                            <img src={Apple} alt="tech icon" />
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
    )
}