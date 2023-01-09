import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contenu: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const data = {
            title: this.state.title,
            contenu: this.state.contenu,
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <div className="row align-items-start">
                    <div className="col"></div>
                    <div className="col">
                <form onSubmit={this.onSubmit} >
                    <div className="mb-3">
                        <label for="">Title </label>
                        <input className="form-control" type="text" name="title" onChange={this.onChange} value={this.state.title}/>   
                    </div> 
           
                    <div className="mb-3">
                        <label for="">Contenu </label>
                        <textarea className="form-control" rows="3" name="contenu"  onChange={this.onChange} value={this.state.contenu}></textarea>
                    </div>
             
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">Envoyer</button>
                    </div> 
                </form>
                </div>
                <div className="col"></div>
                </div>
            </div>
        );
    }
}

export default PostForm;
