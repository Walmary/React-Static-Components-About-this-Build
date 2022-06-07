//import { ReactDOM } from 'react-dom';
//import './App.css';


const Title = props => {
    return <h5 claseName = "title" > { props.text } < /h5>;
};





class General extends React.Component {
    render() {
        return ( <
            div >
            <
            h1 style = {
                {
                    width: '960px',
                    height: "800px",
                    marginTop: "30px",
                    backgroundColor: "grey",
                }
            } >
            <
            /h1> 

            <
            h2 style = {
                {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    width: '200px',
                    height: "500px",
                    marginTop: "30px",
                    paddingTop: "30px",
                    overflowWrap: "#1d2636",
                    textAlign: "left",
                    backgroundColor: "#242e42",
                }
            } >
            <
            Title text = "Dashboard" / >
            <
            Title text = "Widget" / >
            <
            Title text = "Reviews" / >
            <
            Title text = "Custoner" / >
            <
            Title text = "Online Analysis" / >
            <
            Title text = "Settings" / >
            <
            /h2>

            <
            h3 style = {
                {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    width: '200px',
                    height: "200px",
                    marginTop: "30px",
                    marginLeft: "230px",
                    paddingTop: "30px",
                    overflowWrap: "#1d2636",
                    backgroundColor: "#242e42",
                }
            } >
            <
            Title text = "Reviews" / >
            <
            Title text = "1,281" / >

            <
            /h3>

            <
            h4 style = {
                {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    width: '200px',
                    height: "200px",
                    marginTop: "30px",
                    marginLeft: "460px",
                    paddingTop: "30px",
                    overflowWrap: "#1d2636",
                    backgroundColor: "#242e42",
                }
            } >
            <
            Title text = "Average Rating" / >
            <
            Title text = "4.6" / >

            <
            /h4>


            <
            h5 style = {
                {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    width: '200px',
                    height: "200px",
                    marginTop: "30px",
                    marginLeft: "700px",
                    paddingTop: "30px",
                    overflowWrap: "#1d2636",
                    fontSize: "30",
                    backgroundColor: "#242e42",
                }
            } >
            <
            Title text = "Sentiment Analysis" / >
            <
            Title text = "960" / >
            <
            Title text = "122" / >
            <
            Title text = "321" / >

            <
            /h5>



            <
            h6 style = {
                {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    width: '670px',
                    height: "250px",
                    marginTop: "280px",
                    marginLeft: "230px",
                    paddingTop: "30px",
                    overflowWrap: "#1d2636",
                    fontSize: "30",
                    backgroundColor: "#242e42",
                }
            } >
            <
            Title text = "Web Site Visitor" / >
            <
            Title text = "821" / >

            <
            /h6>










            <
            /

            div >






        );
    }
}


class Sidevar extends React.Component {
    render() {
        return ( <
            h2 style = {
                {
                    width: '300px',
                    height: "500px",
                    marginTop: "30px",
                    float: "left",
                    backgroundColor: "blue",
                }
            } >
            <
            Title text = "Dashboard" / >
            <
            Title text = "Widget" / >
            <
            Title text = "Reviews" / >
            <
            Title text = "Custoner" / >
            <
            Title text = "Online Analysis" / >
            <
            Title text = "Settings" / >
            <
            /h2>
        );
    }
}
















class App extends React.Component {
    render() {
        return ( <
            div >
            <
            General / >

            <

            /div>
        );
    }
}


ReactDOM.render( < App / > , document.querySelector(".container"));