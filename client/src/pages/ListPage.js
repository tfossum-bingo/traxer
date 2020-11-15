import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Logout from '../components/LogOut'
import CreateTaskButton from '../components/CreateTaskButton'
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'
import Modal from '../components/modals/Modal'
import '../styles/Task.css'
import { __GetTasks } from '../services/TaskService'

export default class ViewTasks extends Component {
    constructor(props) {
        super()
        console.log("VT Props: ", props)
        this.state = {
            tasks: null,
            user: null,
            displayModal: false
        }
    }

    componentDidMount() {
        const localStorabeUserID = localStorage.getItem("userId")
        if (localStorabeUserID) {
            this.setState({ user: localStorabeUserID })
        } else {
            this.setState({ user: this.props.user._id })
        }
        this.getTasks()
    }

    getTasks = async () => {

        //   const tasks = await __GetUserTasks(this.props.user_id)
        console.log('HIT getTasks')
        const foo = localStorage.getItem("userId")
        console.log('localStorage userId: ', foo)
        const tasks = await __GetTasks(foo)
        this.setState({ tasks: tasks })
        console.log('Tasks Received: ', this.state.tasks)
    }

    showModal() {
        this.setState({ displayModal: true })
    }

    render() {
        const { tasks } = this.state
        console.log('ListPage User: ', this.state.user)
        if (tasks !== null) {
            return (
                <div>
                    <div>
                        <Logout></Logout>
                    </div>
                    <div>
                        User ID: {`${this.state.user}`}
                    </div>
                    {/* <div>
                        <CreateTaskButton/>
                    </div> */}
                    <div>
                        <TaskForm {...this.props} />
                    </div>
                    <div>
                        <Modal show={this.state.displayModal}>
                            Edit this Task
                            <TaskForm />
                        </Modal>
                    </div>
                    <button onClick={e=> this.showModal()} >
                        Show Modal
                    </button>
                    <div className="tasks-container">
                        ListPage
                    {tasks.map((task, index) => {
                        return (
                            <Task task={task} key={task._id}></Task>
                        )
                    })
                        }
                    </div>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}
