import React, { useContext } from 'react'
import { SearchContext } from '../SearchContext'
const a=[
{id:1,title:"hello", des:"abceef"},
{id:2,title:"efdssdc", des:"hfghfgh"},
{id:3,title:"scsacsc", des:"fdhdf"},
{id:4,title:"cssacsac", des:"abhfhfghceef"},
{id:5,title:"cxcxzc", des:"fdgsdfcxvc fb"}
]
const Offer = () => {
  const {search}=useContext(SearchContext)
  const filterproduct=a.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div >
{
  filterproduct.map((item)=>(
    <div key={item.id}>
      <p className='text-black'> Title :: {item.title}</p>
      <p>{item.des}</p>

    </div>
  ))
}
    </div>
  )
}

export default Offer
