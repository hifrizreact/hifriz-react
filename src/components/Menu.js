import React from 'react';
import ReadMe from './ReadMe/ReadMe';
import logo from '../pics/logo.png';
import SearchBar from './SearchBar/SearchBar';
import SelectedBox from './SelectedBox/SelectedBox';
import Sort from './Sort/Sort';
import BinSize from './BinSize/BinSize';



class Menu extends React.Component {
    render() {
        return(

            <div id="panel-menu"> 

                <div id="menu-icon">
                    <img src={logo} alt="icon" className="img"/>
                </div>
                <div id="menu-description">
                    <p style={{margin: '3%'}}>
                        This design tends to visualize US stock market. 
                        By default, it shows the overview of the S&#38;P 500 companies on a default date. 
                        <br />You can select your stock by typing its name in search box below or click on its spot in the overview panel.
                    </p>
                </div>

                <ReadMe vizType={this.props.vizType}/>
                <SearchBar 
                    onChangeFilterText={this.props.onChangeFilterText}
                    onChangeSelectedStocks={this.props.onChangeSelectedStocks}
                    filterText={this.props.filterText}
                    stockNames={this.props.stockNames}
                />
                <SelectedBox 
                    onChangeSelectedStocks={this.props.onChangeSelectedStocks}
                    selectedStocks={this.props.selectedStocks}
                />
                <Sort 
                    vizType={this.props.vizType} 
                    sortData={this.props.sortData}
                    onChangeSort={this.props.onChangeSort}
                />
                <BinSize binSize={this.props.binSize} vizType={this.props.vizType} onChangeBinSize={this.props.onChangeBinSize}/>
                {/* <DateBox /> */}
                {/* Creating the button for view overview or details */}
                {/* <ViewOD /> */}

            </div>

        );
    }
    
}

export default Menu;