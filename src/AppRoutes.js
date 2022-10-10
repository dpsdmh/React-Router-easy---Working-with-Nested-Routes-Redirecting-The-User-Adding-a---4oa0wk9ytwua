import React from 'react';

export const AppRoutes = () => {
    return (
<Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/*' element={<NotFound/>}/>

</Routes>
    )
}
