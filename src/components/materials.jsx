import React from 'react'
import s from '../stylesheets/materials.module.css'
import 'antd/dist/antd.css';
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax/cjs";
import banner from '../img/materials/MaterialsBanner.png'
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
                        height: "300px"
                    }}
                    layers={[{
                        backgroundScale: "cover",
                        image: banner,
                        amount: 0.2,
                        height: "300px"
                    }]}
                />
                <p style={{marginTop: "30px", fontSize: "18px"}}>
                    На данной странице вы можете ознакомиться с нашими предложениями:
                </p>
                <div style={{display: "inline-block"}}>
                    <div className={s.toolBox}>
                        <div className={s.searchWrapper}>
                            <Search
                                value={props.getSearchValue()}
                                onChange={(e) => props.setSearchValueInFieldAndSearch(e.target.value)}
                                placeholder="Search"
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
                                placeholder="Выбрать тип сплава"
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
                                disabled
                                mode="multiple"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                placeholder="Выбрать вид готового материала"
                                onChange={(e) => props.setNewFormFactorsArray(e)}
                            >
                                <Option value="shavings"> Стружка </Option>
                                <Option value="ingot"> Слиток </Option>
                                <Option value="sheet"> Лист </Option>
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
