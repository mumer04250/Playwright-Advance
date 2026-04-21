import{test,expect} from '@playwright/test'
import { request } from 'node:http'
let userId
test('Get Users',async({request})=>{
  const response=await request.get('https://reqres.in/api/users',{
    headers:{
         'x-api-key':'reqres_10127a4afa37409f9d2d98e5def657b6'

  }

  })
  console.log(await response.json())
  expect (response.status()).toBe(200)

})
test('Create User',async({request})=>{
    const response=await request.post('https://reqres.in/api/users',{
        data:{
            name:'umer',
            job:'SQA'
        },
        headers:{
         'x-api-key':'reqres_10127a4afa37409f9d2d98e5def657b6'

  }

    })
    console.log(await response.json())
    expect (await response.status()).toBe(201)
    const body=await response.json()
    userId=body.id
    console.log(userId)
})
test ('Update User',async({request})=>{
    const response=await request.put('https://reqres.in/api/users/'+userId,{
        data:{
            job:'Teacher'
        },
        headers:{
            'x-api-key':'reqres_10127a4afa37409f9d2d98e5def657b6'

        }

    })
    const body=await response.json()
    console.log(body)
    
})
test ('Delete User',async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/'+userId,
        {
            headers:{
                 'x-api-key':'reqres_10127a4afa37409f9d2d98e5def657b6'
            }
        }
    )
    expect (response.status()).toBe(204)
    console.log('API ')
})