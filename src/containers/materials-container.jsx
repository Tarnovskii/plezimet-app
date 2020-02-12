import React from 'react'
import {local} from '../store/localization'
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
    };
    setNewFormFactorsArray = (newArray) => {
        this.setState({
            formFactorsArray: newArray
        });
        console.log(newArray)
    };

    checkFormFactors = (formFactors) => {
        let isOk = false;
        this.state.formFactorsArray.forEach((elem) => {
            if (formFactors.indexOf(elem) !== -1) {
                isOk = true;
            }
        });
        return isOk;
    };

    generateCompositionArrayFromObject = (composition) => {
        let compositionsArray = [];

        for (let element in composition) compositionsArray.push({[element]: composition[element]});

        return compositionsArray;
    };

    generateMaterialsList = () => {
        let somethingWasFounded = false;
        // eslint-disable-next-line array-callback-return
        let mappedMaterialsArray = materialsData.map((elem, index) => {
            if (elem.fullName.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1) {
                if (
                    ((this.state.typesArray.length === 0) || (this.state.typesArray.indexOf(elem.type) !== -1))
                    &&
                    ((this.state.formFactorsArray.length === 0) || (this.checkFormFactors(elem.formFactor)))
                ) {
                    somethingWasFounded = true;
                    return (
                        <div style={{display: "inline-block"}}>
                            <div className={s.materialBlock}>
                                <div className={s.materialName}>
                                    <p>{elem.fullName}</p>
                                </div>
                                <div className={s.materialFormFactor}>
                                    <table className={s.materialFromFactorTable}>
                                        <th>
                                            Form
                                        </th>
                                        {elem.formFactor.map((elem) => {
                                            return <tr>{local[localStorage.language][elem]}</tr>
                                        })}
                                    </table>
                                    <div className={s.wantThisButtonWrapper}>
                                        <a className={s.toContacts} key={index}
                                           style={{display: "inline-block"}}
                                           href={`/${localStorage.language}/contacts/?material=${elem.fullName}`}>Write
                                            us about this!
                                        </a>
                                    </div>
                                </div>
                                <div className={s.materialComposition}>
                                    <p>{local[localStorage.language].chemichal_composition}</p>
                                    <table className={s.compositionTable}>
                                        <tr style={{fontWeight: "bold", background: "#F7F7F7"}}>
                                            {this.generateCompositionArrayFromObject(elem.compositions).map((composition) => (
                                                <td>{Object.keys(composition).toString()}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            {this.generateCompositionArrayFromObject(elem.compositions).map((composition) => (
                                                <td>{composition[Object.keys(composition).toString()]}</td>
                                            ))}
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        });
        return somethingWasFounded ? mappedMaterialsArray : (
            <div style={{height: "100%", fontSize: "30px", fontWeight: "bold", marginTop: "50px"}}>
                <p> Sorry, but no results found for your search. </p>
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
            <Materials
                setNewTypesArray={this.setNewTypesArray}
                setNewFormFactorsArray={this.setNewFormFactorsArray}
                setSearchValueInFieldAndSearch={this.setSearchValueInFieldAndSearch}
                getSearchValue={this.getSearchValue}
                generateMaterialsList={this.generateMaterialsList}
            />
        )
    }

}
