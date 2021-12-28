import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getUsers, getTasks} from "../actions/login";
import "../App.css";

import {useSelector, useDispatch} from "react-redux";
import toast, {Toaster} from 'react-hot-toast';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';



function showToast(users){
 
    const typedUsers = {...users, detailed: true};
    console.log(users)
    toast(
        (t) => (
          <div style={{position: "relative", width: "20rem"}}>
             
            <TableCard users={typedUsers} /> 
            <br/>
            <br/>
            <button style={{position: 'absolute', right: 0, bottom: 0}} onClick={() => toast.dismiss(t.id)}>Dismiss</button>
          </div>
        )
        
      );

}

const TableCard = (props) => {
    const {users} = props;
    const {id, name, login, email, type, detailed} = users;
    console.log(id, name, login, email, type, detailed);
    return(
        <table className="table" onClick={()=>showToast(users)}>
            <thead><tr>
                    <th>id</th>
                    <th>user</th>
                    <th>login</th>
                    <th>email</th>
                    {detailed ?
                <th>
                    type
                </th>:
                <div></div>
                }

                </tr></thead>
            <tbody>
                
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{login}</td>
                    <td>{email}</td>
                    {detailed ?
                <td>
                    {type}
                </td>:
                <div></div>
                }
                </tr>
                
                
            </tbody>
        </table>
    )
}


 function showToastTasks(tasks){
 
    const typedTasks = {...tasks};
    console.log(tasks)
    toast(
        (t) => (
          <div style={{position: "relative", width: "20rem"}}>
             
            <TableTasks tasks={typedTasks}/> 
            <br/>
            <br/>
            <button style={{position: 'absolute', right: 0, bottom: 0}} onClick={() => toast.dismiss(t.id)}>Dismiss</button>
          </div>
        )
        
      );

}

const TableTasks = (props) => {
    const {tasks} = props;
    const {id, summary, projectName} = tasks[0];
    console.log(id, summary, projectName);

    

    return(
        <table className="table" onClick={()=>showToastTasks(tasks)}>
            <thead><tr>
                    <th>id</th>
                    <th>summary</th>
                    <th>projectName</th>
                </tr></thead>
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{summary}</td>
                    <td>{projectName}</td>
                <div></div>
                </tr>
                
            </tbody>
        </table>
    )
}


const styles = StyleSheet.create({

    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
      },

      text: {
          marginRight: 40
      },

    section: {
        fontSize: 16
    },
  });



const Home = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    
    const tasks = useSelector(state => state.tasks);



    function fillUsers(){
        dispatch(getUsers())
    }

    useEffect(() => {
        fillUsers()},[])



    function fillTasks(){
        dispatch(getTasks())
    }
    
    useEffect(() => {
        fillTasks()},[])    

    return (
        <div className="home">
            <div className="title">Home</div> 
            <Toaster
                toastOptions={{
                width: 1000
            }}/>
                <Link to="/authorization">Authorization</Link> 
            {
                users?
                <TableCard users={users}/>
                :<div></div>
            }
            {
                tasks?
                <TableTasks tasks={tasks}/>
                :<div></div>
            }
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.text}>Field</Text>
                        <Text style={styles.text}>Type</Text>
                        <Text style={styles.text}>Description</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>author</Text>
                        <Text style={styles.text}>User</Text>
                        <Text style={styles.text}>The user to whom the work is attributed in the work item. Can be null.</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>creator</Text>
                        <Text style={styles.text}>User</Text>
                        <Text style={styles.text}>The user who added the work item to the issue. Read-only. Can be null.</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>text</Text>
                        <Text style={styles.text}>String</Text>
                        <Text style={styles.text}>The work item description. Can be null.</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>textPreview</Text>
                        <Text style={styles.text}>String</Text>
                        <Text style={styles.text}>Parsed preview of the description. Read-only</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>type</Text>
                        <Text style={styles.text}>WorkItemType</Text>
                        <Text style={styles.text}>The work item type. Can be null.</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>created</Text>
                        <Text style={styles.text}>Long</Text>
                        <Text style={styles.text}>The date when the work item was created. Can be null.</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>updated</Text>
                        <Text style={styles.text}>Long</Text>
                        <Text style={styles.text}>The date when the work item was last updated. Can be null.</Text><br></br>
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>duration</Text>
                        <Text style={styles.text}>DurationValue</Text>
                        <Text style={styles.text}>The duration of the work item.</Text><br></br>  
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>date</Text>
                        <Text style={styles.text}>Long</Text>
                        <Text style={styles.text}>The date and time that is assigned to the work item. Stored as a Unix timestamp in<br></br>UTC. The time part is set to midnight for the current date.</Text><br></br>  
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>issue</Text>
                        <Text style={styles.text}>Issue</Text>
                        <Text style={styles.text}>Stores attributes of the issue to which the work item is attached. Read-only.</Text><br></br>   
                        <hr></hr>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>usesMarkdown</Text>
                        <Text style={styles.text}>Boolean</Text>
                        <Text style={styles.text}>Stores the format of the comment text. When true, the comment is processed as<br></br>Markdown formatted text. Otherwise, the comment is processed as YouTrack Wiki<br></br>formatted.</Text><br></br>
                    </View>
                </Page>
          </Document>
        </div>
    )

}



export default Home;
