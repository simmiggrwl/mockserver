import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createServer} from '../store/actions';

class CreateServer extends Component {
    constructor(props){
        super(props);
        this.state= {
            servername: '',
            schemas: [{
               schematitle:'',
               schemaoptions:[{
                   schemaname:'',
                   schematype:'',
                   schemafield:['']
               }]
            }],
        };
        this.handleChange=this.handleChange.bind(this);
        this.addSchema=this.addSchema.bind(this);
        this.handleSchema=this.handleSchema.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.addFieldValue=this.addFieldValue.bind(this);
        this.handleFieldValue=this.handleFieldValue.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    addSchema(){
        this.setState({schemas: [...this.state.schemas, {
            schematitle:'',
            schemaoptions:[{
                schemaname:'',
                schematype:'',
                schemafield:['']
            }]
         }]});
    }

    addFieldValue(){
        this.setState({schemafield: [...this.state.schemas.schemaoptions.schemafield, '']})
    }

    handleFieldValue(e, index){
        const schemafield=[...this.state.schemas['schemaoptions']['schemafield']];
        schemafield[index]=e.target.value;
        this.setState({schemafield});
    }

    handleSchema(e, index){
        const schemas=[...this.state.schemas];
        schemas[index]=e.target.value;
        this.setState({schemas});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createServer(this.state);
        window.location.href="/";
    }

    render() {
        const schemas = this.state.schemas.map((schemas, i) => (<Fragment key={i}>
            <label className="form-label">Schema Name</label>
            <input className="form-input" type="text" value={schemas.schematitle} onChange={e=> this.handleChange(e)}/>
            <label className="form-label">Field</label>
            <input className="form-input" type="text" value={schemas.schemaoptions.schemaname} onChange={e=> this.handleChange(e)}/>
            <label className="form-label">Type</label>
            <input className="form-input" type="text" value={schemas.schemaoptions.schematype} onChange={e=> this.handleChange(e)}/>
            <label className="form-label">Field Value</label>
            <input className="form-input" type="text" value={schemas.schemaoptions.schemafield} onChange={e=> this.handleFieldValue(e)}/>
        </Fragment>));


        return (<form className="form" onSubmit={this.handleSubmit}>
            <label className="form-label" htmlFor="servername">Server Name</label>
            <input className="form-input" type="text" name="servername" value={this.state.servername} onChange={this.handleChange} />
            
            {schemas}
            <div className="button_center">
                <button className="button" type="button" onClick={this.addFieldValue}>Add Field Value</button>
            <button className="button" type="button" onClick={this.addSchema}>Add Schema</button>
            <button className="button" type="submit">Submit</button>
            </div>
        </form>
        );
    }
}

export default connect(() => ({}), { createServer })(CreateServer);