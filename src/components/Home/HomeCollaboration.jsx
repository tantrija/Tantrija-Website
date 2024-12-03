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
import WebGL from "./../../assets/webgl-yellow.svg"
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
                        <h4 className="text-warning text-uppercase mb-5">We Work With</h4>
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
                                        <div>
                                            <img src={Ethereum} alt="Ethereum" title="Ethereum" className='mb-3' />
                                            <div>Ethereum</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <div>
                                            <img src={Hyperledger} alt="Hyperledger" title="Hyperledger" className='mb-3' />
                                            <div>Hyperledger</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <div>
                                            <img src={Web3} alt="Web3" title="Web3" className='mb-3' />
                                            <div>Web3</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <div>
                                            <img src={Ipfs} alt="Ipfs" title="Ipfs" className='mb-3' />
                                            <div>Ipfs</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <div>
                                            <img src={Solidity} alt="Solidity" title="Solidity" className='mb-3' />
                                            <div>Solidity</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="300" data-aos-once="true">
                                        <div>
                                            <img src={Avalanche} alt="Avalanche" title="Avalanche" className='mb-3' />
                                            <div>Avalanche</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="350" data-aos-once="true">
                                        <div>
                                            <img src={Binance} alt="Binance" title="Binance" className='mb-3' />
                                            <div>Binance</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="400" data-aos-once="true">
                                        <div>
                                            <img src={Polygon} alt="Polygon" title="Polygon" className='mb-3' />
                                            <div>Polygon</div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <div>
                                            <img src={Unity} alt="Unity" title="Unity" className='mb-3' />
                                            <div>Unity</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <div>
                                            <img src={UnrealEngine} alt="UnrealEngine" title="UnrealEngine" className='mb-3' />
                                            <div>UnrealEngine</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <div>
                                            <img src={WebGL} alt="WebGL" title="WebGL" className='mb-3' />
                                            <div>WebGL</div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <div>
                                            <img src={Swift} alt="Swift" title="Swift" className='mb-3' />
                                            <div>Swift</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <div>
                                            <img src={Android} alt="Android" title="Android" className='mb-3' />
                                            <div>Android</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <div>
                                            <img src={Apple} alt="Apple" title="Apple" className='mb-3' />
                                            <div>Apple</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <div>
                                            <img src={Flutter} alt="Flutter" title="Flutter" className='mb-3' />
                                            <div>Flutter</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <div>
                                            <img src={ReactNative} alt="ReactNative" title="ReactNative" className='mb-3' />
                                            <div>ReactNative</div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <div>
                                            <img src={React} alt="React" title="React" className='mb-3' />
                                            <div>React</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <div>
                                            <img src={Vuejs} alt="Vuejs" title="Vuejs" className='mb-3' />
                                            <div>Vuejs</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <div>
                                            <img src={Html5} alt="Html5" title="Html5" className='mb-3' />
                                            <div>Html5</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <div>
                                            <img src={Npm} alt="Npm" title="Npm" className='mb-3' />
                                            <div>Npm</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <div>
                                            <img src={Javascript} alt="Javascript" title="Javascript" className='mb-3' />
                                            <div>Javascript</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="300" data-aos-once="true">
                                        <div>
                                            <img src={NextJs} alt="NextJs" title="NextJs" className='mb-3' />
                                            <div>NextJs</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="350" data-aos-once="true">
                                        <div>
                                            <img src={Angular} alt="Angular" title="Angular" className='mb-3' />
                                            <div>Angular</div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <div>
                                            <img src={Firebase} alt="Firebase" title="Firebase" className='mb-3' />
                                            <div>Firebase</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="100" data-aos-once="true">
                                        <div>
                                            <img src={NodeJs} alt="NodeJs" title="NodeJs" className='mb-3' />
                                            <div>NodeJs</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                                        <div>
                                            <img src={AdonisJs} alt="AdonisJs" title="AdonisJs" className='mb-3' />
                                            <div>AdonisJs</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="200" data-aos-once="true">
                                        <div>
                                            <img src={ExpressJs} alt="ExpressJs" title="ExpressJs" className='mb-3' />
                                            <div>ExpressJs</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <div>
                                            <img src={PHP} alt="PHP" title="PHP" className='mb-3' />
                                            <div>PHP</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="300" data-aos-once="true">
                                        <div>
                                            <img src={Dotnet} alt=".net" title=".net" className='mb-3' />
                                            <div>Dot Net</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="350" data-aos-once="true">
                                        <div>
                                            <img src={CSharp} alt="C#" title="C#" className='mb-3' />
                                            <div>C#</div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <div>
                                            <img src={MySql} alt="MySql" title="MySql" className='mb-3' />
                                            <div>MySql</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <div>
                                            <img src={Postgres} alt="Postgres" title="Postgres" className='mb-3' />
                                            <div>Postgres</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                        <div>
                                            <img src={MongoDB} alt="MongoDB" title="MongoDB" className='mb-3' />
                                            <div>MongoDB</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                        <div>
                                            <img src={Firestore} alt="Firestore" title="Firestore" className='mb-3' />
                                            <div>Firestore</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1000" data-aos-once="true">
                                        <div>
                                            <img src={Cassandra} alt="Cassandra" title="Cassandra" className='mb-3' />
                                            <div>Cassandra</div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap tech-stack mt-4 pt-1">
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="50" data-aos-once="true">
                                        <div>
                                            <img src={Docker} alt="Docker" title="Docker" className='mb-3' />
                                            <div>Docker</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="250" data-aos-once="true">
                                        <div>
                                            <img src={AWS} alt="AWS" title="AWS" className='mb-3' />
                                            <div>AWS</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="500" data-aos-once="true">
                                        <div>
                                            <img src={Jira} alt="Jira" title="Jira" className='mb-3' />
                                            <div>Jira</div>
                                        </div>
                                    </div>
                                    <div className="bg-transparent border border-1 p-4 tech-card position-relative d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="750" data-aos-once="true">
                                        <div>
                                            <img src={Gitlab} alt="Gitlab" title="Gitlab" className='mb-3' />
                                            <div>Gitlab</div>
                                        </div>
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