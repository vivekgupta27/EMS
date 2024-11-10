const employeeData=
  [
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "password": "A1ic3JohN!2023",
      "tasks": [
        {
          "title": "Project Kickoff Meeting",
          "description": "Attend the kickoff meeting for the new project.",
          "date": "2024-11-10",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Market Research",
          "description": "Conduct research on competitors.",
          "date": "2024-11-11",
          "category": "Research",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Weekly Report",
          "description": "Prepare and submit the weekly report.",
          "date": "2024-11-12",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCount": {
        "newTask": 1,
        "failedTask": 0,
        "acceptedTask": 2,
        "completedTask": 1
      }
    },
    {
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "password": "B0bSm1th2023#",
      "tasks": [
        {
          "title": "Code Review",
          "description": "Review the latest code commits.",
          "date": "2024-11-10",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "System Update",
          "description": "Ensure all systems are updated to the latest version.",
          "date": "2024-11-09",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Team Meeting",
          "description": "Discuss weekly goals with the team.",
          "date": "2024-11-11",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCount": {
        "newTask": 1,
        "failedTask": 1,
        "acceptedTask": 2,
        "completedTask": 1
      }
    },
    {
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "password": "Charli3!Br0wn123",
      "tasks": [
        {
          "title": "Client Presentation",
          "description": "Present project updates to the client.",
          "date": "2024-11-15",
          "category": "Client",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Design Review",
          "description": "Review and approve the new design mockups.",
          "date": "2024-11-12",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCount": {
        "newTask": 1,
        "failedTask": 0,
        "acceptedTask": 1,
        "completedTask": 1
      }
    }
  ]
  


  
 const adminData=[{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "Adm!nP@ssw0rd",
    "role": "Administrator",
    "permissions": [
      "manage_users",
      "access_reports",
      "edit_tasks",
      "configure_system"
    ],
    "tasks": [
      {
        "title": "Review User Access",
        "description": "Review and update user permissions for the quarter.",
        "date": "2024-10-10",
        "category": "User Management",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "System Update",
        "description": "Oversee scheduled system update and resolve any issues.",
        "date": "2024-10-12",
        "category": "System Administration",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  }]
   
const setLocalStorage =()=>{
    localStorage.setItem('employeeData', JSON.stringify(employeeData));
    localStorage.setItem('adminData', JSON.stringify(adminData));
}
const getLocalStorage =()=>{
    const employees=JSON.parse(localStorage.getItem('employeeData'));
    const admin=JSON.parse(localStorage.getItem('adminData'));
    return {employees, admin};

}


export {setLocalStorage,getLocalStorage}