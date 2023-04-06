import React from 'react'
import "./Pages.css";
import BgImg from "./background-image-2.png";
import M4I1 from "../Images/m2t1.png";
import M4I2 from "../Images/m4t2.png";
import M4I3 from "../Images/m2t3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Heading,Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export const Module4 = () => {
  return (
    <div className="module-main">
      <img className="BgImg" src={BgImg} alt="BgImg" />
      <Link className="home-btn" to={"/"}>
        <div>
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            style={{ color: "#8e8f90" }}
          />
        </div>
      </Link>
      <div className="Heading">
      <h1> Module Four</h1>
      </div>
      <div className="module-data">
        <Tabs size='large'>
          <TabList className="tab-list" >
            <Tab _selected={{ color: 'blue.500', bg: 'white', width:"200px", height:"60px" }}  >Tab 1</Tab>
            <Tab _selected={{ color: 'blue.500', bg: 'white', width:"200px", height:"60px" }}>Tab 2</Tab>
            <Tab _selected={{ color: 'blue.500', bg: 'white' , width:"200px", height:"60px"}}>Tab 3</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="tab1">
              <div>
              <img className="m1i1" src={M4I1} alt="m1i1" />
              </div>
              <div className="text-data">
              <Heading>Ut hendrerit est tovegh</Heading>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ullam, eveniet laborum aliquam aspernatur eius reiciendis a magni pariatur dolore eaque ducimus temporibus dolorem, quam eos assumenda, natus inventore sed labore odio quae quod repellat ipsam. Quidem.
				</p>
              </div>
            </TabPanel>
            <TabPanel className="tab1">
              <div>
              <img className="m1i1" src={M4I2} alt="m1i1" />
              </div>
              <div className="text-data">
              <Heading>Morbi arcu libero</Heading>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ullam, eveniet laborum aliquam aspernatur eius reiciendis a magni pariatur dolore eaque ducimus temporibus dolorem, quam eos assumenda, natus inventore sed labore odio quae quod repellat ipsam. Quidem.
				</p>
              </div>
            </TabPanel>
            <TabPanel className="tab1">
              <div>
              <img className="m1i1" src={M4I3} alt="m1i1" />
              </div>
              <div className="text-data">
              <Heading>Ut hendrerit est tovegh</Heading>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ullam, eveniet laborum aliquam aspernatur eius reiciendis a magni pariatur dolore eaque ducimus temporibus dolorem, quam eos assumenda, natus inventore sed labore odio quae quod repellat ipsam. Quidem.
				</p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        
      </div>
    </div>
  )
}
