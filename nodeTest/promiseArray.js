var Promises =  [1,2,3,4,5].map((id) => {
    console.log('====================================')
    console.log('sending.....'+id)
    console.log('====================================')
})
Promise.all(Promises).then(
    (result) => {
        console.log(result)
    }
)
.catch(
    (error) => {
        console.error(error)
    }
)