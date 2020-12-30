import React from 'react';
import Header from '../src/component/header';
import './App.scss';
import Headline from './component/headline/Headline';
import Button from './component/button/button';
import ListItem from './component/listItems/listitem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/axiosAction';

const initialState = {
  hideBtn: false

};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      postsList:[]
    }
    // console.log(this.props);
  }

  fetch = () => {
    this.props.fetchPosts();
    this.updateState();
    // console.log('props: ', this.props);
    // console.log('state: ', this.state);
  }

  updateState = () => {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
    console.log(this.props);
    // this.setState(previous =>{
    //   // console.log(previous);
    //   return{
    //     posts: [...this.state.posts]
    //   }
    // })
    // console.log(this.props.posts);
  }


  render() {

    const { postsList } = this.props;
    console.log(this.props, postsList);
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };
    const { hideBtn } = this.state;

    return (
      <div className="App">
        <Header />
        <section className="main">
          {/* <Headline header="Headline" desc="Headline text" /> */}
          {
            <div>
              <Button {...configButton} />
              &nbsp; Get Posts
              </div>
          }
          <hr />
          <article className="article">
            {(postsList && postsList.length > 0) &&
              <div>
                {postsList.map((post, index) => {
                  const { title, body } = post;
                  const configList = { title, desc: body }
                  return (
                    <ListItem key={index} {...configList} />
                  )
                })}
              </div>
            }
          </article>
        </section>
      </div>
    );
  };
}

const mapStateToProps = state => {
  console.log(state);
  return { postsList: state.postsList }
};
export default connect(mapStateToProps, { fetchPosts })(App);
