import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index.js';

class PostsNew extends Component {
    renderField(field) {
        const { label, id, input } = field;
        const { error, touched } = field.meta;

        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} {...input} />
                {
                    touched ? <div style={{ color: 'red' }}>{error}</div> : ''
                }
            </div>
        );
    }
    onFormSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field label="Title" name="title" id="title" component={this.renderField} />
                <Field label="Categories" name="categories" id="categories" component={this.renderField} />
                <Field label="Content" name="content" id="content" component={this.renderField} />
                <button type="submit">Create Post</button>
                <Link to="/">Cancel</Link>
            </form>
        );
    }
}

function validate({ title, categories, content }) {
    let errors = {};

    if (!title) {
        errors.title = 'Please enter a title';
    }

    if (!categories) {
        errors.categories = 'Please enter categories';
    }

    if (!content) {
        errors.content = 'Please enter content';
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(
    connect(null, { createPost })(PostsNew)
    );