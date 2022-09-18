import React from 'react'
import {GetServerSideProps, NextPage} from 'next'
import {CharacterDetail} from '../../types'
import Image from 'next/image'
export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${params?.id}`)
  const characterDetail = await res.json()    
    return {
        props:{
            characterDetail
        }
    }
}

const CharacterDetails:NextPage<{characterDetail:CharacterDetail}> = ({characterDetail}) => {
  const {gender,image,name,status} = characterDetail
  return (
    <div className='flex justify-center items-center'>
      <div className='flex gap-10 bg-red-200 px-10'>
      <Image src={image}  height={500} width={500}/>
      <div>
        <h1 className='text-3xl bold'>{name}</h1>
      </div>
      </div>
    </div>
  )
}

export default CharacterDetails