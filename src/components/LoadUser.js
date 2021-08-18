import React from 'react';
import './index.css';
import './styles/loadUser.css';


export class LoadUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props,
            currentPage: 1,
            itemsPerPage: 5
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render(){
        const {items} = this.props;
        const {currentPage, itemsPerPage} = this.state;

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <nav className="pagination">
                    <li
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                        className="pagination"
                        >
                        {number}
                    </li>
                </nav>
                
            );
        });

        return(
            <div className="wrapperDiv">
                <div>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th >User id</th>
                                <th >Registration date</th>
                                <th >Last activity date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item,idx) => (
                                    <tr key={idx}>
                                        <td >{item.userId}</td>
                                        <td >{new Date(item.registrationDt).toLocaleDateString()}</td>
                                        <td >{new Date(item.lastActivityDt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                        </tbody>
                        {renderPageNumbers}
                    </table>
                    
                </div>
            </div>
        );
    }
}