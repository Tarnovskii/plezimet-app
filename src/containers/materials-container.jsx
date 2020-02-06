import React from 'react'
import {Materials} from "../components/materials";
import {materialsData} from "../store/materialsData";
import s from '../stylesheets/materials.module.css'

export class MaterialsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            typesArray: [],
            formFactorsArray: [],
        };
        this.setSearchValueInFieldAndSearch.bind(this);
        this.getSearchValue.bind(this);
        this.generateMaterialsList.bind(this);
        this.setNewFormFactorsArray.bind(this);
        this.setNewTypesArray.bind(this);
    }

    setNewTypesArray = (newArray) => {
        this.setState({
            typesArray: newArray
        });
        console.log(this.state.typesArray)
    };
    setNewFormFactorsArray = (newArray) => {
        this.setState({
            formFactorsArray: newArray
        })
    };

    generateMaterialsList = () => {
        let somethingWasFounded = false;
        // eslint-disable-next-line array-callback-return
        let mappedMaterialsArray = materialsData.map((elem, index) => {
            if (elem.fullName.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1) {
                if (this.state.typesArray.length === 0) {
                    somethingWasFounded = true;
                    return (
                        <div key={index} style={{display: "inline-block"}}>
                            <div className={s.materialBlock}>
                                <div className={s.materialName}>
                                    <p>{elem.fullName}</p>
                                </div>
                                <div className={s.materialFormFactor}>
                                    <p> Вид готового материала: </p>
                                    {elem.formFactor.map((form) => (<p> {form} </p>))}
                                </div>
                                <div className={s.materalComposition}>
                                    <p> {"Состав"}</p>
                                </div>
                            </div>
                        </div>
                    );
                } else if (this.state.typesArray.indexOf(elem.type) !== -1) {
                    somethingWasFounded = true;
                    return (
                        <div key={index} style={{display: "inline-block"}}>
                            <div className={s.materialBlock}>
                                <div className={s.materialName}>
                                    <p>{elem.fullName}</p>
                                </div>
                                <div className={s.materialFormFactor}>
                                    <p> Вид готового материала: </p>
                                    {elem.formFactor.map((form) => (<p> {form} </p>))}
                                </div>
                                <div className={s.materalComposition}>
                                    <p> {"Состав"}</p>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        });
        return somethingWasFounded ? mappedMaterialsArray : (
            <div>
                <p> Sorry, but no results were found for your search. </p>
            </div>
        )
    };
    setSearchValueInFieldAndSearch = (newValue) => {
        this.setState({
            searchValue: newValue,
        });
    };
    getSearchValue = () => {
        return this.state.searchValue;
    };

    render() {
        return (
            <div>
                <Materials
                    setNewTypesArray={this.setNewTypesArray}
                    setNewFormFactorsArray={this.setNewFormFactorsArray}
                    setSearchValueInFieldAndSearch={this.setSearchValueInFieldAndSearch}
                    getSearchValue={this.getSearchValue}
                    generateMaterialsList={this.generateMaterialsList}
                />
            </div>
        )
    }

}
