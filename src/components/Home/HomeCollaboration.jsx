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
import Ethereum from "./../../assets/ethereum-yellow.svg"
import Polygon from "./../../assets/polygon-yellow.svg"
import Hyperledger from "./../../assets/hyperledger-yellow.svg"
import Web3 from "./../../assets/web3-yellow.svg"
import Ipfs from "./../../assets/ipfs-yellow.svg"
import Binance from "./../../assets/binance-yellow.svg"
import Avalanche from "./../../assets/avalanche-yellow.svg"
import Solidity from "./../../assets/solidity-yellow.svg"
import Unity from "./../../assets/unity-yellow.svg"
import UnrealEngine from "./../../assets/unrealengine-yellow.svg"
import ReactNative from "./../../assets/react-native-yellow.svg"
import Html5 from "./../../assets/html5-yellow.svg"
import Vuejs from "./../../assets/vuejs-yellow.svg"
import Npm from "./../../assets/npm-yellow.svg"
import Javascript from "./../../assets/javascript-yellow.svg"
import NextJs from "./../../assets/nextjs-yellow.svg"
import Angular from "./../../assets/angular-yellow.svg"
import AdonisJs from "./../../assets/adonisjs-yellow.svg"
import NodeJs from "./../../assets/nodejs-yellow.svg"
import ExpressJs from "./../../assets/expressjs-yellow.svg"
import PHP from "./../../assets/php-yellow.svg"
import Dotnet from "./../../assets/dotnet-yellow.svg"
import CSharp from "./../../assets/csharp-yellow.svg"
import MySql from "./../../assets/mysql-yellow.svg"
import Postgres from "./../../assets/postgresql-yellow.svg"
import MongoDB from "./../../assets/mongodb-yellow.svg"
import Firestore from "./../../assets/firestore-yellow.svg"
import Cassandra from "./../../assets/cassandra-yellow.svg"
import Docker from "./../../assets/docker-yellow.svg"
import AWS from "./../../assets/aws-yellow.svg"
import Jira from "./../../assets/jira-yellow.svg"
import Gitlab from "./../../assets/gitlab-yellow.svg"



export default function collaboration() {
    return (
        <div className="bg-circle-left collab vh-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <p className="text-uppercase text-white">Platforms</p>
                        <hr className="border-white mt-1 mx-auto hr-x-small" />
                        <h4 className="text-warning text-uppercase">We Work With</h4>
                    </div>
                    <div className="col-lg-12 text-center co-operator-tabs">
                        <Tabs>
                            <TabList>
                                <Tab>Blockchain</Tab>
                                <Tab>Games</Tab>
                                <Tab>Mobile</Tab>
                                <Tab>Front End</Tab>
                                <Tab>Back End</Tab>
                                <Tab>Database</Tab>
                                <Tab>Infra & Devops</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <img src={Ethereum} alt="Ethereum" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <img src={Hyperledger} alt="Hyperledger" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <img src={Web3} alt="Web3" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <img src={Ipfs} alt="Ipfs" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <img src={Solidity} alt="Solidity" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="300" data-aos-once="true">
                                        <img src={Avalanche} alt="Avalanche" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="350" data-aos-once="true">
                                        <img src={Binance} alt="Binance" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="400" data-aos-once="true">
                                        <img src={Polygon} alt="Polygon" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <img src={Unity} alt="Unity" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <img src={UnrealEngine} alt="UnrealEngine" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <img src={Swift} alt="Swift" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <img src={Android} alt="Android" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <img src={Apple} alt="Apple" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <img src={Flutter} alt="Flutter" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <img src={ReactNative} alt="ReactNative" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <img src={React} alt="React" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <img src={Vuejs} alt="Vuejs" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <img src={Html5} alt="Html5" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <img src={Npm} alt="Npm" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <img src={Javascript} alt="Javascript" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="300" data-aos-once="true">
                                        <img src={NextJs} alt="NextJs" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="350" data-aos-once="true">
                                        <img src={Angular} alt="Angular" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <img src={Firebase} alt="Firebase" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <img src={NodeJs} alt="NodeJs" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <img src={AdonisJs} alt="AdonisJs" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <img src={ExpressJs} alt="ExpressJs" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <img src={PHP} alt="PHP" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="300" data-aos-once="true">
                                        <img src={Dotnet} alt=".net" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="350" data-aos-once="true">
                                        <img src={CSharp} alt="C#" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <img src={MySql} alt="MySql" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <img src={Postgres} alt="Postgres" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                        <img src={MongoDB} alt="MongoDB" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                        <img src={Firestore} alt="Firestore" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                        <img src={Cassandra} alt="Cassandra" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <img src={Docker} alt="Docker" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <img src={AWS} alt="AWS" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                        <img src={Jira} alt="Jira" />
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                        <img src={Gitlab} alt="Gitlab" />
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