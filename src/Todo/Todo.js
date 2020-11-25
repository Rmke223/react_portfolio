import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: [],
            id: 0,
            Fov: item => item
        }
    }
    // on change function that set the input from the form to a state variable
    changeUserInput(input) {
        this.setState({
            userInput: input
        }, () => console.log(input)
        )
    }
    // pushes the user input to the list array
    addToList(input) {
        let listArray = this.state.list;
        listArray.push({ name: input, isDone: null });
        this.setState({
            list: listArray,
            userInput: '',
        })
    }
    //  storing my list in the local browser storage
    componentDidUpdate() {
        localStorage.setItem('list', JSON.stringify(this.state.list))
    }
    componentDidMount() {
        if (localStorage.getItem('list') != null) {
            var todolist = JSON.parse(localStorage.getItem('list'));
            this.setState({
                list: todolist,
            })
        }
    }
    // remoces item from list array
    removeFromList(id) {
        let idArray = this.state.list;
        idArray.splice(id, 1);
        this.setState({
            list: idArray
        })
    }
    //setting the item to either true or false
    isClicked(name) {
        let list = this.state.list;
        let something = list.find(item => item.name == name)
        something.isDone = !something.isDone;
        this.setState({
            list
        })
    }
    // adds text to filter function that shows the completed to dos
    showDone() {
        let Fov = this.state.Fov
        Fov = item => item.isDone
        this.setState({
            Fov
        })
    }
    // add text to filter function that shows all to dos
    showAll() {
        let Fov = this.state.Fov
        Fov = item => item
        this.setState({
            Fov
        })
    }
    // add text to filter that will filter out the inactive items
    showActive() {
        let Fov = this.state.Fov
        Fov = item => !item.isDone
        this.setState({
            Fov
        })
    }
    // marks all items as complete
    completeAll() {
        let list = this.state.list
        for (var i in list) {
            if (list[i].isDone == null || list[i].isDone == false) {
                list[i].isDone = true
            }
        }
        this.setState({
            list
        })
    }
    // unchecks all of the boxes
    uncheckAll() {
        let list = this.state.list
        for (var i in list) {
            if (list[i].isDone == true) {
                list[i].isDone = false
            }
        }
        this.setState({
            list
        })
    }

    // searches through the list and splices any item marks as complete
    removeCompleted() {
        let list = this.state.list
        var i = 0;
        while (i < list.length) {
            if (list[i].isDone == true) {
                list.splice(i, 1);
            } else {
                ++i;
            }
        }
        this.setState({
            list
        })
    }

    render() {
        return (
            <div className="text-center bg-info text-white pt-4 pb-4 mx-0 px-0">
                <input
                    className="text-center bg-info text-primary"
                    style={{width: "75%"}}
                    onChange={(e) => this.changeUserInput(e.target.value)}  //user input
                    type="text"
                    value={this.state.userInput}
                    placeholder="Add Task"
                />
                <button className="btn btn-primary" onClick={() => this.addToList(this.state.userInput)}><b>Add</b></button>
                <div className="container-fluid bg-info">
                    <div className="row d-flex justify-content-between">
                        <button onClick={() => this.completeAll()} className="btn btn-info text-primary col-4" type="button"><b>Complete All</b></button>
                        <button onClick={() => this.removeCompleted()} className="btn btn-info text-primary col-4" type="button"><b>Remove Done</b></button>
                        <button onClick={() => this.uncheckAll()} className="btn btn-info text-primary col-4" type="button"><b>Uncheck All</b></button>
                    </div>
                </div>
                <ul className="list-group">
                    {this.state.list.filter(this.state.Fov).map((item, i) =>
                        <div
                            key={i}
                            id={i}
                            className="list-group-item d-flex justify-content-between text-primary bg-info">
                            <div className="col-1 border text-center"
                                onClick={() => this.isClicked(item.name)} >
                                {item.isDone && <div><i class="fas fa-check"></i></div>}
                            </div>
                            <h4>{item.name}</h4>
                            <button
                                onClick={() => this.removeFromList(i)}
                                className="btn btn-primary text-white">
                                <i class="fas fa-trash"></i>
              </button>
                        </div>)}
                </ul>
                <div className="container-fluid bg-info">
                    <div className="row d-flex justify-content-between">
                        <button onClick={() => this.showAll()} className="btn btn-info text-primary col-4" type="button"><b>Show All</b></button>
                        <button onClick={() => this.showActive()} className="btn btn-info text-primary col-4" type="button"><b>Show Active</b></button>
                        <button onClick={() => this.showDone()} className="btn btn-info text-primary col-4" type="button"><b>Show Done</b></button>
                    </div>
                </div>
                <p className="text-primary">There are {this.state.list.filter(item => !item.isDone).length} uncomplete tasks</p>
            </div>
        )
    }
}

