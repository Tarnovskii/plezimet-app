import React from 'react'
import {local} from '../store/localization'
import s from '../stylesheets/materials.module.css'
import 'antd/dist/antd.css';
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax/cjs";
import banner from '../img/materials/materialsBanner.jpg'
import {Input, Select} from "antd";

const {Option} = Select;
const {Search} = Input;

export const Materials = (props) => {
    return (
        <div className={s.main}>
            <ParallaxProvider>
                <ParallaxBanner
                    className={s.paralax}
                    expanded={false}
                    style={{
                        top: 0,
                        margin: 0,
                        padding: 0,
                        height: "400px"
                    }}
                    layers={[
                        {
                            backgroundScale: "cover",
                            image: banner,
                            amount: 0.5,
                            height: "400px"
                        },
                        {
                            backgroundScale: "cover",
                            image: local[localStorage.language].img_materials,
                            amount: 0.2,
                            height: "400px"
                        }
                    ]}
                />
                <p style={{
                    marginTop: "30px",
                    width: "55vw",
                    minWidth: "800px",
                    display: "inline-block",
                    fontSize: "18px"
                }}>
                    {local[localStorage.language].material_banner}
                </p>
                <div style={{display: "inline-block"}}>
                    <div className={s.toolBox}>
                        <div className={s.searchWrapper}>
                            <Search
                                value={props.getSearchValue()}
                                onChange={(e) => props.setSearchValueInFieldAndSearch(e.target.value)}
                                placeholder={local[localStorage.language].search}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </div>
                        <div className={s.searchTypeWrapper}>
                            <Select
                                mode="multiple"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                placeholder={local[localStorage.language].alloy_type}
                                onChange={(e) => props.setNewTypesArray(e)}
                            >
                                <Option value="inconel"> Inconel </Option>
                                <Option value="aisi"> Aisi </Option>
                                <Option value="titan"> Titanium </Option>
                                <Option value="other"> Other </Option>
                            </Select>
                        </div>
                        <div className={s.sortWrapper}>
                            <Select
                                mode="multiple"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                placeholder={local[localStorage.language].product_type}
                                onChange={(e) => props.setNewFormFactorsArray(e)}
                            >
                                <Option value="scrap"> {local[localStorage.language].scrap} </Option>
                                <Option value="shavings"> {local[localStorage.language].shavings} </Option>
                                <Option value="hardened_ingot"> {local[localStorage.language].hardened_ingot} </Option>
                                <Option value="ingot"> {local[localStorage.language].ingot} </Option>
                            </Select>
                        </div>
                    </div>
                    <hr className={s.line} style={{width: "85%"}}/>
                </div>
                <div className={s.materialsListWrapper}>
                    {props.generateMaterialsList()}
                </div>
            </ParallaxProvider>
        </div>
    )
};
