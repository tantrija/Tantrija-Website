import { IconBase } from "react-icons";
import { FaFontAwesome } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LinkIcon from './../../assets/open-external-link-icon.svg';
import { useNavigate } from "react-router-dom";

export default function menuBlockchain() {
  const navigate = useNavigate();

  return (
    <div className="mega-menu position-absolute w-100 mt-4">
      <div className="container-fluid px-4">
        <Tabs>
          <div className="row bg-white rounded overflow-hidden">
            <div className="col-lg-3 bg-warning p-0">
              <TabList>
                <Tab>Blockchain</Tab>
                <Tab>Game Development</Tab>
                <Tab>Mobile Application Development</Tab>
                <Tab>Web App Development</Tab>
                {/* <Tab>CMS Development</Tab>
                <Tab>Database Management</Tab> */}
              </TabList>
            </div>
            <div className="col-lg-9 p-4 text-dark">
              <TabPanel>
                <h6 className="text-dark text-uppercase" onClick={()=>{ navigate("/blockchain") }}>Blockchain <img className="linkIcon-15" src={LinkIcon} /></h6>
                <p>Blockchain technology revolutionizes data security and transparency, ensuring trust and efficiency in transactions across industries worldwide.</p>
                <div className="row mt-4">
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Smart Contracts</p>
                    <p className="text-three-lines">Streamline transactions with self-executing contracts, enhancing security and efficiency in business processes.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">DAaps</p>
                    <p className="text-three-lines">Empower decentralized applications with blockchain technology, enabling transparent and secure user interactions.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Blockchain Consulting</p>
                    <p className="text-three-lines">Unlock the potential of blockchain technology with expert guidance tailored to your business needs and objectives.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Web3 Integration</p>
                    <p className="text-three-lines">Seamlessly integrate blockchain technology into your web applications, harnessing the power of decentralization.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Token Development</p>
                    <p className="text-three-lines">Create custom tokens to fuel your decentralized ecosystem, enabling secure and efficient value transfer.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Auditing</p>
                    <p className="text-three-lines">Ensure the security and integrity of your blockchain systems with thorough auditing services and assessments.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Cryptocurrency Exchange</p>
                    <p className="text-three-lines">Facilitate seamless trading of digital assets with a secure and reliable cryptocurrency exchange platform.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Decentralised Financial Applications</p>
                    <p className="text-three-lines">Transform the finance industry with decentralized financial applications, enabling peer-to-peer transactions and lending.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Centralised Blockchain Applications</p>
                    <p className="text-three-lines">Leverage blockchain technology to build efficient and secure centralized applications tailored to your business requirements.</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h6 className="text-dark text-uppercase" onClick={()=>{ navigate("/game-development") }}>Game Development <img className="linkIcon-15" src={LinkIcon} /></h6>
                <p>Craft immersive gaming experiences with cutting-edge technology and creative design, tailored to captivate and engage players.</p>
                <div className="row mt-4">
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Concept Development</p>
                    <p className="text-three-lines">We help you refine your game concept, ensuring it is engaging and aligns with your vision.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Game Design</p>
                    <p className="text-three-lines">Our team creates detailed game design documents outlining the gameplay, mechanics, and story.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Art and Animation</p>
                    <p className="text-three-lines">We provide high-quality 2D and 3D art and animation services to bring your game world to life.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Sound Design</p>
                    <p className="text-three-lines">We offer professional sound design services, including music and sound effects, to enhance the gaming experience.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Multiplayer Integration</p>
                    <p className="text-three-lines">Implement robust multiplayer functionality, enabling seamless online interactions and social gaming experiences.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Virtual Reality (VR) Development</p>
                    <p className="text-three-lines">Create immersive virtual reality experiences that transport players to fantastical worlds and enhance immersion.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Augmented Reality (AR) Development</p>
                    <p className="text-three-lines">Incorporate augmented reality features into your games, blending virtual elements with the real world to create unique experiences.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Mobile Game Development</p>
                    <p className="text-three-lines">Develop captivating mobile games optimized for various devices, ensuring seamless performance and user experience.</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h6 className="text-dark text-uppercase" onClick={()=>{ navigate("/mobile-development") }}>Mobile Applications Development <img className="linkIcon-15" src={LinkIcon} /></h6>
                <p>Transform your ideas into engaging mobile experiences, leveraging cutting-edge technologies to reach your audience on their devices.</p>
                <div className="row mt-4">
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">iOS App Development</p>
                    <p className="text-three-lines">Build sleek and intuitive iOS applications that leverage the latest features and technologies of Apple's ecosystem.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Android App Development</p>
                    <p className="text-three-lines">Develop scalable and feature-rich Android applications for a wide range of devices, ensuring broad market reach and compatibility.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Cross-Platform Application</p>
                    <p className="text-three-lines">Develop applications that run seamlessly across multiple platforms, maximizing reach and minimizing development costs.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">UI/UX Design</p>
                    <p className="text-three-lines">Create visually stunning and intuitive user interfaces, focusing on user experience to enhance engagement and usability.</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h6 className="text-dark text-uppercase" onClick={()=>{ navigate("/web-development") }}>Web Applicaiton Development <img className="linkIcon-15" src={LinkIcon} /></h6>
                <p>Create dynamic and scalable web applications tailored to your business needs, delivering seamless user experiences and efficient functionality.</p>
                <div className="row mt-4">
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Website Development</p>
                    <p className="text-three-lines">Craft visually stunning and responsive websites tailored to your brand identity and business objectives.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Ecommerce Solutions</p>
                    <p className="text-three-lines">Build robust ecommerce platforms that drive sales and enhance customer experiences with seamless online shopping.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Web Application Development</p>
                    <p className="text-three-lines">Develop dynamic web applications that streamline business processes and provide intuitive user experiences across devices.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Content Management Systems</p>
                    <p className="text-three-lines">Implement flexible and scalable content management systems to efficiently manage and deliver digital content to your audience.</p>
                  </div>

                </div>
              </TabPanel>
               <TabPanel>
                <h6 className="text-dark text-uppercase" onClick={()=>{ navigate("/ContentManagementSystem") }}>CMS Development <img className="linkIcon-15" src={LinkIcon} /></h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                <div className="row mt-4">
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Algorand Blockchain</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Subtrate</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Tezos</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Cosmos</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Polygon Edge</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Polygon Blockchain</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Smart Contract Audit</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h6 className="text-dark text-uppercase" onClick={()=>{ navigate("/DatabaseManagement") }}>Database Management <img className="linkIcon-15" src={LinkIcon} /></h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                <div className="row mt-4">
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Cosmos</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Algorand Blockchain</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Polygon Edge</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Subtrate</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Tezos</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Polygon Blockchain</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                  <div className="col-lg-4 mb-2">
                    <p className="fw-medium text-uppercase position-relative bottom-bar-left mb-2">Smart Contract Audit</p>
                    <p className="text-three-lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor vel nisl vitae dictum.</p>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
