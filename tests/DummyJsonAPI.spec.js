import {test,expect} from '@playwright/test'
import { request } from 'node:http'
let userId
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzY3NDk4NTgsImV4cCI6MTc3Njc1MTY1OH0.K1i3x3TIJ-GAT8bD7heAi0VVC-B0qQglVZRoXm1t3pE'
test('Login Token',async({request})=>{
    const response=await request.post('https://dummyjson.com/auth/login',{
        data:{
            username: 'emilys',
             password: 'emilyspass',
             expiresInMins: 30
        }
    })
    expect (response.status()).toBe(200)
    const body=await response.json()
    console.log(body)
})
test('Get user',async({request})=>{
    const response=await request.get('https://dummyjson.com/auth/me',{
        headers:{
            Authorization: `Bearer ${token}`
            
        }
    })
    console.log('Json response is ',await response.json())
    expect(response.status()).toBe(200)
})
test('Create User',async({request})=>{
    const response=await request.post('https://dummyjson.com/users/add',{
        data:{
             "firstName": "Michael",
              "lastName": "Williams",
               "maidenName": "",
                 "age": 36,
        }
    })
    const body=await response.json()
    console.log(body.id)
    userId=body.id
    expect (response.status()).toBe(201)
     const updateresponse=await request.put('https://dummyjson.com/users/'+userId,{
        data:{
            "firstName": "Umer"
        }
    })
   // console.log(await response.json())
   const newbody=await updateresponse.json()
    console.log(newbody)

    
    //expect(response.status()).toBe(201)
})
// test ('Update user',async({request})=>{
//     const response=await request.put('https://dummyjson.com/users/'+userId,{
//         data:{
//             "firstName": "Umer"
//         }
//     })
//    // console.log(await response.json())
//    const body=await response.json()
//     console.log(body)

    
//     //expect(response.status()).toBe(201)
// })