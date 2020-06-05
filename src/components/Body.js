import React,{Component} from 'react';
import CheckBox from './segments/checkbox';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './segments/button.css';


class Body extends Component{
	constructor(){
		super();
		this.state={
			button:true,
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleClick(){
		this.setState({
			button :!this.state.button
		})
	}

	handleSubmit(event){
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form)

		fetch('/api/submit',{
			method:'POST',
			body:data,
		});
	}

    render(){
    	const PeopleItem=[];
    	for(var i=1;i<=6;i++)
            	{
            		PeopleItem.push(<option value={{i}}>{i}</option>)
            	 }
					
        return(
            <form onSubmit={this.handleSubmit}>
                <h4 style={{margin:"30px"}}>How many Meals?</h4>
            	<br/>
            	<CheckBox style={{marginTop:"5px"}}/>
            	<br/>
            	<h4 style={{margin:"30px",display:"inline-block"}}> Number of Persons </h4>
            	<select name="persons" style={{margin:"30px"}}>
           			{PeopleItem}
				</select>
				<h4 style={{margin:"30px"}}>Preferred gender of cook</h4>
            	<div>
	            	<ul>
						<input type="checkbox" checked={this.state.checked} onChange={this.handleClick} />Male
					</ul>
					<ul>
						<input type="checkbox" checked={this.state.checked} onChange={this.handleClick} />Female
					</ul>
					<ul>
						<input type="checkbox" checked={this.state.checked} onChange={this.handleClick} />Just an awesome cook
					</ul>
            	</div>
            	<h4 style={{margin:"30px"}}>Preferred Time Slot</h4>
            	<div className="container">
            		<Button variant="contained" className={this.state.button? "buttonTrue":"buttonFalse"} onClick={this.handleClick}>Lunch</Button> 
            		<Button variant="contained" style={{marginLeft:"20px"}} className={this.state.button? "buttonTrue":"buttonFalse"} onClick={this.handleClick}>Dinner</Button>
            	</div>
            	<Button variant="contained" style={{marginLeft:"200px",alignText:"center"}}><a href="/"><ArrowForwardIosIcon /></a></Button>
            	
            </form>

        );
    }
}

export default Body;